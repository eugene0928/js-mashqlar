
//5-problem
// function join(arr, character) {
//     let new_arr = '';
//     for(let i = 0; i < arr.length; i++){
//         if(i === arr.length-1){
//             new_arr += arr[i];
//             break;
//         }
//         new_arr += arr[i] + character;
//     }
//     return new_arr;
// }
//
// let arr = ['red', 'blue', 'green'];
// console.log(join(arr, '+'))

//6-problem
// function addDash(num){
//     let str = '';
//     let arr = String(num);
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0 && i !== arr.length-1){
//             str += arr[i] + '-';
//             continue;
//         }
//         str += arr[i];
//     }
//     return str;
// }
//
// let num = 24568;
//
// console.log(addDash(num));

//7-problem

//1-solution
let arr = [2, 1, 47, -3, -2, 7, 10];
// let sorted = arr.sort((a, b) => {
//     return a-b;
// })
// console.log(sorted)

//2-solution
function sort(arr){
    for (let i = 0; i < arr.length; i++){
        for (let l = 0; l < arr.length-1; l++){
            if(arr[l] > arr[l+1]){
                let num = arr[l+1];
                arr[l+1] = arr[l];
                arr[l] = num;
            }
        }
    }
    return arr;
}
console.log(sort(arr));

