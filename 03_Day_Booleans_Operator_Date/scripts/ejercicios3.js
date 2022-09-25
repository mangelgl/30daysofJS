/**
 *Create a human readable time format using the Date time object. 
 The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
 YYYY-MM-DD HH:mm eg. 2020-01-02 07:05
 */

console.log("Ejercicios nivel 3");
const now = new Date();
let year = now.getFullYear(),
  month = ("0" + (now.getMonth() + 1)).slice(-2),
  day = now.getDate(),
  hours = now.getHours(),
  minutes = now.getMinutes(),
  timeFormat1 = `${year}-${month}-${day} ${hours}:${minutes}`;
console.log("1 ->", timeFormat1);
