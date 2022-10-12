/**
 * Parámetros de expresiones regulares
 * Una expresión regular toma dos parámetros. Un parámetro obligatorio patrón de búsqueda y una bandera opcional.
 * Patrón de búsqueda
 * Banderas o flags: Son parámetros opcionales que determinan el tipo de búsqueda
 */

/**
 * Flags
 * g -> bandera global que significa buscar en todo el texto
 * i -> caso insensitivo (busca minúsculas y mayúsculas)
 * m -> multilínea
 */

/**
 * Creando un patrón con el constructor de expresiones regulares
 */
// without global and case insensitive flag
let pattern = "love";
let regEx = new RegExp(pattern);
// with global and case insensitive flag
let pattern1 = "love";
let flag1 = "gi";
let regEx1 = new RegExp(pattern1, flag1);
// con el constructor de expresiones regulares
let regEx2 = new RegExp("love", "gi");

/**
 * Creando un patrón sin el constructor de regexp
 */
let regEx3 = /love/gi;

/**
 * Métodos del objeto RegExp
 */

/**
 * Testing for a match
 * test():Tests for a match in a string. It returns true or false.
 */
const str = "I love JavaScript";
const pattern2 = /love/;
const result = pattern2.test(str);
console.log(result); // true

/**
 * Array que contiene todo el match
 * match(): Returns an array containing all of the matches, including capturing groups, or null
 * if no match is found. If we do not use a global flag, match() returns an array containing the pattern, index, input and group.
 */
const result1 = str.match(pattern);
console.log(result1); // ["love", index: 2, input: "I love JavaScript", groups: undefined]
// const pattern = /love/g
// ["love"]

/**
 * search():Tests for a match in a string. It returns the index of the match, or -1 if the search fails.
 */
const str1 = "I love JavaScript";
const pattern3 = /love/g;
const result2 = str.search(pattern3);
console.log(result2); // 2

/**
 * Reemplazando una subcadena
 * replace(): Executes a search for a match in a string, and replaces the matched substring with a replacement substring.
 */
const txt = "Python is the most beautiful language that a human begin has ever created.\
 I recommend python for a first programming language";

matchReplaced = txt.replace(/Python|python/, "JavaScript");
console.log(matchReplaced); // JavaScript is the most beautiful language that a human begin has ever created. I recommend python for a first programming language

/**
 * /Python|python/g
 * JavaScript is the most beautiful language that a human begin has ever created.I recommend JavaScript for a first programming language
 */

/**
 * /Python/gi
 * JavaScript is the most beautiful language that a human begin has ever created.I recommend JavaScript for a first programming language
 */

const txt1 =
    "%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
 T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
 p%e%o%ple.\
 I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
 D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.";

matches = txt1.replace(/%/g, "");
console.log(matches);
// I am teacher and  I love teaching.There is nothing as more rewarding as educating and empowering people.
// I found teaching more interesting than any other jobs.Does this motivate you to be a teacher.

/**
 * Cheatsheet
 */
/*
- []: A set of characters
    [a-c] means, a or b or c
    [a-z] means, any letter a to z
    [A-Z] means, any character A to Z
    [0-3] means, 0 or 1 or 2 or 3
    [0-9] means any number 0 to 9
    [A-Za-z0-9] any character which is a to z, A to Z, 0 to 9
- \: uses to escape special characters
    \d mean: match where the string contains digits (numbers from 0-9)
    \D mean: match where the string does not contain digits
- . : any character except new line character(\n)
- ^: starts with
    r'^substring' eg r'^love', a sentence which starts with a word love
    r'[^abc] mean not a, not b, not c.
- $: ends with
    r'substring$' eg r'love$', sentence ends with a word love
- *: zero or more times
    r'[a]*' means a optional or it can occur many times.
- +: one or more times
    r'[a]+' means at least once or more times
- ?: zero or one times
    r'[a]?' means zero times or once
- \b: word bounder, matches with the beginning or ending of a word
- {3}: Exactly 3 characters
- {3,}: At least 3 characters
- {3,8}: 3 to 8 characters
- |: Either or
    r'apple|banana' mean either of an apple or a banana
- (): Capture and group
*/

/**
 * Square bracket
 * Lo usamos para incluir minúsculas y mayúsculas
 */
const pattern5 = "[Aa]pple"; // this square bracket means either A or a
const txt5 =
    "Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. ";
const matches = txt5.match(pattern5);

console.log(matches); // ["Apple", index: 0, input: "Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away.", groups: undefined]

/**
 * [Aa]pple/g
 * ["Apple", "apple"]
 */
/**
 * /[Aa]pple|[Bb]anana/g
 * ["Apple", "banana", "apple", "banana", "Banana"]
 */

/**
 * Escape (\) character
 * const pattern = /\d/g  // d is a special character which means digits
 * const txt = 'This regular expression example was made in January 12,  2020.'
 * const matches = txt. match(pattern)
 * console.log(matches)  // ["1", "2", "2", "0", "2", "0"], this is not what we want
 *
 * const pattern = /\d+/g  // d is a special character which means digits
 * console.log(matches)  // ["12", "2020"], this is what we want
 */

/**
 * Exact match
 * Debe tener ^ al principio y $ al final.
 */
let patternM = /^[A-Z][a-z]{3,12}$/;
let name8 = "Asabeneh";
let resultM = patternM.test(name8);

console.log(resultM); // true
