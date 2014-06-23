/*

 Array#reduce

 Task: Given an Array of strings, use Array#reduce to create an object that
 contains the number of times each string occurred in the array.

 Conditions:

 * Do not use any for/while loops.
 * You do not need to define any additional functions

 Resources:

 * https://en.wikipedia.org/wiki/Reduce_(higher-order_function)
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

 */

'use strict';
module.exports = function(inventory) {
    var myobj = {};
    inventory.reduce(function (prev, elem) {
        if (myobj.hasOwnProperty(elem)){
            myobj[elem] = myobj[elem] + 1;
        }else{
            myobj[elem] =  1;
        }
    },0);
    return myobj;
};
