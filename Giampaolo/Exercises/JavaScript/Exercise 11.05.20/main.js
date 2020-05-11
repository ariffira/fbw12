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