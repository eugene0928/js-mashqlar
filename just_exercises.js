
// 1-problem

// function chatRoomStatus(arr){
//     if(arr.length === 0) return "no one online";

//     if(arr.length === 1) return `${arr[0]} online`;

//     if(arr.length === 2) return `${arr[0]} and ${arr[1]}  online`;

//     if(arr.length > 2) return `${arr[0]}, ${arr[1]} and ${arr.length - 2} more online`;
// }

// console.log(chatRoomStatus(["eugene09", "scott", "admin", "adminka"]));


// 3-problem

// function basicCal(num, syb, num2){
//     if(!isNaN(num) && !isNaN(num2)){
//         switch(syb){
//             case '+':
//                 return num + num2;
//             case '-':
//                 return num - num2;
//             case '*':
//                 return num * num2;
//             case '/':
//                 return num / num2;
//         }
//     } else return 'Invalid input, try again:(';
// }

// console.log(basicCal(5, '*', 100));

// 4-problem

// function equation(str){
//     let arr = str.split(' ');
//     console.log(arr);
    
//     if(arr.indexOf('x') === 0){
        
//         if(!isNaN(Number(arr[2])) && isNaN(Number(arr[arr.length-1]))){
//             switch(arr[1]){
//                 case '+': return Number(arr[arr.length-1]) - Number(arr[2]);
//                 case '-': return Number(arr[arr.length-1]) + Number(arr[2]);
//                 case '*': return Number(arr[arr.length-1]) / Number(arr[2]);
//                 case '/': return Number(arr[arr.length-1]) * Number(arr[2]);
//             }
//         }
//         else return 'Invalid input, try again';
//     }
//     else if(arr.indexOf('x') === 2){
//         if(!isNaN(Number(arr[0])) && !isNaN(Number(arr[arr.length-1]))){
//             switch(arr[1]){
//                 case '+': return Number(arr[arr.length-1]) - Number(arr[0]);
//                 case '-': return Number(arr[0]) - Number(arr[arr.length-1]);
//                 case '*': return Number(arr[arr.length-1]) / Number(arr[0]);
//                 // case '/': return Number(arr[arr.length-1]) * Number(arr[0]);
//             }
//         }
//         else return "Invalid input";
//     }
//     else return "Invalid input";
// }

// console.log(equation("x / x = 10"));



// distance between points

function distance(obj1, obj2){
    const a = obj2.x - obj1.x;
    const b = obj2.y - obj1.y;

    return `Distance: ${Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)).toFixed(2)}`;
}

console.log(distance({x: -2, y: 1}, {x: 4, y: 3}));