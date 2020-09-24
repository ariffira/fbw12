//console.log('test node index file')
let name = 'Adel';
let age = 28;
let isTeacher = false;

let obj ={
    name : name,
    age : age,
    role : isTeacher
}
console.log(obj)

let arr =[name , age , isTeacher]
console.log(arr)

for (let i = 0; i < 3; i++)
    console.log('loop Nr', i, 'is:', name, age, isTeacher)

if (isTeacher)
    console.log('His name:', name, ',he is', age, 'years old,', 'he is a Teacher.')
else
    console.log('His name:', name, ',he is', age, 'years old,', 'he is a Student.')

function calc(a, b, x) {
    switch (x) {
        case '+':
            console.log(a, x, b, '=', (a+b))
            break;
        case '-':
            console.log(a, x, b, '=', (a-b))
            break;
        case '*':
            console.log(a, x, b, '=', (a*b))
            break;
        case '/':
            console.log(a, x, b, '=', (a/b))
            break;
    }
}
calc(1, 2 ,'+')
calc(5, 4 ,'-')
calc(10, 12 ,'*')
calc(160, 20 ,'/')

