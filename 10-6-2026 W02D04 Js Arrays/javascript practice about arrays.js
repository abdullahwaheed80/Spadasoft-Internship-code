let fruits = ["hello", "world"];
console.log(fruits);
console.log(fruits[0]);

let num = [100,200,300,400,500];

num[1] = 250;
num[2] = 350;
console.log(num);

//push method
num.push(600);

console.log(num);

//pop method
num.pop();

console.log(num);

//shift method
num.shift();
console.log(num);

//unshift method
/*num.unshift("numbers");
console.log(num);*/

//length property
let x = num.length;
console.log(x);

//index of method
let y = num.indexOf(500);
console.log(y);
console.log(num.indexOf(350));

//includes method
let z = num.includes(900);
console.log(z);
let w = num.includes("numbers");
console.log(w);

//join method   
let joined = num.join("-");
console.log(joined);

//slice method
let sliced = num.slice(1,5 );
console.log("sliced: ", sliced);

let longerSliced = num.slice(3);
console.log("longer sliced: ", longerSliced);

//splice method
let spliced = num.splice(1, 2);
console.log("spliced: ", num);

/*let newNum = num.splice(0, 1, "new value");
console.log("newNum: ", newNum);
console.log("num: ", num);
*/

//map method
let mapped = num.map(num => num * 5);
console.log("mapped: ", mapped);

let mapped2 = num.map((num) => num * 10);
console.log("mapped2: ", mapped2);

//filter method
let filtered = num.filter(num => num < 490 );
console.log("filtered: ", filtered);

//reduce method
let reduced = num.reduce((accumulator, current) => accumulator + current);
console.log("reduced: ", reduced);

let num2 = [2,3,4,5,6,7,8,9];
let reduced2 =num2.reduce((hello, world) =>{
  return hello + world;
});
console.log("reduced2:", reduced2);