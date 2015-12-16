var md5 = require('md5');
var key = 'iwrupvqb';

var MAX = 1000000;
for (var i = 1; i < MAX; i++) {
  var hash = md5(key + i);
  if (hash.match('^0{5}')) {
    console.log('a:', i);
    break;
  }
}
