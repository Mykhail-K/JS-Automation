/**
 * It returns the camel-case version of string.
 * E.g.: simple lowercase string => simpleLowercaseString
 *
 * @param {string} toConvert
 * @returns {string} camel-case string or empty string in other cases
 */
function toCamelCase(toConvert) {
  // PLACE YOUR CODE BETWEEN THIS...
  let wordsString = '';
  let wordsArray = []
  let camelCase = ''
  if(Array.isArray(toConvert)) {
    toConvert.forEach((elem) => {
      wordsString = elem.argument.join(' ')
        wordsArray = wordsString.match(/[\w\d]+/gi)
        
   });
 };
 return wordsArray
  // ...AND THIS COMMENT LINE!
}

module.exports = toCamelCase;
