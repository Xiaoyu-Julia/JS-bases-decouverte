// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

secretMessage.pop();
secretMessage.push('to', 'program');
secretMessage.splice(6, 5, 'right');
secretMessage.shift();
secretMessage.unshift('Programming');
secretMessage.splice(5, 5, 'know');
secretMessage.join(console.log('test'));
