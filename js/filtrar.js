const estudiantes = [
  { nombre: "Sergio Pinto", ruta: "Ruta Norte" },
  { nombre: "David Dominguez", ruta: "Ruta Sur" },
  { nombre: "Vanessa Galvis", ruta: "Ruta Centro" },
  { nombre: "Juanita Duque", ruta: "Ruta Sur" },
  { nombre: "Valeria Gutierrez", ruta: "Ruta Centro" },
  { nombre: "Andres Diaz", ruta: "Ruta Norte" },
];

const lista = document.getElementById("listaestudiantes");
const filtro = document.getElementById("filtraruta");

function mostrarestudiantes(rutaseleccionada) {}
lista.innerHTML = "";

let filtrados = function mostrarestudiantes(rutaseleccionada) {
  lista.innerHTML = "";

  let filtrados;

  if (rutaseleccionada === "Todas") {
    filtrados = estudiantes;
  } else {
    filtrados = estudiantes.filter(function (est) {
      return est.ruta === rutaseleccionada;
    });
  }

  filtrados.forEach(function (estudiante) {
    const li = document.createElement("li");

    let claseruta = "";

    if (estudiante.ruta === "Ruta Norte") {
      claseruta = "norte";
    } else if (estudiante.ruta === "Ruta Sur") {
      claseruta = "sur";
    } else {
      claseruta = "centro";
    }

    li.className = claseruta;
    li.textContent = estudiante.nombre + " - " + estudiante.ruta;

    lista.appendChild(li);
  });
};

mostrarestudiantes("Todas");

filtro.addEventListener("change", () => {
  mostrarestudiantes(filtro.value);
});
