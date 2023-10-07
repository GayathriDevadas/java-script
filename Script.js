console.log("Hi");
// alert('hello and welcome');
// variables
var a=9;
var a=10;
 console.log(a);  //block 1
{
    var a=20;
    console.log(a);     //block 2   
}
// let b=23;
console.log(b);
{
   let b=34;
    console.log(b);
}
console.log(b);
// const
const t=30;
console.log(t);
{
    const t=90;
    console.log(t)
}
console.log(t);
// Data Types
var nam='hii welcome to js';
console.log(typeof(nam));
// Numbers
var count=10;
console.log(typeof(count));
// Boolean
var bb=true;
console.log(typeof(bb));
var gtype;
console.log(typeof(gtype));
// Arrays
let arr=['red','blue','white',10]
console.log(arr[1]);
console.log(arr.length);
arr.push('violet');
console.log(arr);
arr.pop();
console.log(arr);
// javascript objects
let car={
    mileage:100,
    model:'i10',
    color:'red'
}
console.log(car);
console.log(car.model);
let person=new Object();
person.gender='male';
person.height=180;
console.log(person);

var a=5, c=2;
console.log(a+c);
console.log(a-c);
console.log(a*c)
console.log(a/c);
console.log(a%c);

var a=10;
var c=a++;
console.log(a);
console.log(c);

var d=5;
var e="5";
    if (d==e){
    console.log('d is equal to e')
   }  else  {
    console.log('d is not equal to e and a is not e')
   }
   var d=6;
   var e=8;
   if (d>=e||d==20){
   console.log('d is greater than to e or d equal to 20')
   } else {
   console.log('d is smaller than to e')
   }
let add=6;
    add-=3;
    console.log(add);
    var a=12;
    var b=34;
    var c=70;
    var d=45;
    console.log(add);
    var exp=a+b*(c-d)-7;
    console.log(exp);
// functions
function display(name){
    console.log('Hi '+name+' Welcome to js');
}
 display('Gayathri'); //function all
function addition(t,s){
    var result=t+s;
    console.log(result);
}

addition(10,30);
function subtraction(t,s){
    var result=t-s;
    console.log('the defference is '+result);
    return result;
}

    var result=subtraction(10,30);
    console.log(result)