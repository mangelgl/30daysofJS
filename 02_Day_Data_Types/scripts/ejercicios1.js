/*
1.Declare una variable llamada desafío y asígnele un valor inicial '30 días de JavaScript'.
2.Imprima la cadena en la consola del navegador usando console.log()
3.Imprima la longitud de la cadena en la consola del navegador usando console.log()
4.Cambie todos los caracteres de cadena a letras mayúsculas usando el método toUpperCase()
5.Cambie todos los caracteres de la cadena a letras minúsculas usando el método toLowerCase()
6.Corta (segmenta) la primera palabra de la cadena usando el método substr() o substring()
7-Corta la frase Days Of JavaScript de 30 Days Of JavaScript.
8.Verifique si la cadena contiene una palabra Script usando el método includes()
9.Divide la cadena en un array usando el método split()
10.Divida la cadena 30 días de JavaScript en el espacio usando el método split()
11.'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' divide la cadena en la coma y cámbiala a una matriz.
12.Cambie 30 días de JavaScript a 30 días de Python usando el método replace().
13.¿Qué es el carácter en el índice 15 en la cadena '30 días de JavaScript'? Utilice el método charAt().
14.¿Cuál es el código de carácter de J en la cadena '30 días de JavaScript' usando charCodeAt()
15.Use indexOf para determinar la posición de la primera aparición de a en 30 días de JavaScript
16.Utilice lastIndexOf para determinar la posición de la última aparición de a en 30 días de JavaScript.
17.Usa indexOf para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
18.Usa lastIndexOf para encontrar la posición de la última aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
19.Usa buscar para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
20.Use trim() para eliminar cualquier espacio en blanco final al principio y al final de una cadena. Por ejemplo, '30 días de JavaScript'.
21.Use el método startsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
22.Use el método endsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
23.Usa el método match() para encontrar todos los a en 30 días de JavaScript
24.Use concat() y fusione '30 días de' y 'JavaScript' en una sola cadena, '30 días de JavaScript'
25.Use el método repeat() para imprimir 30 días de JavaScript 2 veces
*/

console.log("Ejercicios nivel 1");
let desafio = "30 días de JavaScript";
console.log("2 ->", desafio);
console.log("3 ->", desafio.length);
console.log("4 ->", desafio.toUpperCase());
console.log("5 ->", desafio.toLowerCase());
console.log("6 ->", desafio.substring(2, desafio.length));
console.log("7 ->", desafio.substring(0, 2));
console.log("8 ->", desafio.includes("Script"));
console.log("9 ->", desafio.split());
console.log("10 ->", desafio.split(" "));
let empresas = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log("11 ->", empresas.split(","));
console.log("12 ->", desafio.replace("JavaScript", "Python"));
console.log("13 ->", desafio.charAt(15));
console.log("14 ->", desafio.charCodeAt(desafio.indexOf("J")));
console.log("15 ->", desafio.indexOf("a"));
console.log("16 ->", desafio.lastIndexOf("a"));
let oracion = "No puedes terminar una oración con porque porque porque es una conjunción";
console.log("17 ->", oracion.indexOf("porque"));
console.log("18 ->", oracion.lastIndexOf("porque"));
console.log("19 ->", oracion.search("porque"));
let oracionEspacios = "    30 días de JavaScript    ";
console.log("20 ->", oracionEspacios.trim());
console.log("21 ->", desafio.startsWith("30"));
console.log("22 ->", desafio.endsWith("JavaScript"));
console.log("23 ->", desafio.match("a"));
let str = "30 días de";
console.log("24 ->", str.concat(" ", "JavaScript"));
console.log("25 ->", desafio.repeat(2));
