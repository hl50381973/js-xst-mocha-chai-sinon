/**
 * Created by Administrator on 2015/1/2.
 */
expect = chai.expect;

describe("ecma5 array", function () {
    describe("#indexOf", function () {
        it("#indexOf", function () {
            expect(index).to.equal(3);
            expect(index2).to.equal(5);
            expect(index3).to.equal(7);
        })
    });


    describe("array every",function(){
        it("array every",function(){
            expect(result_every).to.be.true;
        });
    });


    describe("array filter",function(){
        it("array filter",function(){
            expect(result_filter).to.eql([4,5,4])
        });
    });

    describe("array map",function(){
        it("array map",function(){
            expect(result_map).to.eql([6,8,10,8,6])
        });
    });


    describe("array some",function(){
        it("array some",function(){
            expect(result_some).to.be.false;
        });
    });

    describe("array reduce",function(){
        it("array reduce",function(){
            expect(result_reduce).to.equal(19);
        });
    });

});
