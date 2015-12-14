var md5 = require('md5');
var key = 'ckczppom';

var MAX = 1000000; // Could be raised if no answer is found within limit
for (var i = 1; i < MAX; i++) {
  var hash = md5(key + i);
  if (hash.match('^0{5}')) {
    console.log('a:', i);
    break;
  }
}

var input = key;

for (let i = 1; i < 1000000; ++i) {
  const match = md5(input + i).startsWith('00000');

  if (match) {
    console.log('j:', i);
    break;
  }
}
