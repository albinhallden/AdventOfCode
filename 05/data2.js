const fs = require('fs');
const path = require('path');
const data = fs.readFileSync(path.join(process.cwd(), 'data.txt')).toString();
const dataList = data.split('\r\n');

function myFilter(input) {
  var sameTwo = input.match(/([a-z]{2}).*\1/);
  var oneBetween = input.match(/([a-z])[a-z]\1/);
  return (sameTwo && oneBetween);
}
console.log(dataList.filter(myFilter).length);
