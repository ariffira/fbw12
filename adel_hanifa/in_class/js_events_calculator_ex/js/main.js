function on() {
  document.getElementById("onoff").innerHTML = '<img src="img/onlight.jpg">';
  console.log('light is on');
}

function off() {
  document.getElementById("onoff").innerHTML = '<img src="img/offlight.jpg">';
  console.log('light is off');
}

/////////////////////////////////
//// calcoulater/////////////////
/////////////////////////////////

// let firstNum = 0, secoundNum = 0, theResult;
// var operation;//  1=add, 2=sub, 3=mul, 4=div   
// var counter = 0;

// function del() {
//   firstNum = 0;
//   secoundNum = 0;
//   theResult = 0;
//   counter = 0;
//   console.log('_________after resset_______')
//   document.getElementById('numbers').innerHTML = firstNum;
// }

// function num1() {
//   firstNum = firstNum * 10 + 1;
//   document.getElementById('numbers').innerHTML = firstNum;
// }

// function num2() {
//   firstNum = firstNum * 10 + 2;
//   document.getElementById('numbers').innerHTML = firstNum;
// }

// function num3() {
//   firstNum = firstNum * 10 + 3;
//   document.getElementById('numbers').innerHTML = firstNum;
// }

// function num4() {
//   firstNum = firstNum * 10 + 4;
//   document.getElementById('numbers').innerHTML = firstNum;
// }

// function num5() {
//   firstNum = firstNum * 10 + 5;
//   document.getElementById('numbers').innerHTML = firstNum;
// }

// function num6() {
//   firstNum = firstNum * 10 + 6;
//   document.getElementById('numbers').innerHTML = firstNum;
// }

// function num7() {
//   firstNum = firstNum * 10 + 7;
//   document.getElementById('numbers').innerHTML = firstNum;
// }

// function num8() {
//   firstNum = firstNum * 10 + 8;
//   document.getElementById('numbers').innerHTML = firstNum;
// }

// function num9() {
//   firstNum = firstNum * 10 + 9;
//   document.getElementById('numbers').innerHTML = firstNum;
// }

// function num0() {
//   firstNum = firstNum * 10 + 0;
//   document.getElementById('numbers').innerHTML = firstNum;
// }


// function add() {
//   counter++;
//   operation = 1;
//   secoundNum = firstNum;
//   firstNum = 0;
//   document.getElementById('numbers').innerHTML = firstNum;
// }

// function sub() {
//   counter++;
//   operation = 2;
//   secoundNum = firstNum;
//   firstNum = 0;
//   document.getElementById('numbers').innerHTML = firstNum;
// }

// function mul() {
//   counter++;
//   operation = 3;
//   secoundNum = firstNum;
//   firstNum = 0;
//   document.getElementById('numbers').innerHTML = firstNum;
// }

// function div() {
//   counter++;
//   operation = 4;
//   secoundNum = firstNum;
//   firstNum = 0;
//   document.getElementById('numbers').innerHTML = firstNum;
// }

// function equ() {
//   if (counter == 1) {
//     console.log(secoundNum);
//     if (operation == 1) {
//       console.log('+');
//       theResult = secoundNum + firstNum;
//     }
//     else if (operation == 2) {
//       console.log('-');
//       theResult = secoundNum - firstNum;
//     }
//     else if (operation == 3) {
//       console.log('*');
//       theResult = secoundNum * firstNum;
//     }
//     else if (operation == 4) {
//       console.log('/');
//       theResult = secoundNum / firstNum;
//     }
//     console.log(firstNum);
//     console.log('=');
//     console.log(theResult)
//     document.getElementById('numbers').innerHTML = theResult;
//   }
//   else {

//     if (operation == 1) {
//       theResult = theResult + firstNum;
//       console.log('+');
//     }
//     else if (operation == 2) {
//       console.log('-');
//       theResult = theResult - firstNum;
//     }
//     else if (operation == 3) {

//       console.log('*');
//       theResult = theResult * firstNum;
//     }
//     else if (operation == 4) {

