// switch (expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//   // code block

// }
// SWITCH

// switch (5) {
//   case 0:
//     console.log(0);
//     break;
//   case 5:
//     console.log(5);
//     break;
// }

// let status = 'on';
// switch (status) {
//   case 'on':
//     console.log('Light is on');
//     break;
//   case 'off':
//     console.log('Light is Off');
//     break;
//   default:
//     console.log('Nothing to say!');
// }


// let month = prompt('Enter a number betwen 1 and 12');
let month = 12;

console.log(month);

switch (month) {
  case 12:
  case 1:
  case 2:
    console.log('It is winter');
    break;
  case 3:
  case 4:
  case 5:
    console.log('It is spring');
    break;
  case 6:
  case 7:
  case 8:
    console.log('It is summer');
    break;
  case 9:
  case 10:
  case 11:
    console.log('It is autumn ');
    break;
}

function testSwitch() {
  let contry = [
    ['Belgium', '<img src="img/be.png">', '11,365,834', '30,528', 'euro', '534,230', 'Dutch<br>French<br>German'], //be
    ['Bulgaria', '<img src="img/bg.png">', '7,101,859', '110,994', 'lev', '55,824', 'Bulgarian'], //bg
    ['Czechia', '<img src="img/cz.png">', '10,467,628', '78,866', 'koruna', '205,270', 'Czech'], //cz
    ['Denmark', '<img src="img/dk.png">', '5,743,947', '43,075', 'krone', '342,362', 'Danish'], //dk
    ['Germany', '<img src="img/de.png">', '82,437,641', '357,386', 'euro', '3,874,437', 'German'], //de
    ['Estonia', '<img src="img/ee.png">', '1,315,635', '45,227', 'euro', '26,506', 'Estonian'], //ee
    ['Ireland', '<img src="img/ie.png">', '4,774,833', '70,273', 'euro', '250,814', '	Irish<br>English'], //ie
    ['Greece', '<img src="img/el.png">', '10,757,293', '131,990', 'euro', '237,970', 'Greek'], //el
    ['Spain', '<img src="img/es.png">', '46,528,966', '504,030', 'euro', '1,406,538', 'Spanish'], //es
    ['France', '<img src="img/fr.png">', '67,024,633', '632,833', 'euro', '2,833,687', 'French'], //fr
    ['Croatia', '<img src="img/hr.png">', '4,154,213', '56,594', 'kuna', '57,073', 'Croatian'], //hr
    ['Italy', '<img src="img/it.png">', '61,219,113', '301,338', 'euro', '2,147,744', 'Italian'], //it
    ['Cyprus', '<img src="img/cy.png">', '854,802', '9,251', 'euro', '23,263', 'Greek<br>Turkish'], //cy
    ['Latvia', '<img src="img/lv.png">', '1,950,116', '64,589', 'euro', '31,972', 'Latvian'], //lv
    ['Lithuania', '<img src="img/lt.png">', '2,847,904', '65,200', 'euro', '48,288', 'Lithuanian'], //lt
    ['Luxembourg', '<img src="img/lu.png">', '589,370', '2,586.4', 'euro', '65,683', 'French<br>German<br>Luxembourgish'], //lu
    ['Hungary', '<img src="img/hu.png">', '9,797,561', '93,030', 'forint', '136,989', 'Hungarian'], //hu
    ['Malta', '<img src="img/mt.png">', '440,433', '316', 'euro', '10,514', 'Maltese<br>English'], //mt
    ['Netherlands', '<img src="img/nl.png">', '17,220,721', '41,543', 'euro', '880,716', 'Dutch<br>Frisian'], //nl
    ['Austria', '<img src="img/at.png">', '8,792,500', '83,855', 'euro', '437,582', 'German'], //at
    ['Poland', '<img src="img/pl.png">', '37,972,964', '312,685', 'złoty', '547,894', 'Polish'], //pl
    ['Portugal', '<img src="img/pt.png">', '10,291,027', '92,212', 'euro', '340,715', 'Portuguese<br>Mirandese'], //pt
    ['Romania', '<img src="img/ro.png">', '19,638,309', '238,391', 'leu', '199,093', 'Romanian'], //ro
    ['Slovenia', '<img src="img/sl.png">', '2,065,895', '20,273', 'euro', '49,570', 'Slovene'], //sl
    ['Slovakia', '<img src="img/sk.png">', '5,435,343', '49,035', 'euro', '99,869', 'Slovak'], //sk
    ['Finland', '<img src="img/fi.png">', '5,577,282', '338,424', 'euro', '272,649', 'Finnish<br>Swedish'], //fi
    ['Sweden', '<img src="img/se.png">', '10,080,000', '449,964', 'krona', '570,591', 'Swedish'], //se
  ]
  
  let userName = userId.value;
  userName = userName.toLowerCase();

  console.log(userName);

  switch (userName) {
    case 'be':
      allInfo(contry[0]);
      break;

    case 'bg':
      allInfo(contry[1]);
      break;

    case 'cz':
      allInfo(contry[2]);
      break;

    case 'dk':
      allInfo(contry[3]);
      break;

    case 'de':
      allInfo(contry[4]);
      break;

    case 'ee':
      allInfo(contry[5]);
      break;

    case 'ie':
      allInfo(contry[6]);
      break;

    case 'el':
      allInfo(contry[7]);
      break;

    case 'es':
      allInfo(contry[8]);
      break;

    case 'fr':
      allInfo(contry[9]);
      break;

    case 'hr':
      allInfo(contry[10]);
      break;

    case 'it':
      allInfo(contry[11]);
      break;

    case 'cy':
      allInfo(contry[12]);
      break;

    case 'lv':
      allInfo(contry[13]);
      break;

    case 'lt':
      allInfo(contry[14]);
      break;

    case 'lu':
      allInfo(contry[15]);
      break;

    case 'hu':
      allInfo(contry[16]);
      break;

    case 'mt':
      allInfo(contry[17]);
      break;

    case 'nl':
      allInfo(contry[18]);
      break;

    case 'at':
      allInfo(contry[19]);
      break;

    case 'pl':
      allInfo(contry[20]);
      break;

    case 'pt':
      allInfo(contry[21]);
      break;

    case 'ro':
      allInfo(contry[22]);
      break;

    case 'sl':
      allInfo(contry[23]);
      break;

    case 'sk':
      allInfo(contry[24]);
      break;

    case 'fi':
      allInfo(contry[25]);
      break;

    case 'se':
      allInfo(contry[26]);
      break;

    default:
      document.getElementById('resultId').innerHTML = '<table><tr><td colspan="2">Enter again<br><img src="img/stop_sign.png"></td></tr></table>';

  }

  function allInfo(theResult) {
    document.getElementById('resultId').innerHTML = '<table><tr><td colspan="2">' + theResult[0] + '</td></tr><tr><th>Flag</th><td>' + theResult[1] + '</td></tr><tr><th>Population</th><td>' + theResult[2] + '</td></tr><tr><th>Area (km<sup>2</sup>)</th><td>' + theResult[3] + '</td></tr><tr><th>Currency</th><td>' + theResult[4] + '</td></tr><tr><th>gross domestic product</th><td>' + theResult[5] + '</td></tr><tr><th>Languages</th><td>' + theResult[6] + '</td></tr></table>';
  }
}