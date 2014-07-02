'use strict';

var moment = require('moment'); // http://momentjs.com/docs/

module.exports = function Greeter() {

    return {
        greet: function() {
            console.log("testing: " + moment().format('h:m a'));
            if (moment().format('H')<5){return "Hello!" }
            else{
                if (moment().format('H')<12){return "Good morning!"}
                else{
                    if (moment().format('H')<18){return "Good afternoon!!"}
                    else{
                        if (moment().format('H')<=23){return "Good evening!!"}
                    }
                }
            }
            return 'Oh boy, what should I say? It is ' + moment().format('h:m a') + '!';
        }
    };
}

 ;

