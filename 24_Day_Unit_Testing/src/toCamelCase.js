/**
 * It returns the camel-case version of string.
 * E.g.: simple lowercase string => simpleLowercaseString
 *
 * @param {string} toConvert
 * @returns {string} camel-case string or empty string in other cases
 */
function toCamelCase(toConvert) {
  // PLACE YOUR CODE BETWEEN THIS...
  if (typeof (toConvert) === 'string'){
  let words = toConvert
  .toLowerCase()
  .trim()
  .split(' ')
  .map(w => w.replace(/[\t\n!?]/g, ''))
  .filter(a => a)
  .map(r => r[0].toUpperCase() + r.slice(1))
  .join('');
   return words[0].toLowerCase() + words.slice(1);
  }else{
     return ''
  }
  // ...AND THIS COMMENT LINE!
};

module.exports = toCamelCase;

//DONE!!!
