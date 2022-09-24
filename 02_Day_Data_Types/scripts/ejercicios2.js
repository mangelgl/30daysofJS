/*
Enlace: https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/Spanish/dia_02_tipos_de_datos.md
*/

console.log("Ejercicios nivel 2");
console.log(
  "1 ->",
  "\
The quote 'There is no exercise better for the heart than reaching down and lifting people up.' \
by John Holmes teaches us to help one another."
);
console.log(
  "2 ->",
  "\"Love is not patronizing and charity isn't about pity, it is about love. \
  Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
);
console.log("3 ->", "10" == 10);
console.log("4 ->", parseFloat("9.8") == 10, Math.round(parseFloat("9.8")) == 10);

console.log("5 ->", "python".includes("on"), "jargon".includes("on"));
console.log("6 ->", "I hope this course is not full of jargon".includes("jargon"));
let random = Math.random();
let randomNum = random * 101;
let randomNumBtnZeroAnd255 = random * 256;
console.log("7 ->", Math.floor(randomNum));
console.log("8 ->", Math.floor(randomNum) + 50);
console.log("9 ->", Math.floor(randomNumBtnZeroAnd255));
let word = "JavaScript";
let randomNum1 = Math.random() * (word.length + 1);
console.log("10 ->", word[Math.floor(randomNum1)]);
console.log("11 ->", "1 1 1 1 1\n \
    2 1 2 4 8\n \
    3 1 3 9 27\n \
    4 1 4 16 64\n \
    5 1 5 25 125");
let phrase = "You cannot end a sentence with because because because is a conjunction";
console.log("12 ->", phrase.substring(phrase.indexOf("because"), phrase.lastIndexOf("because") + "because".length));
