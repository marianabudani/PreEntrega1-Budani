# Proyecto para CODERHOUSE curso ReactJS 💬

Este es un proyecto hecho en **[Node](https://nodejs.org/)**, utilizando: **[Chakra-ui](https://chakra-ui.com/getting-started)**, **[firebase](https://firebase.google.com/docs?hl=es)**, **[vite](https://vitejs.dev/guide/)**, **[react-router-dom](https://www.npmjs.com/package/react-router-dom)** y  **[React]https://es.reactjs.org/docs/getting-started.html)**, y que tiene los siguientes objetivos:

- Demostrar los conocimientos ganados en el transcurso del curso de ReactJS
- **Crear un e-commerse** el mismo debe contar con los componentes y funciones detalladas durante la cursada
- **Conectar con Firebase** mostrar y simular una compra con los productos previamente cargados

## Índice 📑

- [Setup del entorno de desarrollo 🛠️](#setup-del-entorno-de-desarrollo-%EF%B8%8F)
  - [Pre-requisitos ☝️](#pre-requisitos-%EF%B8%8F)
  - [Base de datos 💾](#base-de-datos-)
  - [Levantar la app 🙌](#levantar-la-app-)
- [Estructura de carpetas 📁](#estructura-de-carpetas-)
- [Listo 🗃️](#listo-%EF%B8%8F)

## Setup del entorno de desarrollo 🛠️

### Pre-requisitos ☝️

- **GIT**
- **Node** (o [NVM](https://github.com/nvm-sh/nvm) en *Linux/Mac*, o [NVS](https://github.com/jasongin/nvs) en *Windows*)
- **Visual Studio Code**  (https://code.visualstudio.com/)

### Base de datos 💾

La base de datos está creada en el servicio gratuito de **Firebase** y el proyecto está configurado para levantar los datos de ella y mostrar los productos,  🤓

### Levantar la app 🙌

```sh
# Clonar el proyecto
$ git clone https://github.com/marianabudani/PreEntrega1-Budani.git

# Entrar al directorio del proyecto
$ cd PreEntrega1-Budani/

# Instalar todas las dependencias
$ npm install
```

Y listo! Ya contamos con la app instalada y lista para correrla ✅

## Estructura de carpetas 📁

Esta es una descripción de la estructura de carpetas del proyecto.

- `public/images` ▶️ *Aloja las imagenes de los productos que se muestran en el catalogo*
- `src/`
  - `components` ▶️ *carpeta contenedora de los componentes React*
  - `contexts` ▶️ *carpeta contenedora de los contexts*
  - `App.jsx` ▶️ *Estructura base de la aplicación*
  - `main.jsx` ▶️ *Contiene el main del proyecto, con la configuración de Firebase*
- `vite.config.js` ▶️ *Archivo de configuración generado por Vite al crear el proyecto*

## Listo 🗃️

Ahora solo necesitas hacer `npm run dev` y abrir en tu navegador la ruta que vite configuró [localhost](http://127.0.0.1:5173/)

![Umbrella-e-commerce-Google-Chrome-2023-02-10-23-15-12](https://user-images.githubusercontent.com/21029510/218235562-ae86e086-ed83-45dc-9062-199a2e99d134.gif)