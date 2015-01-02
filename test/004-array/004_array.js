/**
 * Created by Administrator on 2015/1/2.
 */
expect = chai.expect;

describe("ARRAY", function () {

    describe("discard the ending element by array length", function () {
        it("array length", function () {
            expect(arr).to.be.length(5);
        });

        it("not contais abc", function () {
            expect(arr).to.not.contain('abc');
        });

        it("not new Date() abc", function () {
            expect(arr).to.not.contain(new Date());
        });

    });


    describe("array push ,pop", function () {

        it("array push", function () {
            expect(arr2).to.have.length(4);
            expect(arr2).to.include(1);
            expect(arr2).to.include(2);

            //expect(arr2).to.equal([new Date(),false,1,2,true]);

        });


        it("aray pop", function () {
            expect(arr2).to.not.include(true);
            expect(obj).to.equal(true);
        });
    });

    describe("array shift ,unshift", function () {
        it ("array shift ,unshift", function () {
                expect(arr3).to.eql([10,false,2,3, true]);
            });
    });

    describe("array splice",function(){
        it("array splice",function(){
            expect(arr_splice).to.eql([1,3,4,5,4,5]);
        });
    });

    describe("array slice",function(){
        it("array slice",function(){
            expect(arr_slice_result).to.eql([3,4]);
        });
    });


    describe("array concat",function(){
       it("array concat",function(){
           expect(result_concat).to.eql([1,2,3,true , 4 ,5]);
       }) ;
    });


    describe("array join",function(){
        it("array join",function(){
            expect(result_joined).to.equal("1-2-3")
        }) ;
    });


    describe("array sort",function(){
        it("array sort",function(){
            expect(arr_sort).to.eql([1,2,3,4,5]);
        });
    });



    describe("array reverse",function(){
        it("array reverse",function(){
            expect(arr_reverse).to.eql([7,1,4,2,10]);
        });
    });

    describe("array compare sort",function(){
        it("array compare sort",function(){
            expect(arr_compare).to.eql([10,7,4,2,1]);
        });
    });

});