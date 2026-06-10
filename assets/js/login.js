let usuarios = [
  {
    id: 1,
    nombre: "Diego",
    apellido: "Riveros",
    email: "diegoriveros1991@gmail.com",
    dni: 36204965,
    direccion: "B° Obreo, Salta 1250",
    user: "",
    password: "123456",
    rol: "ciudadano",
  },

  {
    id: 2,
    nombre: "Francisco",
    apellido: "Martinez",
    email: "fran2mart5@gmail.com",
    dni: 36204965,
    direccion: "B° San Miguel, Carlos Brunelli 1536",
    user: "",
    password: "",
    rol: "ciudadano",
  },
];

const formLogin = document.querySelector("#formLogin");

const msjConfirmacion = document.querySelector("#msjConfirmacion");

let usuarioLogueado = "";

if (formLogin) {
  formLogin.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = formLogin.user.value;
    const password = formLogin.password.value;

    const usuarioEncontrado = usuarios.find((usuario) => {
      return (
        (usuario.email === user || usuario.dni === user) &&
        usuario.password === password
      );
    });

    if (usuarioEncontrado) {
      usuarioLogueado = usuarioEncontrado.nombre;
      msjConfirmacion.innerHTML = `<div class="row justify-content-center p-3">
                              <div class="col">
                                  <div class="alert alert-success" role="alert">
                                    Espere un momento, se redigira a la pagina de inico
                                  </div>
                               </div>
                             </div>`;

      setTimeout(() => {
        window.location.href = "index.html";
      }, 3000);
    } else {
      msjConfirmacion.innerHTML = `<div class="row justify-content-center p-3">
                              <div class="col">
                                  <div class="alert alert-danger" role="alert">
                                    Usuario o clave incorrecta
                                  </div>
                               </div>
                             </div>`;
    }
  });
}

const formRegistro = document.querySelector("#formRegistro");
console.log(formRegistro);
