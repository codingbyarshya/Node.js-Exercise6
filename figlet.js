const figlet = require('figlet');

const text = 'Arshya Razavi Nematollahi';
figlet(text, function (err, data) {
  if (err) {
    console.log('sth is incorrect ...');
    console.dir(err);
    return;
  }
  console.log(data);
});
