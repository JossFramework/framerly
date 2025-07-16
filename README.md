# 📦 Framerly

**Framerly** es un micro-framework ultra ligero para construir sitios SPA sin servidores, sin compiladores y sin herramientas de build como Webpack o Vite.
Funciona únicamente con HTML, JSON y JavaScript nativo, aprovechando rutas declarativas y carga dinámica de componentes. Perfecto para proyectos pequeños, prototipos rápidos o documentación interactiva.

⚙️ Cómo iniciar
---
- Clona este repositorio o copia los archivos.
- Abre index.html con Live Server o cualquier servidor estático.
¡Listo! Framerly se encargará de todo.


## 🚀 Características

- ✅ Sin build, sin dependencias externas  
- 🔄 Navegación SPA con historial (`pushState`)  
- 📄 Rutas definidas en un archivo `router.json`  
- 🧩 Carga dinámica de archivos HTML como componentes  
- 💡 Puedes usar `<routes>` y atributos `data-load="/ruta"` para navegación declarativa  
- 🎯 Compatible con Live Server o cualquier hosting estático (Netlify, GitHub Pages, etc.)  
- 🎨 Estilizable fácilmente con Tailwind CSS  



## 📁 Estructura del proyecto

```plaintext
framerly-app/
├── index.html          # Página principal
├── framerly.js         # Framework principal
├── router.json         # Definición de rutas
└── templates/          # Componentes HTML
    ├── default.html
    ├── home.html
    ├── about.html
    └── perfil.html
```

🧩 Declarar rutas
Archivo router.json:
```plaintext
{
  "default": "templates/default.html",
  "/home": "templates/home.html",
  "/about": "templates/about.html",
  "/perfil": "templates/perfil.html"
}
```
🧭 Navegación con <routes>
Framerly convierte este bloque:
```plaintext
<routes class="flex gap-4 text-blue-600">
  <a href="/home">Inicio</a>
  <a href="/about">Acerca</a>
  <a href="/perfil">Perfil</a>
</routes>
```
En navegación funcional SPA usando pushState.


📥 Carga desde botones o elementos
Puedes usar data-load para cargar cualquier página desde un botón, div, etc.:
```plaintext
<button data-load="/about" class="btn">Ir a Acerca</button>
```


