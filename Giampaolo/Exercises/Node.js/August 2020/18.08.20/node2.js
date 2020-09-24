console.log('Hi Node.js')

let myFunction = (para1, para2) => {
    if (para1 === 0) {
        return new Error ('The first number cannot be 0')
    }

    return para1 * para2
}

console.log(myFunction(1, 6));

let myArray = [
    'Giampaolo',
    'Adel',
    'Jessica',
    'Arif'
]

myArray.forEach(item => console.log(item))

class Test {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
}

let users = [
    new Test ('Paolo', 'L.'),
    new Test ('Jessica', 'J.'),
    new Test ('Arif', 'I.')
]

console.log(' ')

users.map(item => console.log(item.firstName, item.lastName))

