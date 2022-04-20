/* TRADITIONAL METHOD -------------------------------------------------*/
 const array = [0,23,5,2,234,99,22,56,88];

 for (let index = 0; index < array.length; index++) {
     const item = array[index];
     if(item > 0) testPassed = true;
     if (item <= 0) {
         testPassed = false;
         break;
     }   
 }
 console.log(testPassed);


/* EVERY METHOD -------------------------------------------------*/

const passed = array.every((item,_) => item > 0);

console.log(passed);
