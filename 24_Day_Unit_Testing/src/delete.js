/**
 * It deletes the given property of the given object
 * and returns the new object.
 * The function must not modify the original object!
 *
 * @param {object} obj the object
 * @param {string} key the name of the property to delete
 * @returns {object} the new object without the given property
 */
module.exports = function del(obj, key) {
  // PLACE YOUR CODE BETWEEN THIS...
  let filtered = {}
  if (typeof obj === 'object') {
    for (const prop in obj) {
      if (prop !== key) {
          filtered.prop = obj.prop
      };
    };
  }else {
      throw new Error('[Error] Please, provide an object as a parameter')
  };  
return filtered
  // ...AND THIS COMMENT LINE!
};

//DONE