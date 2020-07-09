"use strict";
// let checkOnlineUser = () => {
//     if (importData == null) {
//         return importData = [];
//     }
//     if(importData[0] == undefined) {
//         return console.log('odio')
//     }
//     if (importData.isOnline == true) {
//         userButton.removeEventListener("onclick", restoreForm())
//         userButton.addEventListener("onclick", logout())
//         userButton.removeAttribute('data-toggle', 'data-target')
//     } else {
//         userButton.removeEventListener("onclick", logout())
//         userButton.addEventListener("onclick",restoreForm())
//     }

//     if (importData.role == 'admin') {
//         userButton.setAttribute("data-toggle", "modal")
//         userButton.setAttribute("data-target", "#logOut")
//         formButtonsWebSite.innerHTML += `
//         <button id="adminButton" type="button" class="btn btn-danger" onclick="">
//             <i class="fas fa-user"></i> Admin Panel
//         </button> 
//     `
//     }
// }

let shopItems = [
    {
        id: 1,
        productName: 'PlayStation 4 - Console',
        price: 399.99,
        dateOfAdd: new Date(2011, 12, 24),
        quantity: 15,
        dateOfExpire: new Date(2020, 12, 24),
        manifactureCountry: 'Japan',
        size: [
            200,
            200,
            45
        ],
        color: [
            'Black',
            'White',
            'Silver',
            'Gold',
            'Blue',
            'Red',
            'Pink'
        ],
        image: 'images/PlayStation.png',
        discountPrize: 15,
        calcDiscount: function() {
            let result = this.price - (this.price / 100) * this.discountPrize;
            return result.toFixed(2);
        }
    },
    {
        id: 2,
        productName: 'Xbox X - Console',
        price: 399.99,
        dateOfAdd: new Date(2011, 9, 24),
        quantity: 12,
        dateOfExpire: new Date(2021, 3, 13),
        manifactureCountry: 'USA',
        size: [
            220,
            200,
            55
        ],
        color: [
            'Black',
            'White',
            'Gray',
            'Red'
        ],
        image: 'images/Xbox.png',
        discountPrize: 5,
        calcDiscount: function() {
            let result = this.price - (this.price / 100) * this.discountPrize;
            return result.toFixed(2);
        }
    },
    {
        id: 3,
        productName: 'Xbox X Slim - Console',
        price: 349.99,
        dateOfAdd: new Date(2014, 4, 1),
        quantity: 25,
        dateOfExpire: new Date(2021, 1, 30),
        manifactureCountry: 'USA',
        size: [
            150,
            125,
            32
        ],
        color: [
            'Black',
            'White',
            'Gray',
            'Red'
        ],
        image: 'images/XboxSlim.png',
        discountPrize: 15,
        calcDiscount: function() {
            let result = this.price - (this.price / 100) * this.discountPrize;
            return result.toFixed(2);
        }
    },
    {
        id: 4,
        productName: 'PlayStation 4 Slim - Console',
        price: 349.99,
        dateOfAdd: new Date(2016, 9, 11),
        quantity: 25,
        dateOfExpire: new Date(2022, 10, 15),
        manifactureCountry: 'Japan',
        size: [
            175,
            150,
            30
        ],
        color: [
            'Black',
            'White',
            'Silver'
        ],
        image: 'images/PlayStationSlim.png',
        discountPrize: 15,
        calcDiscount: function() {
            let result = this.price - (this.price / 100) * this.discountPrize;
            return result.toFixed(2);
        }
    },
    {
        id: 5,
        productName: 'Nintendo Switch - Console',
        price: 349.99,
        dateOfAdd: new Date(2017, 3, 28),
        quantity: 40,
        dateOfExpire: new Date(2025, 3, 1),
        manifactureCountry: 'Japan',
        size: [
            75,
            50,
            25
        ],
        color: [
            'Black',
            'Red/Blue'
        ],
        image: 'images/NintendoSwitch.png',
        discountPrize: '',
        calcDiscount: function() {
            let result = this.price - (this.price / 100) * this.discountPrize;
            return result.toFixed(2);
        }
    },
    {
        id: 6,
        productName: 'Nintendo Wii - Console',
        price: 149.99,
        dateOfAdd: new Date(2009, 1, 1),
        quantity: 10,
        dateOfExpire: new Date(2020, 12, 28),
        manifactureCountry: 'Japan',
        size: [
            180,
            150,
            26
        ],
        color: [
            'Black',
            'White'
        ],
        image: 'images/NintendoWii.png',
        discountPrize: 25,
        calcDiscount: function() {
            let result = this.price - (this.price / 100) * this.discountPrize;
            return result.toFixed(2);
        }
    },
    {
        id: 7,
        productName: 'Mini NES - Console',
        price: 59.99,
        dateOfAdd: new Date(2016, 5, 8),
        quantity: 5,
        dateOfExpire: new Date(2025, 8, 14),
        manifactureCountry: 'Japan',
        size: [
            50,
            50,
            10
        ],
        color: [
            'White/Gray'
        ],
        image: 'images/MiniNES.png',
        discountPrize: 10,
        calcDiscount: function() {
            let result = this.price - (this.price / 100) * this.discountPrize;
            return result.toFixed(2);
        }
    },
    {
        id: 8,
        productName: 'Mini SNES - Console',
        price: 69.99,
        dateOfAdd: new Date(2016, 5, 8),
        quantity: 8,
        dateOfExpire: new Date(2025, 8, 14),
        manifactureCountry: 'Japan',
        size: [
            55,
            55,
            12
        ],
        color: [
            'White/Gray'
        ],
        image: 'images/MiniSNES.png',
        discountPrize: '',
        calcDiscount: function() {
            let result = this.price - (this.price / 100) * this.discountPrize;
            return result.toFixed(2);
        }
    },
    {
        id: 9,
        productName: 'PlayStation Portable - Console',
        price: 119.99,
        dateOfAdd: new Date(2008, 7, 27),
        quantity: 3,
        dateOfExpire: new Date(2020, 12, 14),
        manifactureCountry: 'Japan',
        size: [
            105,
            45,
            15
        ],
        color: [
            'Black',
            'White',
            'Silver'
        ],
        image: 'images/PSP.png',
        discountPrize: 10,
        calcDiscount: function() {
            let result = this.price - (this.price / 100) * this.discountPrize;
            return result.toFixed(2);
        }
    },
    {
        id: 10,
        productName: 'PlayStation Vita - Console',
        price: 149.99,
        dateOfAdd: new Date(2012, 10, 25),
        quantity: 17,
        dateOfExpire: new Date(2022, 10, 25),
        manifactureCountry: 'Japan',
        size: [
            115,
            55,
            16
        ],
        color: [
            'Black',
        ],
        image: 'images/PlayStationVita.png',
        discountPrize: '',
        calcDiscount: function() {
            let result = this.price - (this.price / 100) * this.discountPrize;
            return result.toFixed(2);
        }
    }
];

