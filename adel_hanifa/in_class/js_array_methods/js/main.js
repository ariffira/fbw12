let users = [
    user1 = { 
        id: 1,
        name: {
            firstName: 'Arif',
            lastName: 'Islam'
        },
        age: 32,
        country: 'Bangladesh',
        address: {
            houseNo: 9,
            street: 'twingenBergplatz',
            city: 'Essen',
            zip: 34120
        },
        phone: '+4916754223',
        fav_food: ['apple', 'date', 'milk', 'honey'],
        fav_books: [
            {
                type: 'Classic',
                bookList: ['Sharlok Homes', 'Jul vernes', 'Kingdom of Heaven']
            }

        ],
        img: '<img src="img/user.png">'
    },
    user2 = {//1
        id: 2,
        name: {
            firstName: 'Richard',
            lastName: 'Müller'
        },
        age: 56,
        country: 'Germany',
        address: {
            houseNo: 9,
            street: 'twingenBergplatz',
            city: 'Essen',
            zip: 34120
        },
        phone: '+4916754223',
        fav_food: ['date', 'milk', 'honey', 'rice', 'apple'],
        fav_books: [
            {
                type: 'Classic',
                bookList: ['Sharlok Homes', 'Jul vernes', 'Kingdom of Heaven']
            },
            {
                type: 'Comedy',
                bookList: ['Mr. bean', 'Charlie chaplin', 'Big-bang theory']
            }
        ],
        img: '<img src="img/user.png">'
    }
];

tabelUsersDisplay();

function tabelUsersDisplay() {
    tabledata.innerHTML = ``;
    for (let i = 0; i < users.length; i++) {
        console.log(users[i])
        tabledata.innerHTML +=
            `<tr id="userlist${i}"></tr>`;

        document.getElementById("userlist" + i).innerHTML +=
            `<td>${users[i].id}</td>
            <td>${users[i].name.firstName}  ${users[i].name.lastName}</td>
            <td>${users[i].age}</td>
            <td>${users[i].country}</td>
            <td>${users[i].address.street} ${users[i].address.houseNo}<br>${users[i].address.zip} ${users[i].address.city}</td>
            <td>${users[i].phone}</td>
            <td id="fav_food${i}" class="list"></td>
            <td id="fav_book${i}" class="list"></td>
            <td>${users[i].img}</td>
            <td><button onclick="edittabelUsers(${(i)})">Edit</button><button onclick="deletetabelUsers(${(i)}, 1)">Delete</button></td>`;


        for (let j = 0; j < users[i].fav_food.length; j++) {
            document.getElementById("fav_food" + i).innerHTML += `
            <li>${users[i].fav_food[j]}</li>`;
        }

        for (let j = 0; j < users[i].fav_books.length; j++) {
            document.getElementById("fav_book" + i).innerHTML += `
            <div id="fav_book${i}_${j}" style=" margin: 5px;">
            <b>${users[i].fav_books[j].type}</b>
            </div>`;

            for (let k = 0; k < users[i].fav_books[j].bookList.length; k++) {
                document.getElementById("fav_book" + i + "_" + j).innerHTML += `
                <li>${users[i].fav_books[j].bookList[k]}</li>`;
            }
        }

    }
}

function deletetabelUsers(i, k) {
    users.splice(i, k);
    tabelUsersDisplay();
}

function edittabelUsers(i) {
    document.getElementById("userlist" + i).innerHTML = '';
    document.getElementById("userlist" + i).innerHTML +=
        `<td>${users[i].id}</td>
            <td>
                <input style="width: 50px;" type="text" id="firstNameID" value="${users[i].name.firstName}">
                <input style="width: 50px;" type="text" id="lastNameID" value="${users[i].name.lastName}">
            </td>
            <td>
                <input style="width: 20px;" type="text" id="ageID" value="${users[i].age}">
            </td>
            <td>
                <input style="width: 70px;" type="text" id="countryID" value="${users[i].country}">
            </td>
            <td>
                <input style="width: 60px;" type="text" id="streetID" value="${users[i].address.street}">
                <input style="width: 20px;" type="text" id="houseNoID" value="${users[i].address.houseNo}"> 
                <br>
                <input style="width: 30px;" type="text" id="zipID" value="${users[i].address.zip}"> 
                <input style="width: 50px;" type="text" id="cityID" value="${users[i].address.city}">
            </td>
            <td>
                <input style="width: 85px;" type="text" id="phoneID" value="${users[i].phone}">
            </td>
            <td id="fav_food${i}" class="list"></td>
            <td id="fav_book${i}" class="list"></td>
            <td>
                ${users[i].img}
            </td>
            <td><button onclick="edittabelSaveUsers(${(i)})">Save</button><button onclick="tabelUsersDisplay()">Cancel</button></td>`;


    for (let j = 0; j < users[i].fav_food.length; j++) {
        document.getElementById("fav_food" + i).innerHTML += `
            <li><input style="width: 65.796px;" type="text" id="fav_foodID${j}" value="${users[i].fav_food[j]}"></li>`;
    }
    if (users[i].fav_food.length < 5) {
        document.getElementById("fav_food" + i).innerHTML += `
            <li><button onclick="editfoodUsers(${i}, ${users[i].fav_food.length})">Add more</button></li>`;
    }

    for (let j = 0; j < users[i].fav_books.length; j++) {
        document.getElementById("fav_book" + i).innerHTML += `
            <div id="fav_book${i}_${j}" style=" margin: 5px;">
            <b><input style="width: 65.796px;" type="text" id="fav_bookstype${j}ID" value="${users[i].fav_books[j].type}"></b>
            </div>`;

        for (let k = 0; k < users[i].fav_books[j].bookList.length; k++) {
            document.getElementById("fav_book" + i + "_" + j).innerHTML += `
                <li>
                <input style="width: 65.796px;" type="text" id="fav_bookstype${j}ID${k}" value="${users[i].fav_books[j].bookList[k]}">
                </li>`;
        }
        if (users[i].fav_books[j].bookList.length < 3) {
            document.getElementById("fav_book" + i + "_" + j).innerHTML += `
                <li><button onclick="editbookListUsers(${i}, ${j}, ${users[i].fav_books[j].bookList.length})">Add more</button></li>`;
        }
        if (users[i].fav_books.length < 2 || users[i].fav_books == '') {
            document.getElementById("fav_book" + i).innerHTML += `
                <div id="fav_book${i}_${users[i].fav_books.length}" style=" margin: 5px;">
                <b><button onclick="editbookTypeUsers(${i}, ${users[i].fav_books.length})">Add another type</button></b>
                </div>`;
        }
    }
}

