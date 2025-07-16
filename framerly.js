

// Navigation & more
import Navigo from 'https://cdn.jsdelivr.net/npm/navigo@8.11.1/+esm';

document.addEventListener('DOMContentLoaded', async () => {
    const content = document.querySelector('content');

    const response = await fetch('router.json');
    const routes = await response.json();

    function loadComponent(path) {
        let file = routes[path]; // first key

        if (!file) {
            // if not key is path
            const match = Object.entries(routes).find(([_, val]) => val === path);
            file = match?.[1] || routes.default || routes['/home'];
        }

        fetch(file)
            .then(res => {
                if (!res.ok) throw new Error('404');
                return res.text();
            })
            .then(html => {
                content.innerHTML = html;

                const url = new URL(window.location);
                // search key
                const key = Object.entries(routes).find(([_, val]) => val === file)?.[0] || '';
                if (key && key !== 'default') {
                    url.searchParams.set('page', key.replace(/^\//, ''));
                    history.replaceState({ path: key }, '', url);
                } else {
                    // if not key path default 
                    url.searchParams.delete('page');
                    history.replaceState({}, '', url.pathname);
                }
            })
            .catch(() => {
                content.innerHTML = '<p>Error al cargar el componente.</p>';
            });
    }

    function handleNavigation(path) {
        loadComponent(path);
    }



    // Convertir <routes> en <nav>
    const routesTag = document.querySelector('routes');
    if (routesTag) {
        const nav = document.createElement('nav');

        // copy classes and more atributes
        for (const attr of routesTag.attributes) {
            nav.setAttribute(attr.name, attr.value);
        }

        nav.innerHTML = routesTag.innerHTML;

        nav.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', e => {
                e.preventDefault();
                let href = a.getAttribute('href').replace(/^\//, '');
                handleNavigation('/' + href);
            });
        });

        routesTag.replaceWith(nav);
    }


    // Determinar página actual
    const params = new URLSearchParams(window.location.search);
    const pageParam = params.get('page');
    const current = pageParam ? '/' + pageParam : routes.default || routes['/home'];

    handleNavigation(current);

    window.addEventListener('popstate', () => {
        const params = new URLSearchParams(window.location.search);
        const page = params.get('page');
        const newPath = page ? '/' + page : routes.default || routes['/home'];
        handleNavigation(newPath);
    });


    // Soporte para data-load en cualquier elemento
    document.body.addEventListener('click', e => {
        const el = e.target.closest('[data-load]');
        if (el) {
            e.preventDefault();
            const path = el.getAttribute('data-load');
            if (path) handleNavigation(path.startsWith('/') ? path : '/' + path);
        }
    });



});










