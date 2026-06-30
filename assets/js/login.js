// 1. Inicializar base de usuarios en LocalStorage (si no existe, usa tus datos por defecto)
let usuariosPorDefecto = [
  {
    id: 1,
    nombre: "Diego",
    apellido: "Riveros",
    email: "diegoriveros1991@gmail.com",
    dni: "36204965",
    direccion: "B° Obrero, Salta 1250",
    password: "123456",
    rol: "representante",
  },
  {
    id: 2,
    nombre: "Francisco",
    apellido: "Martinez",
    email: "fran2mart5@gmail.com",
    dni: "36204965",
    direccion: "B° San Miguel, Carlos Brunelli 1536",
    password: "123456",
    rol: "ciudadano",
  },
];

// Si no hay usuarios guardados en LocalStorage, cargamos los por defecto
if (!localStorage.getItem("usuarios")) {
  localStorage.setItem("usuarios", JSON.stringify(usuariosPorDefecto));
}

// Obtener la lista actualizada de usuarios desde LocalStorage
const obtenerUsuarios = () => JSON.parse(localStorage.getItem("usuarios"));

// --- LÓGICA DE INICIO DE SESIÓN (LOGIN) ---
const formLogin = document.querySelector("#formLogin");
const msjConfirmacion = document.querySelector("#msjConfirmacion");

if (formLogin) {
  formLogin.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = formLogin.user.value.trim();
    const password = formLogin.password.value;
    const listaUsuarios = obtenerUsuarios();

    // Buscamos en el LocalStorage
    const usuarioEncontrado = listaUsuarios.find((usuario) => {
      return (
        (usuario.email === user || String(usuario.dni) === user) &&
        usuario.password === password
      );
    });

    if (usuarioEncontrado) {
      // GUARDAR EN LOCALSTORAGE EL USUARIO LOGUEADO
      localStorage.setItem(
        "usuarioLogueado",
        JSON.stringify(usuarioEncontrado),
      );

      msjConfirmacion.innerHTML = `
        <div class="row justify-content-center p-3">
          <div class="col">
            <div class="alert alert-success" role="alert">
              ¡Hola ${usuarioEncontrado.nombre}! Redirigiendo a la página de inicio...
            </div>
          </div>
        </div>`;

      const contenedor = document.getElementById("page-container");
      if (contenedor) contenedor.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = "index.html";
      }, 1500);
    } else {
      msjConfirmacion.innerHTML = `
        <div class="row justify-content-center p-3">
          <div class="col">
            <div class="alert alert-danger" role="alert">
              Usuario o clave incorrecta
            </div>
          </div>
        </div>`;
    }
  });
}

// --- LÓGICA DE REGISTRO ---
// Asegurate de que tu formulario de registro en el HTML tenga id="formRegistro"
// --- MANEJO DINÁMICO DE LA INTERFAZ DE REGISTRO ---
// --- MANEJO DINÁMICO DEL SELECTOR DE ROL ---
const selectRol = document.getElementById("regRol");
const camposFormulario = document.getElementById("camposFormulario"); // El bloque grande
const camposCiudadano = document.getElementById("camposCiudadano");
const camposInstitucion = document.getElementById("camposInstitucion");

if (selectRol) {
  selectRol.addEventListener("change", (e) => {
    const rolSeleccionado = e.target.value;

    // Al seleccionar cualquier rol válido, mostramos el cuerpo del formulario
    camposFormulario.classList.remove("d-none");

    // Activamos obligatoriedad de los campos comunes
    document.getElementById("nombre").required = true;
    document.getElementById("apellido").required = true;
    document.getElementById("email").required = true;
    document.getElementById("password").required = true;

    if (rolSeleccionado === "ciudadano") {
      // Mostramos Ciudadano, ocultamos Institución
      camposCiudadano.classList.remove("d-none");
      camposInstitucion.classList.add("d-none");

      // Validaciones requeridas específicas
      document.getElementById("dni").required = true;
      document.getElementById("address").required = true;
      document.getElementById("institucionNombre").required = false;
      document.getElementById("cuit").required = false;
    } else if (rolSeleccionado === "representante") {
      // Mostramos Institución, ocultamos Ciudadano
      camposInstitucion.classList.remove("d-none");
      camposCiudadano.classList.add("d-none");

      // Validaciones requeridas específicas
      document.getElementById("institucionNombre").required = true;
      document.getElementById("cuit").required = true;
      document.getElementById("dni").required = false;
      document.getElementById("address").required = false;
    }
  });
}

