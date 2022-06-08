// // let name1 = "harry";
// // let name2 = "har";
// // let name3 = "hary";
// // let name4 = "hrry";
// // let name5 = "arry";
// // let name6 = "arr";
// // console.log(name1 + " is a bad boy");
// // console.log(name2 + " is a bad boy");
// // console.log(name3 + " is a bad boy");
// // console.log(name4 + " is a bad boy");
// // console.log(name5 + " is a bad boy");
// // console.log(name6 + " is a bad boy");
// // console.log(name7 + " is a bad boy");
// // alert("this is a hacking web page");
// let name = 32;
// console.log('hello world');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});