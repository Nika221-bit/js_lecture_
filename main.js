
// let neo = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// for (let i = 0; i < neo.length; i++) {
//     console.log(neo[i])
//   for(let j = 0;j < neo[i].length;j++){
//     console.log(neo[i][j])
//   }
// }

const arr = [1,2,3,4,5]

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

const arr1 = ["🍎", "🍌", "🍇"];

for(fruits of arr1){
    document.write(fruits)
}

const names = ["ანა", "ბექა", "მარიამი"];
let i = 0;

while (i < names.length) {
  console.log(names[i]);
  i++; 
}


let j = 1;

do {
  console.log(j);
  j++;
} while (j <= 10);



const even = [1,2,3,4,5,6,7,8];

function isEven() {
  for (let i = 0; i < even.length; i++) {
    if (even[i] % 2 === 0) {
      console.log(even[i]);
    }
  }
}

isEven();


const colors = ["1", "2", "3"];

for (const color of colors) {
  document.write(`<div style="margin:5px; font-size:30px;background-color:red;">${color}</div>`);
  document.write(`<div style="margin:5px; font-size:30px;background-color:blue;">${color}</div>`);
  document.write(`<div style="margin:5px; font-size:30px;background-color:orange;">${color}</div>`);
 
  
}

const numbers = [5, 10, 15, 20];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]; 
}

console.log(sum);


const alphabet = ["a", "b", "c", "d"];
let reversed = [];

for (let k = alphabet.length - 1; k >= 0; k--) {
  reversed.push(alphabet[k]);
}

console.log(reversed);

let empty = [];

for(let n = 1;n <= 5;n++){
    empty.push(n)
   
}
console.log(empty)



function average(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

console.log(average([5, 10, 15, 20]));


let fruits = [
  ["ვაშლი","მსხალი"],
  ["ბანანი","ანანასი",[
    "საზამთრო","ნესვი"
  ]],
  

];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
  for(let j = 0;j < fruits[i].length;j++){
    console.log(fruits[i][j])
    for(let k = 0;j < fruits[i][j].length;k++){
    console.log(fruits[i][j][k])}
  }
}