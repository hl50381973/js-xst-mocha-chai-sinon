/**
 * Created by Administrator on 2015/1/3.
 */
expect=chai.expect;


describe("remove duplicated value in the array",function(){
    it("remove duplicated value in the array",function(){
        var arr = [2,1,2,10,2,3,5,5,1,10,13];

        var result =uniq(toObject(arr));
        expect(result).to.eql(['1','2','3','5','10','13']);
    });



});