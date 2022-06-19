/**
 * It returns the property names of the given object.
 *
 * @param {object} obj the object
 * @returns {string[]} the list of the properties of the object or empty array if it is not an object
 */
 module.exports = function prop(obj){
 let keysArray = [];
    if (typeof obj === 'object'){
        for (const key in obj) {
            keysArray.push(key);
        }
    }else{
        keysArray;
    }
    return keysArray;
  };

  //DONE!!!
