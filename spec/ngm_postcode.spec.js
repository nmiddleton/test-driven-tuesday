'use strict';

var expect   = require('chai').expect,

    Postcode = require('../src/ngm_postcode');

describe.only ('Postcode', function() {

    it('is instantiated with a string representing a post code', function() {
        // prepare

        // expect

        // act
        var postcode = new Postcode('E14 5EP');

        // assert
        expect(postcode).to.be.an('object');
    });
    it('fails an empty string', function() {
        // prepare

        // expect

        // act
        var postcode = new Postcode();
        // assert
        expect(postcode).to.be.an('object');
    });
    describe('a valid post code', function() {
        it('Fails a bad content outward Postcode ', function() {
            var postcode = new Postcode('EEE 55P');
            expect(postcode.IsValid()).to.be.false;
        });
        it('Fails a bad length outward Postcode ', function() {
            var postcode = new Postcode('E 55P');
            expect(postcode.IsValid()).to.be.false;
        });
        it('Fails a bad content inward Postcode ', function() {
            var postcode = new Postcode('E14 55P');
            expect(postcode.IsValid()).to.be.false;
        });
        it('Fails a bad length inward Postcode', function() {
            var postcode = new Postcode('E14 5EPP');
            expect(postcode.IsValid()).to.be.false;
        });
        it('Matches a good Postcode', function() {
            var postcode = new Postcode('E14 5BP');
            expect(postcode.IsValid()).to.be.true;
        });
        it('Matches a good Postcode', function() {
            var postcode = new Postcode('EC1A 1BB');
            expect(postcode.IsValid()).to.be.true;
        });
        it('Matches a good Postcode', function() {
            var postcode = new Postcode('W1A 1HQ');
            expect(postcode.IsValid()).to.be.true;
        });
        it('Matches a good Postcode', function() {
            var postcode = new Postcode('M1 1AA');
            expect(postcode.IsValid()).to.be.true;
        });
        it('Matches a good Postcode', function() {
            var postcode = new Postcode('B33 8TH');
            expect(postcode.IsValid()).to.be.true;
        });
        it('Matches a good Postcode', function() {
            var postcode = new Postcode('CR2 6XH');
            expect(postcode.IsValid()).to.be.true;
        });
        it('Matches a good Postcode', function() {
            var postcode = new Postcode('DN55 1PT');
            expect(postcode.IsValid()).to.be.true;
        });
    });

});
