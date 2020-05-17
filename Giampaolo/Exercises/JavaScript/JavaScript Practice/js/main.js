var a;
let b;
const c = true;

a = 'Hello World';
b = 25;

document.getElementById("paragraph").innerHTML = a + " " + "<br>This is a paragraph added with JavaScript"

function changeImg() {
    document.getElementById('change').src='../images/lion-5069703_1920.jpg'; 
}

function prevImg() {
    document.getElementById('change').src='../images/africa-17344_1920.jpg'; 
}

var profile = {
    firstName: 'Giampaolo',
    lastName: 'Lo Cascio',
    age: '26',
    city: 'Duisburg',
    phoneNumber: '170 256 98076' 
}

document.getElementById('firstName').innerHTML += profile.firstName;
document.getElementById('lastName').innerHTML += profile.lastName;
document.getElementById('age').innerHTML += profile.age;
document.getElementById('city').innerHTML += profile.city;
document.getElementById('phoneNumber').innerHTML += profile.phoneNumber;

var profileDatabase = [
    {
        firstName: 'Giampaolo',
        lastName: 'Lo Cascio',
        age: '26',
        city: 'Duisburg',
        phoneNumber: '170 256 98076',
        pic: '../images/benutzerbild.png'
    },

    {
        firstName: 'Adel',
        lastName: 'Hanifa',
        age: '26',
        city: 'Mönchengladbach',
        phoneNumber: '170 996 98076',
        pic: '../images/benutzerbild.png' 
    },

    {
        firstName: 'Jessica',
        lastName: 'De Rosa',
        age: '26',
        city: 'Düsseldorf',
        phoneNumber: '170 996 98076',
        pic: '../images/profil.png'
    },

    {
        firstName: 'Arif',
        lastName: 'Islam',
        age: '26',
        city: 'Essen',
        phoneNumber: '170 996 98076',
        pic: '../images/benutzerbild.png' 
    }
]

function profileGiampaolo() {
    document.getElementById('firstNameArray').innerHTML = profileDatabase[0].firstName;
    document.getElementById('lastNameArray').innerHTML = profileDatabase[0].lastName;
    document.getElementById('ageArray').innerHTML = profileDatabase[0].age;
    document.getElementById('cityArray').innerHTML = profileDatabase[0].city;
    document.getElementById('phoneNumberArray').innerHTML = profileDatabase[0].phoneNumber;
    document.getElementById('profileImg').src = profileDatabase[0].pic;
}

function profileAdel() {
    document.getElementById('firstNameArray').innerHTML = profileDatabase[1].firstName;
    document.getElementById('lastNameArray').innerHTML = profileDatabase[1].lastName;
    document.getElementById('ageArray').innerHTML = profileDatabase[1].age;
    document.getElementById('cityArray').innerHTML = profileDatabase[1].city;
    document.getElementById('phoneNumberArray').innerHTML = profileDatabase[1].phoneNumber;
    document.getElementById('profileImg').src = profileDatabase[1].pic;
}

function profileJessica() {
    document.getElementById('firstNameArray').innerHTML = profileDatabase[2].firstName;
    document.getElementById('lastNameArray').innerHTML = profileDatabase[2].lastName;
    document.getElementById('ageArray').innerHTML = profileDatabase[2].age;
    document.getElementById('cityArray').innerHTML = profileDatabase[2].city;
    document.getElementById('phoneNumberArray').innerHTML = profileDatabase[2].phoneNumber;
    document.getElementById('profileImg').src = profileDatabase[2].pic;
}

function profileArif() {
    document.getElementById('firstNameArray').innerHTML = profileDatabase[3].firstName;
    document.getElementById('lastNameArray').innerHTML = profileDatabase[3].lastName;
    document.getElementById('ageArray').innerHTML = profileDatabase[3].age;
    document.getElementById('cityArray').innerHTML = profileDatabase[3].city;
    document.getElementById('phoneNumberArray').innerHTML = profileDatabase[3].phoneNumber;
    document.getElementById('profileImg').src = profileDatabase[3].pic;
}

console.log('N° Members: ' + profileDatabase.length + ' <---- it shows a \'string\''); // it shows a 'string' data-type
console.log(profileDatabase.length); // it shows a 'number' data-type