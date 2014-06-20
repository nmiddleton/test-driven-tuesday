/*

 A higher-order function (also functional form, functional or functor)
 is a function that does at least one of the following:

 * take one or more functions as an input
 * output a function

 All other functions are first order functions. [1]


 Implement a higher-order function that takes a function and calls it 'n' times.

 Hint: ** Recursion **.

 It's ok to use a loop in your implementation, bonus points
 if you don't.

 Arguments:

 * operation: A Function, takes no arguments, returns no useful value.
 * num: the number of times to call `operation`

 Resources:
 [1] https://en.wikipedia.org/wiki/Higher-order_function

*/

'use strict';


module.exports = function repeat(operation, num) {


    if (num >0){
        operation();
        num = num - 1;
        repeat(operation, num);
    }
};
