/* SOME METHOD -------------------------------------------------*/

const test2 = array.some(item => {
    return item.rating = undefined;
});

console.log(test2);

/* INCLUDE METHOD -------------------------------------------------*/

const item = {id: 1, name: "Linguinis", rating: 3.5};

const array =[
    {id: 0, name: "Las tortas de doña Marta"},
    item,
    {id: 2, name: "El sushi de perro"},
];

const test3 = array.includes(item);

console.log(test3);

