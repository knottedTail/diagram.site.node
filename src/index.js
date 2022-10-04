window.Buffer = require('buffer/').Buffer; 
var JSONStream = require('JSONStream');

// var stream = require('stream-browserify');
// var test = new stream();
// console.log(test.toWeb);
// console.log(stream.Readable);
// console.log(new stream());
// console.log(stream.Readable.toWeb);
// console.log(JSONStream.parse('*.geo'));

// var nodefetch = require('node-fetch');
// console.log(nodefetch);

// nodefetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => console.log(response.body));
// // src/index.js
// const parser = require('stream-json');
// console.log("HTML test");
// // window.Buffer = require('buffer/').Buffer; 


// // var request = require('request');
// // var JSONStream = require('JSONStream');

// // const {chain}  = require('stream-chain');

// // const {parser} = require('stream-json');
// // const {pick}   = require('stream-json/filters/Pick');
// // const {ignore} = require('stream-json/filters/Ignore');
// // const {streamValues} = require('stream-json/streamers/StreamValues');

// // var stream = require('stream');

// // var parser = JSONStream.parse();

// // var request = require('request')
// //   , JSONStream = require('JSONStream')
// //   , es = require('event-stream')
 
// // request({url: 'https://jsonplaceholder.typicode.com/users'})
// //   .pipe(JSONStream.parse('*.geo'))
// //   .pipe(es.mapSync(function (data) {
// //     console.error(data)
// //     return data
// //   }))



// // console.log(request({url: 'https://jsonplaceholder.typicode.com/todos/1'}))
fetch('https://main--profound-quokka-7e0251.netlify.app/data/components.json')
  .then(response => console.log(response.body))
  .catch(console.log);

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => console.log(response.body))
  .catch(console.log);

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => console.log(response.body))
//   .catch(console.log);
  // .then(body => {
  //   const reader = body.getReader();
  //   console.log(reader);
  // });

// // const parser = JSONStream.parse('*.geo');
// // const test = stream.Writable.toWeb(parser);
// // console.log(stream.isWritable(parser));
// console.log('CAT');
// // console.log(parser);
// // console.log(parser.resume);
// // console.log(parser.readable);
// // console.log(parser.writable);
// // console.log(parser.closed);
// // console.log(parser.destroyed);
// // console.log(parser.isPaused());
// // console.log(test);

// const content = fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.body)
//   // .then(body => console.log(body))
//   .catch(console.log);

// // console.log(response);
// // const test = stream.Readable.fromWeb(content);

//   // .then(body => {
//   //   const reader = body.getReader();
//   //   console.log(reader);
//   //   console.log(body);

//   //   body.pipeTo(JSON)
//   // }
//   // )

// // console.log(reader);