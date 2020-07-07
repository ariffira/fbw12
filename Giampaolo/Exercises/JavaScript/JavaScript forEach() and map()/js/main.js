//map() method
// array.map(nameOfFunction)
// let myArray = [
//     'Arif',//  index 0
//     'Tanzina',//index 1
//     'Chuling',
//     'Cagri'
// ];

// let result = myArray.map(readArray);
// console.log(result);

// // callback function which will return some value to map
// function readArray(name) {
//     return 'Value: ' + name;
// };

let users = [
    {//0
        id: 1,
        name: {
            firstName: 'Arif',
            lastName: 'Islam'
        },
        age: 32,
        country: 'Bangladesh',
        profession: 'Trainer',
        address: {
            houseNo: 9,
            street: 'twingenBergplatz',
            city: 'Essen',
            zip: 34120
        },
        phone: '+4916754223',
        fav_food: ['apple', 'date', 'milk', 'honey', 'rice'],
        fav_books: [
            {
                type: 'Classic',
                bookList: ['Sharlok Homes', 'Jul vernes', 'Kingdom of Heaven']
            },
            {
                type: 'Horror',
                bookList: ['Mid-night Train', 'Unborn', 'Silence']
            }
        ]
    },
    {
        id: 2,
        name: {
            firstName: 'Richard',
            lastName: 'Müller'
        },
        age: 56,
        country: 'Germany',
        profession: 'Manager',
        address: {
            houseNo: 9,
            street: 'twingenBergplatz',
            city: 'Essen',
            zip: 34120
        },
        phone: '+4916754223',
        fav_food: ['apple', 'date', 'milk', 'honey', 'rice'],
        fav_books: [
            {//0
                type: 'Classic',
                bookList: ['Sharlok Homes', 'Jul vernes', 'Kingdom of Heaven']
            },
            {//1
                type: 'Comedy',
                bookList: ['Mr. bean', 'Charlie chaplin', 'Big-bang theory']
            }
        ]
    }
];

console.log(users);
console.table(users);

// return me the list of foods
function food_list(list) {
    let foodList = '';
    for (let i = 0; i < list.length; i++) {
        foodList += '<li>' + list[i] + '</li>';
    }
    return foodList;
};

// getAddress(): return full address
function getAddress(addressObject) {
    let fullAddress = `${addressObject.street} , ${addressObject.houseNo} <br> ${addressObject.zip} ,  ${addressObject.city}`;
    return fullAddress;
};

// get the fav books
function getBooks(bookInfo) {
    let listOfBook = '';
    for (let i = 0; i < bookInfo.length; i++) {
        listOfBook += '<h4><u>' + bookInfo[i].type + '</u></h4>';
        for (let book of bookInfo[i].bookList) {
            listOfBook += `<li>${book}</li>`;
        }
    }
    return listOfBook;
};

//map method
console.log(users.map(function (user) {
    let result = 'User Id: ' + user.id;
    return result;
}));

tabledata.innerHTML = users.map(userInfo).join('');
function userInfo(user, index) {
    console.log(index);
    let result = `<tr>
        <td>${user.id}</td>
        <td>${user.name.firstName}  ${user.name.lastName}</td>
        <td>${user.age}</td>
        <td>${user.country}</td>
        <td><ul>${food_list(user.fav_food)}</ul></td>
        <td>${getAddress(user.address)}</td>
        <td>${getBooks(user.fav_books)}</td>
        </tr>`;
    return result;
};

// for(let i = 0; i < users.length; i++) {
//     tabledata.innerHTML +=
//     `<tr>
//         <td>${users[i].id}</td>
//         <td>${users[i].name.firstName}  ${users[i].name.lastName}</td>
//         <td>${users[i].age}</td>
//         <td>${users[i].country}</td>
//         <td><ul>${food_list(users[i].fav_food)}</ul></td>
//         <td>${getAddress(users[i].address)}</td>
//         <td>${getBooks(users[i].fav_books)}</td>
//     </tr>`;
// }