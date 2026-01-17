//დავალება 1
const arr = [1,2,3,4,5]

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
//დავალება 2
const arr1 = ["🍎", "🍌", "🍇"];

for(fruits of arr1){
    document.write(fruits)
}
//დავალება 3
const names = ["ანა", "ბექა", "მარიამი"];
let i = 0;

while (i < names.length) {
  console.log(names[i]);
  i++; 
}

//დავალება 4
let j = 1;

do {
  console.log(j);
  j++;
} while (j <= 10);


//დავალება 5
const even = [1,2,3,4,5,6,7,8,10];

function isEven() {
  for (let i = 0; i < even.length; i++) {
    if (even[i] % 2 === 0) {
      console.log(even[i]);
    }
  }
}

isEven();

//დავალება 6

let numbers1 = [1,2,3,4,5,6,7,8];
let evenNumbers = [];

for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] % 2 === 0) {
    evenNumbers.push(numbers1[i]);
  }
}

console.log("ლუწი რიცხვებია: " + evenNumbers);

//დავალება 7

const colors = ["1", "2", "3"];

for (const color of colors) {
  document.write(`<div style="margin:5px; font-size:30px;background-color:red;">${color}</div>`);
  document.write(`<div style="margin:5px; font-size:30px;background-color:blue;">${color}</div>`);
  document.write(`<div style="margin:5px; font-size:30px;background-color:orange;">${color}</div>`);
 
  
}

//დავალება 8

const numbers = [5, 10, 15, 20];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]; 
}

console.log(sum);

//დავალება 9

const alphabet = ["a", "b", "c", "d"];
let reversed = [];

for (let k = alphabet.length - 1; k >= 0; k--) {
  reversed.push(alphabet[k]);
}

console.log(reversed);

//დავალება 10

let empty = [];

for(let n = 1;n <= 5;n++){
    empty.push(n)
   
}
console.log(empty)

//დავალება 11

function average(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

console.log(average([5, 10, 15, 20]));

//დავალება 12

//ეს კოდი დამოუკიდებლად მუშაობს მაგრამ დანარჩენ ამოცანებთან ერთად არა (ვვარაუდობ რომ ზედმეტად იტვირთება კოდი და ჩატვირთვა ვერ ხდება)

// let fruits = [
//   ["ვაშლი","მსხალი"],
//   ["ბანანი","ანანასი",[
//     "საზამთრო","ნესვი"
//   ]],
  

// ];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i])
//   for(let j = 0;j < fruits[i].length;j++){
//     console.log(fruits[i][j])
//     for(let k = 0;k < fruits[i][j].length;k++){
//     console.log(fruits[i][j][k])}
//   }
// }

//დავალება 13

let numbers2 = [ 
[1, 2, 3], 
[4, 5], 
[6, 7, 8, 9] 
];

for (let i = 0; i < numbers2.length; i++) {
    console.log(numbers2[i])
  for(let j = 0;j < numbers2[i].length;j++){
    console.log(numbers2[i][j])
    for(let k = 0;k < numbers2[i][j].length;k++){
    console.log(numbers2[i][j][k])}
  }
}

//დავალება 14

let numbers3 = [ 
  [1, 2, 3], 
  [4, 5], 
];

let sum1= 0;

for(let arr2 of numbers3){
   for(let num of arr2){
    sum1 += num; 
   }
}
console.log(sum1)

//დავალება 15

const nums = [15,65,62,23,46,22]
let max = Math.max(...nums)
console.log(max);

//დავალება 16

const num1 = [15,65,62,23,46,22]
const x2 = []
for(let i = 0;i < num1.length;i++){
  x2.push(num1[i] * 2)
}
console.log(x2)

//დავალება 17
const studentsScores = [
  [90, 85, 78],   
  [70, 88, 95],  
  [100, 92, 96], 
  [60, 75, 80]    
];

for (let i = 0; i < studentsScores.length; i++) {
  let sum = 0;
  for (let j = 0; j < studentsScores[i].length; j++) {
    sum += studentsScores[i][j];
  }
  let average = sum / studentsScores[i].length;
  console.log(`სტუდენტი ${i+1}-ის საშუალო ქულა: ${Math.round(average)}`);
}

//დავალება 18

const str = ["pc","computer","code","JavaScript"]

for(let i = 1;i < str.length;i++){
  if(str[i].length > 4){
    console.log(str[i])
  }
}

//დავალება 19

let evens = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15]
];

for(let i = 0; i < evens.length; i++){
  for(let j = 0; j < evens[i].length; j++){
    if(evens[i][j] % 2 === 0){
      console.log(evens[i][j]);
    }
  }
}

//დავალება 20

function string(arr5){
  for(let i = 0;i < arr5.length;i++){
    if(typeof arr5[i] === "string"){
      console.log(arr5[i]);
    }
  }
}
let mixed = [1, "hello", true, "world", 42, "JavaScript"];
string(mixed);