function editfoodUsers(i, j) {
    users[i].fav_food[j] = '';
    document.getElementById("fav_food" + i).innerHTML += `<li><input style="width: 65.796px;" type="text" id="fav_foodID${j}" value="${users[i].fav_food[j]}"></li>`;

    document.getElementById("fav_food" + i).innerHTML = ``;

    for (let j = 0; j < users[i].fav_food.length; j++) {
        document.getElementById("fav_food" + i).innerHTML += `
            <li><input style="width: 65.796px;" type="text" id="fav_foodID${j}" value="${users[i].fav_food[j]}"></li>`;
    }
    if (users[i].fav_food.length < 5) {
        document.getElementById("fav_food" + i).innerHTML += `
            <li><button onclick="editfoodUsers(${i}, ${users[i].fav_food.length})">Add more</button></li>`;
    }
}

function editbookListUsers(i, j, k) {
    users[i].fav_books[j].bookList[k] = '';
    document.getElementById("fav_book" + i + "_" + j).innerHTML =
        `<b><input style="width: 65.796px;" type="text" id="fav_bookstype${j}ID" value="${users[i].fav_books[j].type}"></b>`;
    for (let k = 0; k < users[i].fav_books[j].bookList.length; k++) {
        document.getElementById("fav_book" + i + "_" + j).innerHTML += `
                <li>
                <input style="width: 65.796px;" type="text" id="fav_bookstype${j}ID${k}" value="${users[i].fav_books[j].bookList[k]}">
                </li>`;
    }
    if (users[i].fav_books[j].bookList.length < 3) {
        document.getElementById("fav_book" + i + "_" + j).innerHTML += `
                <li><button onclick="editbookListUsers(${i}, ${j}, ${users[i].fav_books[j].bookList.length})">Add more</button></li>`;
    }
}

function editbookTypeUsers(i, j) {
    users[i].fav_books[j] = {type: ' ',bookList: []};
    console.log(users[i].fav_books[j])
    document.getElementById("fav_book" + i + "_" + j).innerHTML = `
            <b><input style="width: 65.796px;" type="text" id="fav_bookstype${j}ID" value="${users[i].fav_books[j].type}"></b>`;

    for (let k = 0; k < users[i].fav_books[j].bookList.length; k++) {
        document.getElementById("fav_book" + i + "_" + j).innerHTML += `
                <li>
                <input style="width: 65.796px;" type="text" id="fav_bookstype${j}ID${k}" value="${users[i].fav_books[j].bookList[k]}">
                </li>`;
    }
    if (users[i].fav_books[j].bookList.length < 3) {
        document.getElementById("fav_book" + i + "_" + j).innerHTML += `
                <li><button onclick="editbookListUsers(${i}, ${j}, ${users[i].fav_books[j].bookList.length})">Add more</button></li>`;
    }
}

