/*
Enlace: https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/04_Day_Conditionals/04_day_conditionals.md
*/
console.log("Ejercicios nivel 3");
let daysInAMonth = {
    abril: 0,
    junio: 0,
    septiembre: 0,
    noviembre: 0,
    enero: 1,
    marzo: 1,
    mayo: 1,
    julio: 1,
    agosto: 1,
    octubre: 1,
    diciembre: 1,
    febrero: 2,
  },
  inputDay = prompt("Enter a month:"),
  days = daysInAMonth[inputDay.toLowerCase()],
  result = "";
switch (days) {
  case 0:
    result = `${inputDay} tiene 30 días`;
    break;
  case 1:
    result = `${inputDay} tiene 31 días`;
    break;
  case 2:
    result = `${inputDay} tiene 28 días`;
    break;

  default:
    result = "Introduce un mes válido";
    break;
}
console.log("1 ->", result);
console.log("2 -> Es igual pero cambiando febrero por 29 días");
