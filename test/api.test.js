require("dotenv").config();
//console.log(process.env.API_BASE_URL);

let jsondata;
beforeAll(async() =>{
  const url = `${process.env.API_BASE_URL}?api_key=${process.env.API_KEY}`;
  console.log(url);
    const response = await fetch(url); // full url should be https://api.themoviedb.org/3/movie/550?api_key=3bf33331bf07dfd455b91852342c5b1f
    const data = await response.json();
    jsondata = data;
  });
describe('Account Module', () => {




  it('Verify ', ()=>{
    console.log(jsondata);
    expect(jsondata.budget).toBe(63000000);

  });

  it('Verify ', ()=>{
    console.log(jsondata);
    expect(jsondata.publishers[0]).toBe('THETIMES');

  });

});

describe('Payment Module', () => {




  it('Verify ', ()=>{
    console.log(jsondata);
    expect(jsondata.budget).toBe(63000000);

  });

  it('Verify ', ()=>{
    console.log(jsondata);
    console.log(jsondata);// //
    expect(jsondata.publishers[0]).toBe('THETIMES');

  });

});

describe('Product Module', () => {




  it('Verify ', ()=>{
    console.log(jsondata);
    expect(jsondata.budget).toBe(63000000);

  });

  it('Verify ', ()=>{
    console.log(jsondata);
    expect(jsondata.publishers[0]).toBe('THETIMES');

  });

});


