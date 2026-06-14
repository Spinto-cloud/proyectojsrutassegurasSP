function guardarRutas(rutas) {
  localStorage.setItem("rutas", JSON.stringify(rutas));
}

function obtenerRutas() {
  return JSON.parse(localStorage.getItem("rutas")) || [];
}
