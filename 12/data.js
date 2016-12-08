'use strict';

const fs = require('fs');
const path = require('path');
const data = fs.readFileSync(path.join(process.cwd(), 'data.txt')).toString();
const numberTest = new RegExp(/(-?\d+)/g);

let myArray = [];
let numbers = 0;
while((myArray = numberTest.exec(data)) !== null) {
  numbers += parseInt(myArray[0], 10);
}

console.log(numbers);
