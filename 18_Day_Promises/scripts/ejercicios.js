const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

console.log("Ejercicios nivel 1");
/**
 * Read the countries API using fetch and print the name of country, capital, languages, population and area.
 */

const getRandomCountry = () => {
    fetch(countriesAPI)
        .then((response) => response.json())
        .then((data) => {
            const randomNumber = Math.floor(Math.random() * data.length + 1);
            const country = data[randomNumber];
            const res = {
                name: country.name,
                capital: country.capital,
                languages: country.languages,
                population: country.population,
                area: country.area,
            };
            console.log("random country ->", res);
        });
};
//getRandomCountry();
console.log("Ejercicios nivel 2");
/**
 * Print out all the cat names into catNames variable.
 */
const getCatNames = () => {
    fetch(catsAPI)
        .then((response) => response.json())
        .then((data) => {
            const catNames = [];
            data.every((cat) => catNames.push(cat.name));
            console.log("cat names ->", catNames);
        });
};
//getCatNames();
console.log("Ejercicios nivel 3");
/**
 * Read the cats api and find the average weigth of cat in metric unit
 */

const fetchCats = async () => {
    try {
        const response = await fetch(catsAPI);
        const data = await response.json();
        let averageWeight = data.map((element) => {
            return element.weight.metric;
        });
        let setW = new Set(averageWeight);
        let counts = [];
        for (const weigth of setW) {
            const orderedList = averageWeight.filter((el) => el === weigth);
            counts.push({ weigth: weigth, count: orderedList.length });
        }
        console.log(counts);
    } catch (error) {
        console.error(error);
    }
};
fetchCats();
//console.log(averageWeight);
/**
 * Read the countries api and find out the 10 largest countries
 */

/**
 * Read the countries api and count total number of languages in the world used as officials
 */
