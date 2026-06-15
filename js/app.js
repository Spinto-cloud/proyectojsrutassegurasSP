const routeForm = document.getElementById("routeForm");

const routesContainer = document.getElementById("routesContainer");

let rutas = obtenerRutas();

function validarFormulario(nombre, conductor, hora, ciudad) {
  if (
    nombre.trim() === "" ||
    conductor.trim() === "" ||
    hora.trim() === "" ||
    ciudad.trim() === ""
  ) {
    alert("Todos los campos son obligatorios");

    return false;
  }

  return true;
}

document.addEventListener("rutaCreada", (e) => {
  console.log("Nueva ruta:", e.detail.nombre);
});

document.addEventListener("agregar-estudiante", (e) => {
  agregarEstudiante(Number(e.detail.id));
});

document.addEventListener("editar-ruta", (e) => {
  editarRuta(Number(e.detail.id));
});

document.addEventListener("eliminar-ruta", (e) => {
  eliminarRuta(Number(e.detail.id));
});

routeForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombreRuta").value;

  const conductor = document.getElementById("conductor").value;

  const hora = document.getElementById("hora").value;

  const ciudad = document.getElementById("ciudad").value;

  if (!validarFormulario(nombre, conductor, hora, ciudad)) {
    return;
  }

  // CLIMA
  const clima = await obtenerClima(ciudad);

  // NUEVA RUTA
  const nuevaRuta = {
    id: Date.now(),

    nombre,

    conductor,

    hora,

    ciudad,

    clima,

    estudiantes: [],
  };

  rutas.push(nuevaRuta);

  guardarRutas(rutas);

  mostrarRutas();

  routeForm.reset();

  // EVENTO PERSONALIZADO
  document.dispatchEvent(
    new CustomEvent("rutaCreada", {
      detail: {
        nombre,
      },
    }),
  );
});

function mostrarRutas() {
  routesContainer.innerHTML = "";

  rutas.forEach((ruta) => {
    const card = document.createElement("route-card");

    card.setAttribute("id", ruta.id);

    card.setAttribute("nombre", ruta.nombre);

    card.setAttribute("conductor", ruta.conductor);

    card.setAttribute("hora", ruta.hora);

    card.setAttribute("clima", ruta.clima);

    card.setAttribute("estudiantes", JSON.stringify(ruta.estudiantes));

    routesContainer.appendChild(card);
  });
}

function agregarEstudiante(id) {
  const nombre = prompt("Nombre del estudiante:");

  if (!nombre) {
    return;
  }

  const ruta = rutas.find((ruta) => ruta.id === id);

  ruta.estudiantes.push(nombre);

  guardarRutas(rutas);

  mostrarRutas();
}

function editarRuta(id) {
  const ruta = rutas.find((ruta) => ruta.id === id);

  const nuevoNombre = prompt("Nuevo nombre:", ruta.nombre);

  const nuevoConductor = prompt("Nuevo conductor:", ruta.conductor);

  const nuevaHora = prompt("Nueva hora:", ruta.hora);

  if (!nuevoNombre || !nuevoConductor || !nuevaHora) {
    return;
  }

  ruta.nombre = nuevoNombre;

  ruta.conductor = nuevoConductor;

  ruta.hora = nuevaHora;

  guardarRutas(rutas);

  mostrarRutas();
}

function eliminarRuta(id) {
  const confirmar = confirm("¿Desea eliminar esta ruta?");

  if (!confirmar) {
    return;
  }

  rutas = rutas.filter((ruta) => ruta.id !== id);

  guardarRutas(rutas);

  mostrarRutas();
}

mostrarRutas();
