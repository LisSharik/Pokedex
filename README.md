# Pokedex App

Esta es una aplicación web que permite a los usuarios buscar y ver detalles sobre Pokémon, incluidas sus evoluciones y tarjetas relacionadas con la API de Pokémon TCG. La aplicación está construida con React, Redux y utiliza la PokéAPI y la Pokémon TCG API.

## Requisitos

- Node.js (versión 16 o superior)
- NPM o Yarn para gestionar dependencias

## Instalación

Sigue estos pasos para clonar y ejecutar la aplicación en tu entorno local:

  1. Clona el repositorio en tu máquina local:
  ```
    git clone https://github.com/LisSharik/Pokedex.git
    cd pokedex
  ```

  2. Instala las dependencias del proyecto:
```
  npm install
```

## Configuración de Variables de Entorno

La aplicación utiliza variables de entorno para conectarse a la PokéAPI y la Pokémon TCG API. Debes crear un archivo ```.env.local``` en el directorio raíz del proyecto con las siguientes variables:

```
  VITE_URL_POKEAPI="https://pokeapi.co/api/v2/pokemon/"

  VITE_URL_POKEMONTCG="https://api.pokemontcg.io/v2/"
```

## Ejecución en Modo Desarrollo

Una vez que hayas configurado las variables de entorno e instalado las dependencias, puedes iniciar el servidor de desarrollo con el siguiente comando:

```
  npm run dev
```

Esto ejecutará la aplicación en modo de desarrollo. Puedes abrir http://localhost:5173 en tu navegador para ver la aplicación en acción.

## Dependencias Principales

- React: ^18.3.1 - Biblioteca principal de la interfaz de usuario.
- Redux Toolkit: ^2.2.7 - Manejo del estado global de la aplicación.
- Axios: ^1.7.7 - Cliente HTTP para hacer peticiones a las APIs.
- React Redux: ^9.1.2 - Vinculación de React con Redux.
- React Router Dom: ^6.26.2 - Navegación entre páginas en React.
- Tailwind CSS: ^3.4.13 - Utilizado para los estilos CSS.


