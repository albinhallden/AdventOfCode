const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(process.cwd(), 'data.txt')).toString();
var dataList = data.split('\r\n');
var sum = 0;

for (var i = 0; i < dataList.length; i++) {
  var value = dataList[i].split('x');

  var values = [parseInt(value[0], 10), parseInt(value[1], 10), parseInt(value[2], 10)];
  values.sort((a,b) => {
    return a - b;
  });

  sum += values[0]*2 + values[1]*2 + (values[0]*values[1]*values[2]);
};
console.log(sum);
