const max = 10;
const min = 1;
let note = Math.floor(Math.random() * (max - min + 1) + min);

switch(note) {
    case 1:
        console.log('Very Bad!');
        note = 'Very Bad!';
        break;
    case 2:
        console.log('Bad');
        note = 'Bad';
        break;
    case 3:
        console.log('Not good');
        note = 'Not good';
        break;
    case 4:
        console.log('Not enough');
        note = 'Not enough';
        break;
    case 5:
        console.log('So so');
        note = 'So So';
        break;
    case 6:
        console.log('Minimum');
        note = 'Minimum';
        break;
    case 7:
        console.log('Medium');
        note = 'Medium';
        break;
    case 8:
        console.log('Good');
        note = 'Good';
        break;
    case 9:
        console.log('Very good');
        note = 'Very Good';
        break;
    case 10:
        console.log('Perfect!');
        note = 'Perfect!';
        break;
    default:
        console.log('Not qualified');
        note = 'Not qualified';
        break;
}

document.write(note)