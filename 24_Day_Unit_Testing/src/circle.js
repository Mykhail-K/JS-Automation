/**
 * Create the Circle class.
 *
 * @typedef {object} Circle
 * @property {number} radius the radius of the circle
 * @function getArea return the area of the circle
 * @function getPerimeter return the perimeter of the circle
 */
 module.exports = class Circle {
    constructor(r){
      if (r < 0) {
        throw new Error ('[Error] Radius must be greater than 0');
      }
      this.r = r;
    };

    getPerimeter(){
      let perimeter =  2 * this.r * Math.PI
      return perimeter
    };

    getArea(){
      let area = (Math.pow(this.r, 2)) * Math.PI
      return area
    };
};

//1)HOW TO ADD ERROR TO CLASS?
//2)Circle is not a constructor?