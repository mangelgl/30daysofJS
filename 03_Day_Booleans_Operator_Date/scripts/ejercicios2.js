/*
Enlace: https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/03_Day_Booleans_operators_date/03_booleans_operators_date.md
*/
console.log("Ejercicios nivel 2");
//(area = 0.5 x b x h)
let base = Number(prompt("Enter base: ")),
  height = Number(prompt("Enter height: ")),
  area = 0.5 * base * height;
console.log("1 ->", `The area of the triangle is ${area}`);
// perimeter of triangle (perimeter = a + b + c)
let sideA = Number(prompt("Enter side a")),
  sideB = Number(prompt("Enter side b")),
  sideC = Number(prompt("Enter side c")),
  perimeter = sideA + sideB + sideC;
console.log("2 ->", `The perimeter of the triangle is ${perimeter}`);
// area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let rectangleLength = Number(prompt("Enter length: ")),
  rectangleWidth = Number(prompt("Enter width: ")),
  rectangleArea = rectangleLength * rectangleWidth,
  rectanglePerimeter = 2 * (rectangleLength + rectangleWidth);
console.log("3 ->", `Area rectangle ${rectangleArea}, Perimeter rectangle ${rectanglePerimeter}`);
//area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r)
const PI = Math.PI;
let circleRadius = Number(prompt("Enter radius: ")),
  circleArea = PI * circleRadius ** 2,
  circleCircumference = 2 * PI * circleRadius;
console.log("4 ->", `Area circle ${circleArea}, Circumference circle ${circleCircumference}`);
console.log("5 -> Calculate the slope, x-intercept and y-intercept of y = 2x -2");
console.log("6 -> Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)");
console.log("7 -> Compare the two slopes above");
console.log("8 -> Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.");
let hoursPerWeek = Number(prompt("Enter hours: ")),
  ratePerHours = Number(prompt("Enter rate per hour: ")),
  weeklyEarnings = hoursPerWeek * ratePerHours;
console.log("9 ->", `You earn ${weeklyEarnings} dollars weekly`);
let nameLength = prompt("Enter your name: "),
  isGreater = nameLength.length > 7 ? "Your name is long" : "Your name is short";
console.log("10 ->", isGreater);
let firstName = "Asabeneh",
  lastName = "Yetayeh",
  isLonger =
    firstName.length > lastName.length
      ? `Your first name, ${firstName} is longer than your family name, ${lastName}`
      : `Your family name, ${lastName} is longer than your first name, ${firstName}`;
console.log("11 ->", isLonger);
let myAge = 22,
  yourAge = 18,
  diference = myAge > yourAge ? myAge - yourAge : yourAge - myAge,
  isOlder = myAge > yourAge ? "older" : "younger";
console.log("12 ->", `I am ${diference} years ${isOlder} than you`);
let userYear = Number(prompt("Enter birth year: ")),
  isEnoughOlder = userYear >= 18 ? "You are old enough to drive" : `You are ${userYear}. You will be allowed to drive in ${18 - userYear} years`;
console.log("13 ->", isEnoughOlder);
let yearsLived = Number(prompt("Enter the numbers of years you live: ")),
  secondsLived = 31536000 * yearsLived;
console.log("14 ->", `You lived ${secondsLived} seconds`);
/*
Create a human readable time format using the Date time object

YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm
*/
const now = new Date();
let year = now.getFullYear(),
  month = now.getMonth() + 1,
  day = now.getDate(),
  hours = now.getHours(),
  minutes = now.getMinutes(),
  timeFormat1 = `${year}-${month}-${day} ${hours}:${minutes}`,
  timeFormat2 = `${day}-${month}-${year} ${hours}:${minutes}`,
  timeFormat3 = `${day}/${month}/${year} ${hours}:${minutes}`;
console.log("15 ->", timeFormat1, timeFormat2, timeFormat3);
