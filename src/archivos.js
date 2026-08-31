const fs = require("node:fs/promises");
const path = require("node:path");

/**
 * Lee un archivo JSON y lo interpreta como un objeto/arreglo de JS
 */
async function leerJson(ruta) {
  const texto = await fs.readFile(ruta, "utf8");
  return JSON.parse(texto);
}

/**
 * Crea la carpeta contenedora si no existe y escribe el texto en el archivo
 */
async function escribirTexto(ruta, contenido) {
  await fs.mkdir(path.dirname(ruta), { recursive: true });
  await fs.writeFile(ruta, contenido, "utf8");
}

module.exports = {
  leerJson,
  escribirTexto,
};