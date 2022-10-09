/**
 * 1.Use the countries information, in the data folder. Sort countries by name, by capital, by population
 * 2.Find the 10 most spoken languages: mostSpokenLanguages(arr,number_of_languages)
 * 3.Use countries_data.js file create a function which create the ten most populated countries
 * 4.Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode)
 * and measure of variability(range, variance, standard deviation). In addition to those measures find
 * the min, max, count, percentile, and frequency distribution of the sample. You can create an object
 * called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.
 */
console.log("Ejercicios nivel 3");
// Ejercicio 1

// Ejercicio 2
const mostSpokenLanguages = (arr, count) => {
    let result = [];
    countries
        .map((element) => [element.name, element.population])
        .sort((a, b) => {
            return b[1] - a[1];
        })
        .filter((element, index) => (index < Number(count) ? element : false))
        .forEach((element) => {
            result.push({ country: element[0], population: element[1] });
        });
    return result;
};
console.log(mostSpokenLanguages(countries, 3));
// Ejercicio 4
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
let statistics = {
    count() {
        return ages.length;
    },
    sum() {
        return ages.reduce((acc, cur) => acc + cur, 0);
    },
    min() {
        return Math.min(...ages);
    },
    max() {
        return Math.max(...ages);
    },
    range() {},
    mean() {},
    median() {},
    mode() {},
    var() {},
    std() {},
    freqDist() {},
    describe() {},
};
console.log(statistics.max());
