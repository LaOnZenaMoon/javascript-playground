function makeAddr(x) {
  var y = 1;
  return function (z) {
    return x + y + z;
  }
}

var add5 = makeAddr(5);

console.log(add5(2));


function showHelp(help) {
  console.log(help);
}

function makeHelpCallback(help) {
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
    makeHelpCallback(item.help);
  }
}

setupHelp();
