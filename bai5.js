/*
* 1.input n có 2 chữ số
*   
* 2.process tìm cách lấy được n
*   n1 = n % 10 = 4;
*   n2 = Math.floor(n/10) = 2;
* 3. result = n1 + n2, console.log result
* output: tổng 2 kí số của n (ex: 41=> 5)

*/

var n = 31;
var n1 = n % 10;
var n2 = Math.floor(n / 10);
var result = n1 + n2;

console.log("Tổng 2 kí số là:", result);
