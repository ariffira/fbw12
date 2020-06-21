//Recursive way of function
// 2 power 4 = 2*2*2*2 = 16
// num1 = base/main number
// num2 = how many times to multiply(pow)
// num1 power num2 = num1 * num1 .........* num2 times multiply


//////////////////////////// Power  


function powResult(n1, n2) {

  document.getElementById("numPow").innerHTML = `  The result is  : ${n1}<sup>${n2}</sup> =  ${pow(n1, n2)}`;

  function pow(num1, num2) {
    if (num2 == 0) {
      return 1;
    }
    return num1 * pow(num1, num2 - 1);
  }

}


////////////////////////////factorial

function factResult(n1) {

  document.getElementById("fact").innerHTML = `  The result is  : ${n1}! =  ${factorial(n1)}`;

  function factorial(num1) {
    if (num1 == 1) {
      return num1;
    }
    return num1 * factorial(num1 - 1);
  }
}


////////////////////////////Recursive 

function addResult(n1) {
  n1 = eval(n1)
  document.getElementById("addId").innerHTML = `  The Recursive of ${n1} is  :  ${recursive(n1)}`;

  function recursive(num1) {
    if (num1 == 1) {
      return 1;
    }
    return num1 + recursive(num1 - 1);
  }
}



//////////////////////////// Exercise 08 

document.getElementById("0004_1").innerHTML += `1)<br><br>`;

for (let i = 1; i < 6; i++) {
  for (let j = 0; j < i; j++) {
    document.getElementById("0004_1").innerHTML += `+`;
  }
  document.getElementById("0004_1").innerHTML += `<br>`;
}

document.getElementById("0004_2").innerHTML += `2)<br><br>`;

for (let i = 6; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    document.getElementById("0004_2").innerHTML += `1`;
  }
  document.getElementById("0004_2").innerHTML += `<br>`;
}


document.getElementById("0004_3").innerHTML += `3)<br><br>`;

for (let i = 1; i < 8; i++) {
  if (i <= 4) {
    for (let j = 0; j < i; j++) {
      document.getElementById("0004_3").innerHTML += `0`;
    }
    document.getElementById("0004_3").innerHTML += `<br>`;
  }
  else {
    for (let j = 8; j > i; j--) {
      document.getElementById("0004_3").innerHTML += `0`;
    }
    document.getElementById("0004_3").innerHTML += `<br>`;
  }
}



//////////////////////////// matrix  ex 09

function matrixResult(n1) {      //n1 = 3
  let matrix = [];

  document.getElementById("matrixId").innerHTML = `The matrix with ${n1} X ${n1} is : <br><br>`;

  for (let j = 0; j < n1; j++) {
    // j =0                                      // j =1                                     // j =2 
    for (let i = 0; i < n1; i++) {
      // i =0         //i=1         //i=2         // i =0         //i=1         //i=2         // i =0         //i=1         //i=2
      if (j == i) {
        // true                                                     // true                                                   // true
        matrix[i] = 1;
        //[1, , ]                                                   //[0,1, ]                                                 //[0,0,1]
      }
      else {
        // true       // true       // true                        // true       // true        // true
        matrix[i] = 0;
        //[1,0, ]     //[1,0,0]      //[0, , ]                     //[0,1,0]     //[0, , ]       //[0,0, ]
      }
      document.getElementById("matrixId").innerHTML += `${matrix[i]}  `;
    }
    document.getElementById("matrixId").innerHTML += `<br>`;
    //[1,0,0] 
    //[0,1,0] 
    //[0,0,1]
  }
  console.table(matrix)
}

//////////////////////////// Arrow  ex 10

function arrowResult(n1, n2) {
  n1 = eval(n1);
  n2 = eval(n2);
  
  document.getElementById("numArrow").innerHTML = ` `;
  let arrowAddition = (num1, num2) => { return num1 + num2 }
  document.getElementById("numArrow").innerHTML += `The Addition: ${n1} + ${n2} =  ${arrowAddition(n1,n2)} <br>`;

  let arrowSubtraction = (num1, num2) => { return num1 - num2 }
  document.getElementById("numArrow").innerHTML += `The Subtraction: ${n1} - ${n2} =  ${arrowSubtraction(n1,n2)} <br>`;

  let arrowMultiplication = (num1, num2) => { return num1 * num2 }
  document.getElementById("numArrow").innerHTML += `The Multiplication: ${n1} * ${n2} =  ${arrowMultiplication(n1,n2)} <br>`;

  let arrowDivision = (num1, num2) => { return num1 / num2 }
  document.getElementById("numArrow").innerHTML += `The Division: ${n1} / ${n2} =  ${arrowDivision(n1,n2)} <br>`;

  let arrowPower = (num1, num2) => {
    if (num2 == 1) { return num1 }
    else { return num1 * arrowPower(num1, num2- 1) }
  }
  document.getElementById("numArrow").innerHTML += `The Power: ${n1}<sup>${n2}</sup> =  ${arrowPower(n1,n2)} <br>`;
}


//////////////////////////// Arrow  ex 10  2nd part

