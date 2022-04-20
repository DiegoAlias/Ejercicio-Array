/* TRADITIONAL METHOD -------------------------------------------------*/

let array = [2,4,6,8,10,12,14,16];

 let result = 0;

  for (let index = 0; index < array.length; index++) {
      const item = array[index];

      result = result + item;
      
  }

  console.log(result);

/* REDUCE METHOD -------------------------------------------------*/

let result2 = array.reduce((prev,item,index)=>{
    return prev + item;
},1);

console.log(result2);
