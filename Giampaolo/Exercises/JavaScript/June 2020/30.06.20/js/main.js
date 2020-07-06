// let products = [
//     {
//         id: 1,
//         name: 'Smarthphone',
//         price: 300,
//         picture: 'images/smarthphone.png'
//     },
//     {
//         id: 2,
//         name: 'Tablet',
//         price: 600,
//         picture: 'images/tablet.png'
//     },
//     {
//         id: 3,
//         name: 'TV',
//         price: 800,
//         picture: 'images/tv.png'
//     },
//     {
//         id: 4,
//         name: 'Ventilator',
//         price: 80,
//         picture: 'images/ventilator.png'
//     },
//     {
//         id: 5,
//         name: 'Drone',
//         price: 1200,
//         picture: 'images/drone.png'
//     },
//     {
//         id: 6,
//         name: 'Fridge',
//         price: 400,
//         picture: 'images/fridge.png'
//     },
//     {
//         id: 7,
//         name: 'Computer',
//         price: 850,
//         picture: 'images/computer.png'
//     },
//     {
//         id: 8,
//         name: 'Mixer',
//         price: 150,
//         picture: 'images/mixer.png'
//     }
// ]

// let showProducts = (item) => {
//     test.innerHTML += `
//     <div class="item-card" id="product${item.id}">
//         <div class="img-box">
//             <img src="${item.picture}">
//         </div>
//         <div class="item-data">
//             <h2>${item.name}</h2>
//             <div class="item-price">
//                 <b>Price: </b>€ <span id="price${item.id}">${item.price}</span>
//                 <br>
//                 <span id="discount${item.id}"></span>
//             </div>
//             <button class="button" id="btn${item.id}" onclick="discount('${item.name}')">Check Discount</button>
//         </div>
//     </div>
//     `
// }

// products.map(showProducts)

// // c = products.findIndex(o => o.name == 'name')

// // console.log(c)


// let discount = (userChoice) => {

//     let abu = new Promise((resolve, reject) => {

//         let index = products.findIndex(item => item.name == userChoice);
//         let result;

//         if (products[index].price >= 500) {
//             resolve(
//                 // test(),
//                 result = products[index].price - (products[index].price / 100) * 5,
//                 eval('discount' + (index + 1)).innerHTML = '€ ' + result,
//                 eval('price' + (index + 1)).classList.add('mark'),
//                 eval('btn' + (index + 1)).classList.add('hide')
//             )
//         } else {
//             reject(
//                 eval('discount' + (index + 1)).innerHTML = 'Sorry, no discount avaiable for this product!',
//                 eval('btn' + (index + 1)).classList.add('hide')
//             )
//         }
//     })

//     // let test = () => {
//     //     console.log(1 + 1)
//     // }

//     return abu.then()
// }



// // console.log(eval('btn' + (4 - 1)).classList.add('hide'))
// // console.log(discount('Drone'))



// // [ABC, uno, TWo]
// makeAllSmall(arrayOfWords) // [abc, uno, two] - 'Error 1'
//     .then(sortWords) // [abc, two, uno] - 'Error 2'
//     .then(makeAllCaps) // [ABC, TWO, UNO] - 'Error 3'
//     .then(sortReverse) // [UNO, TWO, ABC] - 'Error 4'
//     .then((result) => console.log(result))
//     .catch(error => console.log(error)) // 'Error 2'



const arrayOfWords = ['cucumber', 'toMAtos', 'avocado']
// const makeAllCaps = (array) => {
//     return new Promise((resolve, reject) => {

//         array.map(word => {

//             if (typeof word === 'string') {
//                 resolve(word.toUpperCase()) // resolve === return for the promise if is positive
//             } else {
//                 reject('Error: Not all items in the array are strings!') // reject === return for the promise if is negative
//             }
//         })

//     })
// }

// const makeAllCaps = (array) => {
//     myPromise = new Promise((resolve, reject) => {

//         let capsArray = array.map(word => {

//             if (typeof word === 'string') {
//                 return word.toUpperCase()
//             } else {
//                 reject('Error: Not all items in the array are strings!')
//             }
//         })
//         resolve(capsArray)
//     })

//     return myPromise
// }

// console.log(makeAllCaps(arrayOfWords))

//create promise
let myPromise = new Promise(function (resolve, reject) {
    resolve(10);//then(resolve)
    reject();//catch(reject)
});
//calling promise
myPromise
    .then(addition)
    .then(multiplication)
    .then(divide)
    .then(function () {
        console.log('function inside then')
    })
    .then(() => console.log('resolve by arrow function'))
    .catch();
function addition(num) {
    console.log('Received: ', num);
    num = num + 5;
    console.log('Result addition: ', num);
    return num;
}
function multiplication(num) {
    console.log('Received: ', num);
    num = num * 10;
    console.log('Multiplication: ', num)
    return num;
}
function divide(num) {
    console.log('Received: ', num);
    num = num / 3;
    console.log('Divide by 3: ', num)
}

// [11: 48 AM] Do subtraction, reminder, increment, decrement method and show result in console.log from that chain
// [11: 49 AM] 10 - 15 min