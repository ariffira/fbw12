let users = [
    {//0
        id: 1,
        name: {
            firstName: 'Arif',
            lastName: 'Islam'
        },
        pic: '<img src="/images/avatar1.png" alt="photo">',
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
    {//1
        id: 2,
        name: {
            firstName: 'Richard',
            lastName: 'Müller'
        },
        pic: '<img src="/images/avatar1.png" alt="photo">',
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
        fav_food: ['lupins', 'mesquite', 'carob', 'soybeans', 'peanuts'],
        fav_books: [
            {
                type: 'Classic',
                bookList: ['Sharlok Homes', 'Jul vernes', 'Kingdom of Heaven']
            },
            {
                type: 'Comedy',
                bookList: ['Mr. bean', 'Charlie chaplin', 'Big-bang theory']
            }
        ]
    },
    {//1
        id: 3,
        name: {
            firstName: 'Sandra',
            lastName: 'Polic'
        },
        pic: '<img src="/images/avatar2.png" alt="photo">',
        age: 50,
        country: 'Canada',
        profession: 'Accountant',
        address: {
            houseNo: 12,
            street: 'Hochstraße',
            city: 'Meerbusch',
            zip: 40670
        },
        phone: '+4916754223',
        fav_food: ['Pomes', 'Drupes', 'Citruses', 'Melons', 'Berries'],
        fav_books: [
            {
                type: 'Fantasy',
                bookList: ['The Hobbit', 'The name of the wind', 'Americans Gods']
            },
            {
                type: 'Crime',
                bookList: ['The strenger beside me', 'In cold blood', 'Big-bang theory']
            }
        ]
    },

];
// console.log(users);
// console.table(users);


for (let i = 0; i < users.length; i++) {
    // document.getElementById('userId').innerHTML += users[i].country;
    tabledata.innerHTML +=
        `<tr>
        <td>${users[i].id}</td>
        <td>${users[i].name.firstName}  ${users[i].name.lastName}</td>
        <td>${users[i].profession}</td>
        <td>${users[i].age}</td>
        <td>${users[i].country}</td>
        <td>${users[i].address.street} ${users[i].address.houseNo},
        <br>${users[i].address.zip} ${users[i].address.city}</td>
        <td>${users[i].phone}</td> 
        <td id="favFood${i}"></td>
        <td id="favBooks${i}"></td>
        <td>${users[i].pic}</td>
    </tr>`
    for (let x in users[i].fav_food) {
        document.getElementById(`favFood${i}`).innerHTML += `<ol><li>${users[i].fav_food[x]}</li></ol>`
    }

    for (let j in users[i].fav_books) {
        document.getElementById(`favBooks${i}`).innerHTML += `<ul><li>${users[i].fav_books[j].type}</li><li>${users[i].fav_books[j].bookList}</li></ul>`;
        //console.log('the second loop' + i, j, users[i].fav_books[j].type, users[i].fav_books[j].bookList);
    }
};
btn.addEventListener("click", function () {
    this.style.backgroundColor = 'orange';
    for (let i = 0; i < users.length; i++) {
        document.getElementById(`favBooks${i}`).style.backgroundColor = "red";
    }
});
let x = document.getElementById("myBtn");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunc);
x.addEventListener("mouseout", myThirdFunc);

function myFunction() {
    this.style.backgroundColor = "lightblue";
    this.innerHTML = 'background changed!';
    document.body.style.backgroundColor = "darksalmon";
    document.body.style.color = "white";
}

function mySecondFunc() {
    this.style.backgroundColor = "green";
    this.innerHTML = 'Clicked!';
    infoDiv.innerHTML = this.innerHTML;
}

function myThirdFunc() {
    this.style.backgroundColor = "black";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "blue";
    this.innerHTML = 'Moused out!';
}
x.className = "myButton";//add a class to the button


// add a new user
let addUser = () => {
    let newUser = {
        id: Number(id1.value),
        name: {
            firstName: fname.value,
            lastName: lname.value
        },
        pic: '<img src="/images/avatar2.png" alt="photo">',
        age: Number(age1.value),
        country: country.value,
        address: {},
        profession: job.value,
        phone: phone1.value,
        fav_books: [],
        fav_food: [],
    }
    users.push(newUser);
    console.log(users);
    console.log(users.length);
    let n = users.length - 1;
    // document.getElementById('userId').innerHTML += users[i].country;
    tabledata.innerHTML +=
        `<tr>
        <td>${users[n].id}</td>
        <td>${users[n].name.firstName}  ${users[n].name.lastName}</td>
        <td>${users[n].profession}</td>
        <td>${users[n].age}</td>
        <td>${users[n].country}</td>
        <td>${users[n].adress}</td>
        <td>${users[n].phone}</td> 
        <td id="favFood${n}"></td>
        <td id="favBooks${n}"></td>
        <td>${users[n].pic}</td>
    </tr>`

}
// remove an user

function removeItem() {
    let l = users.length - 1;
    users.splice(l, 1);
    console.log(users);
    tabledata.innerHTML=" ";
    for (let i = 0; i < users.length; i++) {
        tabledata.innerHTML +=
            `<tr>
        <td>${users[i].id}</td>
        <td>${users[i].name.firstName}  ${users[i].name.lastName}</td>
        <td>${users[i].profession}</td>
        <td>${users[i].age}</td>
        <td>${users[i].country}</td>
        <td>${users[i].address.street} ${users[i].address.houseNo},
        <br>${users[i].address.zip} ${users[i].address.city}</td>
        <td>${users[i].phone}</td> 
        <td id="favFood${i}"></td>
        <td id="favBooks${i}"></td>
        <td>${users[i].pic}</td>
    </tr>`
        for (let x in users[i].fav_food) {
            document.getElementById(`favFood${i}`).innerHTML += `<ol><li>${users[i].fav_food[x]}</li></ol>`
        }

        for (let j in users[i].fav_books) {
            document.getElementById(`favBooks${i}`).innerHTML += `<ul><li>${users[i].fav_books[j].type}</li><li>${users[i].fav_books[j].bookList}</li></ul>`;
            //console.log('the second loop' + i, j, users[i].fav_books[j].type, users[i].fav_books[j].bookList);
        }
    }
};

// just try a methods
let sortUsers=()=>{
    let users2=users.sort();
   console.log(users2);
   console.log(users2.reverse());
}
let a=['1','2','3','4'];
let b=[1,2,3,4]
let k=a.concat(a,b);
console.log(k);
let s='Asreen jalal';
console.log(s);
console.log('Remove the last character from a string  '+s.substr(-1));
console.log(s.substr(0,6));
console.log(s.substr(6,7));
console.log('The replace() method replaces a specified value with another value in a string: '+ s.replace('jalal','ilyas'));


