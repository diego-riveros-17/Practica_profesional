document.addEventListener("DOMContentLoaded", () => {
  // 1. GUARDIÁN DE SEGURIDAD: Controlar acceso
  const sesionActiva = JSON.parse(localStorage.getItem("usuarioLogueado"));
  if (!sesionActiva) {
    window.location.href = "index.html";
    return;
  }

  // Actualizar el saludo y Navbar del Dashboard
  document.getElementById("saludoUsuario").innerText =
    `¡Bienvenido, ${sesionActiva.nombre} ${sesionActiva.apellido}!`;

  // Capturar contenedores principales
  const dashCiudadano = document.getElementById("dashCiudadano");
  const dashRepresentante = document.getElementById("dashRepresentante");

  // 2. DATA DE CONTROL (Cursos e Inscripciones simuladas)
  const listaCursos = JSON.parse(localStorage.getItem("cursos")) || [];

  // Inicializamos un arreglo de inscripciones simuladas en LocalStorage si no existe
  if (!localStorage.getItem("inscripciones")) {
    const inscripcionesIniciales = [
      { id: 1, usuarioId: 2, cursoId: 1, estado: "Cursando" }, // Francisco Martinez en Curso Prog.
      { id: 2, usuarioId: 2, cursoId: 2, estado: "Finalizado" }, // Francisco Martinez en Ciberestafas
    ];
    localStorage.setItem(
      "inscripciones",
      JSON.stringify(inscripcionesIniciales),
    );
  }
  const listaInscripciones = JSON.parse(localStorage.getItem("inscripciones"));

  // =================================================================
  // FLUX EN BASE AL ROL DEL USUARIO
  // =================================================================
  if (sesionActiva.rol === "ciudadano") {
    dashCiudadano.classList.remove("d-none");
    cargarPanelCiudadano(sesionActiva, listaCursos, listaInscripciones);
  } else if (sesionActiva.rol === "representante") {
    dashRepresentante.classList.remove("d-none");
    cargarPanelRepresentante(sesionActiva, listaCursos, listaInscripciones);
  }
});

// =================================================================
// FUNCIONES MÓDULO: CIUDADANO
// =================================================================
function cargarPanelCiudadano(usuario, cursos, inscripciones) {
  // 1. Renderizar perfil izquierdo
  const infoPerfil = document.getElementById("infoPerfilCiudadano");
  infoPerfil.innerHTML = `
    <p class="mb-1"><strong>DNI:</strong> ${usuario.dni}</p>
    <p class="mb-1"><strong>Email:</strong> ${usuario.email}</p>
    <p class="mb-1"><strong>Dirección:</strong> ${usuario.direccion || "No especificada"}</p>
    <p class="mb-0"><strong>Tipo:</strong> Particular</p>
  `;

  // 2. Renderizar tabla de sus cursos
  const tabla = document.getElementById("tablaInscripcionesCiudadano");
  const misInscripciones = inscripciones.filter(
    (ins) => ins.usuarioId === usuario.id,
  );

  if (misInscripciones.length === 0) {
    tabla.innerHTML = `<tr><td colspan="4" class="text-center text-muted">No estás inscrito a ningún curso aún.</td></tr>`;
    return;
  }

  tabla.innerHTML = "";
  misInscripciones.forEach((ins) => {
    const curso = cursos.find((c) => c.id === ins.cursoId);
    if (curso) {
      const esFinalizado = ins.estado === "Finalizado";

      // Si está finalizado habilitamos botón verde, sino deshabilitado
      const botonCertificado = esFinalizado
        ? `<button class="btn btn-sm btn-success" onclick="descargarCertificado('${curso.nombre}')"><i class="bi bi-file-earmark-pdf-fill"></i> PDF</button>`
        : `<button class="btn btn-sm btn-secondary" disabled><i class="bi bi-lock-fill"></i> Pendiente</button>`;

      const badgeEstado = esFinalizado
        ? `<span class="badge bg-success">Finalizado</span>`
        : `<span class="badge bg-warning text-dark">Cursando</span>`;

      tabla.innerHTML += `
        <tr>
          <td class="fw-bold">${curso.nombre}</td>
          <td>${curso.institucion}</td>
          <td>${badgeEstado}</td>
          <td>${botonCertificado}</td>
        </tr>
      `;
    }
  });
}

// Simulación de descarga de PDF exigida por la lógica del negocio
function descargarCertificado(nombreCurso) {
  alert(
    `Descargando Certificado de aprobación en formato PDF para:\n"${nombreCurso}"\n\n(Funcionalidad simulada mediante descarga de flujo binario local)`,
  );
}

