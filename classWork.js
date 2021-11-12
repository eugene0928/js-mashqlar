
function create_id(num){
    let ids = [];
    for (let i = 1; i <= num; i++) {
        ids.push(`${Date.now()}${i}`);
    }
    return ids;
}

const id_lists = create_id(3);

const makeUsers_list = (arr) => {
    let users = [];
    for (let i = 0; i < arr.length; i++) {
        users.push(`${Math.random().toString(36).substr(2, 10)}${i}`);
    }
    return users;
}

const users_list = makeUsers_list(id_lists);

function create_email(arr) {
    let gmails = [];
    for (let i = 0; i < arr.length; i++) {
        gmails.push(`${Math.random(1000**2).toString(36).substr(2, 10)}${i}`+'@gmail.com');        
    }
    return gmails;
}

const emails = create_email(users_list);

function create_pass(arr){
    let pass_list = [];
    for(let i = 0; i < arr.length; i++){
        pass_list.push(`${Math.random(1000**2).toString(36).substr(2, 9)}${i}${arr[i].substr(1, 4)}`);
    }
    return pass_list;
}

const passwords = create_pass(users_list);

console.log(id_lists);
console.log(users_list);
console.log(emails);
console.log(passwords);