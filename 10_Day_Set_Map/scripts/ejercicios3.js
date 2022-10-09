/**
 * 1.How many languages are there in the countries object file.
   // Your output should look like this
   console.log(mostSpokenLanguages(countries, 10))
   [
     { English: 91 },
     { French: 45 },
     { Arabic: 25 },
     { Spanish: 24 },
     { Russian: 9 },
     { Portuguese: 9 },
     { Dutch: 8 },
     { German: 7 },
     { Chinese: 5 },
     { Swahili: 4 },
     { Serbian: 4 }
   ]

  // Your output should look like this
  console.log(mostSpokenLanguages(countries, 3))
  [
  {English:91},
  {French:45},
  {Arabic:25}
  ]
 */
console.log("Ejercicios nivel 3");
// Ejercicio 1
let allLanguagesRepeated = [];
const allLanguages = countries
    .map((element) => element.languages)
    .forEach((lng) => {
        lng.forEach((name) => {
            allLanguagesRepeated.push(name);
        });
    });
const allLanguagesSet = new Set(allLanguagesRepeated);
console.log(`There are ${allLanguagesSet.size} languages in countries object.`);
// Ejercicio 2
const mostSpokenLanguages = (arr, count) => {
    let counts = [];
    for (const l of allLanguagesSet) {
        const filteredLang = allLanguagesRepeated.filter((lng) => lng === l);
        counts.push({ lang: l, count: filteredLang.length });
    }
    return counts
        .map((element) => [element.lang, element.count])
        .sort((a, b) => {
            return b[1] - a[1];
        })
        .filter((element, index) => (index < Number(count) ? element : false));
};
console.log(mostSpokenLanguages(countries, 3));