function edittabelSaveUsers(i) {
    if (firstNameID.value == '' || lastNameID.value == '' || ageID.value == '' || countryID.value == '' || streetID.value == '' || houseNoID.value == '' || zipID.value == '' || cityID.value == '' || phoneID.value == '') {
        alert(`( Name, Age, Contry, Adress, Phone Number ) These fields cannot be empty ..... !`);
    }
    else {
        users[i].name.firstName = firstNameID.value;
        users[i].name.lastName = lastNameID.value;

        users[i].age = first = ageID.value;

        users[i].country = countryID.value;

        users[i].address.street = streetID.value;
        users[i].address.houseNo = houseNoID.value;

        users[i].address.zip = zipID.value;
        users[i].address.city = cityID.value;

        users[i].phone = phoneID.value;
        console.log(users[i]);


        for (let j = 0; j < users[i].fav_food.length; j++) {
            users[i].fav_food[j] = document.getElementById("fav_foodID" + j).value;
        }

        for (let j = 0; j < users[i].fav_food.length; j++) {
            if (users[i].fav_food[j] == '') {
                users[i].fav_food.splice(j, 1);
            }
        }

        for (let j = 0; j < users[i].fav_books.length; j++) {
            users[i].fav_books[j].type = document.getElementById("fav_bookstype" + j + "ID").value;

            for (let k = 0; k < users[i].fav_books[0].bookList.length; k++) {
                users[i].fav_books[j].bookList[k] = document.getElementById("fav_bookstype" + j + "ID" + k).value;
            }
        }

        for (let j = 0; j < users[i].fav_books.length; j++) {
            if (users[i].fav_books[j].type == '') {
                if (j == 0) {
                    users[i].fav_books[j].type == ' ';
                    for (let k = 0; k < users[i].fav_books[0].bookList.length; k++) {
                        users[i].fav_books[j].bookList.splice(k, 1);
                    }

                }
                else {
                    users[i].fav_books.splice(j, 1);
                }
                j++;
            }

            for (let k = 0; k < users[i].fav_books[0].bookList.length; k++) {
                if (users[i].fav_books[j].bookList[k] == '') {
                    users[i].fav_books[j].bookList.splice(k, 1);
                }
            }
        }
        tabelUsersDisplay();
    }
}

function addtabelUsers() {
    let i = users.length;  //2
    tabledata.innerHTML  +=
        `<tr id="userlist${i}"></tr>`;
    document.getElementById("userlist" + i).innerHTML  =
        `<td>${i + 1}</td>
            <td>
                <input style="width: 50px;" type="text" id="firstNameID">
                <input style="width: 50px;" type="text" id="lastNameID">
            </td>
            <td>
                <input style="width: 20px;" type="text" id="ageID">
            </td>
            <td>
                <input style="width: 70px;" type="text" id="countryID">
            </td>
            <td>
                <input style="width: 60px;" type="text" id="streetID">
                <input style="width: 20px;" type="text" id="houseNoID"> 
                <br>
                <input style="width: 30px;" type="text" id="zipID"> 
                <input style="width: 50px;" type="text" id="cityID">
            </td>
            <td>
                <input style="width: 85px;" type="text" id="phoneID">
            </td>
            <td id="fav_food${i}" class="list"></td>
            <td id="fav_book${i}" class="list"></td>
            <td>
               
            </td>
            <td><button onclick="addtabelSaveUsers(${(i)})">Save</button><button onclick="tabelUsersDisplay()">Cancel</button></td>`;
}

function addtabelSaveUsers(i) {
    if (firstNameID.value == '' || lastNameID.value == '' || ageID.value == '' || countryID.value == '' || streetID.value == '' || houseNoID.value == '' || zipID.value == '' || cityID.value == '' || phoneID.value == '') {
        alert(`( Name, Age, Contry, Adress, Phone Number ) These fields cannot be empty ..... !`);
    }
    else {
        let userOpject = {
            id: i + 1,
            name: {
                firstName: firstNameID.value,
                lastName: lastNameID.value
            },
            age: ageID.value,
            country: countryID.value,
            address: {
                houseNo: houseNoID.value,
                street: streetID.value,
                city: cityID.value,
                zip: zipID.value
            },
            phone: phoneID.value,
            fav_food: [],
            fav_books: [
                {
                    type: ' ',
                    bookList: []
                }
            ],
            img: '<img src="img/user.png">'
        };

        users.push(userOpject)
        tabelUsersDisplay();
    }
}



/////////////////// Exercise 12
let dailyTask = ['Eat', 'Walk', 'Swim', 'Run'];

displayArray();

function addTaskArray(a) {
    if (a != '') {
        dailyTask.push(a)
        displayArray();
    }
    addtask.value = '';
}

function editTaskArray(j) {
    let data;

    do {
        data = prompt('Enter new Task:')
    }
    while (data == '')

    if (data == null) {
        alert("No change done ...... !")
    }
    else {
        dailyTask[j] = data;
        displayArray();
    }

}

function deleteTaskArray(j, k) {
    dailyTask.splice(j, k);
    displayArray();
}

function displayArray() {
    taskArray.innerHTML = ``;
    for (let i = 0; i < dailyTask.length; i++) {
        taskArray.innerHTML += `
        <tr>
            <td><li style="width: 200px;"> ${dailyTask[i]} </li></td>
            <td><button onclick="editTaskArray(${(i)})">Edit</button>
            <button onclick="deleteTaskArray(${(i)}, 1)">Delete</button></td>
        </tr>`;
    }
    if (dailyTask.length != 0) {
        taskArray.innerHTML += `<button onclick="deleteTaskArray(0, ${dailyTask.length})">Delete All</button>`;
    }
}


//////////////