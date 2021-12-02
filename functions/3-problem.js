let str = "tezkor jigarrang tulki";

function capitalize(str1){
    let arr = str1.split(' ');
    let arr1 = [];
    for(let i = 0; i < arr.length; i++){
        let a1 = arr[i].toLowerCase()
        arr1.push(arr[i].charAt(0).toUpperCase() + a1.slice(1));
    }
    return arr1.join(' ');
}

console.log(capitalize(str))