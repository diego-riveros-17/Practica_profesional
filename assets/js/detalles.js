document.addEventListener("DOMContentLoaded", () => {
  // 1. Obtener el ID del curso desde la URL (?id)
  const urlParams = new URLSearchParams(window.location.search);
  // Como pusiste `?${curso.id}` directo, la clave es la primera de los parámetros
  const idCurso = parseInt(urlParams.keys().next().value);

  // 2. Traer los cursos desde el LocalStorage
  const listaCursos = JSON.parse(localStorage.getItem("cursos")) || [];

  // 3. Buscar el curso específico que coincida con ese ID
  const cursoEncontrado = listaCursos.find((c) => c.id === idCurso);

  const contenedor = document.getElementById("contenedorDetalle");

  if (cursoEncontrado) {
    // Generamos los items de la lista de requisitos dinámicamente
    let requisitosHTML = "";
    cursoEncontrado.requisitos.forEach((req) => {
      requisitosHTML += `<li class="list-group-item">🔹 ${req}</li>`;
    });

    // 4. Inyectamos el diseño en el HTML con los datos del curso
    contenedor.innerHTML = `
      <div class="card shadow-lg border-0 overflow-hidden">
        <div class="row g-0">
          <div class="col-md-5">
            <img src="${cursoEncontrado.imagen}" class="img-fluid h-100 w-100" style="object-fit: cover; min-height: 300px;" alt="${cursoEncontrado.nombre}">
          </div>
          
          <div class="col-md-7 p-4 p-md-5 d-flex flex-column justify-content-between">
            <div>
              <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="badge bg-primary fs-6">${cursoEncontrado.categoria}</span>
                <span class="badge bg-success fs-6">${cursoEncontrado.precio === 0 ? "Gratuito" : "$" + cursoEncontrado.precio}</span>
              </div>
              
              <h1 class="display-6 fw-bold text-dark mb-3">${cursoEncontrado.nombre}</h1>
              <p class="text-muted mb-2"><strong>Dictado por:</strong> ${cursoEncontrado.institucion}</p>
              <p class="fs-5 text-secondary mb-4">${cursoEncontrado.descripcion}</p>
              
              <h5 class="fw-bold mb-2">Requisitos para la inscripción:</h5>
              <ul class="list-group list-group-flush mb-4">
                ${requisitosHTML}
              </ul>

              <h5 class="fw-bold mb-2">Información de Cursada:</h5>
              <p class="mb-1"><strong>📍 Lugar:</strong> ${cursoEncontrado.lugar} (${cursoEncontrado.direccion})</p>
              <p class="text-muted small mb-3">🗺️ <em>Ref: ${cursoEncontrado.referencia}</em></p>
              <p class="mb-1"><strong>📅 Duración:</strong> ${cursoEncontrado.duracion} (Inicia: ${cursoEncontrado.fechaInicio})</p>
              <p class="mb-1"><strong>👥 Cupos Disponibles:</strong> ${cursoEncontrado.cuposDisponibles} de ${cursoEncontrado.cupoMaximo}</p>
            </div>

            <div class="mt-4">
              <button class="btn btn-dark btn-lg w-100" id="btnInscribirse">Inscribirme a este Curso</button>
            </div>
          </div>
        </div>
      </div>
    `;

    // Lógica para el botón inscribirse (opcional por si te sirve mostrar algo)
    document.getElementById("btnInscribirse").addEventListener("click", () => {
      alert(
        `¡Inscripción registrada para el curso: ${cursoEncontrado.nombre}!`,
      );
    });
  } else {
    // Si por alguna razón el ID no existe o se altera la URL
    contenedor.innerHTML = `
      <div class="alert alert-danger text-center shadow-sm" role="alert">
        <h4 class="alert-heading">¡Curso no encontrado!</h4>
        <p>El curso que estás intentando buscar no existe o no está disponible en este momento.</p>
        <hr>
        <a href="index.html" class="btn btn-outline-danger">Volver al Inicio</a>
      </div>
    `;
  }
});

// --- CONTROL DE SESIÓN EN LA PÁGINA DE DETALLES ---
// Verificamos si hay un usuario logueado en LocalStorage
const sesionActiva = JSON.parse(localStorage.getItem("usuarioLogueado"));

// Buscamos los elementos del Navbar en detalles.html
// (Asegurate de que las rutas a login.html apunten bien desde tu menú)
const botonLogin = document.querySelector('a[href*="login"]')?.parentElement;
const botonRegistro =
  document.querySelector('a[href*="registro"]')?.parentElement ||
  document.querySelector('a[href*="Register"]')?.parentElement;
const navMenu = document.querySelector(".navbar-nav");

if (sesionActiva && navMenu) {
  // 1. Ocultamos "Iniciar Sesión" y "Registrate" si existen en esta página
  if (botonLogin) botonLogin.style.display = "none";
  if (botonRegistro) botonRegistro.style.display = "none";

  // 2. Creamos los elementos dinámicos con los datos del usuario logueado
  const liUsuario = document.createElement("li");
  liUsuario.className = "nav-item d-flex align-items-center me-3";
  liUsuario.innerHTML = `<span class="text-white fw-bold">👋 Hola, ${sesionActiva.nombre}</span>`;

  const liCerrarSesion = document.createElement("li");
  liCerrarSesion.className = "nav-item";
  liCerrarSesion.innerHTML = `<a class="btn btn-sm btn-danger ms-2" id="btnCerrarSesionDetalle" href="#">Cerrar Sesión</a>`;

  // 3. Los inyectamos en la barra de navegación
  navMenu.appendChild(liUsuario);
  navMenu.appendChild(liCerrarSesion);

  // 4. Lógica para el botón de Cerrar Sesión desde Detalles
  document
    .getElementById("btnCerrarSesionDetalle")
    .addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("usuarioLogueado"); // Borramos la sesión
      window.location.reload(); // Recargamos la página para restaurar el menú original
    });
}
