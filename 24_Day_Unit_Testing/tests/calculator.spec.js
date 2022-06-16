const { expect } = require('chai');
const calculator = require('../src/calculator');

describe('Calculator', () => {
  describe('.v', () => {
    it('should return positive number', () => {
      // TODO: write test case to test calculator(3).v
      expect(calculator(3).v).to.equal(3)
    });

    it('should return negative number', () => {
      // TODO: write test case to test calculator(-3).v
      expect(calculator(-3).v).to.equal(-3)
    });
  });

  describe('.add', () => {
    it('should return 8 when adding 3 and 5', () => {
      // TODO: write test case to test calculator(3).add(5).v
      expect(calculator(3).add(5).v).to.equal(8)
    });

    it('should return -2 when adding 3 and -5', () => {
      // TODO: write test case to test calculator(3).add(-5).v
      expect(calculator(3).add(-5).v).to.equal(-2)
    });

    it('should return -8 when adding -3 and -5', () => {
      // TODO: write test case to test calculator(-3).add(-5).v
      expect(calculator(-3).add(-5).v).to.equal(-8)
    });
  });

  describe('.minus', () => {
    it('should return 1 when subtracting 3 and 2', () => {
      // TODO: write test case to test calculator(3).minus(2).v
      expect(calculator(3).minus(2).v).to.equal(1)
    });

    it('should return 5 when subtracting 3 and -2', () => {
      // TODO: write test case to test calculator(3).minus(-2).v
      expect(calculator(3).minus(-2).v).to.equal(5)
    });

    it('should return -1 when subtracting -3 and -2', () => {
      // TODO: write test case to test calculator(-3).minus(-2).v
      expect(calculator(-3).minus(-2).v).to.equal(-1)
    });
  });

  describe('.times', () => {
    it('should return 30 when multiplying 3 and 10', () => {
      // TODO: write test case to test calculator(3).times(10).v
      expect(calculator(3).times(10).v).to.equal(30)
    });

    it('should return -30 when multiplying 3 and -10', () => {
      // TODO: write test case to test calculator(3).times(-10).v
      expect(calculator(3).times(-10).v).to.equal(-30)
    });

    it('should return 30 when multiplying -3 and -10', () => {
      // TODO: write test case to test calculator(-3).times(-10).v
      expect(calculator(-3).times(-10).v).to.equal(30)
    });
  });

  describe('.sqrt', () => {
    it('should preform sqrt', () => {
      // TODO: write test case to test calculator(4).sqrt().v
      expect(calculator(4).sqrt().v).to.equal(2)
    });

    it('should throw error for negative squared root', () => {
      // TODO: write test case to test calculator(-3).sqrt()
      expect(calculator(-3).sqrt().v).to.throw('Square root of negative value cannot be determined!')
    });
  });

  describe('.divide', () => {
    it('should return 5 when dividing 10 and 2', () => {
      // TODO: write test case to test calculator(10).divide(2).v
      expect(calculator(10).divide(2).v).to.equal(5)
    });

    it('should return -5 when dividing 10 and -2', () => {
      // TODO: write test case to test calculator(10).divide(-2).v
      expect(calculator(10).divide(-2).v).to.equal(-5)
    });

    it('should return 5 when dividing -10 and -2', () => {
      // TODO: write test case to test calculator(-10).divide(-2).v
      expect(calculator(-10).divide(-2).v).to.equal(5)
    });

    it('should throw error when dividing by zero', () => {
      // TODO: write test case to test calculator(5).divide(0)
      expect(calculator(5).divide(0).v).to.throw('Division by 0 is not possible!')
    });
  });

  describe('.modulo', () => {
    it('should return the remainder', () => {
      // TODO: write test case to test calculator(10).modulo(5).v
      expect(calculator(10).modulo(5).v).to.equal(0)

    });
  });

  describe('.toString', () => {
    // TODO: write test case to test calculator(10).toString() to be a string and not to be undefined
    expect(calculator(10).toString()).to.be.a('string').but.not.an('undefined')
  });

  it('should perform chained operations', () => {
    // TODO: write test case to test calculator(3).add(4).minus(3).times(6).v
    expect(calculator(3).add(4).minus(3).times(6).v).to.equal(24)
  });
});
