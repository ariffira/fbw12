// let type
let languageType = 'JavaScript(JS)';// String
// console.log(typeof languageType);

let moduleNumber = 3; // number
// console.log(typeof moduleNumber);

let isItOnline = true; // boolean
// console.log(typeof isItOnline);

let money = null; // empty data
// console.log(typeof money);


//const type
const institute = 'DCI';//string data
// console.log(typeof institute);


// Array data types: list
// declare array

let classList = ['fbw1', 'fbw2', 'fbw3']; // way 01
console.log(classList);
// console.log(typeof classList);

let classList1 = new Array('fbw1', 'fbw2', 'fbw3'); // way 02: new Array(): Promise
console.log(classList1);
// console.log(typeof classList1);

// complex array example 

let classInfo = [
    languageType,
    isItOnline,
    moduleNumber,
    institute,
    myvar = 'Adel',
    money = 3000,
    classList, //array inside array
    myArray = ['one', 'two'],
];
console.log(classInfo);
// console.log(typeof classInfo);



// object

let myTestObject = {
    companyName: 'Digital Carreer Institute',
    companyNameSort: institute
};
console.log(myTestObject.companyName);
console.log(myTestObject);
// console.log(typeof myTestObject);
let favorite_movies = ['Dark knight', 'Avatar', 'Terminator']

let complexObject = {
    name: 'Adel',
    age: 28,
    isATeacher: false,
    favorite_movies,
    favorite_fruits: ['apple', 'orange', 'date'],
    adress: {
        street: 'Wilhelm-Strater-Str.',
        hausNR: 92,
        zipCode: 41236,
        city: 'Mönchengladbach'
    }
};
console.log(complexObject);
console.log(complexObject.favorite_movies[1]);
console.log(complexObject.adress.city);
// class Ex 

let userList = [
    'Adel',
    'Asreen',
    'Cagri',
    'Chuling',
    'Daniel',
    'Paolo',
    'Carlos',
    'Khaled',
    'Joumah',
    'Peter',
    'Sujatha',
    'Jessica',
];

userList[3] = 'Peter';
userList[10] = 'Cagri';

console.log(userList);


let courseInfo = {
    instituteName: 'Digital Carreer Institute',
    courseName: 'Web Development',
    courseCode: 'fbw12',
    teacher: 'Arif',
    numberOfStudents: userList.length,
    startingDate: '16.03.2020',
    endingDate: '04.05.2021',
    adress: 'Düsseldorf'
};

courseInfo.adress = 'Grafenberger Allee 87, 40237 Düsseldorf';

console.log(courseInfo);

document.getElementById("info").innerHTML += '<b>Institute Name: </b>' + courseInfo.instituteName;
document.getElementById("info").innerHTML += '<br><b>Course Name: </b>' + courseInfo.courseName;
document.getElementById("info").innerHTML += '<br><b>Course Code: </b>' + courseInfo.courseCode;
document.getElementById("info").innerHTML += '<br><b>Teacher: </b>' + courseInfo.teacher;
document.getElementById("info").innerHTML += '<br><b>Number Of Students: </b>' + courseInfo.numberOfStudents;
document.getElementById("info").innerHTML += '<br><b>Starting Date: </b>' + courseInfo.startingDate;
document.getElementById("info").innerHTML += '<br><b>Ending Date: </b>' + courseInfo.endingDate;
document.getElementById("info").innerHTML += '<br><b>Adress: </b>' + courseInfo.adress;


document.getElementById("names").innerHTML +=
    ' 01: ' + userList[0] +
    '<br> 02: ' + userList[1] +
    '<br> 03: ' + userList[2] +
    '<br> 04: ' + userList[3] +
    '<br> 05: ' + userList[4] +
    '<br> 06: ' + userList[5] +
    '<br> 07: ' + userList[6] +
    '<br> 08: ' + userList[7] +
    '<br> 09: ' + userList[8] +
    '<br> 10: ' + userList[9] +
    '<br> 11: ' + userList[10] +
    '<br> 12: ' + userList[11];



document.getElementById("info2").innerHTML += '<tr><th>Institute Name</th><th>Course Name</th><th>Course Code</th><th>Teacher</th><th>Number Of Students</th><th>Starting Date</th><th>Ending Date</th><th>Adress</th></tr>' +
    '<tr><td>' + courseInfo.instituteName + '</td>' +
    '<td>' + courseInfo.courseName + '</td>' +
    '<td>' + courseInfo.courseCode + '</td>' +
    '<td>' + courseInfo.teacher + '</td>' +
    '<td>' + courseInfo.numberOfStudents + '</td>' +
    '<td>' + courseInfo.startingDate + '</td>' +
    '<td>' + courseInfo.endingDate + '</td>' +
    '<td>' + courseInfo.adress + '</td></tr>';



for (i = 0; i < userList.length; i++) {
    document.getElementById("names2").innerHTML += '<li>' + userList[i] + '</li>';
}



// class Ex 2

