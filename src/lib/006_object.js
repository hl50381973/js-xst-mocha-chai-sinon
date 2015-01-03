/**
 * Created by Administrator on 2015/1/3.
 */
function Map(){
     var obj={};

    this.put=function(key,value){
        obj[key]=value;
    }

    this.get=function(key){
        if(obj[key] || obj[key] === 0 || obj[key] === false){
            return obj[key];
        }
    }

    this.size=function(){
        var count=0;
        for(var attr in obj){
            count++;
        }

        return count;

    }

    this.remove=function(key){

        if(obj[key] || obj[key] === 0 || obj[key] === false){
            delete obj[key];
        }
    }

    this.eachMap=function(fn){
        for(var attr in obj){
            fn(attr,obj[attr])
        }

    }


}