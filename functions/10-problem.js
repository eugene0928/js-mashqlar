let i = 0;
let arr1 = [];
function coin(num, arr){
    if(i === arr.length) return arr1
    if(num-arr[i] >= 0){
        arr1.push(arr[i]);
        num = num - arr[i]
        return coin(num, arr)
    } if(num - arr[i] < 0) {
        i++;
        return coin(num, arr);
    }
}

console.log(coin(59, [25, 10, 5, 2, 1]));