console.log("Ejercicios nivel 3");
// Exercise 1
/*
- Sort the array and find the min and max age
- Find the median age(one middle item or two middle items divided by two)
- Find the average age(all items divided by number of items)
- Find the range of the ages(max minus min)
- Compare the value of (min - average) and (max - average), use abs() method
*/
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let agesSort = ages.sort(),
  minAge = agesSort[0],
  maxAge = agesSort[agesSort.length - 1];
console.log("1.1 ->", minAge, maxAge, agesSort);
console.log("1.2 ->", agesSort[agesSort.length / 2]);
let averageAge = 0;
for (let i = 0; i < agesSort.length; i++) {
  averageAge += agesSort[i];
}
averageAge /= agesSort.length;
console.log("1.3 ->", averageAge);
console.log("1.4 ->", maxAge - minAge);
console.log("1.5 ->", Math.abs(minAge - averageAge), Math.abs(maxAge - averageAge));

// Exercise 2
const countries = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"];
/*
1. Slice the first ten countries from the countries array
2. Find the middle country(ies) in the countries array
3. Divide the countries array into two equal arrays if it is even. 
If countries array is not even , one more country for the first half.
*/
console.log("2 ->", countries);
console.log("2.1 ->", countries.slice(0, 10));
console.log("2.2 ->", countries[Math.floor(countries.length / 2)]);
let arr1, arr2;
if (countries.length % 2 == 0) {
  arr1 = countries.slice(0, Math.floor(countries.length / 2));
  arr2 = countries.slice(Math.floor(countries.length / 2), countries.length);
} else {
  arr1 = countries.slice(0, Math.floor(countries.length / 2) + 1);
  arr2 = countries.slice(Math.floor(countries.length / 2) + 1, countries.length);
}
console.log("2.3 ->", arr1, arr2);
