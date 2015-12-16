const fs = require('fs');
const path = require('path');
const data = fs.readFileSync(path.join(process.cwd(), 'data.txt')).toString();
const dataList = data.split('\r\n');
let reindeers = [];

for (let i = 0; i < dataList.length; i++) {
  const inputArray = dataList[i].split(' ');
  reindeers.push({
    name: inputArray[0],
    speed: parseInt(inputArray[3]),
    speedTime: parseInt(inputArray[6]),
    restTime: parseInt(inputArray[inputArray.length - 2]),
    points: 0
  });
}

for (let time = 1; time <= 2503; time++) {
  let distances = [];  
  for (let r = 0; r < reindeers.length; r++) {
    const rObj = reindeers[r];
    const modulus = time % (rObj.speedTime + rObj.restTime);

    let remainder = rObj.speedTime * rObj.speed;
    if (modulus < rObj.speedTime) {
      remainder = rObj.speed * modulus;
    }

    distances.push({ 
      index: r,
      distance: ((time - modulus) / (rObj.speedTime + rObj.restTime) 
                * rObj.speed * rObj.speedTime) + remainder
    });
  }
  distances = distances.sort(function(a, b){ return b.distance - a.distance});
  
  reindeers[distances[0].index].points++;
  for (let d = 1; d < distances.length; d++) {
    if (distances[d].distance < distances[0].distance) {
      break;
    }
    reindeers[distances[d].index].points++;
  }
}
reindeers = reindeers.sort((a,b) => { return b.points - a.points });

console.log(reindeers[0].points);
// 1102 = Correct