//       console.log('/');
//       theResult = theResult / firstNum;
//     }
//     console.log(firstNum);
//     console.log('=');
//     console.log(theResult)
//     document.getElementById('numbers').innerHTML = theResult;
//   }
// }


// function clear() {
//   firstNum = 0;
//   secoundNum = 0;
//   counter = 0;
//   theResult = 0;
//   document.getElementById('numbers').innerHTML =  theResult;
// }



let firstNum = '', theResult;


function ce() {
  firstNum = '';
  theResult = '';
  console.log('_________after resset_______')
  document.getElementById('numbers').innerHTML = firstNum;
}

function num0() {
  firstNum = firstNum + '0';
  document.getElementById('numbers').innerHTML = firstNum;
}

function num1() {
  firstNum = firstNum + '1';
  document.getElementById('numbers').innerHTML = firstNum;
}

function num2() {
  firstNum = firstNum + '2';
  document.getElementById('numbers').innerHTML = firstNum;
}

function num3() {
  firstNum = firstNum + '3';
  document.getElementById('numbers').innerHTML = firstNum;
}

function num4() {
  firstNum = firstNum + '4';
  document.getElementById('numbers').innerHTML = firstNum;
}

function num5() {
  firstNum = firstNum + '5';
  document.getElementById('numbers').innerHTML = firstNum;
}

function num6() {
  firstNum = firstNum + '6';
  document.getElementById('numbers').innerHTML = firstNum;
}

function num7() {
  firstNum = firstNum + '7';
  document.getElementById('numbers').innerHTML = firstNum;
}

function num8() {
  firstNum = firstNum + '8';
  document.getElementById('numbers').innerHTML = firstNum;
}

function num9() {
  firstNum = firstNum + '9';
  document.getElementById('numbers').innerHTML = firstNum;
}

function coma() {
  firstNum = firstNum + '.';
  if (firstNum.charAt(0) == '.') {
    firstNum = '0.';
  }
  switch (firstNum.charAt(firstNum.length - 2)) {
    case '*':
    case '/':
    case '-':
    case '+':
      firstNum = remove_character(firstNum, firstNum.length - 1);
      firstNum = firstNum + '0.';
      break;
    case '.':
      firstNum = remove_character(firstNum, firstNum.length - 1);
      break;
  }

  // if (firstNum.charAt(firstNum.length - 2) == '*' || firstNum.charAt(firstNum.length - 2) == '/' || firstNum.charAt(firstNum.length - 2) == '-' || firstNum.charAt(firstNum.length - 2) == '+' || firstNum.charAt(firstNum.length - 2) == '.') {
  //   firstNum = remove_character(firstNum, firstNum.length - 1);
  //   firstNum = firstNum + '0.';
  // }
  
  document.getElementById('numbers').innerHTML = firstNum;
}


function add() {
  firstNum = firstNum + '+';

  switch (firstNum.charAt(firstNum.length - 2)) {
    case '*':
    case '/':
    case '-':
    case '+':
    case '.':
      firstNum = remove_character(firstNum, firstNum.length - 2);
      break;
  }

  // if (firstNum.charAt(firstNum.length - 2) == '*' || firstNum.charAt(firstNum.length - 2) == '/' || firstNum.charAt(firstNum.length - 2) == '-' || firstNum.charAt(firstNum.length - 2) == '+' || firstNum.charAt(firstNum.length - 2) == '.') {
  //   firstNum = remove_character(firstNum, firstNum.length - 2);
  // }

  document.getElementById('numbers').innerHTML = firstNum;
}

function sub() {
  firstNum = firstNum + '-';

  switch (firstNum.charAt(firstNum.length - 2)) {
    case '*':
    case '/':
    case '-':
    case '+':
    case '.':
      firstNum = remove_character(firstNum, firstNum.length - 2);
      break;
  }

  // if (firstNum.charAt(firstNum.length - 2) == '*' || firstNum.charAt(firstNum.length - 2) == '/' || firstNum.charAt(firstNum.length - 2) == '-' || firstNum.charAt(firstNum.length - 2) == '+' || firstNum.charAt(firstNum.length - 2) == '.') {
  //   firstNum = remove_character(firstNum, firstNum.length - 2);
  // }

  document.getElementById('numbers').innerHTML = firstNum;
}

