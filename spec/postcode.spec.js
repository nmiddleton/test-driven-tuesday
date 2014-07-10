'use strict';

var expect   = require('chai').expect,

    Postcode = require('../src/postcode');

describe('Postcode', function() {

    /*
     FORMAT    EXAMPLE
     ------------------
     AN NAA    M1 1AA
     ANN NAA   M60 1NW
     AAN NAA   CR2 6XH
     AANN NAA  DN55 1PT
     ANA NAA   W1A 1HQ
     AANA NAA  EC1A 1BB
     */

    var postcodes = [
        {
            postcode: 'M1 1AA',
            area: 'M',
            district: '1',
            sector: '1',
            unit: 'AA'
        },
        {
            postcode: 'M60 1NW',
            area: 'M',
            district: '60',
            sector: '1',
            unit: 'NW'
        },
        {
            postcode: 'CR2 6XH',
            area: 'CR',
            district: '2',
            sector: '6',
            unit: 'XH'
        },
        {
            postcode: 'DN55 1PT',
            area: 'DN',
            district: '55',
            sector: '1',
            unit: 'PT'
        },
        {
            postcode: 'W1A 1HQ',
            area: 'W',
            district: '1A',
            sector: '1',
            unit: 'HQ'
        },
        {
            postcode: 'EC1A 1BB',
            area: 'EC',
            district: '1A',
            sector: '1',
            unit: 'BB'
        }

    ];
    var badFormed = [
        {postcode: '5234534535'},
        {postcode: ''},
        {postcode: 'EC1 dfdf fgfg'}
    ];
    var badAreaPC = '11CA 1BB';
    var badDistrictPC = 'EECA 1BB';
    var badSectorPC = 'E1CA ABB';
    var badUnitPC = 'E1CA 123';


    it('returns an object that is instance of Postcode', function () {
            postcodes.forEach(function (example) {
            var postcode = new Postcode(example.postcode);
            expect(postcode).to.be.instanceOf(Postcode);
        })

    });
    it('checks for text well formed', function () {
        postcodes.forEach(function (example) {
            var postcode = new Postcode(example.postcode);
            expect(postcode.textWellFormed()).to.be.true;
        })
    });
    it('checks for text badly formed', function () {
        badFormed.forEach(function(pcode){
            var postcode = new Postcode(pcode);
            expect(postcode.textWellFormed()).to.be.false;
        })

    });

    it('allows access to the outward part', function () {
        postcodes.forEach(function (example) {
            var postcode = new Postcode(example.postcode);
            var outward = example.area + example.district;
            expect(postcode.outward()).to.equal(outward, example.postcode);
        })

    });
    it('allows access to the inward part', function () {
        postcodes.forEach(function (example) {
            var postcode = new Postcode(example.postcode);
            var inward = example.sector + example.unit;
            expect(postcode.inward()).to.equal(inward, example.postcode);
        })

    });
    it('allows access to the area part', function () {
        postcodes.forEach(function (example) {
            var postcode = new Postcode(example.postcode);
            expect(postcode.area()).to.equal(example.area, example.postcode);
        })

    });
    it('allows access to the district part', function () {
        postcodes.forEach(function (example) {
            var postcode = new Postcode(example.postcode);
            expect(postcode.district()).to.equal(example.district, example.postcode);
        })
    });
    it('allows access to the sector part', function () {
        postcodes.forEach(function (example) {
            var postcode = new Postcode(example.postcode);
            expect(postcode.sector()).to.equal(example.sector, example.postcode);
            expect(postcode.sector()).to.be.above(-1);
            expect(postcode.sector()).to.be.below(11);
        })
    });
    it('allows access to the unit part', function () {
        postcodes.forEach(function (example) {
            var postcode = new Postcode(example.postcode);
            expect(postcode.unit()).to.equal(example.unit, example.postcode);
        })

    });
});
