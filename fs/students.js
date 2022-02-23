const fs = require('fs')
const [, , flag, studentIdOrName, newUserName] = process.argv
let students = fs.readFileSync('students_info.json', 'utf-8')
students = JSON.parse(students.trim() || null) || []

if(flag == 'POST' && typeof studentIdOrName == 'string' && !newUserName) {
    let user = students.find( el => el.name == studentIdOrName)
    if(user) {
        console.log('This user is already exists!')
        return
    }
    
        students.push({
            id: students.length == 0 ? 1 : students.at(-1).id + 1,
            name: studentIdOrName
        })
    

    fs.writeFileSync('students_info.json', JSON.stringify(students, null, 4))

    console.log('User is added successfully!')
}