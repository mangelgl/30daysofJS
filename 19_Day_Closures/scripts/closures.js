/**
 * Closures
 *
 * En JavaScript podemos definir funciones dentro de otras.
 * Si la función interna accede a variables de otra función, se le conoce como closure
 */

/**
 * Example
 */
function outerFunction() {
    let count = 0;
    function plusOne() {
        count++;
        return count;
    }
    function minusOne() {
        count--;
        return count;
    }

    return {
        plusOne: plusOne(),
        minusOne: minusOne(),
    };
}
const innerFuncs = outerFunction();

console.log(innerFuncs.plusOne); // 1
console.log(innerFuncs.minusOne); // 0
