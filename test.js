var romannumbers = require('./RomanNumbers2');
const assert = require('assert');
var chai = require('chai');
const { ArabicToRoman } = require('./RomanNumbers2');
var expect = chai.expect; 


describe('RomanNumbers2', function() {

    it("should return string", function() {
        expect(romannumbers.ArabicToRoman(1)).to.be.a("string")
    
    });

    it("should only take int", function() {
        expect(() => romannumbers.ArabicToRoman('4')).to.throw("n is not an integer")
        expect(() => romannumbers.ArabicToRoman('Four')).to.throw("n is not an integer")
        expect(() => romannumbers.ArabicToRoman(null)).to.throw("n is not an integer")
        expect(() => romannumbers.ArabicToRoman(true)).to.throw("n is not an integer")
        expect(() => romannumbers.ArabicToRoman()).to.throw("n is not an integer")

    });

    it("should convert 1 to roman", function() {

         expect(romannumbers.ArabicToRoman(1)).to.equal("I")

     });

    it("should convert 11 to roman", function() {

        expect(romannumbers.ArabicToRoman(11)).to.equal("XI")

    });

 
});