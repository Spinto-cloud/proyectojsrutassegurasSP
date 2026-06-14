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
}

</style>

<div class="card">

    <h3 id="nombre"></h3>

    <p id="conductor"></p>

    <p id="hora"></p>

    <p id="clima"></p>

    <h4>Estudiantes</h4>

    <ul id="lista">

    </ul>

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
    this.shadowRoot.querySelector("#nombre").textContent =
      this.getAttribute("nombre");

    this.shadowRoot.querySelector("#conductor").textContent =
      "Conductor: " + this.getAttribute("conductor");

    this.shadowRoot.querySelector("#hora").textContent =
      "Hora: " + this.getAttribute("hora");

    this.shadowRoot.querySelector("#clima").textContent =
      "Clima: " + this.getAttribute("clima");
  }
}

customElements.define("route-card", RouteCard);
