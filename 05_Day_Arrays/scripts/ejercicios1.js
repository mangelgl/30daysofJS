const countries = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"];

const webTechs = ["HTML", "CSS", "JavaScript", "React", "Redux", "Node", "MongoDB"];
/*
1.Declare an empty array;
2.Declare an array with more than 5 number of elements
3.Find the length of your array
4.Get the first item, the middle item and the last item of the array
5.Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
6.Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
7.Print the array using console.log()
8.Print the number of companies in the array
9.Print the first company, middle and last company
10.Print out each company
11.Change each company name to uppercase one by one and print them out
12.Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
13.Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
14.Filter out companies which have more than one 'o' without the filter method
15.Sort the array using sort() method
16.Reverse the array using reverse() method
17.Slice out the first 3 companies from the array
18.Slice out the last 3 companies from the array
19.Slice out the middle IT company or companies from the array
20.Remove the first IT company from the array
21.Remove the middle IT company or companies from the array
22.Remove the last IT company from the array
23.Remove all IT companies
*/
console.log("Ejercicios nivel 1");
console.log(countries, webTechs);
let emptyArray = [],
  arrayDays = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
console.log(`1, 2, 3 -> arrayDays length: ${arrayDays.length}`);
console.log("4 ->", arrayDays[0], arrayDays[Math.floor(arrayDays.length / 2)], arrayDays[arrayDays.length - 1]);
let mixedDataTypes = ["Miguel Ángel", 22, 35.8, "Verano", "Gimnasio", 9];
console.log(`5 -> mixedDataTypes length: ${mixedDataTypes.length}`);
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(
  "6, 7, 8, 9 ->",
  itCompanies,
  itCompanies.length,
  itCompanies[0],
  itCompanies[Math.floor(itCompanies.length / 2)],
  itCompanies[itCompanies.length - 1]
);
// Exercise 10
console.log("Start ex.10");
itCompanies.forEach((element) => {
  console.log(`\t${element}`);
});
console.log("End ex.10");
// End exercise 10

// Exercise 11
/* for (let i = 0; i < itCompanies.length; i++) {
  itCompanies[i] = itCompanies[i].toUpperCase();
}
console.log("11 ->", itCompanies); */
// End exercise 11

let itCompaniesJoin = itCompanies.join(", ");
let itCompaniesString =
  itCompaniesJoin.substring(0, itCompaniesJoin.lastIndexOf(",")) +
  " and" +
  itCompaniesJoin.substring(itCompaniesJoin.lastIndexOf(",") + 1, itCompaniesJoin.length);
console.log("12 ->", `${itCompaniesString} are big IT Companies`);

// Exercise 13
/* let inputCompany = prompt("Enter a company"),
  inputCompanyName;
if (inputCompany.length == 3) {
  inputCompanyName = inputCompany.toUpperCase();
} else {, itCompanies.lengthnputCompanyName} exists` : `${inputCompanyName} does not exists`;
console.log("13 ->", companyExists); */

// Exercise 14
console.log("Start ex.14");
itCompanies.forEach((element) => {
  let company = element.split(""),
    element1 = "o",
    idx = company.indexOf(element1),
    indices = [];
  while (idx != -1) {
    indices.push(idx);
    idx = company.indexOf(element1, idx + 1);
  }
  let bool = indices.length > 1 ? console.log(`\t${element}`) : undefined;
});
console.log("End ex.14");
//console.log("15, 16 ->", itCompanies.sort(), itCompanies.reverse());
console.log("17 ->", itCompanies.slice(0, 3));
console.log("18 ->", itCompanies.slice(itCompanies.length - 3, itCompanies.length));
console.log("19 ->", itCompanies.slice(Math.floor(itCompanies.length / 2), Math.ceil(itCompanies.length / 2)));
//console.log("20 ->", itCompanies.shift());
//console.log("21 ->", itCompanies.splice(Math.floor(itCompanies.length / 2), 1));
//console.log("22 ->", itCompanies.pop());
//console.log("23 ->", itCompanies.splice());
