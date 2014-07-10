'use strict';

function Postcode(value) {

    var args = Array.prototype.slice.call(arguments,0),  //needed to test empty
        regALPHA = /^[a-zA-Z]+$/,
        regNUM = /^[0-9]+$/g,
        regAPLHANUM = /^[0-9a-zA-Z]+$/,
        regArea = /^([a-zA-Z]+)/,
        regDistrict = /\d+\w+$/,
        areaStr,districtStr,sectorStr,unitStr,
        code, inwardStr, outwardStr;

    this.textWellFormed = function () {
        return args.length > 0 && value.indexOf(' ') != -1;
    }

    // test for arguments
    if (this.textWellFormed()) {
        code = value.split(' ', 2);
        outwardStr = code[0];
        inwardStr = code[1];
    }
    this.outward = function(){
        return outwardStr;
    };
    this.inward = function(){
        return inwardStr;
    };
    this.area = function(){
        areaStr = outwardStr.match(regArea)[0]; //match returns an array

        return areaStr;
    }
    this.district = function(){
        districtStr = outwardStr.replace(regArea,'');
        return districtStr;
    }
    this.sector = function(){
        sectorStr = inwardStr.substr(0,1);
        return sectorStr;
    }
    this.unit = function(){
        unitStr = inwardStr.substr(1,2);
        return unitStr;
    }

    this.outwardIsValid = function () {
        return  textWellFormed() &&
            new RegExp(regALPHA).test(outwardStr.substr(0, 1)) &&      // 1st is letter
            new RegExp(regAPLHANUM).test(outwardStr.substr(1, 1)) &&   // 2nd is alphanum
            outwardStr.match(regNUM)||[].length >0 &&                  // there has been at least one number
            outwardStr.match(regNUM)||[].length <3 &&                  // ..but not more than two in a row.
            outwardStr.match(regALPHA)||[].length <3;                  // ..same for letters - not more than two in a row
    };

    this.inwardIsValid = function () {
        return  textWellFormed() &&
            new RegExp(regNUM).test(inward.substr(0, 1)) &&
            new RegExp(regALPHA).test(inward.substr(1, 2)) &&
            inward.length === 3;
    };

}



module.exports = Postcode;

