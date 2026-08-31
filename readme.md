# Trabajo Práctico 02 — Módulos, Asincronía y NPM

## Descripción
Aplicación de consola en Node.js que lee un catálogo de juegos de mesa desde un archivo JSON local, procesa y transforma sus datos y genera un informe de texto dentro de una carpeta de salida. El proyecto utiliza la sintaxis de CommonJS, manejo de asincronía mediante `async/await` con la API de `node:fs/promises`, y captura de errores centralizada.

---

## Estructura del Proyecto

```text
tp-02-modulos-asincronia-npm/
├── datos/
│   └── juegos.json
├── salida/
│   └── catalogo-juegos.txt
├── src/
│   ├── archivos.js
│   ├── juegos.js
│   └── index.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md