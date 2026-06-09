let cursos = [
  {
    id: 1,
    nombre: "Curso de Introducción a la Programación",
    categoria: "Tecnología",
    institucion: "Subsecretaría de Empleo",
    descripcion:
      "Orientado a brindar los conceptos fundamentales de la lógica de programación y algoritmos, ideal para quienes desean dar sus primeros pasos en el desarrollo de software.",
    requisitos: [
      "Mayores de 16 años",
      "Manejo básico de PC",
      "Secundario en curso o completo",
    ],
    cupoMaximo: 30,
    cuposDisponibles: 12,
    precio: 0,
    destacado: true,
    lugar: "EPES 54",
    direccion: "Av. 25 de Mayo 1050",
    referencia: "Frente a la plaza San Martín sobre calle Sarmiento",
    duracion: "4 Meses",
    fechaInicio: "09/06/2026",
    fechaFin: "09/10/2026",
    imagen:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&q=80",
  },
  {
    id: 2,
    nombre: "Prevención de Ciberestafas y Seguridad Digital",
    categoria: "Tecnología",
    institucion: "Agencia de Desarrollo Empresarial (ADE)",
    descripcion:
      "Capacitación clave para emprendedores y comerciantes sobre cómo proteger activos digitales, evitar phishing, estafas en billeteras virtuales y asegurar transacciones comerciales.",
    requisitos: [
      "Ser mayor de 18 años o tener comercio/emprendimiento en marcha",
    ],
    cupoMaximo: 40,
    cuposDisponibles: 25,
    precio: 0,
    destacado: true,
    lugar: "Sede ADE Formosa",
    direccion: "Padre Patiño 750",
    referencia: "Entre las calles Deán Funes y Berutti",
    duracion: "1 Mes",
    fechaInicio: "12/06/2026",
    fechaFin: "12/07/2026",
    imagen:
      "https://images.unsplash.com/photo-1590065707046-4fde65275b2e?q=80&w=1030&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=500&q=80",
  },
  {
    id: 3,
    nombre: "Fundamentos de Bases de Datos y SQL",
    categoria: "Tecnología",
    institucion: "Ministerio de Cultura y Educación",
    descripcion:
      "Diseña bases de datos eficientes desde cero. Domina la normalización de tablas (1NF, 2NF, 3NF) y aprende a realizar consultas complejas con lenguaje SQL.",
    requisitos: ["Lógica de programación básica", "Mayor de 18 años"],
    cupoMaximo: 35,
    cuposDisponibles: 20,
    precio: 0,
    destacado: false,
    lugar: "Polo Tecnológico",
    direccion: "Rivadavia 1230",
    referencia: "Cerca del edificio de la Municipalidad",
    duracion: "2 Meses",
    fechaInicio: "01/07/2026",
    fechaFin: "01/09/2026",
    imagen:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=500&q=80",
  },
  {
    id: 4,
    nombre: "Fotografía Profesional y Cobertura de Eventos",
    categoria: "Servicios",
    institucion: "Ministerio de Turismo",
    descripcion:
      "Aprende el manejo de cámaras reflex en modo manual, composición fotográfica, iluminación en exteriores y edición digital orientada al turismo y eventos locales.",
    requisitos: [
      "Disponer de cámara fotográfica (Reflex o Semi-reflex)",
      "Mayor de 16 años",
    ],
    cupoMaximo: 20,
    cuposDisponibles: 4,
    precio: 0,
    destacado: true,
    lugar: "Galpón G - Paseo Costanera",
    direccion: "Av. Costanera Vuelta Fermoza",
    referencia: "Frente a la zona de Prefectura Naval",
    duracion: "3 Meses",
    fechaInicio: "18/06/2026",
    fechaFin: "18/09/2026",
    imagen:
      "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=500&q=80",
  },
  {
    id: 5,
    nombre: "Diseño de Parquización y Jardinería Urbana",
    categoria: "Oficios",
    institucion: "Ministerio de Turismo",
    descripcion:
      "Técnicas de diseño paisajístico para patios, mantenimiento de césped, poda ornamental y selección de plantas adaptadas al clima subtropical formoseño.",
    requisitos: [
      "Ganas de trabajar al aire libre",
      "No requiere estudios previos",
    ],
    cupoMaximo: 25,
    cuposDisponibles: 15,
    precio: 0,
    destacado: false,
    lugar: "Vivero de la Biodiversidad",
    direccion: "Acceso Norte - Ruta 11",
    referencia: "Cerca del barrio Eva Perón",
    duracion: "2 Meses",
    fechaInicio: "05/07/2026",
    fechaFin: "05/09/2026",
    imagen:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=500&q=80",
  },
  {
    id: 6,
    nombre: "Planificación y Cuidado de Huertas Familiares",
    categoria: "Producción",
    institucion: "Instituto PAIPPA",
    descripcion:
      "Aprende a preparar el suelo, producir abono orgánico y reconocer qué frutas y verduras de estación conviene sembrar en Formosa para autoconsumo sustentable.",
    requisitos: ["Orientado a familias paipperas y público general interesado"],
    cupoMaximo: 50,
    cuposDisponibles: 32,
    precio: 0,
    destacado: true,
    lugar: "Predio ferial PAIPPA",
    direccion: "Padre Grotti 1040",
    referencia: "Entre Fortín Yunká y Azcuénaga",
    duracion: "2 Meses",
    fechaInicio: "10/06/2026",
    fechaFin: "10/08/2026",
    imagen:
      "https://plus.unsplash.com/premium_photo-1664299231810-29d1caf6f753?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aHVlcnRhfGVufDB8fDB8fHww?w=500&q=80",
  },
  {
    id: 7,
    nombre: "Panadería, Pastelería Artesanal y Masas Madre",
    categoria: "Gastronomía",
    institucion: "NEP y FP (Educación Permanente)",
    descripcion:
      "Conoce los secretos de la fermentación, técnicas avanzadas de amasado, horneado y elaboración de panes tradicionales, facturas, tartas y repostería artesanal.",
    requisitos: [
      "Carnet de manipulación de alimentos (deseable)",
      "Mayor de 16 años",
    ],
    cupoMaximo: 20,
    cuposDisponibles: 8,
    precio: 0,
    destacado: false,
    lugar: "Núcleo de Formación Profesional N° 3",
    direccion: "Fotheringham 420",
    referencia: "Al lado de la Escuela Primaria N° 2",
    duracion: "3 Meses",
    fechaInicio: "22/06/2026",
    fechaFin: "22/09/2026",
    imagen:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&q=80",
  },
  {
    id: 8,
    nombre: "Marketing Digital para Emprendedores y PYMES",
    categoria: "Negocios",
    institucion: "Agencia de Desarrollo Empresarial (ADE)",
    descripcion:
      "Aprende a posicionar tu negocio en redes sociales, armar campañas publicitarias efectivas en Meta Ads, y crear estrategias de contenido para aumentar tus ventas.",
    requisitos: [
      "Manejo básico de redes sociales (Instagram/Facebook)",
      "Mayor de 18 años",
    ],
    cupoMaximo: 30,
    cuposDisponibles: 0,
    precio: 0,
    destacado: true,
    lugar: "Sede ADE Formosa",
    direccion: "Padre Patiño 750",
    referencia: "Entre las calles Deán Funes y Berutti",
    duracion: "2 Meses",
    fechaInicio: "04/07/2026",
    fechaFin: "04/09/2026",
    imagen:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
  },
  {
    id: 9,
    nombre: "Mecánica y Mantenimiento de Motocicletas",
    categoria: "Oficios",
    institucion: "NEP y FP (Educación Permanente)",
    descripcion:
      "Aprende a realizar el mantenimiento preventivo y correctivo de motores de baja cilindrada: sistemas de frenos, transmisión, ajuste y limpieza de carburadores, y fallas eléctricas comunes.",
    requisitos: [
      "Mayor de 18 años",
      "Llevar herramientas básicas de mano si posee",
    ],
    cupoMaximo: 15,
    cuposDisponibles: 0,
    precio: 0,
    destacado: false,
    lugar: "Taller Escuela Técnica N° 1",
    direccion: "Gutierrez 320",
    referencia: "A la vuelta del hospital de la Madre y el Niño",
    duracion: "4 Meses",
    fechaInicio: "15/07/2026",
    fechaFin: "15/11/2026",
    imagen:
      "https://plus.unsplash.com/premium_photo-1664299577623-8c7ef6d2b42b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVjYW5pY2ElMjBtb3RvfGVufDB8fDB8fHww?w=500&q=80",
  },
  {
    id: 10,
    nombre: "Electricidad Domiciliaria e Industrial Básica",
    categoria: "Oficios",
    institucion: "Ministerio de Cultura y Educación",
    descripcion:
      "Capacitación en diseño de circuitos eléctricos para el hogar, instalación de tableros, térmicas y disyuntores, detección de fugas y normas de seguridad vigentes.",
    requisitos: [
      "Secundario completo",
      "Mayor de 18 años",
      "Nociones básicas de matemática",
    ],
    cupoMaximo: 20,
    cuposDisponibles: 9,
    precio: 0,
    destacado: false,
    lugar: "Centro de Formación Profesional N° 1",
    direccion: "Av. Gendarmería Nacional 1800",
    referencia: "Frente a la rotonda de la Cruz del Norte",
    duracion: "3 Meses",
    fechaInicio: "03/08/2026",
    fechaFin: "03/11/2026",
    imagen:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&q=80",
  },
  {
    id: 11,
    nombre: "Instalación y Configuración de Sistemas de CCTV",
    categoria: "Tecnología",
    institucion: "Subsecretaría de Empleo",
    descripcion:
      "Aprende a planificar, cablear e instalar sistemas de videovigilancia con cámaras analógicas e IP, configuración de DVRs y visualización remota en dispositivos móviles.",
    requisitos: ["Manejo básico de PC y entorno Windows", "Mayor de 18 años"],
    cupoMaximo: 25,
    cuposDisponibles: 11,
    precio: 0,
    destacado: false,
    lugar: "Instituto Técnico Digital",
    direccion: "Belgrano 450",
    referencia: "A media cuadra de la Peatonal, entre España y Saavedra",
    duracion: "2 Meses",
    fechaInicio: "18/08/2026",
    fechaFin: "18/10/2026",
    imagen:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=500&q=80",
  },
  {
    id: 12,
    nombre: "Soldadura Eléctrica y Herrería de Obra",
    categoria: "Oficios",
    institucion: "NEP y FP (Educación Permanente)",
    descripcion:
      "Introducción a los diferentes tipos de soldadura por arco, corte de metales, uso de amoladoras, diseño y armado de rejas, portones y estructuras metálicas livianas.",
    requisitos: [
      "Mayor de 18 años",
      "Uso obligatorio de elementos de protección personal",
    ],
    cupoMaximo: 12,
    cuposDisponibles: 1,
    precio: 0,
    destacado: false,
    lugar: "Centro de Formación Profesional N° 1",
    direccion: "Av. Gendarmería Nacional 1800",
    referencia: "Frente a la rotonda de la Cruz del Norte",
    duracion: "3 Meses",
    fechaInicio: "01/09/2026",
    fechaFin: "01/12/2026",
    imagen:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=500&q=80",
  },
  {
    id: 13,
    nombre: "Producción de Conservas y Mermeladas de Estación",
    categoria: "Producción",
    institucion: "Instituto PAIPPA",
    descripcion:
      "Sácale provecho a las frutas de la región (mamón, mango, cítricos). Técnicas seguras de pasteurización, envasado al vacío y control bromatológico artesanal.",
    requisitos: [
      "Mayor de 16 años",
      "Traer frascos de vidrio para las prácticas",
    ],
    cupoMaximo: 18,
    cuposDisponibles: 5,
    precio: 0,
    destacado: false,
    lugar: "Predio ferial PAIPPA",
    direccion: "Padre Grotti 1040",
    referencia: "Entre Fortín Yunká y Azcuénaga",
    duracion: "1 Mes",
    fechaInicio: "05/09/2026",
    fechaFin: "05/10/2026",
    imagen:
      "https://images.unsplash.com/photo-1665473052568-e36bc84cca4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lcm1lbGFkYXxlbnwwfHwwfHx8MA%3D%3D?w=500&q=80",
  },
  {
    id: 14,
    nombre: "Carpintería en Fibromelamina para Emprendedores",
    categoria: "Oficios",
    institucion: "Subsecretaría de Empleo",
    descripcion:
      "Aprende el despiece, optimización de placas, pegado de cantos y armado de muebles modernos en melamina para cocina, oficina o el hogar.",
    requisitos: [
      "Mayor de 18 años",
      "Manejo básico de herramientas como atornilladores",
    ],
    cupoMaximo: 15,
    cuposDisponibles: 3,
    precio: 0,
    destacado: false,
    lugar: "Taller de Oficios Comunitario",
    direccion: "Pringles 2100",
    referencia: "A dos cuadras de la Avenida Italia",
    duracion: "2 Meses",
    fechaInicio: "10/09/2026",
    fechaFin: "10/11/2026",
    imagen:
      "https://images.unsplash.com/photo-1626081063434-79a2169791b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2FycGludGVyaWF8ZW58MHx8MHx8fDA%3D?w=500&q=80",
  },
  {
    id: 15,
    nombre: "Informática Administrativa y Gestión de Oficina",
    categoria: "Tecnología",
    institucion: "NEP y FP (Educación Permanente)",
    descripcion:
      "Domina herramientas esenciales de oficina: procesamiento de textos, planillas de cálculo (Excel) para control de stock, y gestión de correos corporativos.",
    requisitos: ["Manejo básico de PC", "Secundario completo o en curso"],
    cupoMaximo: 25,
    cuposDisponibles: 10,
    precio: 0,
    destacado: false,
    lugar: "Núcleo de Formación Profesional N° 3",
    direccion: "Fotheringham 420",
    referencia: "Al lado de la Escuela Primaria N° 2",
    duracion: "3 Meses",
    fechaInicio: "15/09/2026",
    fechaFin: "15/12/2026",
    imagen:
      "https://plus.unsplash.com/premium_photo-1671461774955-7aab3ab41b90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXhjZWx8ZW58MHx8MHx8fDA%3D?w=500&q=80",
  },
];

