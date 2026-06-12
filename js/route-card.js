const template = document.createElement("template");

template.innerHTML = `
<style>

.card{
  border-radius:10px;
  padding:20px;
  box-shadow:0 0 10px #ccc;
  margin-bottom:20px;
}

button{
  margin-top:10px;
}

</style>

<div class="card">

  <h3 class="nombre"></h3>

  <p class="conductor"></p>

  <p class="hora"></p>

  <p class="clima"></p>

  <ul class="estudiantes"></ul>

  <button class="eliminar">
    Eliminar
  </button>

</div>
`;

class RouteCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.querySelector(".nombre").textContent =
      this.getAttribute("nombre");

    this.shadowRoot.querySelector(".conductor").textContent =
      "Conductor: " + this.getAttribute("conductor");

    this.shadowRoot.querySelector(".hora").textContent =
      "Hora: " + this.getAttribute("hora");

    this.shadowRoot.querySelector(".clima").textContent =
      "Clima: " + this.getAttribute("clima");

    const estudiantes = JSON.parse(this.getAttribute("estudiantes"));

    const ul = this.shadowRoot.querySelector(".estudiantes");

    estudiantes.forEach((est) => {
      const li = document.createElement("li");

      li.textContent = est;

      ul.appendChild(li);
    });
  }
}

customElements.define("route-card", RouteCard);
