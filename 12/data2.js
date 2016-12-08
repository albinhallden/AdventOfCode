'use strict';

const fs = require('fs');
const path = require('path');

let data = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data.txt')).toString());

function recursive(obj){
  if (typeof obj === 'object' && !Array.isArray(obj)) {
    for (let key in obj) {
      if (obj[key] === 'red') return 0;
    }
  }

  var total = 0;
  for (let key in obj) {
    if (typeof obj[key] === 'object') total += recursive(obj[key]);
    else if (typeof obj[key] === 'number') total += obj[key];
  }
  return total;
}

console.log(recursive(data));
