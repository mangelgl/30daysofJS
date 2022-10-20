console.group("Ejercicios nivel 1");
/**
 * Get the first paragraph by using document.querySelector(tagname) and tag name
 */
const parrafos = document.querySelector("p");
console.log(parrafos);

/**
 * Get each of the the paragraph using document.querySelector('#id') and by their id
 */
const primerParrafo = document.querySelector("#primer-parrafo");
console.log(primerParrafo);

/**
 * Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
 */
const allParrafos = document.querySelectorAll("p");
console.log(allParrafos);

/**
 * Loop through the nodeList and get the text content of each paragraph
 */
allParrafos.forEach((title) => console.log(title.textContent));

/**
 * Set a text content to paragraph the fourth paragraph,Fourth Paragraph
 */
allParrafos.forEach((title, i) => {
    if (i == allParrafos.length - 1) {
        title.textContent = "Fourth Paragraph";
    }
});

/**
 * Set id and class attribute for all the paragraphs using different attribute setting methods
 */
const allNewParrafos = document.querySelectorAll("p");
allNewParrafos[0].setAttribute("id", "first-p-element");
allNewParrafos[0].setAttribute("class", "p-element");
allNewParrafos[1].className = "p-element";
allNewParrafos[1].id = "second-p-element";
allNewParrafos[2].classList.add("p-element");
allNewParrafos[2].id = "third-p-element";
allNewParrafos[3].setAttribute("id", "fourth-p-element");
allNewParrafos[3].setAttribute("class", "p-element");
console.groupEnd();

console.group("Ejercicios nivel 2");
/**
 * Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
 */
allNewParrafos.forEach((title, i) => {
    title.style.fontSize = "23px";
    title.style.fontFamily = "Arial";
    if (i % 2 == 0) {
        title.style.color = "green";
        title.style.backgroundColor = "gray";
    } else {
        title.style.color = "red";
        title.style.backgroundColor = "yellow";
    }
});

/**
 * Select all paragraphs and loop through each elements and give the first and third paragraph a color of green,
 * and the second and the fourth paragraph a red color
 */
allNewParrafos.forEach((title) => console.log(title));

/**
 * Set text content, id and class to each paragraph
 */
console.log("----------------------------");
allNewParrafos.forEach((title, i) => {
    title.textContent = `Párrafo número ${i}`;
    title.classList.add("parrafos");
    title.id = `parrafo${i}`;
    console.log(title);
});

console.groupEnd();
