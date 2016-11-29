'use strict'
global.api = {};
api.utils = {};
api.requires = {
  arr : require('./array.js'),
  rdsync : require('readline-sync'),
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
api.utils.SearchText = function(array){
  const rd = api.requires.rdsync;
  const fs = api.requires.fs;
  console.log('\nFinding elements of the arr in a text file!\n')
  let path = rd.question('Prompt the path here! ');
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
api.utils.Search = function(array) {
  let rd = api.requires.rdsync;
  console.log('\nCalling a searching with a hash func!\n')
  let hash = rd.question('Prompt the hash here! ');
  if (hash in api.utils.Hash.obj){
    Object.keys(api.utils.Hash.obj).forEach(item => {
    if (item == hash) console.log('Your value => ' + api.utils.Hash.obj[item]);
    });
  }
  else (console.log('\nNo hash found!'));
  api.utils.sleep();
};

api.utils.Hash(api.requires.arr);
api.utils.Search(api.requires.arr);
api.utils.SearchText(api.requires.arr);
