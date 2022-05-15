let num = 266219;
let array = ("" + num).split("").map(Number);
console.log(array);


let result = array.reduce(function(sum, current) {
    
    return sum * current;

    
});

console.log(result);
console.log(result**3);

console.log(String(result**3).slice(0,2));