function calcDiscount() {
    let result = this.price - (this.price / 100) * this.discountPrize;
    return result.toFixed(2);
}

// let discountCalc = (perCent, origin) => {
//     let result = (perCent / 100) * origin;
//     // console.log(Math.floor(result));
//     return result.toFixed(2);
// };

let dispaly = (item) => {

    let getItem = (item) => {
        let showItem = item;
        return showItem += `
    <option style="background-color: black; color: snow;" value="${item}">${item}</option>
    `;
    };

    myOutput.innerHTML += `
    <div id='item${item.id}' class="card">
        <div class="img-box">
            <img id='img${item.id}' src="${item.image}" class="card-img-top" alt="${item.image}">
        </div>
        <div class="card-body">
            <h5 class="card-title">${item.productName}</h5>
            <ul class="list-group">
                <li class="list-group-item">Size: ${item.size[0]} x ${item.size[1]} x ${item.size[2]} mm</li>
                <li class="list-group-item">Color: <select class="custom-select">${item.color.map(getItem)}</select></li>
                <li class="list-group-item">Made in ${item.manifactureCountry}</li>
                <li class="list-group-item">In Store: ${item.quantity}</li>
            </ul>
            <button id='#${item.id}' type="button" class="btn btn-outline-warning" onclick="addChart('${item.image}', '${item.productName}', ${item.id})">€ ${item.price}<br>Add to Cart</button>
            <button id="discount${item.id}" type="button" class="btn btn-outline-danger" onclick="addChart('${item.image}', '${item.productName}', ${item.id})"></button>
        </div>
        <div class="card-footer">
            <small class="text-muted">Added ${item.dateOfAdd}.</small><br>
            <small style="color: red !important;" id="discountDate${item.id}" class="text-muted"></small>
        </div>
    </div>
    `

    document.getElementById(`discount${item.id}`).innerHTML = `${item.discountPrize}% Offer!<br>€ ${item.calcDiscount()}`;
    document.getElementById(`discountDate${item.id}`).innerHTML = `<br>This offer expires on ${item.dateOfExpire}.`;

    if (item.discountPrize == '') {
        // console.log(`No discount on item: #${item.id}`);
        document.getElementById(`discount${item.id}`).style.display = 'none';
        document.getElementById(`discountDate${item.id}`).style.display = 'none';
        document.getElementById(`item${item.id}`).style.order = '1';
    }

    if (item.discountPrize != '') {
        // console.log(`Discount on item: #${item.id}`);
        document.getElementById(`#${item.id}`).disabled = true;
        document.getElementById(`#${item.id}`).style.margin = '10px';
        document.getElementById(`#${item.id}`).style.fontStyle = 'oblique';
        document.getElementById(`#${item.id}`).style.textDecoration = 'line-through';
    }
};

