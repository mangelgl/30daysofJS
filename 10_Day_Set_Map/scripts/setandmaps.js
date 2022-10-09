/**
 * Sets
 */
const companies = new Set();
/**
 * Methods
 */
companies.add("Google");
companies.add("Microsoft");
companies.delete("Google");
companies.has("Microsoft"); // true
companies.clear(); // Removes all element from a set

/**
 * Example below
 */
const languages = ["English", "Finnish", "English", "French", "Spanish", "English", "French"];
const langSet = new Set(languages);
console.log(langSet); // Set(4) {"English", "Finnish", "French", "Spanish"}
console.log(langSet.size); // 4

const counts = [];
const count = {};

for (const l of langSet) {
    const filteredLang = languages.filter((lng) => lng === l);
    // console.log(filteredLang); // ["English", "English", "English"]
    counts.push({ lang: l, count: filteredLang.length });
}
console.log(counts);

/**
 * Intersection of a set (A ∩ B)
 */
let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];

let A = new Set(a);
let B = new Set(b);

let c = a.filter((num) => B.has(num));
let C = new Set(c);

console.log(C);

/**
 * Diferencias entre sets
 */
let c1 = a.filter((num) => !B.has(num));

/**
 * Maps
 */
const map = new Map();
countries1 = [
    ["Finland", "Helsinki"],
    ["Sweden", "Stockholm"],
    ["Norway", "Oslo"],
];
const countriesMap = new Map(countries1);
console.log(countriesMap);
console.log(countriesMap.size); // 3

/**
 * Getting values from a map
 */
console.log(countriesMap.get("Finland")); // Helsinki

for (const [country, city] of countriesMap) {
    console.log(country, city);
}

/**
 * Checking values
 */
console.log(countriesMap.has("Finland")); // true
