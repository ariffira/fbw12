let users = [
    user1 = { //0
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
        fav_books: [{
                type: 'Classic',
                bookList: ['Sharlok Homes', 'Jul vernes', 'Kingdom of Heaven']
            },
            {
                type: 'Horror',
                bookList: ['Mid-night Train', 'Unborn', 'Silence']
            }
        ],
        photo: `<img src="https://image.shutterstock.com/image-photo/silhouette-studio-shot-isolated-on-260nw-246672304.jpg">`
    },
    user2 = { //1
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
        fav_books: [{
                type: 'Classic',
                bookList: ['Sharlok Homes', 'Jul vernes', 'Kingdom of Heaven']
            },
            {
                type: 'Comedy',
                bookList: ['Mr. bean', 'Charlie chaplin', 'Big-bang theory']
            }
        ],
        photo: `<img src="https://image.shutterstock.com/image-photo/silhouette-studio-shot-isolated-on-260nw-246672304.jpg">`
            // `<img src="https://clarityskin.com/wp-content/uploads/2019/10/unknown-person-icon-22.jpg">`
    }
];

console.log(users);
console.table(users);
let print = () => {
    tabledata.innerHTML = '';
    for (let i = 0; i < users.length; i++) {
        // document.getElementById('userId').innerHTML += users[i].country;
        tabledata.innerHTML +=
            `<tr>
        <td>${users[i].id}</td>
        <td>${users[i].name.firstName}  ${users[i].name.lastName}</td>
        <td>${users[i].age}</td>
        <td>${users[i].country}</td>
        <td>${users[i].address.street} ${users[i].address.houseNo} ,${users[i].address.zip} ${users[i].address.city}</td>
        <td>${users[i].profession}</td>
        <td>${users[i].phone}</td>
        <td><ul id="foods">`
        for (let food of users[i].fav_food)
            foods.innerHTML += `<li>${food}</li>`;
        // <li>${ users[i].fav_food[1] }</li>
        // <li>${ users[i].fav_food[2] }</li>
        // <li>${ users[i].fav_food[3] }</li>
        // <li>${ users[i].fav_food[4] }</li>
        tabledata.innerHTML += '</ul></td>';
        tabledata.innerHTML += ` 
        <td class="grid">
        <div>
            <b>${ users[i].fav_books[0].type }</b>
            <li>${ users[i].fav_books[0].bookList[0] }</li>
            <li>${ users[i].fav_books[0].bookList[1] }</li>
            <li>${ users[i].fav_books[0].bookList[2] }</li>
        </div>
        <div>
            <b>${ users[i].fav_books[1].type }</b>
            <li>${ users[i].fav_books[1].bookList[0] }</li>
            <li>${ users[i].fav_books[1].bookList[1] }</li>
            <li>${ users[i].fav_books[1].bookList[2] }</li>
        </div>
        </td>
        <td>
        ${users[i].photo}
        </td>`;


    }
}
print();

let save = () => {
    let f_Name = fname.value,
        l_Name = lname.value,
        nid = id.value,
        nage = age.value,
        ncountry = country.value,
        nprofission = profission.value,
        astreet = street.value,
        ahousno = houseNo.value,
        acity = city.value,
        azip = zip.value,
        nphone = phone.value;
    let newUser = {
        id: nid,
        name: {
            firstName: f_Name,
            lastName: l_Name
        },
        age: nage,
        country: ncountry,
        profession: nprofission,
        address: {
            houseNo: ahousno,
            street: astreet,
            city: acity,
            zip: azip
        },
        phone: nphone,
        fav_food: [],
        fav_books: [{
                type: '',
                bookList: []
            },
            {
                type: '',
                bookList: []
            }
        ],
        photo: `<img src="https://image.shutterstock.com/image-photo/silhouette-studio-shot-isolated-on-260nw-246672304.jpg">`

    };
    users.push(newUser);
    console.table(users);
    print();
    userForm.innerHTML = '';
}


let addUserForm = () => {
    userForm.innerHTML +=
        `
        <!-- username start -->
    <div class="form-group row">
                <div class="input-group mb-3 col-6">
                    <div class="input-group-prepend ">
                        <span class="input-group-text">First name:</span>
                    </div>
                    <input type="text" class="form-control" id="fname" placeholder="Enter firstname" name="fname">
                </div>
                <div class="input-group mb-3 col-6">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Last name:</span>
                    </div>
                    <input type="text" class="form-control" id="lname" placeholder="Enter lastname" name="lname">
                </div>
            </div>
            <!-- username end -->

            <!-- id start -->
    <div class="form-group row">
            <div class="input-group mb-3 col-10">
                <div class="input-group-prepend">
                    <span class="input-group-text">id:</span>
                </div>
                    <input type="number" class="form-control" id="id" placeholder="Enter id" name="pid">
            </div>
    </div>
    <!-- id end -->

    <!-- Age country profission start -->
    <div class="form-group row">
                <div class="input-group mb-3 col-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Age:</span>
                    </div>
                    <!-- <label for="age"> </label> -->
                    <input type="text" class="form-control" id="age" placeholder="Enter age" name="age">
                </div>
                <div class="input-group mb-3 col-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Country:</span>
                    </div>
                    <!-- <label for="country"> </label> -->
                    <input type="text" class="form-control" id="country" placeholder="Enter country" name="country">
                </div>
                <div class="input-group mb-3 col-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Profission:</span>
                    </div>
                    <!-- <label for="profission"> </label> -->
                    <input type="text" class="form-control" id="profission" placeholder="Enter profission" name="profission">
                </div>
            </div>
            <!-- Age country profission end -->

            <!-- address start -->
            <div class="form-group row">
                <div class="input-group mb-3 col-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">street:</span>
                    </div>
                    <!-- <label for="street"> </label> -->
                    <input type="text" class="form-control" id="street" placeholder="Enter street" name="street">
                </div>
                <div class="input-group mb-3 col-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">HouseNo:</span>
                    </div>
                    <!-- <label for="houseNo"> </label> -->
                    <input type="text" class="form-control" id="houseNo" placeholder="Enter houseNo" name="houseNo">
                </div>
                <div class="input-group mb-3 col-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">city:</span>
                    </div>
                    <!-- <label for="city"> </label> -->
                    <input type="text" class="form-control" id="city" placeholder="Enter city" name="city">
                </div>
                <div class="input-group mb-3 col-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">zip:</span>
                    </div>
                    <!-- <label for="zip"> </label> -->
                    <input type="text" class="form-control" id="zip" placeholder="Enter zip" name="zip">
                </div>
            </div>
            <!-- Address end -->
            <div class="form-group row">
                <div class="input-group mb-3 col-5">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Phone:</span>
                    </div>
                    <!-- <label for="phone"> </label> -->
                    <input type="text" class="form-control" id="phone" placeholder="Enter phone" name="phone">
                </div>
            </div>

            <button class="btn btn-success" onclick="save()">save</button>
            `;
}