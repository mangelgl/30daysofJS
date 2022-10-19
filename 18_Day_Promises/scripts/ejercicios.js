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
        const catsData = await response.json();
        let metricWeightArr = catsData.map((element) => {
            return element.weight.metric;
        });
        let setMetricWeight = new Set(metricWeightArr);
        let metricsCount = [];
        for (const element of setMetricWeight) {
            const filteredWeight = metricWeightArr.filter((el) => el === element);
            metricsCount.push({ weigth: element, count: filteredWeight.length });
        }
        console.log(metricsCount);
    } catch (error) {
        console.error(error);
    }
};
fetchCats();
/**
 * Read the countries api and find out the 10 largest countries
 */
const tenLargesCountries = async () => {
    try {
        const response = await fetch(countriesAPI);
        const countriesData = await response.json();
        let populationArr = countriesData.map((element) => {
            return { name: element.name, population: element.population };
        });
        let populationArrSorted = populationArr.sort((a, b) => {
            if (a.population > b.population) return -1;
            if (a.population < b.population) return 1;
            return 0;
        });
        let tenLargesCountriesArr = populationArrSorted.filter((el, index) => index < 10);
        console.log(countriesData);
    } catch (error) {
        console.error(error);
    }
};
tenLargesCountries();
/**
 * Read the countries api and count total number of languages in the world used as officials
 */
const totalLanguages = async () => {
    const response = await fetch(countriesAPI);
    const countriesData = await response.json();
    let languagesArr = countriesData.map((element) => {
        return { name: element.name, languages: element.languages };
    });
    let languagesArrSorted = languagesArr
        .sort((a, b) => {
            if (a.languages.length > b.languages.length) return -1;
            if (a.languages.length < b.languages.length) return 1;
            return 0;
        })
        .filter((element, index) => index < 10);
    console.log(languagesArrSorted);
};
totalLanguages();
