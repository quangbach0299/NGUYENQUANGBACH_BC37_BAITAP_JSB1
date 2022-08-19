/*
* 1.input hai cạnh a và b là chiều dài và chiều rộng hình chữ nhật
*   
* 2.process tìm cách lấy được diện tích và chu vi hình chữ nhật
            diện tích hình chữ nhật là a*b
            chu vi hình chữ nhật a + b + sqrt(a*a+b*b)
* 3. result  c là chu vi hình chữ nhật
             d là diện tích hình chữ nhật
*/

var a = 5;
var b = 6;
var c = a * b;
var d = a + b + Math.sqrt(a * a + b * b);
console.log("Diện tích hình chữ nhật", c);
console.log("Chu vi hình chữ nhật", d);
