// Creando los contenedores
let container = document.createElement("div"),
    divTitulo = document.createElement("div"),
    divTeclas = document.createElement("div");

document.body.appendChild(container);
container.appendChild(divTitulo);
container.appendChild(divTeclas);

container.id = "container";
divTitulo.id = "titulo";
divTeclas.id = "teclas";

// Contenido inicial título
let titulo = document.createElement("h1");
titulo.textContent = "Press any keyboard key";
divTitulo.appendChild(titulo);

// Contenido teclas
let codigoTecla = document.createElement("p");
divTeclas.appendChild(codigoTecla);

divTeclas.style.display = "none";

/**
 * Event Listeners
 */
// Cambiado "keypress" por "keydown". Keypress solo detecta caracteres que se puedan imprimir, Keydown lo detecta todo (Retroceso, Alt, Shift)
document.body.addEventListener("keydown", (e) => {
    divTeclas.style.display = "block";
    titulo.innerHTML = `You pressed <span style="color:green">${e.code}</span>`;
    codigoTecla.textContent = e.keyCode;
    console.log(e);
});

/**
 * Estilos
 */
document.body.style.fontFamily = "Source Sans Pro";

/**
 * Titulo
 */
divTitulo.style.width = "fit-content";
divTitulo.style.margin = "0px auto";
divTitulo.style.boxShadow = "rgb(225 225 225) -4px 3px 19px 1px";

titulo.style.margin = "0px";
titulo.style.padding = "30px";

/**
 * Teclas
 */
divTeclas.style.width = "fit-content";
divTeclas.style.height = "auto";
divTeclas.style.margin = "20px auto";
divTeclas.style.boxShadow = "rgb(225 225 225) -4px 3px 19px 1px";

codigoTecla.style.width = "fit-content";
codigoTecla.style.margin = "0px";
codigoTecla.style.fontSize = "60px";
codigoTecla.style.padding = "30px";
