// connection test
//alert('js is connected');
/**
 * Todo:
 * 1. create a Id based on html div put some html(p,img) inside div using getElementById() 
 * 2. create 3 kinds of variable as below and put this data back to html:
 *  - var 
 *  - let
 *  - const
 * 
 * 3. Give some values in variable using String, number etc.
 */
document.getElementById('id1').innerHTML += "<div id='change'><p id='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, fugiat! Voluptate eius eum voluptatum doloremque corrupti? Similique eius quasi vel voluptas reiciendis animi obcaecati deleniti consequatur, possimus numquam odit neque!</p>" +
    "<div><button onclick=" + '"changeColor' + "('blue');" + '"' + 'class="blue">Blue</button>' +
    "<button onclick=" + '"changeColor' + "('red');" + '"' + 'class="red">Red</button>' +
    "<button onclick=" + '"changeColor' + "('yellow');" + '"' + 'class="yellow">Yellow</button>' +
    "<button onclick=" + '"changeColor' + "('grey');" + '"' + 'class="grey">Grey</button> </div></div>' +
    "<br><img src='image/1.jpeg'><br>";
var x = 'Mohammad';
let y = 29;
const z = 'Computer Engineer';
// document.write("Name:" + x + "<br>Age: " + y + "<br>Job: " + z);

function changeColor(newColor) {
    var elem = document.getElementById("para");
    elem.style.color = newColor;
}

let students = ['Mohammad', 'Adel', 'Peter', 'Cagri', 'Danial'];
let age = ['29', '25', '33', '32', '30'];
// for (let x = 0; x <= 4; x++) {
//     document.getElementById('profile').innerHTML += 'name:' + students[x] + ' | ' + 'age:' + age[x] + '<br>';
// }

let userList = ['Mohammad', 'Adel', 'Peter', 'Cagri', 'Danial'];
userList[3] = 'Joanka';
console.log(userList);

let course = {
    course_name: 'web development',
    starting_date: '16.03.2020',
    ending_date: 'one year later',
    number_of_students: 12,
    institute_name: 'DCI',
    address: 'Düsseldorf'
};
course.number_of_students = 13;
console.log(course)

// document.getElementById('userList').innerHTML += '<hr>' + userList + '<br>' + JSON.stringify(course);
let favourite_movies = ['Home alone', 'the mask', 'IPman'],
    favourite_Foods = ['apple', 'banana', 'potatoe'],
    address = { street: 'Yorckstr.', houseNo: '1a', zipCode: 40476, city: 'Düsseldorf', country: 'Germany' };
let info = [
    'Mohammad',
    29,
    favourite_movies,
    favourite_Foods,
    address
];
console.log(info);

document.getElementById('profile').innerHTML = '<h2>Array Example</h2>' + 'name:' + info[0] + '<br>' + 'age:' + info[1] + '<br>' + 'favourite  movies:' + info[2] + '<br>' + 'favourite Foods:' + info[3] + '<br>' + 'address:' + info[4].street + info[4].houseNo + '<br>' + info[4].zipCode + ' ' + info[4].city + ' ' + info[4].country + '<br><hr>';


let inf = {
    name: 'Mohammad',
    age: 29,
    favouriteMovies: favourite_movies,
    favouriteFoods: favourite_Foods,
    adress: address
};
console.log(inf);
document.getElementById('profile').innerHTML += '<h2>Opject Example</h2>' + 'name:' + inf.name + '<br>' + 'age:' + inf.age + '<br>' + 'favourite  movies:' + inf.favouriteMovies + '<br>' + 'favourite Foods:' + inf.favouriteFoods + '<br>' + 'address:' + inf.adress.street + inf.adress.houseNo + '<br>' + inf.adress.zipCode + ' ' + inf.adress.city + ' ' + inf.adress.country + '<br>';

// declare array
let myCompany = [];
console.log(myCompany);
// normal arrays: 1D
// string values
myCompany = [
    'Arif',
    'Asreen',
    'Paolo'
];
console.log(myCompany);
// number values
myCompany = [1, 4, 8, 3];
console.log(myCompany);
// combined array
myCompany = [
    'Arif', 1,
    'Asreen', 4,
    'Paolo', 5
];
console.log(myCompany);
// multi-D arrays
/*
2-D array structure
myCompany = [
    [],
    [],
    [],
    []
];
*/
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
myCompany = [
    'Germany', [
        'Düsseldorf', [
            'Arif', 'DCI'
        ]
    ]
];
console.log('3-D: ', myCompany);
console.log(myCompany[1][1][1]);