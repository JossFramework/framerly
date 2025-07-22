# Framerly
[![](https://data.jsdelivr.com/v1/package/gh/JossFramework/framerly/badge)](https://www.jsdelivr.com/package/gh/JossFramework/framerly)

/*!
 * Framerly v0.1
 * (c) 2025 JossFramework
 * Released under the MIT License
 * https://github.com/JossFramework/framerly
 */

<br>

## 🚀 Características

- ✅ Sin build, sin dependencias externas  
- 🔄 Navegación SPA con historial (`pushState`)  
- 📄 Rutas definidas en un archivo `router.json`  
- 🧩 Carga dinámica de archivos HTML como componentes  
- 💡 Puedes usar `<routes>` y atributos `data-load="/ruta"` para navegación declarativa  
- 🎯 Compatible con Live Server o cualquier hosting estático (Netlify, GitHub Pages, etc.)  
- 🎨 Estilizable fácilmente con Tailwind CSS  


<br>

## 🗪 ¿Qué es Framerly?
**Framerly** es un micro-framework ultra ligero para construir sitios SPA sin servidores, sin compiladores y sin herramientas de build como Webpack o Vite.
Funciona únicamente con HTML, JSON y JavaScript nativo, aprovechando rutas declarativas y carga dinámica de componentes. Perfecto para proyectos pequeños, prototipos rápidos o documentación interactiva o crear SPAs sin compiladores ni servidores. Usa rutas JSON y carga HTML dinámicamente de forma declarativa, o sea, que te permite cargar tanto páginas como componentes similar a un framework router real pero sin depender de un servidor, builders ni compiladores todo inline. Además guarda el estado y scroll de la página en su última instancia, perfecto para quienes buscan desarrollar landing pages rápidas o SPA simples sin tanta complicación.


<br>

## જ⁀➴ Conectarse al CDN

1. Agrega este script al final de tu archivo `index.html` o de tu página principal que usarás. Este CDN incluye rutas, navegación SPA y carga dinámica de HTML:

```html
<script type="module" src="https://cdn.jsdelivr.net/gh/JossFramework/framerly@v1.0.0/framerly.js"></script>
```

<br>

## 🗁 Estructura del proyecto

2. Crea esta estructura en tu proyecto. Es flexible, si adaptas tus rutas puedes crear la estructura que gustes, siempre y cuando coloques bien las rutas en el `router.json`:

```
🗀 /tu-proyecto
├── index.html
├── router.json
└── components/
    ├── header.html
└── templates/
    ├── home.html
    ├── about.html
    └── default.html
```

<br>

## ☀︎ router.json

3. Define aquí tus rutas. Usa **default** como página principal a cargar y **components** es la ruta donde se encuentran los componentes.

```json
{
  "default": "templates/default.html",
  "/home": "templates/home.html",
  "/about": "templates/about.html",
  "components": "/components"
}
```

<br>

## ✵ Navegación

4. Usa la etiqueta `<routes>` para utilizar tus rutas de navegación. Define varias rutas con la etiqueta `<a></a>`:

```html
<routes>
  <a href="/default">Default</a>
  <a href="/home">Inicio</a>
  <a href="/about">Acerca</a>
</routes>
```

<br>

## ⌗ Contenido

5. Debes agregar la etiqueta `<content>` para que el contenido funcione y se cargue. Puedes colocarla en cualquier lugar de tu página principal (ejemplo: `index.html`):

```html
<content>
  Aquí se cargará las páginas de forma dinámica
</content>
```

<br>

## ✦ Componentes

Para cargar componentes usa la etiqueta `<component src="name">`. En `src` coloca el nombre exacto del componente:

```html
<component src="card">
  Aquí se cargará el componente dinámicamente
</component>
```


<br>

## ⇄ Cargar contenido dinámicamente

También puedes usar `data-load="/about"` en cualquier botón o enlace para cargar contenido dinámico:

```html
<button data-load="/about" class="px-4 py-2 bg-gray-800 text-white rounded">
  Ir a Acerca
</button>
```

<br>

## Compatible con Live Server ⚡

Framerly funciona perfectamente con extensiones como "Live Server" de VSCode.

<br>

## Demo live in:
https://framerly-official.web.app/

<br>
