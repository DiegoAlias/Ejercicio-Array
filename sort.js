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

/* SORT METHOD -------------------------------------------------*/

let array2 = [...array];

array2.sort ((i,j) => {
    return i  - j;
});

console.log(array2);