let array = ["Juan","Marcos","Lena","Sergio"];

/* TRADITIONAL METHOD ----------------------------------------------------*/
for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const index = array[i];
        
}

/* SIMPLIFIED METHOD ----------------------------------------------------*/
for (let index = 0; index < array.length; i++) {
    const item = array[index];
            
}

/* MAP OPERATION ----------------------------------------------------*/
let result =[];

for (let index = 0; index < array.length; i++) {
    const item = array[index];
    
    result.push(`<div>${item}</div>`);
}

console.log(result);


/* MAP METHOD ----------------------------------------------------*/
let result2 =array.map((item,index) => {
    return `<div>${item}</div>`;
});

console.log(result2);