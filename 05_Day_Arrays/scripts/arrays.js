// Create an array using split
/*
let js = 'JavaScript'
const charsInJavaScript = js.split('')

console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let txt =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')

console.log(words)
// the text has special characters think how you can just get only the words
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]
*/
let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const companies = companiesString.split(",");
console.log(companies); // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]

/**
 * METHODS TO MANIPULATE AN ARRAY
    - Array constructor -> const eightEmptyValues = Array(8) // it creates eight empty values
    - Fill -> Array(8).fill('X') // it creates eight element values filled with 'X'
    - Concat -> firstList.concat(secondList)
    - Length -> array.length
    - Getting index of an element -> fruits.indexOf('banana') // -1 element not exists
    - Getting last index of an element -> fruits.lastIndexOf('banana') // -1 element not exists
    - Includes -> fruits.includes('banana') // return true or false
    - Checking array -> Array.isArray(firstList)
    - Convert array to String -> numbers.toString()
    - Joining array elements -> firstList.join()
        const webTechs = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB'
        ] // List of web technologies

        console.log(webTechs.join())       // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
        console.log(webTechs.join(' # '))  // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"
    
    - Slice
        const numbers = [1,2,3,4,5]

        console.log(numbers.slice()) // -> it copies all  item
        console.log(numbers.slice(0)) // -> it copies all  item
        console.log(numbers.slice(0, numbers.length)) // it copies all  item
        console.log(numbers.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position
    
    - Splice
        const numbers = [1, 2, 3, 4, 5, 6]
            numbers.splice(3, 3, 7, 8, 9)
        console.log(numbers.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items

        const numbers = [1, 2, 3, 4, 5]
        numbers.splice()
        console.log(numbers)                // -> remove all items

    - Adding using push -> arr.push('new item') // ['item1', 'item2','item3','new item']
    - Removing using pop -> arr.pop() // ['item1', 'item2','item3']
    - Removing an element from the beginning -> arr.shift() // ['item2','item3','new item']
    - Add an element from the beginning -> arr.unshift('Item0) // ['Item0', 'item1', 'item2','item3','new item']
    - Reverse array order -> numbers.reverse() // [5, 4, 3, 2, 1]
    - Sorting elements -> webTechs.sort() // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]
 */
