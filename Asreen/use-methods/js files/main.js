// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// let type
let languageType = 'JavaScript(JS)';// String
let moduleNumber = 3; // number
let isItOnline = true; // boolean
//const type
const institute = 'DCI';//string data
// Array data types: list
// declare array
let classList = ['fbw1', 'fbw2', 'fbw3']; // way 01
console.log(classList);
let classList1 = new Array('fbw1', 'fbw2', 'fbw3'); // way 02: new Array(): Promise
console.log(classList1);
console.log(classList1[0]);

let name = "Max Meuler", age = 35, job = "Developer";
phone = 1123456782333, children = 3;
let childrenName = ["Maria", "John", "Diana"];
let friends = {
    name: ["Amer", "Samer", "Ali"],
    hobbys: ["reading", "traveling", "watching tv"],
    country: ["Canada", "USA", "Lebanon"]
}
let money = null; // empty data


let person = new Array();
person = [
    name, age, job, phone, children, childrenName, childrenAge = [10, 7, 3], friends, money
]
console.log(person);

const x = 2n ** 53n;  //datatype = bigInt x = 9007199254740992n
const y = x + 1n;     //datatype = bigInt y = 9007199254740993n
console.log(typeof (x));
console.log(typeof (y));

let userName = new Array();
userName = ['Asreen', 'Sujatha', 'Chuling', 'Adel', 'Peter', 'Khaled', 'Jessica', 'Giampaulo', 'Cagri', 'Danil', 'Juan Carlos', 'Mohammad'];
let fbw12 = {};
fbw12 = {
    institute: 'DCI',
    courseNumber: 123456,
    Adress: "Grafenberger Allee 87, 40237 Düsseldorf",
    startDate: '16/3/2020',
    studentNumber: 12,
    teacher: 'Arif',

}
function getInfo() {
    for (let i = 0; i < userName.length; i++) {
        document.getElementById('information').innerHTML += userName[i] + '<br>';
    }
}
function courseInfo() {
    document.getElementById('information2').innerHTML += '<br>' + 'Institute: ' + fbw12.institute + '<br>' + 'Course Nomber: ' + fbw12.courseNumber + '<br>' + 'Adress: ' + fbw12.Adress + '<br>' + 'Start Date: ' + fbw12.startDate + '<br>' + 'No of Students: ' + fbw12.studentNumber + '<br>' + fbw12.teacher + '<br>';
}

userName[0] = 'Asreen ilyas';
fbw12.institute = 'digital career institute';
console.log(userName[0]);
console.log(fbw12.institute);
console.log(userName.sort());
console.log(fbw12);

let myInfo = [];
let myObjekt = {};

//I use Array ,inside it there is arrays and Object

myInfo = [
    name = 'Asreen Ilyas',
    age = 35,
    movie = ['Harry Poter', 'The Lord of the Rings', 'The X men'],
    favoriteFood = ['Apple', 'Strawbeeryes', 'Watermelon'],
    adress = {
        street: 'Kornstrasse 11',
        zipCode: 40670,
        city: 'Meerbusch',
        country: 'Germany',
    }
]
console.log(myInfo);

//I use an Object ,inside it there is array and Object

myInfo1 = {
    name: 'Asreen Ilyas',
    age: 35,
    movie: ['Harry Poter', 'The Lord of the Rings', 'The X men'],
    favoriteFood: ['Apple', 'Strawbeeryes', 'Watermelon'],
    adress: {
        street: 'Kornstrasse 11',
        zipCode: 40670,
        city: 'Meerbusch',
        country: 'Germany',
    }
}
console.log(myInfo1);
document.getElementById('array').innerHTML += 'Hi everybody :). My Name is:' + myInfo[0] + 'My Age is: ' + myInfo[1] + 'My favorite Movies are:' + myInfo[2][0] + ' ' + myInfo[2][1] + ' ' + myInfo[2][2] + ' ' + 'My favorite Food :' + myInfo[3] + ' My Adress is:' + myInfo[4].street + '<br>' + myInfo[4].zipCode + '<br>' + myInfo[4].city + '<br>' + myInfo[4].country;

