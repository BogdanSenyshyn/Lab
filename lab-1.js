'use strict'
const arr = require('./array.js');
let narray = []; let obj = {}; const blank = ' ';
//1 Task
console.log('Our array => \n' + arr);
//2 Task
narray = arr.filter(item => { return item.indexOf(blank) < 0 });
console.log('Our filtered array => \n' + narray + '\n');
//3 Task
narray = arr.sort().reverse();
console.log('Our sorted array => \n' + narray + '\n');
//4.1 Task
arr.forEach(item => { obj[item.split(blank)] = 'from ' + item + ' word'; });
console.log('Object of words elements => \n' + JSON.stringify(obj, null, '\t'));
//4.2 Task
narray = [];
arr.forEach(item => {
  let obj = {}
  for (let i in item){
    if (!([item[i]] in obj)) obj[item[i]] = 1;
    else obj[item[i]]++;
  };
  narray.push('\nIn ' + item + ' word:  ' + JSON.stringify(obj, '\n'));
});
console.log('Frequency of characters => ' + narray);
