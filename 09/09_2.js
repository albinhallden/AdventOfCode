'use strict';

const fs = require('fs');
const path = require('path');

const cities = fs.readFileSync(path.join(process.cwd(), 'data.txt')).toString()
  .split('\n')
  .map(item => item.split(' '))
  .map(item => {
    return { from: item[0], to: item[2], distance: parseInt(item[4], 10) }
  })
  .reduce((prev, curr) => {
    if (!prev[curr.from]) prev[curr.from] = { trips: [] };
    if (!prev[curr.to]) prev[curr.to] = { trips: [] }; 

    prev[curr.from].trips.push({ to: curr.to, weight: curr.distance });
    prev[curr.to].trips.push({ to: curr.from, weight: curr.distance });

    return prev;
  }, {});

function shortestPath(obj, visited, city) {
  const possibleTrips = obj[city].trips.filter(trip => visited.indexOf(trip.to) === -1);

  if (possibleTrips.length === 0) {
    let sum = 0;
    let tempArray = visited.slice(0, -1)
      .map((item, index) => {
        sum += obj[item].trips.filter(filt => filt.to === visited[index + 1])[0].weight;
      });

    visited.filter(item => item !== city)
      .map(item => {
        return 10;
      }).reduce((prev, curr) => prev + curr, 0);
    // console.log(sum, visited.join(' -> '));
    return sum;
  }

  return possibleTrips.map(sub => {
    return shortestPath(obj, visited.concat([sub.to]), sub.to)
  }).sort().reverse()[0];
}

const result = Object.keys(cities)
  .map(item => shortestPath(cities, [item], item))
  .sort().reverse()[0];

console.log(result);
