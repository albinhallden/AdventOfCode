const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(process.cwd(), 'data2.txt')).toString();
const dataList = data.split('\r\n');
var sum = 0;

// 2*l*w + 2*w*h + 2*h*l
for (var i = 0; i < dataList.length; i++) {
    var value = dataList[i].split('x');

    var l = parseInt(value[0], 10);
    var w = parseInt(value[1], 10);
    var h = parseInt(value[2], 10);

    var a1 = l*w;
    var a2 = w*h; 
    var a3 = h*l;

    sum += (2*a1) + (2*a2) + (2*a3) + Math.min(a1, a2, a3);
};
console.log(sum);