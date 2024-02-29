// ------------------VARIABLES------------------
// let a=5;
// let b=6;
// console.log(a+b);
// console.log("Ajay");
// alert(a*b);


//  EXAMPLE !-------------
// {
// let a=20;
// {
//     let a=10;
// console.log(a);
// }
// console.log(a);
// }


// EXAMPLE 2--------------
// {
//     let a=20;
//     {
      
//     console.log(a);
//     }
//     console.log(a);
//     }


// -------------------OBJECT----------
// let a=10,b=20,c=30;

// let arr=[{name : "Bharath", age:"17"},{name : "Ajay", age:"17"},
// {name : "Gowtham", age:"17"},{name : "Aswin", age:"17"},]

// console.log(arr);

//---------CASE SENSITIVE---------------
// let a =10;
// let A =5;
// console.log(a,A);

// const--------------------

// const a=10;
// a=20;
// console.log(a);

// const a;
// a=20;
// console.log(a);

// {
//     const a=10;
//     console.log(a);
// }
// console.log(a);


//-----------------VAR --------------
// console.log(a);
// var a=10;
// console.log(a);

//--------------FUNCTION SCOPE--------

// var a=10;
// console.log(a);
// {
//     var a=20;
//     console.log(a);
// }
// console.log(a);

// -----------------We can't give keyword as variable name ..


// ------------------===FUNCTIONS-----------------

// function add(a,b){
//     let c=a+b;
//     return c;
// }

// let a=add(10,20);
// console.log(a);

// function print(a,b){
//     console.log("{name : "+a)
//     console.log("age : "+b+"}")
// }
// let friend=print("Bharath",20);

//-------------assigning variable--------------//

// let a=function(a,b) {return a+b};
// console.log(a(2,3));

// let add=(num1, num2) =>{ return num1+num2}
// let a = (name) => { return "technology" + name}

// let add2={num1, num2}=> num1+num2;

// console.log(add(10,20));
// a("New")
// console.log(add2(10,25));

// let a=10;
// let b=40;
// console.log(a+b);




// {
//     const a= 10;
//     console.log(a);
// }
// console.log(a)

// var const = 10;
// console.log(Const)

// function add(num1, num2){
//     return num1+num2;
// }
// let a=add(10,20);
// let b=add(40, 20);
// {
//     name: "Pooja"
//     age:20
// }
// friend(pooj,20);
// console.log(a);

// a= friend("pooj", 20);
// console.log(a);
// function friend(name, age){
//     return{ name: name, age:age}
// }

// let a= function(a,b){  return a+b};

// console.log(a(2,3));

// var a = function(a,b){ return a + b};



// function teach(name){ 
//     return "teaching"+name;
// }

// console.log(tech(English))
// let a = function(name){
//     return "Teaching"+name;
// }


// let add = (num1, num2) => { return num1 +num2}
// let a=(name) => { return "Teaching"+ name}

// let add2 = (num1, num2) => num1+num2;


// add(10,20);
// a("MERN")
// add2(10,25)

// Array


// let items =["table","bench","laptop"];

//     let count=items.length;

//     console.log(count)

//     items.push("mobile")

//     console.log



// function findLength(){
//     return items.length;
// }

// addItems = (items) => {
//     return items.push(items);
//     // return items list
// }

// function removeLastItems(){
//     return items.pop();

//     //  return items list
// }

// function removeItems(start, end){
//     return items.splice(start,end);

// }



// items.unshift("board");

// // /items.unshift("connector");

// console.log(items);
// items.slice(2,4)
// console.log("slice",items.slice(2,4));

// items.indexOf("laptop")

//Loops
  /* let items =["table","bench","laptop"];
  for(let i=0; i<items.length;i++){
    console.log(items[i])
  }

  for(let item of items){
    console.log(item)
  } */

 /* let object ={
    name: "mouli",
    age: 20,
    place:"coimbatore"
  }

  for(let key in object){
    console.log(key,object[key])
  } */


/* let items =["table","bench","laptop"];
items.forEach((item) => {
    console.log(item);
})
   console.log(items) */


/* marks=[30,45,40,55,24];
marksFor100=[];

marks.forEach((item)=>{
    marksFor100.push(item*2);
});
console.log(marksFor100);

marksFor100=marks.map((item)=>{
    return item*2;
});
console.log(marksFor100); */

/*marks=[30,45,40,55,24];
passMark =marks.filter((item) =>{
    return item >30
})

let check =(item) =>{
    return item >30;
}
passMark =marks.filter(check)
console.log(passMark) */

// let items = ["table","bench","laptop"];
// items.sort()
// console.log(items)


// marks = [101,11,45,460,525,24];
// marks.sort(function(a,b)  {
//   return a-b;  //ascending ..... descending b-a
// });
// console.log(marks);

// string methods
// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let length = text.length;
// console.log(length)

// let txt = "HELLO WORLD";
// let char = txt.charAt(0);
// console.log(char)

// let text1 = "HELLO WORLD";
// let char1 = text.charCodeAt(0);
// console.log(char1)

// const name1 = "helloworld";
// let letter = name1 .at(2);
// console.log(letter)

// let text3 = "Apple, Banana, Pineapple";
// let part = text3.slice(7, 13);
// console.log(part)

// let txt2 = "Apple, Banana, Pineapple";
// let part1 = txt2.slice(7);
// console.log(part1)

// let str = "Apple, Banana, Pineapple";
// let pt = str.substring(7, 13);
// console.log(pt)

// let txt1 = "Hello World!";
// let text2 = txt1.toUpperCase();
// console.log(text2)

let t1 = "Hello World!";       
let t2 = t1.toLowerCase();
console.log(t2)

let tt1 = "Pooja";
let tt2 = "thara";
let tt3 = tt1.concat(" ", tt2);
console.log(tt3)

let tt = "      Hello World!      ";
let t12 = tt.trim();
console.log(t12)

