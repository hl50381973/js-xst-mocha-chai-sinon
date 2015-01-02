/**
 * Created by Administrator on 2015/1/2.
 */
var arr = new Array();
var arr = [1,2,3,4,true ,'abc' , new Date()] ;
arr.length = 5 ;


var arr2 = [new Date(),false];
var result = arr2.push(1,2,true);
var obj = arr2.pop();		//从数组的尾部移除一个元素(返回值为移除的元素)



/**
 * shift 和 unshift 方法
 */
var  arr3 = [1,2,3, true];
var r1 = arr3.shift();			//从头部移除一个元素(返回移除的元素)
var r2 = arr3.unshift(10,false);	//从头部插入多个元素(返回新数组的长度)

var arr_splice = [1,2,3,4,5];
arr_splice.splice(1,2,3,4,5);	// 134545


// slice：//返回截取的内容 //截取范围 (左闭右开区间)
var arr_slice = [1,2,3,4,5];
var arr_slice_result = arr_slice.slice(2,4);


//操作数组的方法: concat join

var arr_concat_1 = [1,2,3];
var arr_concat_2 = [true , 4 , 5];

var result_concat = arr_concat_1.concat(arr_concat_2);		//合并粘连的操作(不操作数组本身)

var arr_join = [1,2,3];
var result_joined = arr_join.join('-');		//在每个元素之间加入内容(不操作数组本身)



/**
 * sort排序
 * reverse倒叙
 */
var arr_sort = [5,2,1,4,3];
arr_sort.sort();

var arr_reverse = [10,2,4,1,7];
arr_reverse.reverse();


var arr_compare = [10,2,4,1,7];
function compare(value1 , value2){
    if(value1 < value2){
        return 1 ;
    } else if(value1 > value2){
        return -1 ;
    } else {
        return 0 ;
    }
}
arr_compare.sort(compare);
