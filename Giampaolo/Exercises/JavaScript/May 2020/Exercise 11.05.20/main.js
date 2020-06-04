// EXERCISE 1
/**
 * First Part: Array
 */

// Array
let userList = [
    'Arif (Teacher)',
    'Adel',
    'Asreen',
    'Khaled',
    'Daniel',
    'Peter',
    'Giampaolo',
    'Jessica',
    'Chuling',
    'Cagri',
    'Mohammed',
]

// Adding new users to the list
userList[11] = 'Juan';
userList[12] = 'Sujatha';

// showing users Array and a singolar user in the console
console.log(userList);
console.log(userList[9]);

/**
 * Second Part: Object
 */

// Object
let course = {
    courseName: 'FBW 12',
    startingDate: '16.03.20',
    endingDate: '04.05.21',
    instituteName: 'Difital Career Institue',
    address: 'Grafenberger Allee 87',
    onlineKurs: true,
    classroomKurs: false
}

// Adding a key inside the object
course.numberOfStudents = 12;

// showing course object and a number of students in the console
console.log(course.numberOfStudents)
console.log(course)

/**
 * Third part: Showing results in the HTML Document
 */

// userList
document.getElementById("userListTeacher").innerHTML = userList[0];
document.getElementById("userList1").innerHTML = userList[1];
document.getElementById("userList2").innerHTML = userList[2];
document.getElementById("userList3").innerHTML = userList[3];
document.getElementById("userList4").innerHTML = userList[4];
document.getElementById("userList5").innerHTML = userList[5];
document.getElementById("userList6").innerHTML = userList[6];
document.getElementById("userList7").innerHTML = userList[7];
document.getElementById("userList8").innerHTML = userList[8];
document.getElementById("userList9").innerHTML = userList[9];
document.getElementById("userList10").innerHTML = userList[10];
document.getElementById("userList11").innerHTML = userList[11];
document.getElementById("userList12").innerHTML = userList[12];

// course
document.getElementById("course1").innerHTML = 'Course Name: ' + course.courseName;
document.getElementById("course2").innerHTML = 'Sarting Date: ' + course.startingDate;
document.getElementById("course3").innerHTML = 'Ending Date: ' + course.endingDate;
document.getElementById("course4").innerHTML = 'Institute Name: ' + course.instituteName;
document.getElementById("course5").innerHTML = 'Address: ' + course.address;
document.getElementById("course6").innerHTML = 'Online Course: ' + course.onlineKurs;
document.getElementById("course7").innerHTML = 'Classroom Course: ' + course.classroomKurs;
document.getElementById("course8").innerHTML = 'N° of Students: ' + course.numberOfStudents;

// EXERCISE 2
/**
 * Part 1: Array
 */
let userData = [
    name = 'Giampaolo',
    age = 27,
    favoriteMovies = [
        'Lord of The Rings',
        'Star Wars',
        'Harry Potter'
    ],
    favoriteFood = [
        'Doner',
        'Ice-cream',
        'Pizza'
    ],
    address = {
        street: 'DuisburgerStraße',
        houseNumber: 556,
        zipCode: 46902,
        city: 'Berlin',
        country: 'Germany'
    }
];
console.log('EXERCISE 2');
console.log('Below is the console.log of the Array \'Exercise 2\'');
console.log(userData);

document.getElementById('userArray1').innerHTML = '<b>Name:</b> ' + userData[0];
document.getElementById('userArray2').innerHTML = '<b>Age:</b> ' + userData[1];
document.getElementById('userArray3').innerHTML = userData[2][0];
document.getElementById('userArray4').innerHTML = userData[2][1];
document.getElementById('userArray5').innerHTML = userData[2][2];
document.getElementById('userArray6').innerHTML = userData[3][0];
document.getElementById('userArray7').innerHTML = userData[3][1];
document.getElementById('userArray8').innerHTML = userData[3][2];
document.getElementById('userArray9').innerHTML = '<b>Street:</b> ' + userData[4].street;
document.getElementById('userArray10').innerHTML = '<b>House Number:</b> ' + userData[4].houseNumber;
document.getElementById('userArray11').innerHTML = '<b>ZIP:</b> ' + userData[4].zipCode;
document.getElementById('userArray12').innerHTML = '<b>City:</b> ' + userData[4].city;
document.getElementById('userArray13').innerHTML = '<b>Country:</b> ' + userData[4].country;

/**
 * Part 2: Object
 */
let userGiampaolo = {
    name: 'Giampaolo',
    age: 27,
    favoriteMovies: [
        'Lord of The Rings',
        'Star Wars',
        'Harry Potter'
    ],
    favoriteFood: [
        'Doner',
        'Ice-cream',
        'Pizza'
    ],
    address: {
        street: 'DuisburgerStraße',
        houseNumber: 556,
        zipCode: 46902,
        city: 'Berlin',
        country: 'Germany'
    }
};
console.log('Below is the console.log of the Object \'Exercise 2\'');
console.log(userGiampaolo);

document.getElementById('userObject1').innerHTML = '<b>Name:</b> ' +  userGiampaolo.name;
document.getElementById('userObject2').innerHTML = '<b>Age:</b> ' +  userGiampaolo.age;
document.getElementById('userObject3').innerHTML = userGiampaolo.favoriteMovies[0];
document.getElementById('userObject4').innerHTML = userGiampaolo.favoriteMovies[1];
document.getElementById('userObject5').innerHTML = userGiampaolo.favoriteMovies[2];
document.getElementById('userObject6').innerHTML = userGiampaolo.favoriteFood[0];
document.getElementById('userObject7').innerHTML = userGiampaolo.favoriteFood[1];
document.getElementById('userObject8').innerHTML = userGiampaolo.favoriteFood[2];
document.getElementById('userObject9').innerHTML = '<b>Street:</b> ' +  userGiampaolo.address.street;
document.getElementById('userObject10').innerHTML = '<b>House Number:</b> ' +  userGiampaolo.address.houseNumber;
document.getElementById('userObject11').innerHTML = '<b>ZIP:</b> ' +  userGiampaolo.address.zipCode;
document.getElementById('userObject12').innerHTML = '<b>City:</b> ' +  userGiampaolo.address.city;
document.getElementById('userObject13').innerHTML = '<b>Country:</b> ' +  userGiampaolo.address.country;