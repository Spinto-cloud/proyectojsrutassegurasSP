const template = document.createElement("template");

template.innerHTML = `
<style>

.card{
  background:white;
  padding:20px;
  border-radius:10px;
  box-shadow:0 0 10px #ccc;
}

button{
  margin-top:10px;
  margin-right:5px;
  padding:8px 12px;
  border:none;
  cursor:pointer;
  color:white;
}

.agregar{
  background:#4CAF50;
}

.editar{
  background:#ff9800;
}

.eliminar{
  background:#f44336;
}

</style>

<div class="card">

  <h3 id="nombre"></h3>

  <p id="conductor"></p>

  <p id="hora"></p>

  <p id="clima"></p>

  <h4>Estudiantes</h4>

  <ul id="lista"></ul>

  <button class="agregar">
    Agregar Estudiante
  </button>

  <button class="editar">
    Editar
  </button>

  <button class="eliminar">
    Eliminar
  </button>

</div>
`;

class RouteCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({
      mode: "open",
    });

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const id = this.getAttribute("id");

    const nombre = this.getAttribute("nombre");

    const conductor = this.getAttribute("conductor");

    const hora = this.getAttribute("hora");

    const clima = this.getAttribute("clima");

    const estudiantes = JSON.parse(this.getAttribute("estudiantes") || "[]");

    this.shadowRoot.querySelector("#nombre").textContent = nombre;

    this.shadowRoot.querySelector("#conductor").textContent =
      "Conductor: " + conductor;

    this.shadowRoot.querySelector("#hora").textContent = "Hora: " + hora;

    this.shadowRoot.querySelector("#clima").textContent = "Clima: " + clima;

    const lista = this.shadowRoot.querySelector("#lista");

    estudiantes.forEach((estudiante) => {
      const li = document.createElement("li");

      li.textContent = estudiante;

      lista.appendChild(li);
    });

    // EVENTOS

    this.shadowRoot.querySelector(".agregar").addEventListener("click", () => {
      this.dispatchEvent(
        new CustomEvent("agregar-estudiante", {
          detail: { id },
          bubbles: true,
          composed: true,
        }),
      );
    });

    this.shadowRoot.querySelector(".editar").addEventListener("click", () => {
      this.dispatchEvent(
        new CustomEvent("editar-ruta", {
          detail: { id },
          bubbles: true,
          composed: true,
        }),
      );
    });

    this.shadowRoot.querySelector(".eliminar").addEventListener("click", () => {
      this.dispatchEvent(
        new CustomEvent("eliminar-ruta", {
          detail: { id },
          bubbles: true,
          composed: true,
        }),
      );
    });
  }
}

customElements.define("route-card", RouteCard);
