# CRUD App

Aplicación web simple para gestionar productos con operaciones CRUD.

## Instalación

1. Instala las dependencias:

```bash
npm install
```

## Uso

### Iniciar la aplicación

1. Inicia el servidor JSON:

```bash
npm run api
```

2. En otra terminal, inicia el servidor de desarrollo:

```bash
npm run dev
```

3. Abre tu navegador en `http://localhost:5173`

### Funcionalidades

- **Agregar producto**: Completa el formulario y haz clic en "Enviar"
- **Editar producto**: Haz clic en "Editar" para modificar un producto existente
- **Eliminar producto**: Haz clic en "Eliminar" para borrar un producto

## Tecnologías

- HTML5
- CSS3
- JavaScript ES6+
- JSON Server
- Vite

## Estructura

```
src/
├── database/
│   └── data.json
├── scripts/
│   ├── api.js
│   └── main.js
├── global.css
└── index.html
```