let userList =[
  {
    fname: 'Adel',
    sname: 'Hanifa',
    age: '28',
    stnr: 'Wilhel-Strater-Str. 92',
    cityplz: '41236 Mönchengladbach',
    tel: '01590 5844010',
    email: 'adelhanifa@outlook.de',
    img: '<img src="img/user.png">'
  },
  {
    fname: 'Arif',
    sname: 'Islam',
    age: '20',
    stnr: 'DüsseldorferStr. 80',
    cityplz: '46123 Essen',
    tel: '01590 12345678',
    email: 'arif.islam@outlook.de',
    img: '<img src="img/user.png">'
  },
  {
    fname: 'Asreen',
    sname: 'Ilias',
    age: '21',
    stnr: 'NeusserStr. 60',
    cityplz: '43612 Meerbusch',
    tel: '01590 23456781',
    email: 'asreen.ilias@outlook.de',
    img: '<img src="img/user.png">'
  },
  {
    fname: 'Khaled',
    sname: 'Khatib',
    age: '22',
    stnr: 'KölnerStr. 75',
    cityplz: '42361 Dormagen',
    tel: '01590 34567812',
    email: 'khaled.khatid@outlook.de',
    img: '<img src="img/user.png">'
  },
  {
    fname: 'Bülent',
    sname: 'Kayici',
    age: '23',
    stnr: 'Berlinerplaz. 116',
    cityplz: '46321 Düsseldorf',
    tel: '01590 45678123',
    email: 'bülent.kayici@outlook.de',
    img: '<img src="img/user.png">'
  },
  {
    fname: 'Jessica',
    sname: 'Belen',
    age: '13',
    stnr: 'Nordstr. 254',
    cityplz: '43621 Köln',
    tel: '01590 34567812',
    email: 'jessica.belen@outlook.de',
    img: '<img src="img/user.png">'
  },
  {
    fname: 'Sujatha',
    sname: 'Srinivas',
    age: '14',
    stnr: 'Hauptstr. 13',
    cityplz: '41326 Köln',
    tel: '01590 32456781',
    email: 'sujatha.srinivas@outlook.de',
    img: '<img src="img/user.png">',
    logname: 'sujatha',
    psw: '007007007'
  }
];

let user = {
    fname: 'userfname.value' ,
    sname: 'usersname.value',
    age: 'userage.value',
    stnr: 'userstreethousnr.value',
    cityplz:'useercityplz.value',
    tel: 'usertel.value',
    email: 'useremail.value',
    img: '<img src="img/user.png">'
  }

for (let i=0; i<userList.length;  i++){
  document.getElementById("addUserButton").innerHTML += `<button onclick="userDisplay(${i})">User ${i+1}</button>`;
  document.getElementById("selectUser").innerHTML += `<option value="${i}">User ${i+1}</option>`;
}


function userDisplay(num){
  document.getElementById("addUserList").innerHTML = ``;
  num=eval(num);
  document.getElementById("userID").innerHTML = `
  <tr><th colspan="2">The User ${num+1} is :</th></tr>
  <tr><th>First Name: </th><td>${userList[num].fname}</td></tr>
  <tr><th>Secound Name: </th><td>${userList[num].sname}</td></tr>
  <tr><th>Age: </th><td>${userList[num].age}</td></tr>
  <tr><th>Phone: </th><td>${userList[num].tel}</td></tr>
  <tr><th>E-Mail</th><td>${userList[num].email}</td></tr>
  <tr><th>Adress</th><td>${userList[num].stnr}<br>${userList[num].cityplz}</td></tr>
  <tr><td colspan="2">${userList[num].img}</td></tr>
  `;

}

function userAdd(){
  document.getElementById("userID").innerHTML = ``;
  document.getElementById("addUserList").innerHTML = `
  <input type="text" placeholder="Enter The First Name" id="userfname">
  <br>
  <input type="text" placeholder="Enter The Secound Name" id="usersname">
  <br>
  <input type="number" placeholder="Enter The Age" id="userage" min="1">
  <br>
  <input type="text" placeholder="Enter The Street and Hous Nr." id="userstrnr">
  <br>
  <input type="text" placeholder="Enter The City and PLZ" id="useercityplz">
  <br>
  <input type="number" placeholder="Enter The Phone Number"  min="1" id="usertel">
  <br>
  <input type="email" placeholder="Enter The Email" id="useremail">
  <br>
  <br>
  <label id="usercheck"></label>
  <br>
  <button onclick="userAddSendData(userfname.value,usersname.value,userage.value,userstrnr.value,useercityplz.value,usertel.value,useremail.value)">Send Data</button>`;
}

function userAddSendData(a,b,c,d,e,f,g){
  let length = userList.length;

  if (a == '' || b == '' || c == '' || d.value == '' || e == '' || f == '' || g == ''){
    document.getElementById("usercheck").innerHTML = `Check your Input again`;
  }
  else {
    user.fname = a;
    user.sname= b;
    user.age= c;
    user.stnr= d;
    user.cityplz= e;
    user.tel= f;
    user.email= g;

    console.log(user)

    userList[length] = user; 
    document.getElementById("addUserButton").innerHTML += `<button onclick="userDisplay(${length})">User ${length+1}</button>`;
    userDisplay(length)
    document.getElementById("selectUser").innerHTML += `<option value="${length}">User ${length+1}</option>`;


  }
}



