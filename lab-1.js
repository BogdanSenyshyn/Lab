const arr = require('./array.js');

//Task 1 - generating an array of 25 strings (drinks)
console.log('Our array -> ' + arr + '\n');

//Task 2
let blank = ' ';
let filtered = []; //our array
arr.forEach(item => {if (item.indexOf(blank) < 0) filtered.push(item);});
console.log('Our filtered array -> ' + filtered +'\n');

//Task 3
let copy = []; //creating a copy
arr.forEach(item => { copy.push(item); });
let sorted = arr.sort().reverse(); //our array
console.log('Our sorted array -> ' + sorted + '\n');

//Task 4.1
let elements = []; //our array
copy.forEach(item => {
  elements.push('\nIn [' + item + '] array' + ' the elements are: '+ item.split(' '));
});
console.log('Array of the words that are used in the array -> ');
elements.forEach(item => {console.log(item)});

//4.2
let string = '';
copy.forEach(item => { string += item; });
let obj = {}
for (let i in string){
  if (!([string[i]] in obj)) obj[string[i]] = 1;
  else obj[string[i]]++;
};
let frequency = []; //our array
Object.keys(obj).forEach(item => {if (item !== ' ') frequency.push(item + ':' + obj[item])});
console.log('Array of chars that are used in the array and their frequency (the prompt is also the char) -> ');
frequency.forEach(item => {console.log(item)});
