/*
1.'Love is the best thing in this world. Some found their love and some are still looking for their love.' 
Count the number of word love in this sentence.

2.Use match() to count the number of all because in the following sentence:
'You cannot end a sentence with because because because is a conjunction'

3.Clean the following text and find the most frequent word (hint, use replace and regular expressions).
4.Calculate the total annual income of the person by extracting the numbers from the following text. 
'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

*/
console.log("Ejercicios nivel 3");
let pattern = /love/g;
console.log("1 ->", "Love is the best thing in this world. Some found their love and some are still looking for their love.".match(pattern));

let pattern1 = /because/g;
console.log("2 ->", "You cannot end a sentence with because because because is a conjunction".match(pattern1));

const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!?%Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
let pattern3 = /[%$@#&;]*/g;
let sentenceReplace = sentence.replace(pattern3, "");
let pattern4 = /[^\s.,?!][\w]*/g;
let result = sentenceReplace.match(pattern4);
console.log("3 ->", result);

let pattern2 = /\d+/g;
let digits = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 1500 euro online courses per month.".match(pattern2);
let totalAnnualIncome = Number(digits[0]) * 12 + Number(digits[1]) - Number(digits[2]) * 12;
console.log("4 ->", totalAnnualIncome);
