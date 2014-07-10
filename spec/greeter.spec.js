'use strict';

var chai       = require('chai'),
    expect     = chai.expect,
    sinon_chai = require('sinon-chai'),

    moment  = require('moment'),    // http://momentjs.com/docs/
    rewire  = require('rewire');    // https://www.npmjs.org/package/rewire

chai.use(sinon_chai);

var ThreeAM = moment({hour:3,minute:0});
var EightAM = moment({hour:8,minute:0});
var ThreePM = moment({hour:15,minute:0});
var EightPM = moment({hour:20,minute:0});

describe.skip('Greeter', function() {

    var Greeter = rewire('../src/greeter');


    it('says "Good morning!" before 5 AM and noon', function() {

        Greeter.__set__('moment', function(){ return EightAM});
        var greeter = new Greeter();

        expect(greeter.greet()).to.equal('Good morning!');
    });

    it('says "Good afternoon!" between noon and 6 PM', function() {
        Greeter.__set__('moment', function(){ return ThreePM});
        var greeter = new Greeter();

        expect(greeter.greet()).to.equal('Good afternoon!!');
    });

    it('says "Good evening!" between 6 PM and midnight', function() {
        Greeter.__set__('moment', function(){ return EightPM});
        var greeter = new Greeter();

        expect(greeter.greet()).to.equal('Good evening!!');
    });

    it('says "Hello!" between midnight and 5 AM', function() {
        Greeter.__set__('moment', function(){ return ThreeAM});
        var greeter = new Greeter();

        expect(greeter.greet()).to.equal('Hello!');
    });
});