/* TRADITIONAL METHOD -------------------------------------------------*/

const array =[
    {id: 0, name: "Las tortas de doña Marta"},
    {id: 1, name: "Linguinis", rating: 3.5},
    {id: 2, name: "El sushi de perro"},
];

let test = false;

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
    if (item.rating = undefined) {
        test = true;
        break;
    }
}

console.log(test);

/* SOME METHOD -------------------------------------------------*/

const test2 = array.some( item => {
    return item.rating = undefined;
});

console.log(test2);

