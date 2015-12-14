const fs = require('fs');
const path = require('path');
const data = fs.readFileSync(path.join(process.cwd(), 'data.txt')).toString();
var dataList = data.split('\r\n');

var lights = new Array();
var sum = 0;
for (var i = 0; i < dataList.length; i++) {
  var input = dataList[i].split(' ');
  var startX = parseInt(input[input.length - 3].split(',')[0], 10);
  var startY = parseInt(input[input.length - 3].split(',')[1], 10);
  var endX = parseInt(input[input.length - 1].split(',')[0], 10);
  var endY = parseInt(input[input.length - 1].split(',')[1], 10);

  for (var x = startX; x <= endX; x++ ) {
    if (lights[x] === undefined) {
      lights[x] = new Array();
    }
    for (var y = startY; y <= endY; y++) {
      lights[x][y] = lights[x][y] === undefined ? 0 : lights[x][y];
      var initialLight = lights[x][y];

      if (dataList[i].startsWith('toggle')) {
        lights[x][y] += 2;
        sum += 2;
      }
      else if (dataList[i].startsWith('turn on')) {
        lights[x][y] += 1;
        sum += 1;
      }
      else if (dataList[i].startsWith('turn off')) {
        if (initialLight > 0) {
          lights[x][y] -= 1;
          sum -= 1;
        }
      }
    }
  }
}
console.log('Total:', sum);

// 14191924 --> TOO LOW

// 16999919 --> TOO HIGH
