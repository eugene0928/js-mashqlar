function allComb(string) {
    let result = [];
    for (let i = 0; i < string.length; i++){
        for (let j = i + 1; j <= string.length; j++){
            result.push(string.slice(i, j));
        }
    }
    return result;
}
console.log(allComb('dog'));