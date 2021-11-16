
//6-problem
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// function getIndex(arr, start, end){
//     let arr1 = arr.splice(start, end);
//     return arr1;
// }
//
// console.log(getIndex(arr, 1, 4));

//7-problem

// let arr = [1, 2, 1, 3, 2, 5];
// function delItem(arr){
//     let new_arr = [];
//     for(let i = 0; i < arr.length; i++){
//         if( new_arr.includes(arr[i]) === false){
//             new_arr.push(arr[i]);
//         }
//     }
//     return new_arr;
// }
//
// console.log(delItem(arr));


//
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
//
// function add(arr1, arr2){
//     return arr1.concat(arr2);
// }
//
// console.log(add(arr1, arr2));

// function add(arr1, arr2){
//     for (let i of arr2){
//         arr1.push(i);
//     }
//     return arr1;
// }
//
// console.log(add(arr1, arr2))

//9-problem

// let a = [1, 3, 4];
// let b = [4, 2, 1];
//
// function same(arr1, arr2){
//     let same = [];
//     for(let i of arr1){
//         if(arr2.includes(i))
//             same.push(i);
//     }
//     return same;
// }
//
// console.log(same(a, b))

//10-problem

// let a = [1, 2, 3, 4];
//
// function empty(arr){
//     // arr = []
//     arr.length = 0;
//     return arr;
// }
//
// console.log(empty(a))

//11-problem
// let a = ['1', '2', '3', 's', true, false];
//
// function convertType(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(typeof arr[i] === 'string')
//             arr[i] = Number(arr[i]);
//         else if(typeof arr[i] === "boolean"){
//             arr[i] = Number(arr[i]);
//         }
//     }
//     return arr;
// }
//
// console.log(convertType(a));

//12-problem
// let a = [1, 2, 3, 'a'];
// function makeObj(arr){
//     let obj = {};
//     for(let i = 0; i < arr.length-1; i++){
//         obj[i] = arr[i+1];
//     }
//     return obj;
// }
//
// console.log(makeObj(a))


//2-problem
// let b = [1];

// 3-problem
// function makeArray(){
//     let array = new Array(5).fill(1);
//     return array;
// }
//
// console.log(makeArray())

//4-problem
// let a = [1, 2, 3];
// function makeString(arr){
//     // return arr.toString();
//     // return arr.join(" ")
// }
//
// console.log(makeString(a))

//5-problem
// let arr = [1, 2, 3];
//
// function addElem(arr){
//     for(let i = 0; i < 3; i++){
//         arr.unshift(i);
//         arr.push(i);
//     }
//     let average = arr.reduce((a, b) => { return a+b }) / arr.length
//     return [arr, average];
// }
//
// console.log(addElem(arr))

//palindrome

// function is_palindrome(word){
//     let word1 = word.toString()
//     let arr = word1.split("");
//
//     return arr.join('') === arr.reverse().join('');
// }
//
// console.log(is_palindrome(919))

//next number

// function nextNum(num) {
//     if (typeof num === 'number') {
//         return num + 1;
//     }
//     else{
//         return "This is not a number";
//     }
// }
//
// console.log(nextNum(9))

