const fs = require('fs');
const path = require('path');
const data = fs.readFileSync(path.join(process.cwd(), 'data.txt')).toString();
const dataList = data.split('\r\n');

function myFilter(input) {
  var vowels = input.match(/[aeiou]/g);
  var duplicate = input.match(/([a-z])\1/);
  var invalid = input.match(/ab|cd|pq|xy/);
  return (!invalid && vowels && vowels.length > 2 && duplicate);
}
console.log(dataList.filter(myFilter).length);
