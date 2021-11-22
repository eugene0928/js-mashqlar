
let id = 0;
let users_arr = [];
function addUser(name, password){
    let pattern = new RegExp("^(?=.*[a-z])(?=/*[A-Z]).+$")
    if(pattern.test(name) && name.length >= 6 && name.length <= 32 && password.length >= 8){
        ++id;
        users_arr.push({id: id, name: name, password: password})
    } else {
        console.log('You have entered invalid input!');
    }
}
let todo_list = [];
function todo(username, pass, task){
    let id1 = 0;
    for(let i = 0; i < users_arr.length; i++){
        if(users_arr[i]['name'] === username && users_arr[i]['password'] === pass){
            todo_list.push({todo_id: id1+1, todo_text: task, user_id: users_arr[i]['id']});
            break;
        } if(todo_list.length === id1){
            console.log('There is no such user:(');
        }
        ++id1;
    }
}


addUser('Eugene', '12345245');
addUser('Eugene01', '12345245');
addUser('Eugene02', '12345245');
todo('Eugene', '12345245', 'hi')
todo('Eugenesad', '12345245', 'hi')
todo('Eugene02', '12345245', 'hi')
// console.log(users_arr);
console.log(todo_list)