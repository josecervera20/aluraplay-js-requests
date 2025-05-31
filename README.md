# AluraPlay: Creando Solicitudes 🎬

## 🚀 Propósito del Proyecto

AluraPlay es una aplicación front-end que simula una plataforma de videos. Permite **visualizar, añadir y buscar videos**, interactuando con una API RESTful local (json-server). Este proyecto forma parte del _Curso de JavaScript: Creando Solicitudes_ de la plataforma de Alura.

## 🎯 Objetivos

Este proyecto está diseñado para:

- Simular una API para desarrollo local.
- Realizar solicitudes HTTP (GET y POST) para interactuar con datos.
- Reforzar JavaScript asíncrono (async/await, Promises).
- Manejar errores de solicitud devueltos por la API.
- Transformar una página estática en una interfaz de usuario dinámica.

## 🛠️ Tecnologías Utilizadas

- **HTML5, CSS3, JavaScript (ES6+)**: Base del desarrollo front-end.
- **Node.js y npm**: Entorno y gestor de paquetes.
- **json-server**: Simulación de API backend local.

## 🚀 Guía de Instalación y Ejecución

### 1. Prerrequisitos

Necesitas Node.js y npm instalados. Puedes verificar sus versiones con:

```bash
node -v
npm -v
```

### 2. Instalación

Clona el repositorio:

```bash
git clone https://github.com/josecervera20/aluraplay-js-requests.git
cd aluraplay-js-requests
```

Instala las dependencias (incluyendo json-server):

```bash
npm install
```

(_Este comando instalará todas las librerías necesarias para el proyecto, como `json-server`, que está definido en tu `package.json`._)

Configura `db.json`: Crea un archivo `db.json` en la raíz del proyecto. Ejemplo:

```json
{
  "videos": [
    {
      "id": "1",
      "titulo": "Título Video 1",
      "descripcion": "Desc.",
      "url": "https://www.youtube.com/embed/AG2QssLpQzI4",
      "imagen": "url_imagen.png"
    },
    {
      "id": "2",
      "titulo": "Título Video 2",
      "descripcion": "Desc.",
      "url": "https://www.youtube.com/embed/AG2QssLpQzI5",
      "imagen": "url_imagen.png"
    }
  ]
}
```

> **Importante**: Usa URLs de incrustación (embed) válidas de YouTube en la propiedad `"url"` (ej. `https://www.youtube.com/embed/AG2QssLpQzI6`). Asegúrate de que `db.json` esté en tu `.gitignore`.

### 3. Ejecución

Inicia la API local:

```bash
npm start
```

La API estará disponible en `http://localhost:3001`.

Abre la aplicación: Abre el archivo `index.html` de tu proyecto directamente en tu navegador.

## 💡 Uso de la Aplicación

Una vez iniciada, puedes:

- **Explorar videos**: Visualiza el listado en la página principal.
- **Añadir videos**: Usa el formulario para subir nuevos videos. Los IDs se generan automáticamente.
- **Buscar videos**: Utiliza la barra de búsqueda para filtrar contenido por palabras clave.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas!

1. Haz un _fork_ del repositorio.
2. Crea una rama para tu función:

```bash
git checkout -b feature/nombre-funcion
```

3. Realiza tus cambios y haz _commits_.
4. Envía un _pull request_.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
