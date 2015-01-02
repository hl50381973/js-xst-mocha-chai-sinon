expect = chai.expect;
assert = chai.assert;



describe("varible", function() {
	describe("varible in the function", function() {
		it("global var defined in the funcion", function() {
			test();
			expect(c).to.equal(5);


		});



		it("failed to call local var b defined in the function ", function() {
			test();
			//b is not defined. so there is no chai api for it.
			//if b is a kind of undefined variable. there is chai api for it.

		});


		it("integer", function() {

			expect(a1).to.equal(10);

		});

		it("float", function() {

			expect(a2).to.equal(10.5);

		});


		it("no a number", function() {

			expect(a3).to.deep.equal(NaN);

		});


		it("infinite", function() {

			expect(a4).to.deep.equal(Infinity);

		});

		it("octonary number system ", function() {

			expect(a5).to.equal(56);
		});


		it("plus operation", function() {

			expect(a6 + a7).to.closeTo(0.3, 0.01);
		});



		it("parse string into Int", function() {

			expect(a8).to.deep.equal(NaN);

		});

		it("parse the variable consist of Int and string", function() {

			expect(a9).to.equal(12);

		});


		it("b1 is undefined", function() {
			expect(b1).to.be.undefined;
		});

		it("b2 is null", function() {
			expect(b2).to.null();
		})

		it("str1,str2 is string", function() {
			expect(str1).to.be.a("string");
			expect(str2).to.be.a("string");

		});

		it("flag1 ,flag2 is boolean", function() {
			expect(flag1).to.be.false;
			expect(flag2).to.be.true;
		});


		it("arr is array,contains 1,2,3",function(){
			expect(arr).to.be.an("array");
			expect(arr).to.eql([1,2,3]);
			expect(arr).to.have.length(3);
			
		});

		it("date type",function(){
			expect(dates).to.be.a("date");
		});

		it("{} is empty",function(){
			expect(obj).to.be.tempty;
			expect(obj).to.be.an("object")
		});

	});



});