let i = 0;
document.getElementById('object').innerHTML += 'Hi everybody :). My Name is:' + myInfo1.name + '<br>' + 'My Age is: ' + myInfo1.age + '<br>' + 'My favorite Movies are:' + myInfo1.movie[i] + ' ' + myInfo1.movie[++i] + ' ' + myInfo1.movie[++i] + ' ' + '<br>' + 'My favorite Food :' + myInfo1.favoriteFood + '<br>' + ' My Adress is:' + myInfo1.adress.street + '<br>' + myInfo1.adress.zipCode + '<br>' + myInfo1.adress.city + '<br>' + myInfo1.adress.country;
myCompany = [
    ['Arif', 32, 'Bd', 'DCI'],
    ['Peter', 20, 'De'],
    ['Chuling', 20, 'Ch'],
    ['Jessica', 20]
];
console.log('2-D: ', myCompany);
console.log(myCompany[1][0]);
myCompany[1][0] = 'Cagri';
console.log(myCompany[1][0]);
// 3-D
myCompany = ['Germany', ['Düsseldorf', ['Arif', 'DCI'], ['fbw12, 12']], ['Meerbusch', ['Asreen', 30]]];
console.log('3-D: ', myCompany);
console.log(myCompany[1][1][1]);
console.log(myCompany[1][1][0]);
console.log(myCompany[2][1][0]);
//table .. Array
let coronaVirus = new Array();
coronaVirus = [
    ['USA', ['Total cases', 1385834, ['Serious critical', 16484]], ['Total Death', 81795], ['Total recovered', 262225]],

    ['Spain', ['Total cases', 268143, ['Serious critical', 1650]], ['Total Death', 26744], ['Total recovered', 177846]],

    ['France', ['Total cases', 177423, ['Serious critical', 2712]], ['Total Death', 26643], ['Total recovered', 56724],],

    ['Germany', ['Total cases', 172576, ['Serious critical', 1576]], ['Total Death', 7661], ['Total recovered', 147200]],

    ['Morocco', ['Total cases', 6281, ['Serious critical', 1]], ['Total Death', 188], ['Total recovered', 2811]],
]
// using Array
console.table(coronaVirus);
document.getElementById('coronatable').innerHTML += '<tr><th>Country </th><th>Total Cases</th> <th>Serious critical</th> <th>Total death</th><th>Total recovered</th>' + '<tr><td>' + coronaVirus[0][0] + '</td><td>' + coronaVirus[0][1][1] + '</td><td>' + coronaVirus[0][1][2][1] + '</td><td>' + coronaVirus[0][2][1] + '</td><td>' + coronaVirus[0][3][1] + '</td></tr> '
    +
    '<tr><td>' + coronaVirus[1][0] + '</td><td>' + coronaVirus[1][1][1] + '</td><td>' + coronaVirus[1][1][2][1] + '</td><td>' + coronaVirus[1][2][1] + '</td><td>' + coronaVirus[1][3][1] + '</td></tr> '
    +
    '<tr><td>' + coronaVirus[2][0] + '</td><td>' + coronaVirus[2][1][1] + '</td><td>' + coronaVirus[2][1][2][1] + '</td><td>' + coronaVirus[2][2][1] + '</td><td>' + coronaVirus[2][3][1] + '</td></tr> '
    +
    '<tr><td>' + coronaVirus[3][0] + '</td><td>' + coronaVirus[3][1][1] + '</td><td>' + coronaVirus[3][1][2][1] + '</td><td>' + coronaVirus[3][2][1] + '</td><td>' + coronaVirus[3][3][1] + '</td></tr> '
    +
    '<tr><td>' + coronaVirus[4][0] + '</td><td>' + coronaVirus[4][1][1] + '</td><td>' + coronaVirus[4][1][2][1] + '</td><td>' + coronaVirus[4][2][1] + '</td><td>' + coronaVirus[4][3][1] + '</td></tr> '

// Object .. CoronaVirus
let coronaVirus2 = {};
coronaVirus2 = {
    country1: 'USA', cases1: {
        'totalCases': 1385834,
        'seriousCritical': 16484,
        'totalDeath': 81795,
        'totalRecovered': 262225
    },
    country2: 'Spain', cases2: {
        'totalCases': 268143,
        'seriousCritical': 1650,
        'totalDeath': 26744,
        'totalRecovered': 177846
    },
    country3: 'France', cases3: {
        'totalCases': 177423,
        'seriousCritical': 2712,
        'totalDeath': 26643,
        'totalRecovered': 56724
    },

    country4: 'Germany', cases4: {
        'totalCases': 172576,
        'seriousCritical': 1576,
        'totalDeath': 7661,
        'totalRecovered': 147200

    },
    country5: 'Morocco', cases5: {
        'totalCases': 6281,
        'seriousCritical': 1,
        'totalDeath': 188,
        'totalRecovered': 2811

    }
};
// using Object
console.table(coronaVirus2);
document.getElementById('coronatable1').innerHTML += '<tr><th>Country </th><th>Total Cases</th> <th>Serious critical</th> <th>Total death</th><th>Total recovered</th>' + '<tr><td>' + coronaVirus2.country1 + '</td><td>' + coronaVirus2.cases1.totalCases + '</td><td>' + coronaVirus2.cases1.seriousCritical+ '</td><td>' + coronaVirus2.cases1.totalDeath + '</td><td>' + coronaVirus2.cases1.totalRecovered + '</td></tr> '
    +
    '<tr><td>' + coronaVirus2.country2+ '</td><td>' + coronaVirus2.cases2.totalCases + '</td><td>' + coronaVirus2.cases2.seriousCritical+ '</td><td>' + coronaVirus2.cases2.totalDeath + '</td><td>' + coronaVirus2.cases2.totalRecovered + '</td></tr> '
    +
    '<tr><td>' + coronaVirus2.country3 + '</td><td>' + coronaVirus2.cases3.totalCases + '</td><td>' + coronaVirus2.cases3.seriousCritical+ '</td><td>' + coronaVirus2.cases3.totalDeath + '</td><td>' + coronaVirus2.cases3.totalRecovered + '</td></tr> '
    +
    '<tr><td>' + coronaVirus2.country4 + '</td><td>' + coronaVirus2.cases4.totalCases + '</td><td>' + coronaVirus2.cases4.seriousCritical+ '</td><td>' + coronaVirus2.cases4.totalDeath + '</td><td>' + coronaVirus2.cases4.totalRecovered + '</td></tr> '
    +
    '<tr><td>' + coronaVirus2.country5 + '</td><td>' + coronaVirus2.cases5.totalCases + '</td><td>' + coronaVirus2.cases5.seriousCritical+ '</td><td>' + coronaVirus2.cases5.totalDeath + '</td><td>' + coronaVirus2.cases5.totalRecovered + '</td></tr> '


    console.log(coronaVirus.join('|'));
    


