/*
 * Loop: Repeating the code
 * types:
 * 1. For loop
 */
/* for(initialize;end condition; increment/decrement) {
    ....the code
}
*/
//initialize variable//give a variable value
// let i = 1;
// for(i;i<6;i++) {
//     // code need to repeat
//     console.log('I am Number:' + i);
// }
// for(let j = 5;j>0;j--) {
//     // code need to repeat
//     console.log('I am Number:' + j);
// }
// for(i=0; i<25;) {
//     // code need to repeat
//     console.log('I am Number:' + i); 
//     i=i+5;
// }

/////////////////// ex

let names = [
  'SAMSUNG Galaxy S20 Ultra 5G, 128GB',
  'SAMSUNG Galaxy S10+, 1 TB',
  'SAMSUNG Galaxy S10 5G Telekom, 256 GB'
];

let infos = [
  '<b>Displaydiagonale:</b> 17.44 cm / 6.9 Zoll<br><b>Betriebssystem:</b> Android 10.0 One UI 2.0 Knox 3.5<br><b>Prozessor:</b> Exynos 990<br><b>Front-Kamera Auflösung:</b> 40 Megapixel<br><b>Auflösung (HxB):</b> 3.200 x 1.440 Pixel',
  '<b>Displaydiagonale:</b> 16.35 cm / 6.4 Zoll<br><b>Betriebssystem:</b> Android 9<br><b>Prozessor:</b> Exynos 9820<br><b>Kameraauflösung:</b> 16 Megapixel + 12 Megapixel + 12 Megapixel<br><b>Front-Kamera Auflösung:</b> 10 Megapixel + 8 Megapixel',
  '<b>Displaydiagonale:</b> 16.92 cm / 6.7 Zoll<br><b>Betriebssystem:</b> Android 9.0<br><b>Prozessor:</b> Exynos 9820<br><b>Front-Kamera Auflösung:</b> 10 Megapixel (Weitwinkel)<br><b>Auflösung (HxB):</b> 3.040 x 1.440 Pixel'
];

let prices = [
  '1299,- €',
  '1249,- €',
  '1199,- €'
];

let imgs = [
  'img/SAMSUNG-Galaxy-S20-Ultra-5G--128-GB--Cosmic-Black.png',
  'img/SAMSUNG-Galaxy-S10---1-TB--Ceramic-White.png',
  'img/SAMSUNG-Galaxy-S10-5G-Telekom--256-GB--Majestic-Black.png'
];


/////////using (for) loop
document.getElementById("product").innerHTML += `using (for) loop`;

for (let i = 0; i < names.length; i++) {
  document.getElementById("product").innerHTML += `
  <div>
      <h2>${names[i]}</h2>
      <img src="${imgs[i]}">
      <p>${infos[i]}</p>
      <span>${prices[i]}</span>
  </div>`;
}


/////////using (for in) loop
document.getElementById("product").innerHTML += `<hr>using (for in) loop`;

for (i in names) {
  document.getElementById("product").innerHTML += `
  <div>
      <h2>${names[i]}</h2>
      <img src="${imgs[i]}">
      <p>${infos[i]}</p>
      <span>${prices[i]}</span>
  </div>`;
}


////////using (for of) loop
document.getElementById("product").innerHTML += `<hr>using (for of) loop`;
let j = 0;
for (i of names) {
  document.getElementById("product").innerHTML += `
  <div>
      <h2>${i}</h2>
      <img src="${imgs[j]}">
      <p>${infos[j]}</p>
      <span>${prices[j]}</span>
  </div>`;
  j++;
}

let productsAllData = [
  [
    '<h2>SAMSUNG Galaxy S20 Ultra 5G, 128GB</h2>',
    '<p><b>Displaydiagonale:</b> 17.44 cm / 6.9 Zoll<br><b>Betriebssystem:</b> Android 10.0 One UI 2.0 Knox 3.5<br><b>Prozessor:</b> Exynos 990<br><b>Front-Kamera Auflösung:</b> 40 Megapixel<br><b>Auflösung (HxB):</b> 3.200 x 1.440 Pixel</p>',
    '<span>1299,- €</span>',
    '<img src="img/SAMSUNG-Galaxy-S20-Ultra-5G--128-GB--Cosmic-Black.png">'
  ],

  [
    '<h2>SAMSUNG Galaxy S10+, 1 TB</h2>',
    '<p><b>Displaydiagonale:</b> 16.35 cm / 6.4 Zoll<br><b>Betriebssystem:</b> Android 9<br><b>Prozessor:</b> Exynos 9820<br><b>Kameraauflösung:</b> 16 Megapixel + 12 Megapixel + 12 Megapixel<br><b>Front-Kamera Auflösung:</b> 10 Megapixel + 8 Megapixel</p>',
    '<span>1249,- €</span>',
    '<img src="img/SAMSUNG-Galaxy-S10---1-TB--Ceramic-White.png">'
  ],

  [
    '<h2>SAMSUNG Galaxy S10 5G Telekom, 256 GB</h2>',
    '<p><b>Displaydiagonale:</b> 16.92 cm / 6.7 Zoll<br><b>Betriebssystem:</b> Android 9.0<br><b>Prozessor:</b> Exynos 9820<br><b>Front-Kamera Auflösung:</b> 10 Megapixel (Weitwinkel)<br><b>Auflösung (HxB):</b> 3.040 x 1.440 Pixel</p>',
    '<span>1199,- €</span>',
    '<img src="img/SAMSUNG-Galaxy-S10-5G-Telekom--256-GB--Majestic-Black.png">'
  ]
];

////////using (for in)(for of) loops
document.getElementById("product").innerHTML += `<hr>using (for in)(for of) loops`;

