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

    it("should convert 12 to roman", function() {

        expect(romannumbers.ArabicToRoman(12)).to.equal("XII")

    });

    it("should convert 69 to roman", function() {

        expect(romannumbers.ArabicToRoman(69)).to.equal("LXIX")

    });

    it("should convert 80 to roman", function() {

        expect(romannumbers.ArabicToRoman(80)).to.equal("LXXX")

    });

    it("should convert 99 to roman", function() {

        expect(romannumbers.ArabicToRoman(99)).to.equal("XCIX")

    });

    it("should convert 100 to roman", function() {

        expect(romannumbers.ArabicToRoman(100)).to.equal("C")

    });

    it("should convert 649 to roman", function() {

        expect(romannumbers.ArabicToRoman(649)).to.equal("DCXLIX")

    });

    it("should convert 1079 to roman", function() {

        expect(romannumbers.ArabicToRoman(1079)).to.equal("MLXXIX")

    });

    it("should convert 3999 to roman", function() {

        expect(romannumbers.ArabicToRoman(3999)).to.equal("MMMCMXCIX")

    });

    it("should throw error when over 4000", function() {

        expect(() => romannumbers.ArabicToRoman(4000)).to.throw("Orginal RomanNumbers was never above 4000")

    });

    it("should throw error when 5000", function() {

        expect(() => romannumbers.ArabicToRoman(5000)).to.throw("Orginal RomanNumbers was never above 4000")

    });

 
});