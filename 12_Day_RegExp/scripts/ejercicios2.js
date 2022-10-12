console.log("Ejercicios nivel 2");
/**
 * Write a function called tenMostFrequentWords which get the ten most frequent word from a string?
 */
const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
const tenMostFrequentWords = (txt, count) => {
    let wordsArray = txt.match(/\w+/g),
        wordsArraySet = new Set(wordsArray),
        result = [];
    for (const w of wordsArraySet) {
        let wordsFiltered = wordsArray.filter((word) => word === w);
        result.push({ word: w, count: wordsFiltered.length });
    }
    result.sort((a, b) => {
        if (a.count < b.count) return 1;
        if (a.count > b.count) return -1;
        return 0;
    });
    console.log(result.filter((element, index) => (index < Number(count) ? element : false)));
};
tenMostFrequentWords(paragraph, 10);
