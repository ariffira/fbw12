// function calculator(a, b) {
//     return a + b; //1200+239
// }
// console.log(calculator(1200, 239));
// console.log(calculator(1, 23));


// function cal_mult(a, b) {
//     return a * b;
// }
// console.log(cal_mult(13, 78));
// document.getElementById('call').innerHTML = '13 X 78 =' + cal_mult(13, 78);

// function cal_div(a, b) {
//     return a / b;
// }
// console.log(cal_div(78, 4));
// document.getElementById('call').innerHTML += '<br>78 / 4 =' + cal_div(78, 4);

// let m5 = (x) => {
//     let y = x * 5;
//     return y;
// }
// console.log(m5(9));

// function myf(p) {
//     function secf(num) {
//         return p - num;
//     }

//     var v = secf(2);
//     if (v < 1) {
//         console.log("bigger");
//     } else {
//         console.log("less");

//     }
// }
// myf(0);



// let base = 5;

// function pten(b) {
//     return x = b + 10;
// }

// function ptwn() {
//     alert(base + 20);
//     document.getElementById("demo").innerHTML = base + '+ 20 is' + (base + 20);

// }

// function test(a, b) {
//     let name = a + b;
//     console.log('my nyme is ' + name)
//     return arguments.length
// }

// console.log(test('Mohammad ', 'Joumah'))

// let x = 50,
//     y = '50';

// if (x == y)
//     console.log('x = y');
// else if (x < y)
//     console.log('x is ot smaller than y')
// else if (x > y)
//     console.log('x is ot bigger than y')
// if (x === y)
//     console.log('x have same type of y')
// else
//     console.log('x have another type of y')
// x = +2;
// (x == y) ? console.log('x and y is equal'): console.log('x and y is different');


// let userName = prompt('Whats Your Name?');
// console.log(userName);
// if (userName == 'Arif') {
//     document.write('My Name Arif');
// } else {
//     document.write('I do not know you');
// }
// let yourOpinion = confirm('Are you sure about this?');
// if (yourOpinion) {
//     document.write('You confirmed successfully!');
// }


/**
 * ask user which month of the year he wants to see and show the result
 */
let chooseMonth = prompt('Which month of the Year you want to see?only number', '2');
console.log(chooseMonth);
// if-elseif-else chain
/**
 * if(condition1) {
 *   //some code
 * } else if(condition2){
 *   //some code
 * } else {
 *   //some code
 * }
 */
if (chooseMonth == 1) {
    document.getElementById('demo').innerHTML += ('<p>This is January </p> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTVMkyOPnH19QsQXgfDOo4ZIThcxP7eyxc-U1UJgxpiCembytNz&usqp=CAU" width="200px" height="200px">');
} else if (chooseMonth == 2) {
    document.getElementById('demo').innerHTML += ('<p>This is February</p> <img src="https://www.icelandairhotels.com/static/news/lg/ted_drake.jpg" width="200px" height="200px">');
} else if (chooseMonth == 3) {
    document.getElementById('demo').innerHTML += ('<p>This is March </p><img src="https://thumbs.dreamstime.com/t/heavy-rain-fall-german-capital-berling-berlin-germany-march-rian-evening-weather-tourists-nd-lshoppers-domestic-people-141341345.jpg" width="200px" height="200px">');
} else if (chooseMonth == 2) {
    document.getElementById('demo').innerHTML += ('<p>This is April </p><img src="https://c8.alamy.com/comp/FXKTMR/berlin-germany-16th-april-2016-umbrellas-up-as-the-weather-hammers-FXKTMR.jpg" width="200px" height="200px">');
} else if (chooseMonth == 5) {
    document.getElementById('demo').innerHTML += ('<p>This is May</p> <img src="https://previews.123rf.com/images/olgysha/olgysha1907/olgysha190700018/126847904-augsburg-germany-may-09-2017-beautiful-old-cathedral-in-cloudy-weather-in-augsburg-germany.jpg" width="200px" height="200px">');
} else if (chooseMonth == 6) {
    document.getElementById('demo').innerHTML += ('<p>This is June </p><img src="https://media.nomadicmatt.com/treptowerpark.jpg" width="200px" height="200px">');
} else if (chooseMonth == 7) {
    document.getElementById('demo').innerHTML += ('<p>This is July</p> <img src="https://c8.alamy.com/comp/GD0MPP/munich-germany-10th-july-2016-people-enjoy-the-wonderful-summer-weather-GD0MPP.jpg" width="200px" height="200px">');
} else if (chooseMonth == 8) {
    document.getElementById('demo').innerHTML += ('<p>This is August</p> <img src="https://image.shutterstock.com/z/stock-photo-munich-germany-august-people-enjoy-sunny-hot-weather-on-the-river-banks-of-isar-river-423380635.jpg" width="200px" height="200px">');
} else if (chooseMonth == 9) {
    document.getElementById('demo').innerHTML += ('<p>This is September</p> <img src="https://www.tripsavvy.com/thmb/Ix7Jhfqww_k_I-XW-SiCrCfMkhM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/BlackForestGettyImages-639747874Britus-5b047fe11d640400376844b7.jpg" width="200px" height="200px">');
} else if (chooseMonth == 10) {
    document.getElementById('demo').innerHTML += ('<p>This is October </p><img src="https://s27922.pcdn.co/wp-content/uploads/2018/10/autumn-in-germany-3-1.jpg.optimal.jpg" width="200px" height="200px">');
} else if (chooseMonth == 11) {
    document.getElementById('demo').innerHTML += ('<p>This is November</p> <img src="https://thumbs.dreamstime.com/z/evangelische-stadtkirch-saturday-market-ludwigsburg-ludwigsburg-germany-november-cloudy-weather-saturday-market-baroque-131049565.jpg" width="200px" height="200px">');
} else if (chooseMonth == 12) {
    document.getElementById('demo').innerHTML += ('<p>This is December</p> <img src="https://lh3.googleusercontent.com/proxy/Dtrv2QJW-ZakYN_1x8XsJ7CXuom8Dgb2ENHHFllWu4qvwpC3ThwXH1K7tFKOhStBaW0onkCnaLzuYyH7QJFdxGmW2qtilSy-4jqS9e1HpH3o2h7eyDDV60IQofBA" width="200px" height="200px">');
} else {
    alert('This is not a Month.please give between 1-12');
    document.getElementById('demo').innerHTML += ('<p>This is not a Month.please give between 1-12</p> <img src="https://www.ionos.de/digitalguide/fileadmin/DigitalGuide/Teaser/error-t.jpg" width="200px" height="200px">')
}