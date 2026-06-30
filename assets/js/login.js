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
    const rolElegido = formRegistro.rol.value;

    // 1. Estructura base con los datos comunes de la cuenta
    let nuevoUsuario = {
      id: Date.now(),
      nombre: formRegistro.nombre.value.trim(),
      apellido: formRegistro.apellido.value.trim(),
      email: formRegistro.email.value.trim(),
      password: formRegistro.password.value,
      rol: rolElegido,
    };

    // 2. Cargamos datos específicos y hacemos las validaciones correspondientes de unicidad
    if (rolElegido === "ciudadano") {
      const dniIngresado = formRegistro.dni.value.trim();

      // Validar si el DNI ya existe en el sistema
      const existeDni = listaUsuarios.some(
        (u) => u.rol === "ciudadano" && u.dni === dniIngresado,
      );
      if (existeDni) {
        msjRegistro.innerHTML = `<div class="alert alert-danger">Error: Ya existe un ciudadano registrado con ese DNI.</div>`;
        return;
      }

      nuevoUsuario.dni = dniIngresado;
      nuevoUsuario.direccion = formRegistro.direccion.value.trim();
    } else if (rolElegido === "representante") {
      const cuitIngresado = formRegistro.cuit.value.trim();

      // Validar si el CUIT ya existe en el sistema (Validación de identidad institucional)
      const existeCuit = listaUsuarios.some(
        (u) => u.rol === "representante" && u.cuit === cuitIngresado,
      );
      if (existeCuit) {
        msjRegistro.innerHTML = `<div class="alert alert-danger">Error: Ya existe un organismo registrado con este CUIT.</div>`;
        return;
      }

      nuevoUsuario.nombreInstitucion =
        formRegistro.institucionNombre.value.trim();
      nuevoUsuario.cuit = cuitIngresado;
    }

    // 3. Validar de forma general que el correo electrónico no esté duplicado
    const existeEmail = listaUsuarios.some(
      (u) => u.email === nuevoUsuario.email,
    );
    if (existeEmail) {
      msjRegistro.innerHTML = `<div class="alert alert-danger">Error: El correo electrónico ya está en uso.</div>`;
      return;
    }

    // 4. Guardar el nuevo usuario en el arreglo del LocalStorage
    listaUsuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));

    // Mensaje de éxito en la interfaz
    msjRegistro.innerHTML = `<div class="alert alert-success">¡Registro exitoso como ${rolElegido}! Redirigiendo a la pantalla de ingreso...</div>`;
    formRegistro.reset();

    // Ocultamos las secciones dinámicas nuevamente hasta el próximo uso
    camposCiudadano.classList.add("d-none");
    camposInstitucion.classList.add("d-none");

    // Redirección controlada tras un lapso de tiempo corto
    setTimeout(() => {
      window.location.href = "login.html";
    }, 2000);
  });
}
