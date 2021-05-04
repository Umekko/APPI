function getB() {
    const b = 1;
  
    return new Promise((resolve) => {
        resolve(b);
    });
 }
  
 async function test() {
    console.log('Started test...'); // ? - 2
  
    setTimeout(() => {
        console.log('Set timeout callback #1'); // ? - 9
    }, 2000);
  
    getB().then((b) => console.log('Getting b from then ..., b: ', b)); // ? -5
  
    console.log('Some code ...'); // ? - 3
  
    const b = await getB(); асинх
  
    console.log('from await, b: ', b); // ? - 6
  
    setTimeout(() => {
        console.log('Set timeout callback #2') // ? - 8
    });
  
    return 200;
 }
  
 console.log('Main Thread'); // ? - 1
  
 test().then((code) => {
    console.log('Test is ended, code: ', code) // ? - 7 200
 });
 console.log('Other Sync code in Main Thread'); // ?  - 4
  
 setTimeout(() => {
    console.log('Outer set timeout #1') // ? аснинх - 
 }, 0);
 

//  1.Main thread
//  2.Other Sync code in Main Thread
//  3.Started test...
//  4.Getting b from then ..., b: 1
//  5.Some code ...
//  6.from await, b: 1
//  7.Outer set timeout #1
//  8.Set timeout callback #2
//  9.Set timeout callback #1
//  10.Test is ended, code: 200



Main Thread
Started test...
Some code ...
Other Sync code in Main Thread
Getting b from then ..., b:  1
from await, b:  1
Test is ended, code:  200     
Outer set timeout #1
Set timeout callback #2
Set timeout callback #1