const contenedor = document.querySelector("#cardCursos");

const cargarCursos = (listaCursos) => {
  contenedor.innerHTML = "";
  listaCursos.forEach((curso) => {
    contenedor.innerHTML += `<div class="col col-lg-4 col-md-6 col-sm-6">
                <div class="card h-100" style="max-width: 25rem; max-height: auto;">
                  <img src="${curso.imagen}" class="card-img-top" alt="..." style="height: 18rem;"/>
                  <div class="card-body d-flex flex-column">
                    <div>
                        <span class="badge bg-secondary mb-2">${curso.institucion}</span>
                        <h5 class="card-title text-start">${curso.nombre}</h5>
                        <p class="card-text text-start text-muted small text-truncate m-0 p-0">
                        <b>Descripción: </b> ${curso.descripcion} 
                        </p>
                        <p class="text-start text-muted small m-0 p-0">
                        <b>Requisitos: </b> ${curso.requisitos}
                        </p>
                        <p class="text-start text-muted small m-0 p-0">
                        <b>Fecha de Inicio: </b> ${curso.fechaInicio}
                        </p>
                        <p class="text-start text-muted small m-0 p-0">
                        <b>Vacantes: </b> ${curso.cuposDisponibles == 0 ? "Sin vancantes" : curso.cuposDisponibles}
                        </p>
                    </div>
                    <div class="d-flex justify-content-between align-items-center mt-auto pt-3">
                      <div class="btn-group">
                        <a type="button" class="btn btn-sm btn-outline-secondary" href="detalles.html?${curso.id}">
                          Ver más detalles
                        </a>
                      </div>
                      <small class="text-body-secondary"></small>
                    </div>
                  </div>
                </div>
    </div>`;
  });
};

cargarCursos(cursos);

//Creamos una constante que selecciona el input
const formBuscarCurso = document.querySelector("#formBuscar");

formBuscarCurso.addEventListener("input", (e) => {
  const terminoBusqueda = e.target.value.toUpperCase();

  const cursoFiltrado = cursos.filter((curso) => {
    const cursoNombre = curso.nombre.toUpperCase().includes(terminoBusqueda);
    const cursoInstitucion = curso.institucion
      .toUpperCase()
      .includes(terminoBusqueda);
    const cursoCategoria = curso.categoria
      .toUpperCase()
      .includes(terminoBusqueda);

    return cursoNombre || cursoInstitucion || cursoCategoria;
  });

  if (cursoFiltrado != "") {
    cargarCursos(cursoFiltrado);
  } else {
    contenedor.innerHTML = `<div class="row justify-content-center">
                              <div class="col-sm-12">
                                  <div class="alert alert-danger" role="alert">
                                    No se encontraron cursos
                                  </div>
                               </div>
                             </div>`;
  }
});
