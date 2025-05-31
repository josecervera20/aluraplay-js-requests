/**
 * URL base para la API de videos.
 * @type {string}
 */
const BASE_URL = "http://localhost:3001/videos";

/**
 * Maneja la respuesta de una solicitud fetch, verificando si fue exitosa.
 * @param {Response} response - La respuesta de la solicitud fetch.
 * @returns {Promise<Object>} Una promesa que resuelve con los datos JSON de la respuesta.
 * @throws {Error} Si la respuesta no es exitosa (response.ok es false).
 */
async function _handleResponse(response) {
  if (!response.ok) {
    const errorData = await response
      .json()
      .catch(() => ({ message: "Error desconocido del servidor." }));
    throw new Error(
      `Error ${response.status}: ${
        errorData.message || "Ha ocurrido un error en la solicitud."
      }`
    );
  }
  return response.json();
}

/**
 * Obtiene y lista todos los videos desde la API.
 * @returns {Promise<Array<Object>>} Una promesa que resuelve con un array de objetos de video.
 * @throws {Error} Si ocurre un error durante la conexión o al procesar la respuesta.
 */
async function listarVideos() {
  try {
    const response = await fetch(BASE_URL);
    return await _handleResponse(response);
  } catch (error) {
    console.error("Error al listar videos:", error);
    throw error;
  }
}

/**
 * Envía un nuevo video a la API.
 * @param {string} id - ID único del video generado en frontend.
 * @param {string} titulo - Título del video.
 * @param {string} descripcion - Descripción del video.
 * @param {string} url - URL del video.
 * @param {string} imagen - URL de la imagen (miniatura) del video.
 * @returns {Promise<Object>} Una promesa que resuelve con los datos del video registrado.
 * @throws {Error} Si ocurre un error durante la conexión o al enviar el video.
 */
async function enviarVideo(id, titulo, descripcion, url, imagen) {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ id, titulo, descripcion, url, imagen }),
    });
    return await _handleResponse(response);
  } catch (error) {
    console.error("Error al enviar el video:", error);
    throw error;
  }
}

/**
 * Busca videos en la API por una palabra clave.
 * @param {string} palabraClave - La palabra clave para buscar videos.
 * @returns {Promise<Array<Object>>} Una promesa que resuelve con un array de objetos de video que coinciden con la búsqueda.
 * @throws {Error} Si ocurre un error durante la conexión o al realizar la búsqueda.
 */
async function buscarVideos(palabraClave) {
  try {
    const response = await fetch(`${BASE_URL}?q=${palabraClave}`);
    return await _handleResponse(response);
  } catch (error) {
    console.error("Error al buscar videos:", error);
    throw error;
  }
}

/**
 * Objeto que exporta las funciones de conexión con la API.
 * @exports conexionAPI
 * @property {function(): Promise<Array<Object>>} listarVideos - Función para listar videos.
 * @property {function(string, string, string, string): Promise<Object>} enviarVideo - Función para enviar un video.
 * @property {function(string): Promise<Array<Object>>} buscarVideos - Función para buscar videos.
 */
export const conexionAPI = {
  listarVideos,
  enviarVideo,
  buscarVideos,
};
