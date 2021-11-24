
//1-problem

// function sortByDescending(num){
//
//     if(!isNaN(num)){
//         let str_num = String(num).split('');
//         str_num = str_num.sort((a, b) => b - a);
//         return Number(str_num.join(''));
//     } else {
//         return "Invalid input"
//     }
// }
//
// console.log(sortByDescending('123d'))

//2-problem
// function ageAfterYear(obj, n){
//     for(let i in obj){
//         if(isNaN(obj[i])) return "Invalid input";
//         if(typeof obj[i] === 'string' && !isNaN(obj[i])){
//             obj[i] = Number(obj[i])+n;
//         }else{
//             obj[i] += n;
//         }
//     }
//     return obj;
// }
//
// console.log(ageAfterYear({"joel": "21", "max": '23'}, 1))


//hometask
let najot_types = ['dasturlash', 'SMM', 'graphic design', 'foundation'];
let najot_ids = [1, 2, 3, 4];
let najot_class_types = ['foundation', 'nodejs', 'java', '.net', 'golang', 'flutter', 'smm pro', 'graphic design'];


let types = [
    {type_id: 1, type_name: 'dasturlash'}
];

let classes = [
    {class_id: 1, class_name: 'nodejs', time: '16.01.2021', class_type: 1}
];

let users = [
    {user_id: 1, firstname: 'Eshmatjon', lastname: 'Eshmatjonov', phone_number: 99893215646, time: '7.12.2020',
        class_id: 1
    }
];
// *********** creating types **********
let type_id = 1;
function create_type(type_name){
    if(najot_types.includes(type_name)){
        ++type_id;
        types.push({type_id, type_name});
    } else {
        console.log("We have not got such type of course :(");
    }
}

create_type('dasturlash');

// ********** creating classes ***********
let class_ids = 1;

function create_class(class_name){
    class_name = class_name.toLowerCase();
    if(najot_class_types.includes(class_name)){
        ++class_ids;
        let class_type;
        for(let i in najot_class_types){
            if(najot_class_types[i] === class_name)
                class_type = i;
        }
        classes.push({class_id: class_ids,
            class_name,
            time: Date(),
            class_type});
    } else {
        console.log("We have not got such course, Sorry :(");
    }
}

create_class('.net');

//**************** users *********************

let user_id = 1;

function create_user(firstname, lastname, phone_number){
    if(!isNaN(phone_number) && isNaN(lastname) && isNaN(firstname)){
        ++user_id;
        users.push({user_id, firstname, lastname, phone_number, time: Date(), class_id: user_id});
    } else {
        console.log('Invalid input. Try again:(');
    }
}

create_user('eugene09', 'eugene', '9989654782');

//************************** sorting by classes **********************

function sorting(arr){
    let obj = {};

    return arr.reduce((a, b) => {
        let value = b['class_name'];
        if(!obj[value]) {
            obj[value] = [];
        }
        obj[value].push(b);
        return obj

    },{})
}

// console.log(sorting(classes));

// ***************************** filter by classes **********************

function filter(arr, class_type){
    class_type = class_type.toLowerCase();
    let obj = arr.filter(value => {
        if(value['class_name'] === class_type)
            return true;
    });
    if(obj.length !== 0)
        return obj;
    return 'No match is found'
}

console.log(filter(classes, '.net'))