let classEx2Array = [
    'Adel',
    28,
    false,
    {
        first: 'Dark knight',
        second: 'Avatar',
        third: 'Terminator'
    },
    {
        first: 'apple',
        second: 'orange',
        third: 'date'
    },
    [
        'Wilhelm-Strater-Str',
        92,
        41236,
        'Mönchengladbach'
    ]
];

console.log(classEx2Array);

document.getElementById("infoarray").innerHTML +=
    '<tr><th>My name</th><td>' + classEx2Array[0] +
    '</td></tr><tr><td colspan="2">I am <b>' + classEx2Array[1] + ' </b>years old.' +
    '</td></tr><tr><th>I am the teatcher</th><td>' + classEx2Array[2] +
    '</td></tr><tr><th>My favorite films</th><td><b>1.</b> ' + classEx2Array[3].first + '<br><b>2.</b> ' + classEx2Array[3].second + '<br><b>3.</b> ' + classEx2Array[3].third +
    '</td></tr><tr><th>My favorite fruits</th><td><b>1.</b> ' + classEx2Array[4].first + '<br><b>2.</b> ' + classEx2Array[4].second + '<br><b>3.</b> ' + classEx2Array[4].third +
    '</td></tr><tr><th>My Adress </th><td>' + classEx2Array[5][0] + '. ' + classEx2Array[5][1] + '<br>' + classEx2Array[5][2] + ' ' + classEx2Array[5][3] + '</td></tr>'
    ;


let classEx2Object = {
    name: 'Adel',
    age: 28,
    isATeacher: false,
    favorite_movies: ['Dark knight', 'Avatar', 'Terminator'],
    favorite_fruits: ['apple', 'orange', 'date'],
    adress: {
        street: 'Wilhelm-Strater-Str',
        hausNR: 92,
        zipCode: 41236,
        city: 'Mönchengladbach'
    }
};

console.log(classEx2Object);

document.getElementById("infoObject").innerHTML +=
    '<tr><th>My name</th><td>' + classEx2Object.name +
    '</td></tr><tr><td colspan="2">I am <b>' + classEx2Object.age + ' </b>years old.' +
    '</td></tr><tr><th>I am the teatcher</th><td>' + classEx2Object.isATeacher +
    '</td></tr><tr><th>My favorite films</th><td><b>1.</b> ' + classEx2Object.favorite_movies[0] + '<br><b>2.</b> ' + classEx2Object.favorite_movies[1] + '<br><b>3.</b> ' + classEx2Object.favorite_movies[2] +
    '</td></tr><tr><th>My favorite fruits</th><td><b>1.</b> ' + classEx2Object.favorite_fruits[0] + '<br><b>2.</b> ' + classEx2Object.favorite_fruits[1] + '<br><b>3.</b> ' + classEx2Object.favorite_fruits[2] +
    '</td></tr><tr><th>My Adress </th><td>' + classEx2Object.adress.street + '. ' + classEx2Object.adress.hausNR + '<br>' + classEx2Object.adress.zipCode + ' ' + classEx2Object.adress.city + '</td></tr>';



