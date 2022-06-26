/**
 * The function returns the nth value of
 * the Fibonacci sequence
 *
 * @param {number} n (n >= 0)
 * @returns {number} Fibonacci number or 0 if any arguments are not proper
 */

function fibonacci(n) {
  //let nThFibonacci;
  /*
   * Your task is to calculate the nth value of the
   * Fibonacci sequence.
   * https://en.wikipedia.org/wiki/Fibonacci_number
   * Store the value in the nThFibonacci variable.
   * Also take into consideration the documentation of the function!
   */
  // PLACE YOUR CODE BETWEEN THIS...
  if (n >= 0){
    let a = 1;
    let b = 1;
      for (let i = 3; i <= n; i++) {
        let c = a + b;
         a = b;
         b = c;
      }; 
      return b
  }else {
      return 0
  };
  
  // ...AND THIS COMMENT LINE! 
}

module.exports = fibonacci;

//DONE!!!
