displayGame()

function displayGame() {
    document.getElementById('displayID').innerHTML = `
    <div class="container text-center">
        <h1>MAKE YOUR CHOICE</h1>
    </div>
    <div class="container text-center" >
        <button class="choiceBtn btn-info"  id="rockId" value="rock"  type="button" onclick="getChoise(rockId.value)">
            <img  class="choice" src="img/rock.png">
        </button>
        <button class="choiceBtn btn-info" id="paperId" value="paper"  type="button" onclick="getChoise(paperId.value)">
            <img  class="choice" src="img/paper.png">
        </button>
        <button class="choiceBtn btn-info" id="scissorsId" value="scissors"  type="button" onclick="getChoise(scissorsId.value)">
            <img  class="choice" src="img/scissors.png">
        </button>
    </div>`;
}

let userChoice, computerChoice, userCount = 0, compCount = 0;

function getChoise(choiceValue) {
    userChoice = choiceValue;
    computerChoice = computerChoiceFun();
    var gameResult = compare(userChoice, computerChoice);

    console.log('user: '+userChoice+' , computer: '+computerChoice)
    document.getElementById('displayID').innerHTML = `
    <div class="container">
        <div class="card bg-info">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title text-center">${userCount} : ${compCount}</h5>
                <div style="margin: 20px;" class="d-flex justify-content-around">
                    <img src="img/${userChoice}.png" class="img-fluid firstimg">
                    <p>${gameResult}</p>
                    <img src="img/${computerChoice}.png" class="img-fluid secoundimg">
                </div>
                <div style="margin: 5px;" class="d-flex justify-content-around">  
                    <p>your choice</p>
                    <p>computer choice</p>
                </div>
                <button onclick="displayGame()" class="btn btn-warning">Play again</button>
            </div>
        </div>
    </div>`;
}

function computerChoiceFun() {
    var compChoice = Math.floor(Math.random() * 3) + 1; //  1 2 3 
    if (compChoice == 1) {
        return "rock";
    } else if (compChoice == 2) {
        return "paper";
    } else if (compChoice == 3) {
        return "scissors";
    }
}

function compare(choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    }

    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            userCount++;
            return "you (rock) wins";
        } else {
            compCount++;
            return "Computer (paper) wins";
        }
    }

    if (choice1 === "paper") {
        if (choice2 === "rock") {
            userCount++;
            return "You (paper) wins";
        } else {
            compCount++;
            return "Computer (scissors) wins";
        }
    }

    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            compCount++;
            return "Computer (rock) wins";
        } else {
            userCount++;
            return "You (scissors) wins";
        }
    }
}