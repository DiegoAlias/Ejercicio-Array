/* TRADITIONAL METHOD -------------------------------------------------*/
let array = [
    {
        city: "California",
        buget: 5500
    },
    {
        city: "NY",
        buget: 8000
    },
    {
        city: "Orlando",
        buget: 2000
    }
];

let result = {};

for (let index = 0; index < array.length; index++) {
    const item = array[index];
    
    if (item.buget < 8000) {
        result = item;
        break;
    }
}
console.log(result);

/* FIND METHOD -------------------------------------------------*/

let result2 = array.find(item => item.buget < 8000);
console.log(result2);
