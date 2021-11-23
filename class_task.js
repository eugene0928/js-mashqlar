
//1-problem
// function animal_legs(chic, cow, pig){
//     let chicken = 2, cows = 4, pigs = 4;
//     return chic * chicken + cow * cows + pig * pigs;
// }
//
// console.log(animal_legs(2, 3, 5))

//2-problem

// function sortByLength(arr){
//    for(let i = 0; i < arr.length; i++){
//        for(let l = 0; l < arr.length-1; l++){
//            if(arr[l].length > arr[l+1].length){
//                let word = arr[l];
//                arr[l] = arr[l+1];
//                arr[l+1] = word;
//            }
//        }
//    }
//    return arr;
// }
//
// console.log(sortByLength(['google', 'apple', 'microsoft']))


//3-problem

// function omnipresent(arr, num){
//     let yes = 0;
//     for(let i of arr){
//         if(i.includes(num)){
//             ++yes;
//             console.log(yes)
//         }
//     }
//     return yes === arr.length;
// }
//
// console.log(omnipresent([[1, 1], [1, 3, 2], [1, 5, 2], [1, 2, 4]], 1));

//4-problem

// function highestLowest(str){
//     let arr = str.split(' ');
//     let num_arr = arr.map(value => {
//         return Number(value);
//     })
//     let big =  `${String(Math.max(...num_arr))}`;
//     let small = `${String(Math.min(...num_arr))}`
//     if(big === small) return 'Input value is the same';
//     return `${big} ${small}`;
// }
//
// console.log(highestLowest('1 6 34 7 9'))

//5-problem

function missingNum(arr){
    arr = arr.sort((a, b) => a - b);
    let misNum;
    for(let i = 0; i < arr.length; i++){
        if(arr[i]+1 === arr[i+1]) {
            continue;
        }
        else if(arr[i]+1 === undefined){
            misNum = 10;
            break;
        } else if(arr[i] + 1 !== arr[i+1]){
            misNum = arr[i]+1;
            break;
        }
    }
    return misNum;
}

// console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]))
// console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]))
console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]))