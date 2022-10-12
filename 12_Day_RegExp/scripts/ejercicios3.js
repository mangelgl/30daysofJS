console.log("Ejercicios nivel 3");
/**
 * Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
 */
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
const cleanText = (txt) => {
    const matchReplaced = txt.replace(/[\%\$\@\&\#\;\!]*/g, "");
    return matchReplaced;
};
cleanText(sentence);

/**
 * Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.
 */
const mostFrequentWords = (txt) => {
    const allWords = txt.match(/\w+/g),
        allWordsSet = new Set(allWords);
    let result = [];
    for (const word of allWordsSet) {
        let filteredWords = allWords.filter((w) => w === word);
        result.push({ word: word, count: filteredWords.length });
    }
    result.sort((a, b) => {
        if (a.count < b.count) return 1;
        if (a.count > b.count) return -1;
        return 0;
    });
    console.log(result.filter((element, index) => (index < 3 ? element : false)));
};
mostFrequentWords(cleanText(sentence));
