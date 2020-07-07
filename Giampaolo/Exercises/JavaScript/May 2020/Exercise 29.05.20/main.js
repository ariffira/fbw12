let myList = [];

let addInput = (userInput) => {
    if (userInput == '') {
        alert('Insert a value')
    } else {
        x = myList.push(userInput);
        let result = `<h3>My Tasks List</h3>`;
        for (let i in myList) {
            result += `<li class="list-group-item bg-dark">- ${myList[i]}</li>`;
        };
        console.log(myList);
        showList.innerHTML = result
        return userInput = '';
    }
};

let user;
let usersArray = [];

let addUser = () => {
    let firstName = inputName.value;
    let lastName = inputSurname.value;
    let age = inputAge.value;
    let courseName = inputCourse.value;
    let courseAddress = inputCourseType.value;
    let email = inputEmail.value;
    let pwd = inputPassword.value;
    let address = inputAddress.value;
    let city = inputCity.value;
    let state = inputState.value;
    let zip = inputZip.value;
    let favBook = inputFavoriteBook.value;
    let id = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);

    let myUser = [
        id,
        firstName,
        lastName,
        age,
        courseName,
        courseAddress,
        email,
        pwd,
        address,
        city,
        state,
        zip,
        favBook
    ];

    console.table(myUser);

    usersArray.push(myUser);
    
    console.table(usersArray);

    for(i in usersArray) {
        user = `
    <tr id="${usersArray[i][0]}">
        <th>#${usersArray[i][0]}</th>
        <td>${usersArray[i][1]}<br>${usersArray[i][2]}</td>
        <td>${usersArray[i][3]}</td>
        <td>
            ${usersArray[i][4]}<br>
            ${usersArray[i][5]}
        </td>
        <td>
            ${usersArray[i][10]}<br>
            ${usersArray[i][11]} ${usersArray[i][8]}<br>
            ${usersArray[i][9]}
        </td>
        <td>
            <ul>
                <li>${usersArray[i][12]}</li>
            </ul>
        </td>
        <td>
            ${usersArray[i][6]}<br>
            ${usersArray[i][7]}
        </td>
        <td>
            <button class="btn btn-custom"><i class="fas fa-pen"></i> Edit</button>
            <button class="btn btn-custom"><i class="fas fa-times"></i> Delete</button>
        </td>
    </tr>`
    }

    tbody.innerHTML += user;
};

// EXercise 14
let myText = "His name is Tuergut. He is a Turkish legend. Everyone say Tuergut is a great fighter. Tuergut is also smart, brave and cleaver. Tuergut follows his brother in all wars for decades. When Tuergut dies, people were upset for him";
let textArray = [];
textArray = myText.split('.');

// Part 1
showText.innerHTML = `<p>${myText}</p>`

// Part 2
for (let i in textArray) {
    showTextSplitBefore.innerHTML += `<li>${textArray[i]}</li>`
}

myText = myText.replace(/Tuergut/gi, "Giampaolo");

let textArray2 = [];
textArray2 = myText.split('.');

showText.innerHTML += `<p>${myText}</p>`

for (let i in textArray2) {
    showTextSplit.innerHTML += `<li>${textArray2[i]}</li>`
}

// Part 3
textArray2.push("Yesterday is a History, tomorrow is mystery but today is a Gift (---NEW LINE---)");
for (let i in textArray2) {
    showTextSplit2.innerHTML += `<li>${textArray2[i]}</li>`
}

// Exercise 15

// Part 02:
// - Create a circle using CSS, html and js
// - use these equation in JS to find the circle Area = PI × r power  2
// here: 
// -  PI value should come from Math object
// -  r is radius of circle from user and u should use it in css to change circle width and border radius

let randonNum = () => {
    let x = Math.random();
    x = x.toFixed(1)
    printMessage.innerHTML = `The value ${x} is `
    if (x > 0.5) {
        printMessage.innerHTML += 'Bigger than 0.5 .';
    } else {
        printMessage.innerHTML += 'Smaller than 0.5 .'
    };
};

let randonNum100 = () => {
    let x = Math.floor(Math.random() * 101);
    printMessage2.innerHTML = `The value is ${x}`
};

let pi = Math.PI;
let circleArea = (r) => {
    let area = pi * Math.pow(r, 2);
    console.log(area);
    areaSize.innerHTML = `${area.toFixed(2)}<br>cm<sup>2</sup>`
    document.getElementsByClassName('circle')[0].style.display = `flex`
    document.getElementsByClassName('circle')[0].style.width = `${area}px`;
    document.getElementsByClassName('circle')[0].style.height = `${area}px`
}