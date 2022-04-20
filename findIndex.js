/* TRADITIONAL METHOD -------------------------------------------------*/

let array = [
    {
        city: "California",
        buget: 15500
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

let result = -1;

for (let index = 0; index < array.length; index++) {
    const item = array[index];
    
    if (item.buget < 8000) {
        result = index;
        break;
    }
}
console.log(result);

/* FINDINDEX METHOD -------------------------------------------------*/

let result2 = array.findIndex(item => item.buget < 8000);
console.log(result2);
