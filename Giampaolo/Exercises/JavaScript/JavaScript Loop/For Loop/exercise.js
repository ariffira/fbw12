let obst = [
    'images/apple.png',
    'images/birne.png',
    'images/cherry.png',
    'images/kiwi.png',
    'images/kokosnuss.png',
    'images/banana.png',
    'images/orange.png',
    'images/pfirsich.png',
    'images/traube.png'
];

let fruitName = [
    'Apple',
    'Pear',
    'Cherry',
    'Kiwi',
    'Coconut',
    'Banana',
    'Orange',
    'Peach',
    'Grape'
];

for(i = 0; i < obst.length; i++) {
    document.getElementById('shopping-list-items').innerHTML += `
    <div class="image-box">
    <img src=${obst[i]}>
    </div>`
};

for(x = 0; x < fruitName.length; x++) {
    document.getElementById('shopping-list').innerHTML += `
    <li>
    <h3>${fruitName[x]}</h3>
    </li>`
};


// Other Examples
let value;

for(value = 0; value < 10; value++) {
    console.log(`The result of the loop is: ${value}`)
}

let myArray = [
    'Giampaolo',
    'Arif',
    'Chuling',
    'Adel',
    'Asreen',
    'Cagri',
    'Sujatha',
    'Juan',
    'Peter',
    'Daniel',
    'Jessica',
    'Khaled',
    'Mohammed'
]

for(classmate = 0; classmate < myArray.length; classmate++) {
    console.log(`Member of the class: ${myArray[classmate]}`)
}