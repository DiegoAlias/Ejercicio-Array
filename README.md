# Ejercicio-Array

ejercicioArray
Ejercicio Array - Programación 3

/* EVERY METHOD -------------------------------------------------*/

const passed = array.every((item,_) => item > 0);

console.log(passed);

/* TRADITIONAL METHOD -------------------------------------------------*/ const array = [0,23,5,2,234,99,22,56,88];

for (let index = 0; index < array.length; index++) { const item = array[index]; if(item > 0) testPassed = true; if (item <= 0) { testPassed = false; break; }
} console.log(testPassed);

/FILTER METHOD -------------------------------------------------/ let result2 = array-filter(item => item >= 5 && item <= 11); console.log(result2);

/* TRADITIONAL METHOD -------------------------------------------------*/ let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

let result = []; for (let index = 0; index < array.length; index++) { const item = array[index];

if(item >= 5 && item <= 11){
    result.push(item);

}
}

console.log(result);

/* FIND METHOD -------------------------------------------------*/

let result2 = array.find(item => item.buget < 8000); console.log(result2);

/* TRADITIONAL METHOD -------------------------------------------------*/ let array = [ { city: "California", buget: 5500 }, { city: "NY", buget: 8000 }, { city: "Orlando", buget: 2000 } ];

let result = {};

for (let index = 0; index < array.length; index++) { const item = array[index];

if (item.buget < 8000) {
    result = item;
    break;
}
} console.log(result);

/* FINDINDEX METHOD -------------------------------------------------*/

let result2 = array.findIndex(item => item.buget < 8000); console.log(result2);

/* TRADITIONAL METHOD -------------------------------------------------*/

let array = [ { city: "California", buget: 15500 }, { city: "NY", buget: 8000 }, { city: "Orlando", buget: 2000 } ];

let result = -1;

for (let index = 0; index < array.length; index++) { const item = array[index];

if (item.buget < 8000) {
    result = index;
    break;
}
} console.log(result);

/NAMED FUNCTION/ function myFunc(item, index){ console.log(item,index); }

array.forEach(myFunc);

let array = [2,4,6,9,10,12];

/* TRADITIONAL METHOD*/ for (let i = 0; i < array.length; i++) { const item = array[i]; const index = i; console.log = i; }

/METODO FOREACH/ array.forEach( function(item, index) { console.log(item,index); });

/*ANONYMOUS FUNCTION */ array.forEach( (item, index) => { console.log(item,index); });

let array = ["Juan","Marcos","Lena","Sergio"];

/* MAP OPERATION ----------------------------------------------------*/ let result =[];

for (let index = 0; index < array.length; i++) { const item = array[index];

result.push(`<div>${item}</div>`);
}

console.log(result);

/* MAP METHOD ----------------------------------------------------*/ let result2 =array.map((item,index) => { return <div>${item}</div>; });

console.log(result2);

/* TRADITIONAL METHOD ----------------------------------------------------*/ for (let i = 0; i < array.length; i++) { const item = array[i]; const index = array[i];

}

/* SIMPLIFIED METHOD ----------------------------------------------------*/ for (let index = 0; index < array.length; i++) { const item = array[index];

}

/* REDUCE METHOD -------------------------------------------------*/

let result2 = array.reduce((prev,item,index)=>{ return prev + item; },1);

console.log(result2);

/* TRADITIONAL METHOD -------------------------------------------------*/

let array = [2,4,6,8,10,12,14,16];

let result = 0;

for (let index = 0; index < array.length; index++) { const item = array[index];

  result = result + item;
}

console.log(result);

/* SOME VS INCLUDE METHOD -------------------------------------------------*/

/* SOME METHOD -------------------------------------------------*/

const test2 = array.some(item => { return item.rating = undefined; });

console.log(test2);

/* INCLUDE METHOD -------------------------------------------------*/

const item = {id: 1, name: "Linguinis", rating: 3.5};

const array =[ {id: 0, name: "Las tortas de doña Marta"}, item, {id: 2, name: "El sushi de perro"}, ];

const test3 = array.includes(item);

console.log(test3);

/* SOME METHOD -------------------------------------------------*/

const test2 = array.some( item => { return item.rating = undefined; });

console.log(test2);

/* TRADITIONAL METHOD -------------------------------------------------*/

const array =[ {id: 0, name: "Las tortas de doña Marta"}, {id: 1, name: "Linguinis", rating: 3.5}, {id: 2, name: "El sushi de perro"}, ];

let test = false;

for (let index = 0; index < array.length; index++) { const element = array[index];

if (item.rating = undefined) {
    test = true;
    break;
}
}

console.log(test);

/* SORT METHOD -------------------------------------------------*/

let array2 = [...array];

array2.sort ((i,j) => { return i - j; });

console.log(array2);

/* BUBBLE METHOD -------------------------------------------------*/

const array = [2,10,4,22,56,1000,3,45,6];

for (let i = 0; i < array.length; i++) {

for(let j = 1; j < array.length; j++){
    if(array[i] > array[j]){
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
}

console.log(array);
