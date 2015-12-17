const fs = require('fs');
const path = require('path');
const data = fs.readFileSync(path.join(process.cwd(), 'data.txt')).toString();
let dataList = data.split('\r\n');
var sum = 0;
for (var i = 0; i < dataList.length; i++) {
  sum += dataList[i].length - eval(dataList[i]).length;
}
console.log(sum);
// Correct - 1350
