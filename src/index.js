const path = require("node:path");
const pc = require("picocolors");
const { leerJson, escribirTexto } = require("./archivos.js");
const { crearInforme } = require("./juegos.js");

const rutaDatos = path.join(__dirname, "..", "datos", "juegos.json");
const rutaSalida = path.join(__dirname, "..", "salida", "catalogo-juegos.txt");

async function main() {
  try {
    console.log(pc.cyan("Cargando catálogo de juegos de mesa..."));

    // 1. Leer datos
    const juegos = await leerJson(rutaDatos);

    // 2. Transformar a texto
    const informe = crearInforme(juegos);

    // 3. Guardar archivo
    await escribirTexto(rutaSalida, informe);

    // 4. Salida en consola exitosa
    console.log("\n" + informe);
    console.log(pc.green(`✔ Catálogo generado con éxito en: ${rutaSalida}`));
  } catch (error) {
    console.error(pc.red(`❌ Error al procesar el catálogo: ${error.message}`));
    process.exitCode = 1;
  }
}

main();