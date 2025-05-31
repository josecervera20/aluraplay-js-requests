import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

/**
 * Maneja el evento de envío del formulario para crear un video.
 * Previene el comportamiento por defecto del formulario, recopila los datos
 * de los campos de entrada, genera un ID numérico secuencial, genera una descripción
 * con visualizaciones aleatorias, y envía los datos a la API. En caso de éxito,
 * redirige a la página de confirmación; en caso de error, muestra una alerta.
 * @param {Event} evento - El objeto de evento del submit del formulario.
 * @returns {Promise<void>} Una promesa que se resuelve cuando el video es enviado o se produce un error.
 */
async function crearVideo(evento) {
  evento.preventDefault();

  const titulo = document.querySelector("[data-titulo]").value;
  const url = document.querySelector("[data-url]").value;
  const imagen = document.querySelector("[data-imagen]").value;

  const descripcion = `${Math.floor(Math.random() * 10)} mil visualizaciones`;

  try {
    // Genera ID secuencial.
    const listaVideos = await conexionAPI.listarVideos();
    // Obtiene el ID numérico más alto existente o 0.
    const ultimoId =
      listaVideos.length > 0
        ? Math.max(...listaVideos.map((video) => parseInt(video.id)))
        : 0;
    const nuevoId = (ultimoId + 1).toString(); // Calcula el siguiente ID.

    // Envía video a la API con ID generado.
    await conexionAPI.enviarVideo(nuevoId, titulo, descripcion, url, imagen);

    window.location.href = "../pages/envio-concluido.html";
  } catch (error) {
    alert(`Error al crear el video: ${error.message}`);
  }
}

formulario.addEventListener("submit", crearVideo);
