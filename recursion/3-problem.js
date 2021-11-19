let index = 0;
let sum1 = 0;
function sum(arr){
    sum1 += arr[index];
    index++;
    if(index !== arr.length){
        return sum(arr);
    }
    return sum1;
}

console.log(sum([1, 2, 3, 4, 5, 6]));