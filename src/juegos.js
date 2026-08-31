/**
 * Formatea un juego individual a un bloque de texto legible
 */
function formatearJuego(juego, indice) {
  const jugadores = `${juego.jugadoresMin} a ${juego.jugadoresMax} jugadores`;
  const categoriasTexto = juego.categorias.join(", ");
  const estadoTexto = juego.disponible ? "Disponible" : "No disponible";

  return `${indice + 1}. ${juego.titulo}
   Editorial y año: ${juego.editorial} (${juego.anio})
   Participantes: ${jugadores}
   Categorías: ${categoriasTexto}
   Estado: ${estadoTexto}`;
}

/**
 * Genera el informe completo del catálogo de juegos de mesa
 */
function crearInforme(juegos) {
  const lineas = juegos.map(formatearJuego);

  return `CATÁLOGO DE JUEGOS DE MESA
==========================
Cantidad de juegos: ${juegos.length}

${lineas.join("\n\n")}
`;
}

module.exports = {
  crearInforme,
};