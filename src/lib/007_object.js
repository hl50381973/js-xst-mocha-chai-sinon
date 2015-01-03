/**
 * Created by Administrator on 2015/1/3.
 */

function toObject(arr){
    var obj={};

    for(var i= 0,j=arr.length; i<j;i++){
        obj[arr[i]]=true;
    }

    return obj;
}

function uniq(obj){
    var arr=[];

    for(var attr in obj){
        if(obj.hasOwnProperty(attr)){
            arr.push(attr);
        }
    }

    return arr;
}