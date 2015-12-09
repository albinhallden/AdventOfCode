var md5 = require('js-md5');
var key = 'iwrupvqb';

var MAX = 1000000; // Could be raised if no answer is found within limit
for (var i = 1; i < MAX; i++) {
  var hash = md5(key + i);
  if (hash.match('^0{5}')) {
    console.log(i);
    break;
  }
}
