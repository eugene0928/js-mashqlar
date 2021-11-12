//  2-masala
// function make_array(min, max){
//     const arr = [];
//     for(let i = min; i <= max; i++){
//         arr.push(i);
//     }
//     return arr;
// }

// console.log(make_array(1, 5));

// 3-masala
// function is_include(arr, item){
//     for(let i of arr){
//         if(i === item) return true;             // foreach bilan ishlanganda forni scope da return bergandim ishlamadi
//     }
//     return false;
// }

// const a = [1, 2, 3, 4, 5, 6];

// console.log(is_include(a, 9));

//4-masala

// function except(arr, item){
//     const new_arr = [];
//     if(typeof item === 'object'){
//         for (let i of arr) {
//             if(item.includes(i)) continue;
//             new_arr.push(i);
//         }
//     } else {
//         for (let i of arr) {
//             if(i === item) continue;
//             new_arr.push(i);
//         }
//     }
//     return new_arr;
// }

// const numbers = [1, 2, 3, 4];
// console.log(except(numbers, [2, 3]));

// 5-masala

// const arr = [1, 2, 3, 4, 5, 6, 7];

// function move(arr, index, offset) {
//     let num = arr[index];
//    arr.splice(index, 1);
//    arr.splice(offset, 0, num);

//    return arr;
// }

// console.log(move(arr, 1, 3));

// 6-masala

// function getMax(arr){
//     return Math.max(...arr);
// }

// const a = [1, 2, 3, 4];
// console.log(getMax(a));

// 7-masala

// const movies =[
//     {title: 'a', year: 2020, rating: 4.6},
//     {title: 'b', year: 2021, rating: 4.7},
//     {title: 'c', year: 2020, rating: 4.7},
//     {title: 'd', year: 2020, rating: 4.5}
// ]

// function getMovies(arr){
//     let new_m = [];
//     for(let i of arr){
//         if(i['year'] === 2020){
//             new_m.push(i);
//         }
//     }
//     new_m.sort(function(a, b){
//         return b.rating - a.rating;
//     });
//     return new_m;    
// }

// console.log(getMovies(movies));

//  1-masala

const numbers = [6, 2, 3, 4];

function sum(...a){
    let sum = (a, b) => a+b;

    if(a.length !== 1){
        return a.reduce(sum);
    } else {
        return a[0].reduce(sum);
    }
}

console.log(sum(numbers));
console.log(sum(1, 2, 3, 4));