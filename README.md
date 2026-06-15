# proyectojsrutassegurasSP

Este proyecto propone crear un sistema frontend que permita organizar rutas escolares y asignar estudiantes a cada bus, para la empresa rutas seguras kids, utilizando los conocimientos aprendidos en HTML, CSS Y JAVASCRIPT.

La finalidad del presente proyecto es:

•	Manipulación dinámica del DOM.
•	Uso de eventos y asincronía.
•	Creación de componentes reutilizables con Web Components. 
•	Buenas prácticas de organización de proyecto (HTML, CSS y JS separados).
•	Consumo de API pública.

Sus funcionalidades son:

• Crear, Editar y Eliminar ruta estudiantiles para la empresa rutas seguras kids.
• Agregar estudiantes a cada ruta.
• Mostrar clima de la ciudad mediante una API pública.
• Guardar datos en LocalStorage, para que se almacenen aun habiendo cerrado la pantalla en el navegador.
• Interfaz de diseño responsivo para celulares, tabletas y computadoras.
• Uso de Web Components con Shadow DOM.
• Uso de eventos personalizados con CustomEvent.

Las tecnologias que se emplearon fueron:
• HTML.
• CSS.
• JAVASCRIPT (Web Components, Shadow Dom, LocalStorage, consumo de Api publica del clima).

El proyecto fue estructurado de la siguiente manera: 

📂 Escritorio
proyectojsrutassegurasSP/
│
├── index.html
│
├── css/
│   └── styles.css
│
├── js/
│   ├── localstorage.js
│   ├── weather.js
│   ├── routecard.js
│   └── app.js
│
└── README.md

Ejecución del Proyecto

Gestión de Rutas

1. El usuario podra crear, editar y eliminar rutas, como se puede visualizar en las siguientes imagenes:
<img width="959" height="502" alt="image" src="https://github.com/user-attachments/assets/1fe7c805-cfbd-435e-a555-3575220de182" />

<img width="959" height="502" alt="image" src="https://github.com/user-attachments/assets/d203d9fc-f001-4e22-9a36-090276561c7d" />

2. Gestión de estudiantes

El usuario podra agregar y visualizar los estudiantes de cada ruta, como se muestra en las siguientes imagenes.

<img width="959" height="504" alt="image" src="https://github.com/user-attachments/assets/56e6ec2e-836d-4834-add1-
fcbf29010ace" />

<img width="298" height="185" alt="image" src="https://github.com/user-attachments/assets/e8dfe98d-3d60-4735-b949-0d0fb9d2e113" />

3. Persistencia de datos

Al almacenar la información usando el LocalStorage se conservan los datos, incluso al recargar la pagina web, en la siguiente iamgen se puede evidenciar el uso del LocalStorage en el proyecto.

<img width="959" height="504" alt="image" src="https://github.com/user-attachments/assets/cccb3a49-e3ad-4489-8d98-0330fa6d4d9d" />

4. Consultar clima

Mediante el consumo de la API pública https://wttr.in/ la aplicación permite mostrar el clima actual de la ciudad donde opera la ruta, evidenciandose en la tarjeta de ruta como se puede visualizar en la siguiente imagen.

<img width="305" height="161" alt="image" src="https://github.com/user-attachments/assets/5908da23-59f6-428c-9ac0-e79351dd6261" />

5. Web Components

En el archivo Javascript de la tarjeta de ruta (routecard.js) se evidencian los requerimientos de templates, shadow dom y custom event.

A continuación podemos visualizar el template (plantilla) y los custom events (agregar estudiante/editar/eliminar) de las tarjetas de ruta.

<img width="955" height="386" alt="image" src="https://github.com/user-attachments/assets/80a25abe-2748-45c1-bd99-d2c10decd003" />

En la siguiente imagen se puede inspeccionar la raiz shadow del shadow Dom.

<img width="959" height="504" alt="image" src="https://github.com/user-attachments/assets/d5b8b26b-d4dd-4b8e-b40a-
a9ccf2417389" />

6. Diseño Responsivo

Para celulares:

<img width="959" height="503" alt="image" src="https://github.com/user-attachments/assets/fc57ec1f-bb33-4f53-9d75-952b174bbe93" />

Para tablets:

<img width="959" height="502" alt="image" src="https://github.com/user-attachments/assets/381f951e-e480-4dda-b8ca-73612231a300" />

Para Computadoras:

<img width="958" height="506" alt="image" src="https://github.com/user-attachments/assets/8999747e-bfca-45a4-99d0-1d5504d9b843" />

Instrucciones de Uso o Ejecución:

• Descargar o clonar el repositorio
• Abrir la carpeta del proyecto
• Ejecutar el archivo:
      index.html
• Utilizar la aplicación desde su navegador preferido.

