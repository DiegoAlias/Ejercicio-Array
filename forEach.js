let array = [2,4,6,9,10,12];

/* TRADITIONAL METHOD*/
for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const index = i;
    console.log = i; 
}

/*METODO FOREACH*/
array.forEach( function(item, index) {
    console.log(item,index);
});

/*ANONYMOUS FUNCTION */
array.forEach( (item, index) => {
    console.log(item,index);
});

/*NAMED FUNCTION*/
function myFunc(item, index){
    console.log(item,index);
}

array.forEach(myFunc);