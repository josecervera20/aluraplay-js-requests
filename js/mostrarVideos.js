import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");

/**
 * Crea y retorna un elemento de tarjeta (card) HTML para un video dado sus datos.
 * @param {string} titulo - Título del video.
 * @param {string} descripcion - Descripción del video.
 * @param {string} url - URL del video (usada en el iframe).
 * @param {string} imagen - URL de la imagen de miniatura del video.
 * @returns {HTMLLIElement} El elemento <li> HTML que representa la tarjeta del video.
 */
export default function crearCard(titulo, descripcion, url, imagen) {
  const video = document.createElement("li");
  video.className = "videos__item";
  video.innerHTML = `
        <iframe width="100%" height="72%" src="${url}"
            title="${titulo}" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        <div class="descripcion-video">
            <img src="./img/logo.png" alt="logo canal alura">
            <h3>${titulo}</h3>
            <p>${descripcion}</p>
        </div>
    `;
  return video;
}

/**
 * Obtiene la lista de videos de la API y los renderiza en el DOM.
 * Si la conexión falla, muestra un mensaje de error en la interfaz.
 * @returns {Promise<void>} Una promesa que se resuelve cuando los videos son listados o se produce un error.
 */
async function listarVideos() {
  try {
    const listaAPI = await conexionAPI.listarVideos();
    listaAPI.forEach((video) =>
      lista.appendChild(
        crearCard(video.titulo, video.descripcion, video.url, video.imagen)
      )
    );
  } catch (error) {
    console.error("Error al listar videos:", error); // Log para depuración.
    lista.innerHTML = `<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexión :( </h2>`;
  }
}

listarVideos();