function mul() {
  firstNum = firstNum + '*';
  
  if (firstNum.charAt(0) == '*') {
    firstNum = '';
  }

  switch (firstNum.charAt(firstNum.length - 2)) {
    case '*':
    case '/':
    case '-':
    case '+':
    case '.':
      firstNum = remove_character(firstNum, firstNum.length - 2);
      break;
  }

  // if (firstNum.charAt(firstNum.length - 2) == '*' || firstNum.charAt(firstNum.length - 2) == '/' || firstNum.charAt(firstNum.length - 2) == '-' || firstNum.charAt(firstNum.length - 2) == '+' || firstNum.charAt(firstNum.length - 2) == '.') {
  //   firstNum = remove_character(firstNum, firstNum.length - 2);
  // }

  document.getElementById('numbers').innerHTML = firstNum;
}

function div() {
  firstNum = firstNum + '/';
  if (firstNum.charAt(0) == '/') {
    console.log(firstNum.charAt(0))
    firstNum = '';
  }

  switch (firstNum.charAt(firstNum.length - 2)) {
    case '*':
    case '/':
    case '-':
    case '+':
    case '.':
      firstNum = remove_character(firstNum, firstNum.length - 2);
      break;
  }

  // if (firstNum.charAt(firstNum.length - 2) == '*' || firstNum.charAt(firstNum.length - 2) == '/' || firstNum.charAt(firstNum.length - 2) == '-' || firstNum.charAt(firstNum.length - 2) == '+' || firstNum.charAt(firstNum.length - 2) == '.') {
  //   firstNum = remove_character(firstNum, firstNum.length - 2);
  // }

  document.getElementById('numbers').innerHTML = firstNum;
}

function equ() {
  switch (firstNum.charAt(firstNum.length - 1)) {
    case '*':
    case '/':
    case '-':
    case '+':
    case '.':
      firstNum = remove_character(firstNum, firstNum.length - 1);
      break;
  }

  // if (firstNum.charAt(firstNum.length - 1) == '*' || firstNum.charAt(firstNum.length - 1) == '/' || firstNum.charAt(firstNum.length - 1) == '-' || firstNum.charAt(firstNum.length - 1) == '+' || firstNum.charAt(firstNum.length - 1) == '.') {
  //   firstNum = remove_character(firstNum, firstNum.length - 1);
  // }

  console.log(firstNum)
  theResult = eval(firstNum);
  document.getElementById('numbers').innerHTML = theResult;
  firstNum = theResult.toString();
  console.log(theResult)
}

function ce() {
  firstNum = '';
  theResult = '';
  console.log('_________after resset_______')
  document.getElementById('numbers').innerHTML = firstNum;
}

function del() {
  firstNum = remove_character(firstNum, firstNum.length - 1);
  document.getElementById('numbers').innerHTML = firstNum;
}

function remove_character(str, char_pos) {
  part1 = str.substring(0, char_pos);
  part2 = str.substring(char_pos + 1, str.length);
  return (part1 + part2);
}



// Calculators
// step 01: track the number from user input
let number1, number2, result;
function addtion() {
  number1 = document.getElementById('number1').value;
  number2 = document.getElementById('number2').value;
  console.log(number1, number2);//track
  //result = (+number1) + (+number2); // way 1
  //result = 'number1' + number2; //NaN
  // Number(any number string)
  //result = Number(number1) + Number(number2); // way 2
  result = parseInt(number1) + parseInt(number2); // way 3
  // result = 'string' + 'string';
  // result = '12' + '13'; 1213
  document.getElementById('resultId').innerHTML = 'The Result of the Addition: ' + result; //string + number
}