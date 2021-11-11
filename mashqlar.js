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

function except(arr, item){
    const new_arr = [];
    if(typeof item === 'object'){
        for (let i of arr) {
            if(item.includes(i)) continue;
            new_arr.push(i);
        }
    } else {
        for (let i of arr) {
            if(i === item) continue;
            new_arr.push(i);
        }
    }
    return new_arr;
}

const numbers = [1, 2, 3, 4];
console.log(except(numbers, [2, 3]));

