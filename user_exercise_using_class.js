
let users = [
    {
        id: 1,
        username: 'john doe',
        age: '18',
        email: 'johndoe@gmail.com',
        password: 111111
    }
];

class User{
    constructor(arr) {
        this.arr = arr;
        this.id = 1;
    }

    get full_info(){
        return this.arr;
    }

    create_user(name, age, email, pass){
        this.id++;
        let id = this.id;
        let user = {id, name, age, email, password: pass};
        this.arr.push(user);
    }

    deleteUser(id){
        for(let i = 0; i < this.arr.length; i++){
            if(this.arr[i]['id'] === id){
                this.arr.splice(i, 1, 0);
            }
        }
    }

    updateUser(id, obj){
        let key = Object.keys(obj);
        for(let i = 0; i < this.arr.length; i++){
            if(this.arr[i]['id'] === id){
                this.arr[i][key] = obj[key];
            }
        }
    }

}

let user = new User(users)
user.create_user('ehsmatjon', '21', 'asdada@gmail.com', 123);
user.deleteUser(2)
user.updateUser(1, {username: 'scott'})
console.log(user.full_info)
