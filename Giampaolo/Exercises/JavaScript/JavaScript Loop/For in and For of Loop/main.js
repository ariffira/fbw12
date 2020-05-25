let array = [
    'Test',
    'Test 1',
    'Test 2',
    'Test 3'
];

let newArray = [];

for(let x of array) {
    newArray.push(x);
};

console.log(newArray);

for(let x in array) {
    newArray.push(x);
};

console.log(newArray);

let myList = [
    {
        firstName: 'Arif',
        role: 'Teacher',
        country: 'Bangladesh',
        countryFlag: 'images/bangladesh.png',
        favoriteMovie: [
            'Harry Potter',
            'Avatar'
        ]
    },

    {
        firstName: 'Giampaolo',
        role: 'Teacher Assistant',
        country: 'Italy',
        countryFlag: 'images/italy.png',
        favoriteMovie: [
            'Lord of the Rings',
            'Star Wars',
            'Ready Player One'
        ]
    },

    {
        firstName: 'Chuling',
        role: 'Teacher Assistant',
        country: 'China',
        countryFlag: 'images/china.png',
        favoriteMovie: [
            'Django',
            'Start Treck'
        ]
    },

    {
        firstName: 'Adel',
        role: 'Classmate',
        country: 'Syria',
        countryFlag: 'images/syria.png',
        favoriteMovie: [
            'Jurassic Park',
            '007'
        ]
    },

    {
        firstName: 'Asreen',
        role: 'Classmate',
        country: 'Iraq',
        countryFlag: 'images/iraq.png',
        favoriteMovie: [
            'Fast & Furios',
            'Riddick'
        ]
    },

    {
        firstName: 'Cagri',
        role: 'Classmate',
        country: 'Turkey',
        countryFlag: 'images/turkey.png',
        favoriteMovie: [
            'Hunger Games',
            'Shrek'
        ]
    },

    {
        firstName: 'Daniel',
        role: 'Classmate',
        country: 'Romania',
        countryFlag: 'images/romania.png',
        favoriteMovie: [
            'Resident Evil',
            'The Hobbit'
        ]
    },

    {
        firstName: 'Khaled',
        role: 'Classmate',
        country: 'Syria',
        countryFlag: 'images/syria.png',
        favoriteMovie: [
            'Percy Jackson',
            'Avengers'
        ]
    },

    {
        firstName: 'Jessica',
        role: 'Classmate',
        country: 'Argentina',
        countryFlag: 'images/argentina.png',
        favoriteMovie: [
            'Spiderman',
            'Justice League'
        ]
    },

    {
        firstName: 'Juan',
        role: 'Classmate',
        country: 'Spain',
        countryFlag: 'images/spain.png',
        favoriteMovie: [
            'Captain America',
            'Black Phanter'
        ]
    },

    {
        firstName: 'Mohammed',
        role: 'Classmate',
        country: 'Syria',
        countryFlag: 'images/syria.png',
        favoriteMovie: [
            'Next',
            'Back to the future'
        ]
    },

    {
        firstName: 'Peter',
        role: 'Classmate',
        country: 'Poland',
        countryFlag: 'images/poland.png',
        favoriteMovie: [
            'The Dark Knight',
            'Acquaman'
        ]
    },

    {
        firstName: 'Sujhata',
        role: 'Classmate',
        country: 'India',
        countryFlag: 'images/india.png',
        favoriteMovie: [
            'Interstellar',
            'Pacific Rim',
            'Stranger Things'
        ]
    }
];

for(let x in myList) {
    list.innerHTML += `
    <div class="card">
    <h2>${myList[x].role}</h2>
    <p><b>Name:</b> ${myList[x].firstName}</p>
    <p><b>Country:</b> ${myList[x].country} <img src=${myList[x].countryFlag}></p>
    <p><b>Favorite Movies:</b><ul class="movie"></ul></p>
    </div><br>`
    console.table(myList[x]);
    for(let y of myList[x].favoriteMovie) {
        document.getElementsByClassName('movie')[x].innerHTML += `<li>${y}</li>`;
        console.log(y);
        /* or
        for(let y in myList[x].favoriteMovie) {
            document.getElementsByClassName('movie')[x].innerHTML += `<li>${myList[x].favoriteMovie[y]}</li>`
        */
};
};