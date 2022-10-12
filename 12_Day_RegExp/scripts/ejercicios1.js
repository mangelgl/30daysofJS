console.log("Ejercicios nivel 1");
/**
 * Calculate the total annual income of the person from the following text.
 * ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
 */
let txt = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 550 euro online courses per month.",
    pattern = /\d+/g,
    numArray = txt.match(pattern),
    totalAnnualIncome = +numArray[0] * 12 + +numArray[1] - +numArray[2] * 12;

console.log(totalAnnualIncome);

/**
 * The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction,
 * 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
 */
let someParticlesTxt =
        "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction",
    patternDigits = /[\-]?\d+/g,
    particlesArray = someParticlesTxt.match(patternDigits),
    particlesArraySorted = particlesArray.sort((a, b) => {
        return a - b;
    }),
    x = Math.min(...particlesArray),
    y = Math.max(...particlesArray),
    distance = y - x;
console.log(particlesArray);
console.log(distance);

/**
 * Write a pattern which identify if a string is a valid JavaScript variable
 */
const is_valid_variable = (variable) => {
    let patternValidVariable = /^[^\d\-\_]+[\w]+[^\-]*[\_]*[\w\d]+$/g;
    console.log(variable, patternValidVariable.test(variable));
};
is_valid_variable("first_name");
is_valid_variable("first-name");
is_valid_variable("1first_name");
is_valid_variable("firstname");