// --- LÓGICA DE PROCESAMIENTO DEL REGISTRO ---
const formRegistro = document.querySelector("#formRegistro");
const msjRegistro = document.querySelector("#msjRegistro");

if (formRegistro) {
  formRegistro.addEventListener("submit", (e) => {
    e.preventDefault();

    const listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // CAPTURA SEGURA DEL ROL DESDE EL SELECT
    const selectRolElement = document.getElementById("regRol");
    const rolElegido = selectRolElement ? selectRolElement.value : "";

    if (!rolElegido) {
      msjRegistro.innerHTML = `<div class="alert alert-danger">Por favor, seleccione un tipo de usuario.</div>`;
      return;
    }

    // Estructura base leyéndola directamente por los ID que definiste
    let nuevoUsuario = {
      id: Date.now(),
      nombre: document.getElementById("nombre").value.trim(),
      apellido: document.getElementById("apellido").value.trim(),
      email: document.getElementById("email").value.trim(),
      password: document.getElementById("password").value,
      rol: rolElegido,
    };

    // Validaciones e inserciones cruzadas de datos según rol
    if (rolElegido === "ciudadano") {
      const dniIngresado = document.getElementById("dni").value.trim();

      const existeDni = listaUsuarios.some(
        (u) => u.rol === "ciudadano" && String(u.dni) === dniIngresado,
      );
      if (existeDni) {
        msjRegistro.innerHTML = `<div class="alert alert-danger mt-2">Error: Ya existe una persona registrada con el DNI ingresado.</div>`;
        return;
      }
      nuevoUsuario.dni = dniIngresado;
      nuevoUsuario.direccion = document.getElementById("address").value.trim();
    } else if (rolElegido === "representante") {
      const cuitIngresado = document.getElementById("cuit").value.trim();

      const existeCuit = listaUsuarios.some(
        (u) => u.rol === "representante" && u.cuit === cuitIngresado,
      );
      if (existeCuit) {
        msjRegistro.innerHTML = `<div class="alert alert-danger mt-2">Error: Ya existe un organismo registrado con este CUIT.</div>`;
        return;
      }
      nuevoUsuario.nombreInstitucion = document
        .getElementById("institucionNombre")
        .value.trim();
      nuevoUsuario.cuit = cuitIngresado;
    }

    // Validación general de correo único
    const existeEmail = listaUsuarios.some(
      (u) => u.email === nuevoUsuario.email,
    );
    if (existeEmail) {
      msjRegistro.innerHTML = `<div class="alert alert-danger mt-2">Error: El correo electrónico ya se encuentra registrado.</div>`;
      return;
    }

    // Guardado final en LocalStorage
    listaUsuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));

    // Éxito, Limpieza y Redirección suave
    msjRegistro.innerHTML = `<div class="alert alert-success mt-2">¡Registro completado con éxito! Redirigiendo...</div>`;
    formRegistro.reset();

    // Ocultamos el bloque grande del formulario para que quede limpio de nuevo
    if (camposFormulario) camposFormulario.classList.add("d-none");
    if (camposCiudadano) camposCiudadano.classList.add("d-none");
    if (camposInstitucion) camposInstitucion.classList.add("d-none");

    setTimeout(() => {
      window.location.href = "login.html";
    }, 2000);
  });
}
