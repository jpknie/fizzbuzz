var fb = require('../app/fizzbuzz');
var expect    = require("chai").expect;

describe("fizzbuzz",function() {

	it("multiple of three should be true", function()
	{
	 expect(fb.multipleofthree(3)).to.equal(true);
	});

	it("not multiple of three should be false", function() {
	 expect(fb.multipleofthree(4)).to.equal(false);
	});

	it("multiple of five should be true", function()
	{
	 expect(fb.multipleoffive(10)).to.equal(true);
	});

	it("not multiple of five should be false", function() {
	 expect(fb.multipleoffive(9)).to.equal(false);
	});

	it("multiple of three and five should be true", function() {
	 expect(fb.multofthreeandfive(15)).to.equal(true);
	});

	it("not multiple of three and five should be false", function() {
	 expect(fb.multofthreeandfive(14)).to.equal(false);
	});


	it("should return FizzBuzz when number is multiple of three and five", function() {
	  expect(fb.runfizzbuzz(15)).to.equal("FizzBuzz");
        });

	it("should return Fizz when number is multiple of three", function() {
	  expect(fb.runfizzbuzz(3)).to.equal("Fizz");
        });
	
        it("should return Buzz when number is multiple of five", function() {
	  expect(fb.runfizzbuzz(5)).to.equal("Buzz");
        });
        
        it("should return just the number when number is not neither multiple of five or three", function() {
	  expect(fb.runfizzbuzz(2)).to.equal("2");
        });
});
