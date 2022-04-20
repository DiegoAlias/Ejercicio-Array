
/* TRADITIONAL METHOD -------------------------------------------------*/
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

let result = [];
for (let index = 0; index < array.length; index++) {
    const item = array[index];
 

    if(item >= 5 && item <= 11){
        result.push(item);

    }

}   

console.log(result);

/*FILTER METHOD -------------------------------------------------*/
let result2  = array-filter(item => item >= 5 && item <= 11);
console.log(result2);
