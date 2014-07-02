
//AA9A_9AA = 'EC1A 1BB';
//A9A_9AA	 = 'W1A 1HQ';
//A9_9AA	 = 'M1 1AA';
//A99_9AA	 = 'B33 8TH';
//AA9_9AA	 = 'CR2 6XH';
//AA99_9AA = 'DN55 1PT';

'use strict';
module.exports = function Postcode(input) {
    var args = Array.prototype.slice.call(arguments,0),  //needed to test empty
        regALPHA = /^[a-zA-Z]+$/,
        regNUM = /^[0-9]+$/g,
        regAPLHANUM = /^[0-9a-zA-Z]+$/,
        code, inward, outward;

    var textWellFormed = function () {
        return args.length > 0 && input.indexOf(' ') != -1;
    };
    if (textWellFormed()) {
        code = input.split(' ', 2);
        outward = code[0];
        inward = code[1];
    }

    var inwardIsValid = function () {
        return  new RegExp(regNUM).test(inward.substr(0, 1)) &&
                new RegExp(regALPHA).test(inward.substr(1, 2)) &&
                inward.length === 3;
    };

    var outwardIsValid = function () {
        return  new RegExp(regALPHA).test(outward.substr(0, 1)) &&      // 1st is letter
                new RegExp(regAPLHANUM).test(outward.substr(1, 1)) &&   // 2nd is alphanum
                outward.match(regNUM)||[].length >0 &&                  // there has been at least one number
                outward.match(regNUM)||[].length <3 &&                  // ..but not more than two in a row.
                outward.match(regALPHA)||[].length <3;                  // ..same for letters - not more than two in a row
    };
    // Return from the object
    return {
        IsValid: function () {
            return  textWellFormed() && inwardIsValid() && outwardIsValid();

        }
    };





        //function isNum (aNum) { return new RegExp(regNUM).test(aNum) };
    //function isAZ  (txt) { return new RegExp(regAPLHA).test(txt) };

};