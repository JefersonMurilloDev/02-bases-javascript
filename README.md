# 02-bases: Fundamentos de Node.js

Este es un proyecto base de Node.js, diseñado con un enfoque en aprender y demostrar los conceptos fundamentales tanto de JavaScript moderno como de la arquitectura de software en Node.

El proyecto está estructurado de forma modular, separando los conceptos básicos de JavaScript (`js-foundation`) de las funcionalidades externas o "plugins" (`plugins`).

## Características y Conceptos Clave

*   **Fundamentos de JavaScript Moderno:** Explora características esenciales de ES6+ como:
    *   Templates literales (`` ` ``)
    *   Desestructuración de objetos
    *   Funciones de flecha y sus ventajas
    *   Patrones de diseño como el "Factory Function".
    *   Manejo de asincronía a través de Promesas.

*   **Arquitectura de Plugins:** Utiliza un patrón de diseño de "adaptadores" o "plugins" para encapsular y abstraer dependencias de terceros. Esto hace que el código sea más mantenible y fácil de probar, ya que permite intercambiar una librería por otra (por ejemplo, `axios` por `fetch`) modificando un solo archivo.

*   **Integración de Dependencias:**
    *   **`axios`**: Para realizar peticiones HTTP a APIs externas.
    *   **`uuid`**: Para la generación de identificadores únicos universales.
    *   **`get-age`**: Para realizar cálculos de edad a partir de una fecha.

## Instalación

1.  Clona el repositorio.
2.  Instala las dependencias con el comando:
    ```bash
    npm install
    ```

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm start`

Ejecuta la aplicación en modo de producción.

### `npm run dev`

Ejecuta la aplicación en modo de desarrollo con `nodemon`, que reiniciará automáticamente el servidor ante cualquier cambio en los archivos.