let noChartItem = (id) => {
    if (id.innerHTML == '') {
        return id.innerHTML = `No items in your chart.`
    }
}

let addChart = (imageSource, itemName, id) => {
    parseInt(chart.innerHTML);
    chart.innerHTML++;

    // console.log(imageSource);

    if (chartPanel.innerHTML == 'No items in your chart.') {
        chartPanel.innerHTML = '';
    }

    chartPanel.innerHTML += `
    <div id="chart-item${id}" class="dropdown-item my-1" href="#">1 x <img src="${imageSource}"> ${itemName} <div class="btn btn-outline-danger my-2 my-sm-0" onclick="removeItem('chart-item${id}')"><i class="far fa-trash-alt"></i></div></div>
    `
    alert('Item Added in your Chart');
};

let removeItem = (id) => {
    // console.log(id);
    let myId = document.getElementById(id);
    myId.parentNode.removeChild(myId);
    chart.innerHTML--;
    if (chart.innerHTML == 0) {
        chart.innerHTML = '';
    };

    chartPanel.innerHTML = 'No items in your chart.';
};

noChartItem(chartPanel);
shopItems.map(dispaly);

let userArray = [];
if (localStorage.getItem('userOnline')) {
    userArray = JSON.parse(localStorage.getItem('userOnline'));
}
console.log(userArray);

function createUser() {

    console.log(importData)
    if (emailId.value == '') {
        return alert('Please write your E-mail')
    }
    if (passwordId.value == '') {
        return alert('Please write your E-mail')
    }
    if (roleId.value == '') {
        return alert('Please select a role')
    }
    
    let emailFromUser = emailId.value;
    let passwordFromUser = passwordId.value;
    let roleFromUser = roleId.value;
    let usernameFromUser = usernameId.value;
    let confirmPasswordFromUser = document.getElementById('confirmPasswordId').value; 
    let ageFromUser = ageId.value;
    let countryFromUser = countryId.value;
    console.log(`E-mail: ${emailFromUser} Role: ${roleFromUser} Password: ${passwordFromUser} Retype-Password: ${confirmPasswordFromUser} Age: ${ageFromUser} Country: ${countryFromUser}`);
    if (importData.find(i => i.email == emailId.value)) {
        return alert('E-mail already Registred')
    }
    if (importData.find(i => i.username == usernameId.value)) {
        return alert('Username already Taken')
    }
    // if (passwordFromUser == confirmPasswordFromUser) {
    //     return alert('Passwords don\'t match')
    // }
    
    let newUser = {
        username: usernameFromUser,
        email: emailFromUser,
        age: ageFromUser,
        countryId: countryFromUser,
        password: passwordFromUser,
        role: roleFromUser,
        isOnline: undefined
    }
    console.log(newUser);

    userArray.push(newUser);
    console.log(userArray);

    localStorage.setItem('userOnline', JSON.stringify(userArray));
    document.getElementsByClassName('modal-body')[0].innerHTML = `
    Your Account has been created.<br> <button type="submit" class="btn btn-danger" onclick="loginModal()">Login</button>
    `
}

