
let array = [
    {name: 'Chris', work: 'dev'},
    {name: 'George', work: 'tes'},
    {name: 'toshmatjon', work: 'dev'},
    {name: 'eshmatjon', work: 'tes'},
    {name: 'Scott', work: 'AI'}
];

function sort(arr, item){
    let obj = {};
    let work = [];
    let same_all = [];
    for(let i in arr){
        if(work.includes(arr[i][item]) === false){
            work.push(arr[i][item])
        }
    }
    for(let i in work){
        let same = [];
        for(let l in arr){
            if(work[i] === arr[l][item]){
                same.push(arr[l]);
            }
        }
        same_all.push(same);
    }
    for(let i in work){
        obj[work[i]] = same_all[i]
    }

    return obj;
}

console.log(sort(array, 'work'))



