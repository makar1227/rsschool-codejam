const sumOfOther = require('../sumOfOther');
const recursion = require('../recursion');
const make = require('../make');
var assert = require('assert');

describe('Sum', function () {
  describe('#sumOfOther()', function () {
    it('should be equal', function () {
      assert.equal(JSON.stringify([8, 7, 6, 9]), JSON.stringify(sumOfOther([2, 3, 4, 1])));
    });
    it('should be equal', function () {
      assert.equal(JSON.stringify([11, 10, 9, 12]), JSON.stringify(sumOfOther([3, 4, 5, 2])));
    });
    it('should be equal', function () {
      assert.equal(JSON.stringify([1, 1, 1, 3]), JSON.stringify(sumOfOther([1, 1, 1, -1])));
    });
  });
});


describe('Make', function () {
  describe('#make()', function () {
    it('should be equal', function () {
      function sum(a, b) {
        return a + b;
      }

      assert.equal(777, make(15)(34, 21, 666)(41)(sum));
    });
    it('should be equal', function () {
      function sum(a, b) {
        return a + b;
      }

      assert.equal(17, make(15)(2)(sum));
    });
    it('should be equal', function () {
      function min(a, b) {
        return a - b;
      }

      assert.equal(-40, make(15)(34, 21)(min));
    });
    it('should be equal', function () {
      function mult(a, b) {
        return a * b;
      }

      assert.equal(16, make(2)(2, 2)(2)(mult));
    });
  });
});


describe('Recursion', function () {
  describe('#recursion()', function () {
    it('should be equal', function () {
      assert.equal(JSON.stringify([[100], [90, 120], [70, 99, 110, 130]]), JSON.stringify(recursion({
        'value': 100,
        'left': {
          'value': 90,
          'left': { 'value': 70 },
          'right': { 'value': 99 }
        },
        'right': {
          'value': 120,
          'left': { 'value': 110 },
          'right': { 'value': 130 }
        }
      })));
    });
    it('should be equal', function () {
      assert.equal(JSON.stringify([[100], [90, 120], [70, 99, 110, 130], [60, 1, 312, 35, 12, 345]]), JSON.stringify(recursion({
          'value': 100,
          'left': {
            'value': 90,
            'left': {
              'value': 70,
              'left': {
                'value': 60
              },
              'right': { 'value': 1 }
            },
            'right': { 'value': 99 }
          },
          'right': {
            'value': 120,
            'left': {
              'value': 110,
              'left': {
                'value': 312
              },
              'right': { 'value': 35 }
            },
            'right': {
              'value': 130,
              'left': {
                'value': 12
              },
              'right': { 'value': 345 }
            }
          }
        }
      )))
      ;
    });
  });
});
