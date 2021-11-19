let arr1 = [];
function range(num1, num2){
    if(num1 === num2) return num2;
    num1++;
    if(num1 !== num2){
        arr1.push(num1)
        return range(num1, num2)
    }
    
    return arr1;
}

console.log(range(2, 9));