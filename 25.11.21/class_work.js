
//1-problem
//
// let letters = {
//     A: 0,
//     B: 1,
//     C: 2,
//     D: 3,
//     E: 4,
//     F: 5,
//     G: 6,
//     H: 7,
//     I: 8,
//     J: 9,
//     K: 10,
//     L: 11,
//     M: 12,
//     N: 13,
//     O: 14,
//     P: 15,
//     Q: 16,
//     R: 17,
//     S: 18,
//     T: 19,
//     U: 20,
//     V: 21,
//     W: 22,
//     X: 23,
//     Y: 24,
//     Z: 25
// };
//
// function numAlp(str){
//     let result = '';
//     str = str.toUpperCase().split('');
//     for(let i of str){
//         result += letters[i] + " ";
//     }
//     return result;
// }
//
// console.log(numAlp('XYZ'));


//2-problem

// function digit(num){
//     let num_digit = 0;
//     if(num === 0) return 1;
//     while( num !== 0){
//         ++num_digit;
//         num = Math.floor(num / 10);
//     }
//     return num_digit;
// }
//
// console.log(digit(123567))


//3-problem

// function add(arr){
//     let result = []
//     for(let i = 0; i < arr.length; i++){
//         result = result.concat(arr[i]);
//     }
//     return result;
// }
//
// console.log(add([[1,2, 3], [4, 5], [6, 7]]))

//4-problem

// const a1 = 3, a2 = 2, a3 = 5, a4 = 4, a5 = 7, a6 = 6;

// function seq(num){
//     switch (num){
//         case 1:
//             console.log(a1);
//         break;
//         case 2:
//             console.log(a2);
//         break;
//         case 3:
//             console.log(a3);
//         break;
//         case 4:
//             console.log(a4);
//         break;
//         case 5:
//             console.log(a5);
//         break;
//         case 6:
//             console.log(a6);
//         break;
//         default:
//             console.log(0);
//         break;
//     }
//
// }
//
// seq(5)

//5-problem

let let_to_num = {
    a: 1, b: 2, c: 1, d: 2, e: 1, f: 2, g: 1, h: 2
};

function chess_board(str){
    str = str.split('');
    let num = Number(str[1]);
    if(str.length === 2 && Object.keys(let_to_num).includes(str[0])){
        if(let_to_num[str[0]] % 2 !== 0 && num % 2 !== 0){
            return 'black';
        } else if(let_to_num[str[0]] % 2 === 0 && num % 2 === 0){
            return 'black';
        } else if(let_to_num[str[0]] % 2 !== 0 && num % 2 === 0){
            return 'white';
        } else{
            return "white";
        }
    } else {
        return 'Invalid input';
    }

}

console.log(chess_board('d1'))