for (i in productsAllData) {
  document.getElementById("product").innerHTML += `<div id="product${i}">  </div>`;
  for (let n of productsAllData[i]) {
    document.getElementById("product" + i).innerHTML += `${n}`;
  }
}


//////  odd Even  numberds
document.getElementById("product").innerHTML += `<hr> Odd Even<br><br>`;


document.getElementById("odd").innerHTML += `Odd numbers : (`;
document.getElementById("even").innerHTML += `Even numbers : (`;


for (let i = 1; i < 100; i++) {
  if (i % 2 == 0) {
    document.getElementById("even").innerHTML += `${i} , `;
  }
  else {
    document.getElementById("odd").innerHTML += `${i} , `;
  }

}

document.getElementById("even").innerHTML += `) <br>`;
document.getElementById("odd").innerHTML += `) <br>`;


//////  check a number that inputed from the user
function evenoddcheck(evenodd) {
  if (evenodd % 2 === 0) {
    document.getElementById("EvenOddCheckID").innerHTML = `The number ${evenodd} is Even`;
  }
  else if (evenodd % 2 !== 0) {
    document.getElementById("EvenOddCheckID").innerHTML = `The number ${evenodd} is Odd`;
  }
}


//////  Summation chain 1st

document.getElementById("sum").innerHTML += `<hr>Sum ex :<br> `;
for (let sum = 0; sum <= 100; sum++) {
  sum = sum * 2;
  if (sum <= 100) {
    document.getElementById("sum").innerHTML += ` ${sum} , `;
  }

}


//////  Summation chain 2nd

document.getElementById("sum").innerHTML += `<hr>2nd  Sum ex :<br> `;

let d = 0;
for (let sum = 0; sum < 50; sum++) {
  d = d + sum;
  if (d > 50) {
    break;
  }
  document.getElementById("sum").innerHTML += ` ${d} , `;
}



//////  Fibonacci exercise 1st

document.getElementById("sum").innerHTML += `<br><hr>Fibonacci exercise<br>`;

let a = 1, b = 0, temp = 0;
for (let i = 0; i < 15; i++) {
  document.getElementById("sum").innerHTML += ` ${b} , `;

  temp = a;              //temp=1   //temp=1    //temp=2    //temp=3      //temp=5   //temp=8    //temp=13    //temp=21
  a = a + b;             //a=1      //a=2       //a=3       //a=5         //a=8      //a=13       //a=21       //a=34
  b = temp;              //b=1      //b=1       //b=2       //b=3         //b=5      //b=8       //b=13      //b=21  
}


//////  Fibonacci exercise 2nd

document.getElementById("sum").innerHTML += `<br><hr>2nd  Fibonacci exercise<br>`;

let fiboArr= [];
for (let i = 0; i < 15; i++) {
  if (i == 0) { 
    fiboArr[i] = 0; 
    document.getElementById("sum").innerHTML += ` ${fiboArr[i]} , `;
  }
  else if (i == 1) { 
    fiboArr[i] = 1; 
    document.getElementById("sum").innerHTML += ` ${fiboArr[i]} , `;
  }
  else { 
    fiboArr[i] = fiboArr[i - 2] + fiboArr[i - 1]; 
    document.getElementById("sum").innerHTML += ` ${fiboArr[i]} , `;
  }

}

//////  Fibonacci exercise 2nd with input

document.getElementById("sum").innerHTML += `<br><hr> Fibonacci exercise with input<br>`;

function fibonacciNumberCheck(n) {
  document.getElementById("fibo").innerHTML = ``;
  if (n > 50 || n <= 0) { alert('The input should be between 1 and 50') }
  else if (n == 1) {
    document.getElementById("fibo").innerHTML += `<tr><th>The ${n}st Fibonacci number is : </th><td> ${0}</td></tr>`;
  }
  else {

    let fibonacciArry = [];
    for (let i = 0; i < n; i++) {
      if (i == 0) { fibonacciArry[i] = 0; }
      else if (i == 1) { fibonacciArry[i] = 1; }
      else { fibonacciArry[i] = fibonacciArry[i - 2] + fibonacciArry[i - 1]; }

      switch (i + 1) {
        case 1: case 21: case 31: case 41:
          document.getElementById("fibo").innerHTML += `<tr><th>The ${i + 1}st Fibonacci number is : </th><td> ${fibonacciArry[i]}</td></tr>`;
          break;
        case 2: case 22: case 32: case 42:
          document.getElementById("fibo").innerHTML += `<tr><th>The ${i + 1}nd Fibonacci number is : </th><td>${fibonacciArry[i]} </td></tr>`;

          break;
        case 3: case 23: case 33: case 43:
          document.getElementById("fibo").innerHTML += `<tr><th>The ${i + 1}rd Fibonacci number is : </th><td>${fibonacciArry[i]} </td></tr> `;
          break;

        default:
          document.getElementById("fibo").innerHTML += `<tr><th>The ${i + 1}th Fibonacci number is : </th><td>${fibonacciArry[i]} </td></tr>`;
          break;
      }
    }
  }
}


//////  while loop
document.getElementById("whileloop1").innerHTML += '<hr>While loop <br><br>';

let name= ['A','d','e','l',' ','H','a','n','i','f','a']
let jj = 0;
while(jj<name.length) {
    console.log(name[jj]);
    document.getElementById("whileloop1").innerHTML += name[jj];
    jj++;
}
console.log("///////////");
document.getElementById("whileloop1").innerHTML += '<br><br>';


jj=name.length;
do{
  console.log(name[jj-1]);
  document.getElementById("whileloop1").innerHTML += name[jj-1];
  jj--;
}
while (jj>0)


document.getElementById("whileloop1").innerHTML += '<br><br><hr>';