/*
Enlace: https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/06_Day_Loops/06_day_loops.md#exercises-level-1
*/
console.log("Ejercicios nivel 3");
const countries = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"];
const webTechs = ["HTML", "CSS", "JavaScript", "React", "Redux", "Node", "MongoDB"];
const mernStack = ["MongoDB", "Express", "React", "Node"];

let countriesCopy = countries.slice();
console.log(countriesCopy);

let sortedCountries = countries.slice().sort();
console.log(sortedCountries);

let sortedWT = webTechs.slice().sort(),
  sortedMS = mernStack.slice().sort();
console.log(sortedWT, sortedMS);
console.log("Siguientes ejercicios ya hechos");