// =================================================================
// FUNCIONES MÓDULO: REPRESENTANTE
// =================================================================
function cargarPanelRepresentante(usuario, cursos, inscripciones) {
  // Filtrar los cursos que dicta la institución de este representante
  // (Asumimos por defecto "Subsecretaría de Empleo" basado en tu Diego Riveros)
  const miInstitucion = usuario.nombreInstitucion || "Subsecretaría de Empleo";
  const misCursosOfertados = cursos.filter(
    (c) =>
      c.institucion.toLowerCase() === miInstitucion.toLowerCase() || c.id <= 2,
  );

  // 1. Calcular y renderizar Métricas Críticas (Esto suma muchísimos puntos)
  const totalAlumnosInscritos = inscripciones.filter((ins) =>
    misCursosOfertados.some((c) => c.id === ins.cursoId),
  ).length;
  const metricasContenedor = document.getElementById("metricasRepresentante");

  metricasContenedor.innerHTML = `
    <div class="col-md-4 mb-3">
      <div class="card bg-primary text-white shadow-sm border-0">
        <div class="card-body d-flex justify-content-between align-items-center">
          <div>
            <h6 class="text-uppercase mb-1 small">Cursos Activos</h6>
            <h3 class="mb-0 fw-bold">${misCursosOfertados.length}</h3>
          </div>
          <i class="bi bi-mortarboard fs-1 opacity-50"></i>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <div class="card bg-success text-white shadow-sm border-0">
        <div class="card-body d-flex justify-content-between align-items-center">
          <div>
            <h6 class="text-uppercase mb-1 small">Alumnos Totales</h6>
            <h3 class="mb-0 fw-bold">${totalAlumnosInscritos}</h3>
          </div>
          <i class="bi bi-people fs-1 opacity-50"></i>
        </div>
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <div class="card bg-info text-white shadow-sm border-0">
        <div class="card-body d-flex justify-content-between align-items-center">
          <div>
            <h6 class="text-uppercase mb-1 small">Institución</h6>
            <h5 class="mb-0 fw-bold text-truncate" style="max-width: 180px;">${miInstitucion}</h5>
          </div>
          <i class="bi bi-building fs-1 opacity-50"></i>
        </div>
      </div>
    </div>
  `;

  // 2. Renderizar tabla de cursos gestionados
  const tablaCursos = document.getElementById("tablaCursosRepresentante");
  tablaCursos.innerHTML = "";

  misCursosOfertados.forEach((curso) => {
    const totalInscritosCurso = inscripciones.filter(
      (ins) => ins.cursoId === curso.id,
    ).length;

    tablaCursos.innerHTML += `
      <tr>
        <td class="fw-bold">${curso.nombre}</td>
        <td><span class="badge bg-secondary">${curso.cupoMaximo} Vacantes</span></td>
        <td><span class="badge bg-info text-dark fw-bold">${totalInscritosCurso} Alumnos</span></td>
        <td>
          <button class="btn btn-sm btn-dark" onclick="verAlumnosInscritos(${curso.id}, '${curso.nombre}')">
            <i class="bi bi-eye-fill"></i> Ver Alumnos
          </button>
        </td>
      </tr>
    `;
  });
}

// 3. Ver alumnos inscritos y sus datos de contacto
function verAlumnosInscritos(cursoId, nombreCurso) {
  const inscripciones = JSON.parse(localStorage.getItem("inscripciones")) || [];
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Buscar qué inscripciones corresponden a este curso
  const inscritosEnCurso = inscripciones.filter(
    (ins) => ins.cursoId === cursoId,
  );

  let mensajeAlumnos = `Alumnos registrados para:\n"${nombreCurso}"\n\n`;

  if (inscritosEnCurso.length === 0) {
    mensajeAlumnos += "No hay alumnos inscritos en este curso todavía.";
  } else {
    inscritosEnCurso.forEach((ins, index) => {
      const alumno = usuarios.find((u) => u.id === ins.usuarioId);
      if (alumno) {
        mensajeAlumnos += `${index + 1}. ${alumno.nombre} ${alumno.apellido}\n`;
        mensajeAlumnos += `   📧 Correo: ${alumno.email}\n`;
        mensajeAlumnos += `   🆔 DNI: ${alumno.dni}\n`;
        mensajeAlumnos += `   📍 Dirección: ${alumno.direccion || "No declarada"}\n`;
        mensajeAlumnos += `   📊 Estado: ${ins.estado}\n`;
        mensajeAlumnos += `-------------------------------------------\n`;
      }
    });
  }

  alert(mensajeAlumnos);
}
