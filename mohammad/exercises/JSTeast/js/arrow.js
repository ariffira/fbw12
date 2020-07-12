let calculation = (n1, n2, z) => {
    let result = eval(n1 + z + n2);
    return result
}

let result = () => {
    document.getElementById('result1').innerHTML = calculation(document.getElementById('n1').value, document.getElementById('n2').value, document.getElementById('operation').value);
}



let users = [{
        id: 1,
        name: 'Mohammad',
        age: 29,
        jop: 'Wep developer',
        from: 'Syria'
    },
    {
        id: 2,
        name: 'Susann',
        age: 24,
        jop: 'musician',
        from: 'Germany'
    },
    {
        id: 3,
        name: 'Steven',
        age: 30,
        jop: 'Acter',
        from: 'Holand'
    },
    {
        id: 3,
        name: 'Rainer',
        age: 21,
        jop: 'Waiter',
        from: 'UK'
    },
    {
        id: 4,
        name: 'Ahmed',
        age: 35,
        jop: 'HR',
        from: 'Jordan'
    }
];
let tableRows = [
    `<table ><tr><th>id</th><th>name</th><th>age</th><th>jop</th><th>from</th></tr>`,
    `<tr><td>${users[0].id}</td><td>${users[0].name}</td><td>${users[0].age}</td><td>${users[0].jop}</td><td>${users[0].from}</td></tr>`,
    `<tr><td>${users[1].id}</td><td>${users[1].name}</td><td>${users[1].age}</td><td>${users[1].jop}</td><td>${users[1].from}</td></tr>`,
    `<tr><td>${users[2].id}</td><td>${users[2].name}</td><td>${users[2].age}</td><td>${users[2].jop}</td><td>${users[2].from}</td></tr>`,
    `<tr><td>${users[3].id}</td><td>${users[3].name}</td><td>${users[3].age}</td><td>${users[3].jop}</td><td>${users[3].from}</td></tr>`,
    `<tr><td>${users[4].id}</td><td>${users[4].name}</td><td>${users[4].age}</td><td>${users[4].jop}</td><td>${users[4].from}</td></tr>`,
    '</table>'
];

let user = () => {

    let userN = document.getElementById('name').value;
    switch (userN) {
        case 'Mohammad':
            document.getElementById('users').innerHTML = tableRows[0] + tableRows[1] + tableRows[6];
            break;

        case 'Susann':
            document.getElementById('users').innerHTML = tableRows[0] + tableRows[2] + tableRows[6];
            break;
        case 'Steven':
            document.getElementById('users').innerHTML = tableRows[0] + tableRows[3] + tableRows[6];
            break;
        case 'Rainer':
            document.getElementById('users').innerHTML = tableRows[0] + tableRows[4] + tableRows[6];
            break;
        case 'Ahmed':
            document.getElementById('users').innerHTML = tableRows[0] + tableRows[5] + tableRows[6];
            break;
        default:
            document.getElementById('users').innerHTML = tableRows[0] + tableRows[1] + tableRows[2] + tableRows[3] + tableRows[4] + tableRows[5] + tableRows[6];
            break;
    }

}