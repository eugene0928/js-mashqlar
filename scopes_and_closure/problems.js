
//1-problem
// function is_symmetric(num){
//     let str = String(num).split('');
//     str = str.reverse()
//     return num === Number(str.join(''))
// }
//
// console.log(is_symmetric(111121111))

//2-problem
// function to_sec(hour){
//     return hour * 3600;
// }
//
// console.log(to_sec(10))

//3-problem

//1-way
// function biggest_nums(arr){
//     let arr1 = [];
//     for(let i = 0 ; i < arr.length; i++){
//         for(let l = 0; l < arr[i].length; l++){
//             if(arr[i][0] < arr[i][l]){
//                 arr[i][0] = arr[i][l]
//             }
//         }
//         arr1.push(arr[i][0])
//     }
//     return arr1;
// }
//
// console.log(biggest_nums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]))

//2-way
//
// function biggest_nums(arr){
//     let arr1 = [];
//     for(let i of arr){
//         arr1.push(Math.max(...i));
//     }
//     return arr1;
// }
// console.log(biggest_nums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]))

