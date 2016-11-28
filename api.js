global.api = {};
api.utils = {};
api.requires = {
  arr : require('./array.js'),
  rdsync : require('readline-sync'),
  fs : require('fs'),
  sleep : require('system-sleep')
};

api.utils.sleep = function(){
  let sleep = api.requires.sleep;
  console.log('Waiting..');
  sleep(1000);
};

//Searching for the element of an array in a text file with writing to user its quantity in the file
api.utils.SearchText = function(array){
  let rd = api.requires.rdsync;
  let string = '';
  let fs = api.requires.fs;
  console.log('\nCalling a func for finding elements of the arr in a text file!\n')
  let Path = rd.question('Prompt the path here! ');
  fs.readFile(('./' + Path), 'utf8', function(err, contents) {
    if (err) {console.log('Invalid file!'); return -1; };
    console.log('Quantity of the string in the text of the ' + Path + ' file');
    array.forEach(item => {
      let n = '';
      if (contents.includes(item)) n = 'Contains';
      else n = 'Doesn"t contain'
      console.log(item + ' -> ' + n);
    });
  });
  api.utils.sleep();
};

//Realization of sdbm hash-function for the elements of an array
api.utils.Hash = function(array) {
  let object = {};
  console.log('\nCalling a hashing func & giving you the hash-table with hashes & the elements of the array!\n')
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
  let object = {};
  api.utils.Hash(array);
  console.log('\nCalling a searching with a hash func!\n')
  let Hash = rd.question('Prompt the hash here! ');
  if (Hash in api.utils.Hash.obj){
    Object.keys(api.utils.Hash.obj).forEach(item => {
    if (item == Hash) console.log('Your value is -> ' + api.utils.Hash.obj[item]);
    });
  }
  else (console.log('\nNo hash found!\n'))
  api.utils.sleep();
};

api.utils.Hash(api.requires.arr);
api.utils.Search(api.requires.arr);
api.utils.SearchText(api.requires.arr);
