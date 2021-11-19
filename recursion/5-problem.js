let index = 2;
let arr = [0, 1];
let addNums = 0;
function fibonaci(num){
    if(num !== index && num !== 1 && num !== 0){
        arr.push(arr[index-2] + arr[index-1])
        index++;
        return fibonaci(num);
    }
    if(num === 0) return arr[num];
    if(num === 1) return arr[num];
    return arr[index-1];
}

console.log(fibonaci(10));