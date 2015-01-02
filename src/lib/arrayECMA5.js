var arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];


 //新加位置的方法: indexOf lastIndexOf
 // 1个参数的时候表示传值 返回索引位置(index从0开始)
 var index = arr.indexOf(4);
 // 2个参数的时候 第一个参数表示起始位置 第二个参数还是值
 //var index = arr.indexOf(4,4);
 //alert(index);
 //他们查找数组比较的时候 '==='
 // lastIndexOf
 //var index = arr.lastIndexOf(2);
 //alert(index);


//5个新加迭代的方法
//every :对于数组每一个元素进行一个函数的运行 如果都返回true 最后则返回true 如果有一个返回false最后结果则返回false
/*
 var result = arr.every(function(item , index , array){
 return item > 2 ;
 });
 alert(result);
 */
//filter :对于数组的每一个元素进行一个函数的运行 给定的函数去执行 把过滤后的结果返回
/*
 var result = arr.filter(function(item , index , array){
 return item > 2 ;
 });
 alert(result);
 */
//forEach :循环数组每一项的值 并执行一个方法
/*
 arr.forEach(function(item, index, array){
 alert(item);
 });
 */
//map 对于数组的每一个元素进行一个函数的运行 可以经过函数执行完毕后 把新的结果返回
/*
 var result = arr.map(function(item, index, array){
 return item*2;
 });
 alert(result);
 */
//some :对于数组每一个元素进行一个函数的运行 如果有一项返回true 最后则返回true 如果每一项都返回false最后结果则返回false
/*
 var result = arr.some(function(item, index, array){
 return item >=5 ;
 });
 alert(result);
 */

//reduce    reduceRight
//变量的起始位置不同
//前一个值 , 当前值 , 索引位置 , array
/*
 var result = arr.reduce(function(prev , cur , index , array){
 return prev + cur ;
 });
 alert(result);
 */
/*
 var result = arr.reduceRight(function(prev , cur , index , array){
 return prev + cur ;
 });
 alert(result);