// Array multi-D 
let multiDCompany =
    ['DCI',
        ['Berlin',
            ['fbw1',
                ['aaaa',
                    ['Street1', 11]
                ],
                ['bbbb',
                    ['Street2', 12]
                ],
                ['cccc',
                    ['Street3', 13]
                ],
                ['dddd',
                    ['Street4', 14]
                ],
            ],
            ['fbw2',
                ['eeee',
                    ['Street5', 15]
                ],
                ['ffff',
                    ['Street6', 16]
                ],
                ['gggg',
                    ['Street7', 17]
                ],
                ['hhhh',
                    ['Street8', 18]
                ],
            ],
            ['fbw3',
                ['iiii',
                    ['Street9', 19]
                ],
                ['jjjj',
                    ['Street10', 110]
                ],
                ['kkkk',
                    ['Street11', 111]
                ],
                ['llll',
                    ['Street12', 112]
                ],
            ],
            ['fbw4',
                ['mmmm',
                    ['Street13', 113]
                ],
                ['nnnn',
                    ['Street14', 114]
                ],
                ['oooo',
                    ['Street15', 115]
                ],
                ['pppp',
                    ['Street16', 116]
                ],
            ],
        ],
        ['Hamburg',
            ['fbw5',
                ['qqqq',
                    ['Street17', 117]
                ],
                ['rrrr',
                    ['Street18', 118]
                ],
                ['ssss',
                    ['Street19', 119]
                ],
                ['tttt',
                    ['Street20', 120]
                ],
            ],
            ['fbw6',
                ['uuuu',
                    ['Street21', 121]
                ],
                ['vvvv',
                    ['Street22', 122]
                ],
                ['wwww',
                    ['Street23', 123]
                ],
                ['xxxx',
                    ['Street24', 124]
                ],
            ],
            ['fbw7',
                ['yyyy',
                    ['Street25', 125]
                ],
                ['zzzz',
                    ['Street26', 126]
                ],
                ['aaaa',
                    ['Street27', 127]
                ],
                ['bbbb',
                    ['Street28', 128]
                ],
            ],
            ['fbw8',
                ['cccc',
                    ['Street29', 129]
                ],
                ['dddd',
                    ['Street30', 130]
                ],
                ['eeee',
                    ['Street31', 131]
                ],
                ['ffff',
                    ['Street32', 132]
                ],
            ],
        ],
        ['Düsseldorf',
            ['fbw9',
                ['gggg',
                    ['Street33', 133]
                ],
                ['hhhh',
                    ['Street34', 134]
                ],
                ['iiii',
                    ['Street35', 135]
                ],
                ['jjjj',
                    ['Street36', 136]
                ],
            ],
            ['fbw10',
                ['kkkk',
                    ['Street37', 137]
                ],
                ['llll',
                    ['Street38', 138]
                ],
                ['mmmm',
                    ['Street39', 139]
                ],
                ['nnnn',
                    ['Street40', 140]
                ],
            ],
            ['fbw11',
                ['oooo',
                    ['Street401', 141]
                ],
                ['pppp',
                    ['Street42', 142]
                ],
                ['qqqq',
                    ['Street43', 143]
                ],
                ['rrrr',
                    ['Street44', 144]
                ],
            ],
            ['fbw12',
                ['ssss',
                    ['Street45', 145]
                ],
                ['tttt',
                    ['Street46', 146]
                ],
                ['uuuu',
                    ['Street47', 147]
                ],
                ['vvvv',
                    ['Street48', 148]
                ],
            ],
        ],
        ['Leipzig',
            ['fbw13',
                ['wwww',
                    ['Street49', 149]
                ],
                ['xxxx',
                    ['Street50', 150]
                ],
                ['yyyy',
                    ['Street51', 151]
                ],
                ['zzzz',
                    ['Street53', 153]
                ],
            ],
            ['fbw14',
                ['aaaa',
                    ['Street54', 154]
                ],
                ['bbbb',
                    ['Street55', 155]
                ],
                ['cccc',
                    ['Street56', 156]
                ],
                ['dddd',
                    ['Street57', 157]
                ],
            ],
            ['fbw15',
                ['eeee',
                    ['Street58', 158]
                ],
                ['ffff',
                    ['Street59', 159]
                ],
                ['gggg',
                    ['Street60', 160]
                ],
                ['hhhh',
                    ['Street61', 161]
                ],
            ],
            ['fbw16',
                ['iiii',
                    ['Street62', 162]
                ],
                ['jjjj',
                    ['Street63', 163]
                ],
                ['kkkk',
                    ['Street64', 164]
                ],
                ['llll',
                    ['Street65', 165]
                ],
            ],
        ],
        ['Dortmund',
            ['fbw17',
                ['mmmm',
                    ['Street66', 166]
                ],
                ['nnnn',
                    ['Street67', 167]
                ],
                ['oooo',
                    ['Street68', 168]
                ],
                ['pppp',
                    ['Street69', 169]
                ],
            ],
            ['fbw18',
                ['qqqq',
                    ['Street70', 170]
                ],
                ['rrrr',
                    ['Street71', 171]
                ],
                ['ssss',
                    ['Street72', 172]
                ],
                ['tttt',
                    ['Street73', 173]
                ],
            ],
            ['fbw19',
                ['uuuu',
                    ['Street74', 174]
                ],
                ['vvvv',
                    ['Street75', 175]
                ],
                ['wwww',
                    ['Street76', 176]
                ],
                ['xxxx',
                    ['Street77', 177]
                ],
            ],
            ['fbw20',
                ['yyyy',
                    ['Street78', 178]
                ],
                ['zzzz',
                    ['Street79', 179]
                ],
                ['aaaa',
                    ['Street80', 180]
                ],
                ['bbbb',
                    ['Street81', 181]
                ],
            ],
        ],
    ];


    console.table(multiDCompany);
    console.table(multiDCompany[1]);
    console.table(multiDCompany[1][1]);
    console.table(multiDCompany[1][1][1]);

    document.getElementById("company").innerHTML +=' '+ multiDCompany[0];

    for (i=1; i<6; i++){
        
        document.getElementById("allinfo"+i).innerHTML +='<h3>'+ multiDCompany[i][0]+'</h3>';
        for (j=1; j<5; j++){   
            document.getElementById("allinfo"+i).innerHTML +='<table style="margin-top: 5px;"><tr><th colspan="2">'+multiDCompany[i][j][0]+'</th></tr>'+
                '<tr><td style="text-align: center;  background-color: coral;">Name</td>'+
                '<td style= "text-align: center;  background-color: coral;">Adress</td></tr></table>';
            for (k=1; k<5; k++){
                document.getElementById("allinfo"+i).innerHTML +='<table><tr><td>'+multiDCompany[i][j][k][0]+
                                                                '</td><td>'+multiDCompany[i][j][k][1][0]+
                                                                '<br>'+multiDCompany[i][j][k][1][1]+'</td></tr></table>';
            }
            
        }
    }

