let computerOption = [{
        move: 'rock',
        image: 'https://previews.123rf.com/images/julinzy/julinzy1310/julinzy131000173/23262897-hand-sign-of-rock-paper-scissors-game-isolated-vector-on-white-background.jpg'
    },
    {
        move: 'paper',
        image: 'https://previews.123rf.com/images/julinzy/julinzy1310/julinzy131000180/23262904-hand-sign-of-rock-paper-scissors-game-isolated-vector-on-white-background.jpg'
    },
    {
        move: 'scissors',
        image: 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX8093027.jpg'
    }
];

let computerScore = 0,
    userScore = 0;


function randomChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    return choice - 1;
}

// console.log(randomChoice())

function showRsult() {
    let choice = document.getElementById('selectId').value;
    let randomChoic = randomChoice();
    let myChioce = computerOption[choice].move
    computerChoice = computerOption[randomChoic].move;
    console.log(myChioce, computerChoice)

    if ((myChioce == 'rock' && computerChoice == 'paper') || (myChioce == 'paper' && computerChoice == 'scissors') || (myChioce == 'scissors' && computerChoice == 'rock')) {
        document.getElementById('result').innerHTML = 'Computer winn';
        computerScore++
        document.getElementById('computer').innerHTML = ` Comuter score is ${computerScore}`;
    } else if ((myChioce == 'paper' && computerChoice == 'rock') || (myChioce == 'scissors' && computerChoice == 'paper') || (myChioce == 'rock' && computerChoice == 'scissors')) {
        document.getElementById('result').innerHTML = 'User winn';
        userScore++
        document.getElementById('User').innerHTML = `User score is ${userScore}  `;
    } else document.getElementById('result').innerHTML = 'event';

    document.getElementById('drow').innerHTML =
        `
    <img src="${computerOption[choice].image}"><img src="${computerOption[randomChoic].image}">
    `

}