function showHelp(help) {
  // document.getElementById('help').innerHTML = help;
  console.log(help);
}

function makeHelpCallback(help) {
  // return function() {
  //   showHelp(help);
  // };
  setTimeout(function() { showHelp(help)}, 1000);
}

function setupHelp() {
  var helpText = [
    {'id': 'email', 'help': 'Your e-mail address'},
    {'id': 'name', 'help': 'Your full name'},
    {'id': 'age', 'help': 'Your age (you must be over 16)'}
  ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    // (function(item) {
    //   makeHelpCallback(item.help);
    // })(item);
    makeHelpCallback(item.help);
  }
}

setupHelp();


var callbacks = [];
for (var i = 0; i <= 2; i++) {
  callbacks[i] =  i * 2;
}

console.log(callbacks[0]) // 6
console.log(callbacks[1]) // 6
console.log(callbacks[2]) // 6


var sum = 0;
for (var i = 0; i < 10; i++) {
  sum += i;
}
console.log("sum:", sum);
console.log("i:", i);
