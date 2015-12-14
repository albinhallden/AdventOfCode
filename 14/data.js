const fs = require('fs');
const path = require('path');
const data = fs.readFileSync(path.join(process.cwd(), 'data.txt')).toString();
let dataList = data.split('\r\n');

const LIMIT = 2503;
var reindeers = [];
var maxDistance = 0;
for (var i = 0; i < dataList.length; i++) {
  var inputArray = dataList[i].split(' ');
  var name = inputArray[0];
  var speed = parseInt(inputArray[3]);
  var speedTime = parseInt(inputArray[6]);
  var restTime = parseInt(inputArray[inputArray.length - 2]);

  var modulus = LIMIT % (speedTime + restTime);
  var multiplicator = (LIMIT - modulus) / (speedTime + restTime);

  var remainder = speed * speedTime;
  if (modulus !== 0 && modulus < speedTime) {
    remainder = speed * modulus;
  }

  var distance = speed * multiplicator * speedTime + remainder;
  maxDistance = distance > maxDistance ? distance : maxDistance;
}

console.log('max distance:', maxDistance);
// 2640 = Correct
