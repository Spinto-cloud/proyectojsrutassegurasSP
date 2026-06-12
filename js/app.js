const routeForm = document.getElementById("routeForm");
const routesContainer = document.getElementById("routesContainer");

let rutas = JSON.parse(localStorage.getItem("rutas")) || [];

// ===========================
// GUARDAR LOCALSTORAGE
// ===========================

function guardarRutas() {
  localStorage.setItem("rutas", JSON.stringify(rutas));
}

// ===========================
// VALIDAR FORMULARIO
// ===========================

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

// ===========================
// EVENTO PERSONALIZADO
// ===========================

document.addEventListener("rutaCreada", (e) => {
  console.log(`Nueva ruta creada: ${e.detail.nombre}`);
});

// ===========================
// CREAR RUTA
// ===========================

routeForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombreRuta").value;

  const conductor = document.getElementById("conductor").value;

  const hora = document.getElementById("hora").value;

  const ciudad = document.getElementById("ciudad").value;

  if (!validarFormulario(nombre, conductor, hora, ciudad)) {
    return;
  }

  const clima = await obtenerClima(ciudad);

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

  guardarRutas();

  mostrarRutas();

  routeForm.reset();

  document.dispatchEvent(
    new CustomEvent("rutaCreada", {
      detail: {
        nombre: nuevaRuta.nombre,
      },
    }),
  );
});

// ===========================
// MOSTRAR RUTAS
// ===========================

function mostrarRutas() {
  routesContainer.innerHTML = "";

  rutas.forEach((ruta) => {
    const card = document.createElement("div");

    card.classList.add("route-card");

    card.innerHTML = `
      <h3>${ruta.nombre}</h3>

      <p>
        <strong>Conductor:</strong>
        ${ruta.conductor}
      </p>

      <p>
        <strong>Hora:</strong>
        ${ruta.hora}
      </p>

      <p>
        <strong>Ciudad:</strong>
        ${ruta.ciudad}
      </p>

      <p>
        <strong>Clima:</strong>
        ${ruta.clima}
      </p>

      <h4>Estudiantes</h4>

      <ul>
        ${ruta.estudiantes.map((est) => `<li>${est}</li>`).join("")}
      </ul>

      <button
        onclick="agregarEstudiante(${ruta.id})"
      >
        Agregar Estudiante
      </button>

      <button
        onclick="editarRuta(${ruta.id})"
      >
        Editar
      </button>

      <button
        onclick="eliminarRuta(${ruta.id})"
      >
        Eliminar
      </button>
    `;

    routesContainer.appendChild(card);
  });
}

// ===========================
// AGREGAR ESTUDIANTE
// ===========================

window.agregarEstudiante = function (id) {
  const nombre = prompt("Nombre del estudiante:");

  if (!nombre) return;

  const ruta = rutas.find((ruta) => ruta.id === id);

  ruta.estudiantes.push(nombre);

  guardarRutas();

  mostrarRutas();
};

// ===========================
// EDITAR RUTA
// ===========================

window.editarRuta = function (id) {
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

  guardarRutas();

  mostrarRutas();
};

// ===========================
// ELIMINAR RUTA
// ===========================

window.eliminarRuta = function (id) {
  const confirmar = confirm("¿Desea eliminar esta ruta?");

  if (!confirmar) return;

  rutas = rutas.filter((ruta) => ruta.id !== id);

  guardarRutas();

  mostrarRutas();
};

// ===========================
// API CLIMA
// ===========================

async function obtenerClima(ciudad) {
  try {
    const response = await fetch(`https://wttr.in/${ciudad}?format=j1`);

    const data = await response.json();

    return `${data.current_condition[0].temp_C}°C`;
  } catch (error) {
    console.error(error);

    return "No disponible";
  }
}

// ===========================
// INICIALIZAR APP
// ===========================

mostrarRutas();
