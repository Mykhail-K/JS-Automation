//1.Calculate the total annual income of the person from the following text. 
//‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
    const txt = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
    const monneyArray = txt.match(/\d+/g);
    let totalIncome = (Number(monneyArray[0]) + Number(monneyArray[2]))*12 + Number(monneyArray[1]);
    console.log (totalIncome);

//2.Write a pattern which identify if a string is a valid JavaScript variable
/* isValidVariable('first_name'); // true
isValidVariable('first-name'); // false
isValidVariable('1first_name'); // false
isValidVariable('firstname'); // true */

    function isValidVariable (variable) {
        const pattern = /^[^\d]\w+[^(\s|\-)]\w+$/gi
        return console.log(pattern.test(variable))
};
    isValidVariable('first_name');
    isValidVariable('first-name');
    isValidVariable('1first_name'); 
    isValidVariable('firstname');

//3.Write a function called tenMostFrequentWords which get the ten most frequent word from a string:
    const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
    function tenMostFrequentWords (anysentence, n){
        const wordsArray = paragraph.match(/\w+/gi);
        let uniqueWordsArray = new Set(wordsArray);
        let counts = [];
        for (const w of uniqueWordsArray) {
            let filteredWords = wordsArray.filter((word) => word === w)
            counts.push({ name: w, count: filteredWords.length })
        };
        return counts.sort((a, b) => b.count - a.count).filter((element, index) => index < n)
    };
    console.log(tenMostFrequentWords(paragraph, 10));

//4.Write a function which cleans text. After cleaning, count three most frequent words in the string.
    const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
    function cleanText (anysentence){
        const wordsArray2 = sentence.replace(/[@#$%&;]/g, '').match(/\w+/gi);
        let uniqueWordsArray2 = new Set(wordsArray2);
        let counts2 = [];
        for (const w of uniqueWordsArray2) {
            let filteredWords2 = wordsArray2.filter((word) => word === w)
            counts2.push({ name: w, count: filteredWords2.length })
        };
        return counts2.sort((a, b) => b.count - a.count).filter((element, index) => index < 3);
    };
    console.log(cleanText(sentence));

