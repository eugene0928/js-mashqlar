let power1 = 1;
function power(num1, num2){
    if(num2 !== 0){
        power1 *= num1;
        num2--;
        return power(num1, num2)
    }
    return power1;
}

console.log(power(8, 2));