function loginModal() {
    staticBackdropLabel.innerHTML = 'Login Form'
    document.getElementsByClassName('modal-body')[0].innerHTML = `
    <div class="row">
        <div class="col-md-8 form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="mailId"
                aria-describedby="emailHelp">
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="passId">
            </div>
        </div>
        <a href="#" onclick="restoreForm()">Not yet registred?</a>
    </div>
    `
    document.getElementsByClassName('modal-footer')[0].innerHTML = `
        <button type="button" class="btn btn-danger" onclick="login(mailId.value, passId.value)">Login</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    `
}

function restoreForm() {
    document.getElementsByClassName('modal-body')[0].innerHTML = `
    <div class="row">
                        <div class="col-md-6 form-group">
                            <label for="emailId">Email address</label>
                            <input type="email" class="form-control" id="emailId" aria-describedby="emailHelp" required>
                        </div>
                        <div class="col-md-6 form-group">
                            <label for="passwordId">Password</label>
                            <input type="password" class="form-control" id="passwordId" required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 form-group">
                            <label for="usernameId">User Name</label>
                            <input type="text" class="form-control" id="usernameId" required>
                        </div>
                        <div class="col-md-6 form-group">
                            <label for="confirmPasswordId">Confirm-Password</label>
                            <input type="password" class="form-control" id="confirmPasswordId" required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 form-group">
                            <label for="ageId">Age</label>
                            <input type="text" class="form-control" id="ageId" required>
                        </div>
                        <div class="col-md-6 form-group">
                            <label for="countryId">Country</label>
                            <input type="password" class="form-control" id="countryId" required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 form-group">
                            <label for="roleId"> User Role:</label>
                            <select class="form-control" id="roleId">
                                <option disabled selected value="''"> Select one role</option>
                                <option value="admin">Admin</option>
                                <option value="customer">Customer</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <button type="submit" class="btn btn-danger" onclick="createUser()">Create
                                Account</button><br>
                            <small>
                                <a href="#" onclick="loginModal()">Do you already have an account?</a>
                            </small>
                        </div>
                    </div>
    `
}

function login(mail, pwd) {

    if (mail == '') {
        return alert('Insert an E-mail')
    }
    if (pwd == '') {
        return alert('Insert a Password')
    }

    if (importData.find(o => o.email == mail && o.password == pwd)) {
        let thUser = importData.find(o => o.email == mail && o.password == pwd);
        if(thUser == undefined) {
            console.log(thUser)
            return console.log('odio')
        }
        thUser.isOnline = true
        localStorage.setItem('userOnline', JSON.stringify(thUser))
        document.getElementsByClassName('modal-body')[0].innerHTML = `
        <p>Welcome Back ${importData[0].username}
        `
        setTimeout(() => window.location.href = 'http://127.0.0.1:5502/index.html', 2000)
    } else {
        return alert('User Didn\'t found')
    }
}

function logout() {
    importData.isOnline = false
    localStorage.setItem('userOnline', JSON.stringify(importData))
    logOutCard.innerHTML = 'See you soon :)'
    alert('logged Out')
    setTimeout(() => window.location.href = 'http://127.0.0.1:5502/index.html', 2000)
}