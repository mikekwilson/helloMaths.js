// Calculator.js

(function() {

  'use strict';

  var Calculator = function() {};
  module.exports = new Calculator();

  /**
   * Adds together all arguments passed in
   *
   * @param arguments can consist of arrays, strings or a list of number
   *
   * @return Number - the sum of all the arguments
   */
  Calculator.prototype.add = function() {
    var result = 0;

    for( var i = 0; i < arguments.length; i++ ) {

      if( Array.isArray( arguments[i] )) {
        // Copy the array and iterate through it
        var arr = arguments[i].slice();
        for( var n = 0; n < arr.length; n++ ) {
          result += arr[n];
        }

      } else if ( typeof arguments[i] === 'string' || arguments[i] instanceof String ) {
        // Convert strings to Float
        result += parseFloat(arguments[i], 10);

      } else {
        result += arguments[i];
      }

    } /* END for */

    // toPrecision call removes strange results from floating point arithmetic
    // parseFloat removes trailing zeros
    return parseFloat(result.toPrecision(8), 10 );
  }; /* END ADD */

  /**
   * Subtracts all subsequent arguments from the first arugument
   *
   * @param arguments can consist of arrays, strings or a list of number
   *
   * @return the first argument minus the following arguments
   */
  Calculator.prototype.subtract = function( start ) {
    return arguments[0];
  }; /* END SUBTRACT */

}());
