
function biggest(str){
    let arr = str.split(' ');
    let big = arr.reduce((a, b) => {
        return a.length > b.length ? a : b;
    })
    return big;
}

console.log(biggest("Veb ishlab chiqish bo'yicha qo'llanma"));