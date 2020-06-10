let users = [
    {
        id: 1,
        name: {
            firstName: 'Giampaolo',
            secondName: 'Lo Cascio'
        },
        age: 27,
        favoriteBooks: [
            'Harry Potter',
            'Lord of The Rings',
            'Assassin\'s Creed',
            'Hunger Games'
        ],
        favoriteFood: [
            'Kebab',
            'Pizza',
            'Pasta',
            'Rice',
            'Orange',
            'Lemon',
            'Ice Cream'
        ],
        address: [
            street = 'Dellstraße',
            houseNumber = '55',
            zip = '45045',
            room = 'Room: 333',
            floor = 'Floor: 4'
        ],
        hobbys: [
            'Videogames',
            'Movies',
            'Comics',
            'Books',
            'Hiking',
            'Writing',
            'Coding'
        ]
    },

    {
        id: 2,
        name: {
            firstName: 'Giampaolo',
            secondName: 'Lo Cascio'
        },
        age: 27,
        favoriteBooks: [
            'Harry Potter',
            'Lord of The Rings',
            'Assassin\'s Creed',
            'Hunger Games'
        ],
        favoriteFood: [
            'Kebab',
            'Pizza',
            'Pasta',
            'Rice',
            'Orange',
            'Lemon',
            'Ice Cream'
        ],
        address: [
            street = 'Dellstraße',
            houseNumber = '55',
            zip = '45045',
            room = 'Room: 333',
            floor = 'Floor: 4'
        ],
        hobbys: [
            'Videogames',
            'Movies',
            'Comics',
            'Books',
            'Hiking',
            'Writing',
            'Coding'
        ]
    },

    {
        id: 3,
        name: {
            firstName: 'Giampaolo',
            secondName: 'Lo Cascio'
        },
        age: 27,
        favoriteBooks: [
            'Harry Potter',
            'Lord of The Rings',
            'Assassin\'s Creed',
            'Hunger Games'
        ],
        favoriteFood: [
            'Kebab',
            'Pizza',
            'Pasta',
            'Rice',
            'Orange',
            'Lemon',
            'Ice Cream'
        ],
        address: [
            street = 'Dellstraße',
            houseNumber = '55',
            zip = '45045',
            room = 'Room: 333',
            floor = 'Floor: 4'
        ],
        hobbys: [
            'Videogames',
            'Movies',
            'Comics',
            'Books',
            'Hiking',
            'Writing',
            'Coding'
        ]
    },

    {
        id: 4,
        name: {
            firstName: 'Giampaolo',
            secondName: 'Lo Cascio'
        },
        age: 27,
        favoriteBooks: [
            'Harry Potter',
            'Lord of The Rings',
            'Assassin\'s Creed',
            'Hunger Games'
        ],
        favoriteFood: [
            'Kebab',
            'Pizza',
            'Pasta',
            'Rice',
            'Orange',
            'Lemon',
            'Ice Cream'
        ],
        address: [
            street = 'Dellstraße',
            houseNumber = '55',
            zip = '45045',
            room = 'Room: 333',
            floor = 'Floor: 4'
        ],
        hobbys: [
            'Videogames',
            'Movies',
            'Comics',
            'Books',
            'Hiking',
            'Writing',
            'Coding'
        ]
    },

    {
        id: 5,
        name: {
            firstName: 'Giampaolo',
            secondName: 'Lo Cascio'
        },
        age: 27,
        favoriteBooks: [
            'Harry Potter',
            'Lord of The Rings',
            'Assassin\'s Creed',
            'Hunger Games'
        ],
        favoriteFood: [
            'Kebab',
            'Pizza',
            'Pasta',
            'Rice',
            'Orange',
            'Lemon',
            'Ice Cream'
        ],
        address: [
            street = 'Dellstraße',
            houseNumber = '55',
            zip = '45045',
            room = 'Room: 333',
            floor = 'Floor: 4'
        ],
        hobbys: [
            'Videogames',
            'Movies',
            'Comics',
            'Books',
            'Hiking',
            'Writing',
            'Coding'
        ]
    },

    {
        id: 6,
        name: {
            firstName: 'Giampaolo',
            secondName: 'Lo Cascio'
        },
        age: 27,
        favoriteBooks: [
            'Harry Potter',
            'Lord of The Rings',
            'Assassin\'s Creed',
            'Hunger Games'
        ],
        favoriteFood: [
            'Kebab',
            'Pizza',
            'Pasta',
            'Rice',
            'Orange',
            'Lemon',
            'Ice Cream'
        ],
        address: [
            street = 'Dellstraße',
            houseNumber = '55',
            zip = '45045',
            room = 'Room: 333',
            floor = 'Floor: 4'
        ],
        hobbys: [
            'Videogames',
            'Movies',
            'Comics',
            'Books',
            'Hiking',
            'Writing',
            'Coding'
        ]
    }
];

let show = () => {
    users.map(displayArray);
};

let showHobbys = (item) => {
    return result = `
    <li>${item}</li>`;
};

let showItem = (item) => {
    return item;
};

let displayArray = (item) => {
    let result = [`
    <tr>
        <td>${item.id}</td>
        <td>${item.name.firstName} ${item.name.secondName}</td>
        <td>${item.age}</td>
        <td>
            <ul>
                ${item.hobbys.map(showHobbys).join('')}
            </ul>
        </td>
        <td>${item.address.map(showItem).join('<br>')}</td>
        <td>${item.favoriteBooks.map(showItem).join('<br>')}</td>
        <td>${item.favoriteFood.map(showItem).join('<br>')}</td>
    </tr>
    `]
    return userInformations.innerHTML += result
};

let array = [
    1,
    2,
    3,
    4,
    5,
    6
]

let methodForEach = (item, index) => {
    return index + item.toString()
}

let log = array.map(methodForEach);
console.log(log)



// // let and var differences
// let myFunction = () => {
//     x = 50;
//     for (var x = 0; x < 10; x++) {
//         console.log('Show nothing');
//     };

//     console.log(x);

//     let i = 0;
//     if (i < 0) {
//          // switching let in var for testing
//         console.log(i + x)
//     } else if (i > 0) {
//         console.log(i + x)
//     } else {
//         console.log(i + x)
//     };
// };

// myFunction();

// let myFunction2 = myFunction();

// myFunction2();

// for (let x = 0; x < 1; x++) {
//     for(let x = 0; x < 5; x++) {
//         var n = 2;
//         console.log(x + n);
//     };
//     console.log('Show nothing');
// };

// console.log(n);