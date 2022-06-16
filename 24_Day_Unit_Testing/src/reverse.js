/**
 * It reverses the given object, i.e. return a copy of the object
 * where the keys have become the values and the values the keys
 *
 * @param {object} obj the object
 * @returns {object} the new object
 */
 module.exports = function reverse(obj) {
    let reverseObj = {}
    if (typeof obj === 'object') {
      for (const key in obj) {
        reverseObj[obj[key]] = key
      };
    }else {
        throw new Error('[Error] Please, provide an object as a parameter')
    };  
  return reverseObj
  };

  //DONE!!!