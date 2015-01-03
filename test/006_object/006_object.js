/**
 * Created by Administrator on 2015/1/3.
 */
expect=chai.expect;
/*alert("hello");*/
describe("self definited map",function(){
   describe("map put",function(){
       it("map put",function(){

           var map = new Map();
           map.put(1,"one");
           expect(map.get(1)).to.equal("one");
           expect(map.size()).to.equal(1);
       });

       it("map put faluse",function(){

           var map = new Map();
           map.put(1,false);
           expect(map.get(1)).to.be.false;

       });

        it("nested function",function(){
            var map = new Map();
            map.put(1,"one");

            var result=  map.eachMap(function(key,value){
                alert( key+':'+value);
            });



         /*   expect(result).to.equal("1:one")*/
        });


   });
});


