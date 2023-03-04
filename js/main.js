//输出对话框
//字符串可以+
//alert("Hello");
//相当于sout
//length是属性
console.log("hi".length);
//和java一样从0开始算
console.log("Hello".charAt(0));
//字符串替换
console.log("hello,world".replace("hello","googbye"));
//这是个方法，和java差不多，变成大写
console.log("hello,world".toUpperCase());
//js也可以有&&，||,!

//变量
//name
var name = "String"
//name被lib.dom.d.ts标记弃用，所以有删除线
console.log(name);
//var是全局变量，let的作用域是当前
let a =1;
console.log(a);
name="Simon";
console.log(name);
a=1+1;
console.log(a);
//常量
const Pi = 3.14;
//常量再定义会报错
//Pi = 114514;
console.log(Pi);

//运算
var x=5;
console.log(x+5);
//x =x+5;
//这很java
x+=5;
//10=5+5
//允许自加自减
x++;
x--;
console.log(x);

//这很java
//加号一边有字符串，会变成字符串拼接
var m ="3"+4
console.log(m)
//似乎分号不是必要的

var n = 3+4+"5";
//输出75
console.log(n);

console.log(123=="123");
//true,123自动转换为"123"

console.log(123==="123");
//false，没有自动类型转换

/*
 if(){

 }else if(){

 }else{

 }
 这种循环也支持
 */
if(name == "Simon"){
   console.log("Simon"); 
}else{
    console.log("not Simon");
}

//while循环
while(false){
    console.log("true");
}

var b = 19;
do{
    b++;
    console.log(b);
    //先循环一次，b==20，又循环，b!=21,跳出循环
}while(b == 20)

//var为全局变量，就算在作用域内，也可以在外部访问
//let为局部变量，在作用域外就不能访问

//和java一样用分号
for(let i = 0;i<5;i++){
    //i=0到4
    console.log(i);
}

var age = 10;
//三元运算符
var allowed = (age>=18)?"yes":"no";
console.log(allowed);

//switch判断
switch(name){
    case "Simon":
        console.log("Simon");
        break;//跳出，不再检查，防止穿透，输出Jhon
    case "Jhon":
        console.log("Jhon");
        break;
    default:
        console.log("stranger");
}

//对象
var obj = new Object();
var obj2 = {};
//键值对
obj = {
    name:"Simon",
    age:"20",
    email:"simon@gamil.com",
    contact:{
        phone:"1234567",
        Telegram:"@Simon"
    }
}

console.log(obj);
console.log(obj.name);
console.log(obj.contact.phone);
console.log(obj["contact"]["phone"]);
obj.age="21";
console.log(obj.age);
obj.contact.WeChat="abcd";

//数组
var d = new Array();
var e = [];
//数组第一个元素
d[0]="dog";
d[1]="cat";
d[5]="tiger";
console.log(d);
console.log(d[3]);//undefined
e = ["dog","cat","tiger"];
console.log(e);

for(let i=0;i<d.length;i++){
    console.log(d[i]);
}
//追加值sheep在数组末尾
d.push("sheep");
//for in 循环，for in 不会遍历空值
for (let i in d) {
    console.log(d[i]);
}
//删除位于数组末尾的元素
d.pop();
//数组倒序
d.reverse();
//删除第一个元素
d.shift();
//第一个元素追加值
d.unshift("lion");

console.log(a);
add(4);

function add(x){
    a +=x;
}
console.log(a);

function adder(){
    //js会自动把传入参数加入arguments列表
    let sum =0;
    for(let i=0,j = arguments.length;i<j;i++){
        sum +=arguments[i];
    }
    return sum;
}
console.log(adder(1,2,3,4,5,6,7,8,9,10));

//闭包,回调函数
function makeAdder(a){
    return function(b){
        return a+b;
    }
}

var x = makeAdder(5);
//此处返回了已知a，等待b输入的函数
//a=5
//x(6)=makeAdder(5)(6),调用makerAdder里的函数
//此处输入了b，回调函数执行，输出值
console.log(x(6));