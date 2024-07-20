// //const Ajv = require("ajv");
// const request = require('supertest');

//  test('API GET Request Test', async () => {
//   const response = await request('https://jsonplaceholder.typicode.com/posts/1')
//   .then((res) => res.json());

//   console.log("**********Hellow World****");
//   console.log(response);
  
//   //expect(response.status).toBe(200);
//   //expect(response.body.userId).toBe(1);
// });


// describe(`GET https://jsonplaceholder.typicode.com/posts/1`, () => {
//   let response;
//   let body;
// console.log();
// });

// test({
//   response = fetch('https://jsonplaceholder.typicode.com/posts/1');
// console.log(response);
// });

// it('descr', () => {
//  });
/*
(xcode) => x*y
(xcode) => {code}
*/
// it('descr', async mytest(code));
// describe('descr', mytest(code));
describe('Test case 1', () => {
  let jsondata;
  // it('Checking if THETIMES exists in publishers', async () => {
  //   const response = await fetch('http://localhost/narendra/publishers.json');
  //   const data = await response.json();
  //   //console.log(data.publishers[0]);
  //   expect(data.publishers[0]).toBe('THETIMES'); 
beforeAll(async() =>{
    const response = await fetch('http://localhost/narendra/publishers.json');
    const data = await response.json();
    //console.log(data.publishers[0]);
    //expect(data.publishers[0]).toBe('THETIMES'); 
    // console.log(data);
    jsondata = data;
  });

  console.log(jsondata);

  it('Verify ', ()=>{
    expect(jsondata.publishers[0]).toBe('THETIMES');

  });

});


