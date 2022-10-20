/**
 * Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.
 * Desarrolla la siguiente aplicación. Aplica todos los estilos usando JS.
 *
 * El color del año cambia cada segundo
 * El color de fondo de la fecha y el tiempo es cambiante cada segundo
 * Los desafíos completados tienen fondo verde
 * Los desafíos en curso tienen fondo amarillo
 * Los desafíos próximos tienen fondo red
 */

const setStyles = () => {
    const wrapper = document.getElementsByClassName("wrapper");
    wrapper[0].style.margin = "auto";
    wrapper[0].style.marginTop = "60px";
    wrapper[0].style.width = "auto";
    wrapper[0].style.textAlign = "center";

    const primerTitulo = document.querySelectorAll("h1");
    const segundoTitulo = document.querySelectorAll("h2");
    primerTitulo.forEach((title) => {
        title.style.fontSize = "24px";
        title.style.fontFamily = "Arial";
    });
    segundoTitulo.forEach((title) => {
        title.style.fontSize = "16px";
        title.style.fontFamily = "Arial";
        title.style.textDecoration = "underline";
    });

    const lista = document.querySelector("ul");
    lista.style.margin = "10px";
    lista.style.padding = "0px";

    const elementosLista = document.querySelectorAll("li");
    elementosLista.forEach((element, i) => {
        element.style.listStyleType = "none";
        element.style.padding = "15px";
        element.style.width = "500px";
        element.style.marginTop = "3px";
        const statusChallengeArr = element.textContent.split(" ");
        const statusChallenge = statusChallengeArr[statusChallengeArr.length - 1].toLowerCase();
        switch (statusChallenge) {
            case "done":
                element.style.backgroundColor = "#21BF73";
                break;
            case "ongoing":
                element.style.backgroundColor = "#FDDB3A";
                break;
            case "coming":
                element.style.backgroundColor = "#FD5E53";
                break;

            default:
                break;
        }
    });

    /**
     * El color del año cambia cada segundo
     */
    modifyTitulo();
    const fecha = document.querySelector("span");
    const horayfecha = document.getElementById("fecha");
    const colors = ["blue", "red", "yellow", "gray", "brown", "pink", "violet", "green"];
    let i = 0;
    setInterval(() => {
        horayfecha.style.backgroundColor = colors[i];
        fecha.style.color = colors[i];
        if (i != colors.length - 1) {
            i++;
        } else {
            i = 0;
        }
    }, 1000);
};

const modifyTitulo = () => {
    const primerTitulo = document.querySelector("h1");
    const textoTitulo = primerTitulo.textContent.substring(0, primerTitulo.textContent.indexOf("2020"));
    const fechaTitulo = primerTitulo.textContent.substring(primerTitulo.textContent.indexOf("2020"));
    primerTitulo.innerHTML = textoTitulo + `<span style="font-size: 60px;">${fechaTitulo}</span>`;
};

const mostrarFecha = () => {
    myDate = new Date();
    day = myDate.getDate();
    //month = myDate.getMonth();
    monthTemp = myDate.toLocaleString("default", { month: "long" });
    month = monthTemp[0].toUpperCase() + monthTemp.slice(1);
    year = myDate.getFullYear();
    hours = myDate.getHours();
    minutes = myDate.getMinutes();
    seconds = myDate.getSeconds();
    if (hours < 10) hours = 0 + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    document.getElementById("fecha").textContent = month + " " + day + ", " + year + " " + hours + ":" + minutes + ":" + seconds;
    setInterval(() => {
        mostrarFecha();
    }, 1000);
};

setStyles();
mostrarFecha();
