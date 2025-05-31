import { conexionAPI } from "./conexionAPI.js";
import crearCard from "./mostrarVideos.js";

const lista = document.querySelector("[data-lista]");

/**
 * Filtra los videos basándose en una palabra clave ingresada por el usuario.
 * Obtiene el término de búsqueda, consulta la API, limpia la lista actual de videos
 * y renderiza los resultados. Si no hay coincidencias o ocurre un error, muestra un mensaje.
 * @param {Event} evento - El objeto de evento que disparó la función (click del botón o 'keyup' en el input).
 * @returns {Promise<void>} Una promesa que se resuelve cuando los videos han sido filtrados y renderizados, o se produce un error.
 */
async function filtrarVideo(evento) {
  evento.preventDefault();

  const datosDeBusqueda = document.querySelector("[data-busqueda]").value;

  try {
    const busqueda = await conexionAPI.buscarVideos(datosDeBusqueda);

    // Limpia todos los videos mostrados actualmente en la lista.
    while (lista.firstChild) {
      lista.removeChild(lista.firstChild);
    }

    if (busqueda.length > 0) {
      busqueda.forEach((video) =>
        lista.appendChild(
          crearCard(video.titulo, video.descripcion, video.url, video.imagen)
        )
      );
    } else {
      lista.innerHTML = `<h2 class="mensaje__titulo">No fueron encontrados elementos para "${datosDeBusqueda}"</h2>`;
    }
  } catch (error) {
    console.error("Error al buscar videos:", error); // Log para depuración.
    lista.innerHTML = `<h2 class="mensaje__titulo">Ocurrió un error al buscar videos: ${error.message}</h2>`;
  }
}

const boton = document.querySelector("[data-boton-busqueda]");
const inputEle = document.getElementById("buscar");

boton.addEventListener("click", filtrarVideo);

inputEle.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    filtrarVideo(e);
  }
});
