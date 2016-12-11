'use strict';
const arr = require('./array.js');
const rd = require('readline-sync');
let narray = [];
let obj = {};
const blank = ' ';
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


global.api = {};
api.utils = {};
api.requires = {
  fs : require('fs'),
  sleep : require('system-sleep')
};

//Для розбірчивості(optional)
api.utils.sleep = function(){
  const sleep = api.requires.sleep;
  console.log('Waiting..');
  sleep(1000);
};

//Searching for the element of an array in a text file
api.utils.SearchText = function(array, path){
  const fs = api.requires.fs;
  console.log('\nFinding elements of the arr in a text file!\n')
  fs.readFile(('./' + path), 'utf8', function(err, contents) {
    if (err) {console.log('Invalid file!'); return -1; };
    console.log('Quantity of the string in the text of the ' + path + ' file');
    array.forEach(item => {
      let n;
      if (contents.includes(item)) n = 'Contains';
      else n = 'Doesn\'t contain'
      console.log(item + ' => ' + n);
    });
  });
  api.utils.sleep();
};

//Realization of sdbm hash-function for the elements of an array
api.utils.Hash = function(array) {
  let object = {};
  console.log('\nHashing & giving you the hash-table!\n')
  array.forEach(item => {
    let hash = 0, i = item.length;
    if (i === 0) return hash;
    while (i) hash = item.charCodeAt(--i) + (hash << 6) + (hash << 16) - hash;
    object[(hash >>> 0)] = item;
    console.log((hash >>> 0) + ': ' + object[hash >>> 0]);
  });
  //provides an object for you
  api.utils.Hash.obj = object;
  api.utils.sleep();
};

//Searching for words in hash-table using a hash
api.utils.Search = function(array, hash) {
  console.log('\nCalling a searching with a hash func!\n')
  if (hash in api.utils.Hash.obj){
    Object.keys(api.utils.Hash.obj).forEach(item => {
    if (item == hash) console.log('Your value => ' + api.utils.Hash.obj[item]);
    });
  }
  else (console.log('\nNo hash found!'));
  api.utils.sleep();
};


//5.2 Task
//Hashing elements of the array
api.utils.Hash(arr);
//Searching with hash
let hash = rd.question('Prompt the hash here! ');
api.utils.Search(arr, hash);
//5.1 Task
//Seatching elements of the array in a text file
let path = rd.question('Prompt the path here! ');
api.utils.SearchText(arr, path);
