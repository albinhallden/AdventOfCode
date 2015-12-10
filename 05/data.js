const fs = require('fs');
const path = require('path');
const data = fs.readFileSync(path.join(process.cwd(), 'data.txt')).toString();
const dataList = data.split('\r\n');
var correct = 0;

for (var i = 0; i < dataList.length; i++) {
  var input = dataList[i];
  var vowels = input.match(/[aeiou]/g);
  var duplicate = input.match(/([a-z])\1/);
  var invalid = input.match(/ab|cd|pq|xy/);

  if (invalid === null && vowels !== null && vowels.length > 2 && duplicate !== null) {
    correct++;
  }
}

console.log(correct);
