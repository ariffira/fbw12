let firstClick = 0, quant = 0, pair1 = 0, pair2 = 0, cardNumber = 16, score = 0, remainingPairs = 8, time, m = 0 ,s= 0, notMatched = 0;

let allCrdArray =[
    `<div class="item">
        <div id="1" class="card" onclick="flip(this)" par="1">
            <div class="front"><img src="img/dog12.jpg"></div>
            <div class="back"><img src="img/001.jpg"></div>
        </div>
    </div>`,
    `<div class="item">
        <div id="2" class="card" onclick="flip(this)" par="2">
            <div class="front"><img src="img/dog12.jpg"></div>
            <div class="back"><img src="img/002.jpg"></div>
        </div>
    </div>`,
    `<div class="item">
        <div id="3" class="card" onclick="flip(this)" par="3">
            <div class="front"><img src="img/dog12.jpg"></div>
            <div class="back"><img src="img/003.jpg"></div>
        </div>
    </div>`,
    `<div class="item">
        <div id="4" class="card" onclick="flip(this)" par="4">
            <div class="front"><img src="img/dog12.jpg"></div>
            <div class="back"><img src="img/004.jpg"></div>
        </div>
    </div>`,
    `<div class="item">
        <div id="5" class="card" onclick="flip(this)" par="5">
            <div class="front"><img src="img/dog12.jpg"></div>
            <div class="back"><img src="img/005.jpg"></div>
        </div>
    </div>`,
    `<div class="item">
        <div id="6" class="card" onclick="flip(this)" par="6">
            <div class="front"><img src="img/dog12.jpg"></div>
            <div class="back"><img src="img/006.jpg"></div>
        </div>
    </div>`,
    `<div class="item">
        <div id="7" class="card" onclick="flip(this)" par="7">
            <div class="front"><img src="img/dog12.jpg"></div>
            <div class="back"><img src="img/007.jpg"></div>
        </div>
    </div>`,
    `<div class="item">
        <div id="8" class="card" onclick="flip(this)" par="8">
            <div class="front"><img src="img/dog12.jpg"></div>
            <div class="back"><img src="img/008.jpg"></div>
        </div>
    </div>`,
    `<div class="item">
        <div id="9" class="card" onclick="flip(this)" par="8">
            <div class="front"><img src="img/dog12.jpg"></div>
            <div class="back"><img src="img/008.jpg"></div>
        </div>
    </div>`,
    `<div class="item">
        <div id="10" class="card" onclick="flip(this)" par="7">
            <div class="front"><img src="img/dog12.jpg"></div>
            <div class="back"><img src="img/007.jpg"></div>
        </div>
    </div>`,
    `<div class="item">
        <div id="11" class="card" onclick="flip(this)" par="6">
            <div class="front"><img src="img/dog12.jpg"></div>
            <div class="back"><img src="img/006.jpg"></div>
        </div>
    </div>`,
    `<div class="item">
        <div id="12" class="card" onclick="flip(this)" par="5">
            <div class="front"><img src="img/dog12.jpg"></div>
            <div class="back"><img src="img/005.jpg"></div>
        </div>
    </div>`,
    `<div class="item">
        <div id="13" class="card" onclick="flip(this)" par="4">
            <div class="front"><img src="img/dog12.jpg"></div>
            <div class="back"><img src="img/004.jpg"></div>
        </div>
    </div>`,
    `<div class="item">
        <div id="14" class="card" onclick="flip(this)" par="3">
            <div class="front"><img src="img/dog12.jpg"></div>
            <div class="back"><img src="img/003.jpg"></div>
        </div>
    </div>`,
    `<div class="item">
        <div id="15" class="card" onclick="flip(this)" par="2">
            <div class="front"><img src="img/dog12.jpg"></div>
            <div class="back"><img src="img/002.jpg"></div>
        </div>
    </div>`,
    `<div class="item">
        <div id="16" class="card" onclick="flip(this)" par="1">
            <div class="front"><img src="img/dog12.jpg"></div>
            <div class="back"><img src="img/001.jpg"></div>
        </div>
    </div>`
]

showCard();

function showCard() {
    allCrdArray.sort(() => 0.5 - Math.random());
    console.log(allCrdArray)
    allCrdArray.map((item) => {
        showCardID.innerHTML += item;
    })
}

function flip(e) {

    if (e.getAttribute('class') == 'card') {
        firstClick++;  //1
        // Timer starter
        //console.log(firstClick)  ///1 //2
        if (firstClick == 1) {
            timer(1);
        }

        if (quant < 2) {
            if (quant == 0) {
                pair1 = e.getAttribute('par');
            }
            else if (quant > 0) {
                pair2 = e.getAttribute('par');
            }
            e.setAttribute('class', 'card flipped');
            quant = document.getElementsByClassName("card flipped").length;  //2
            if (quant == 2) {
                if (pair1 == pair2) {
                    setTimeout(isOk, 500);
                } else if (pair1 != pair2) {
                    setTimeout(unset, 500);
                }
            }
        } 
        else if (quant > 2) { //Remove bug. Now, can't tilt when the user click faster
            quant = 0;
        }
    }
}

// unflip cards
function unset() {
    notMatched++;  
    for (let i = 1; i <= cardNumber; i++) {
        if (document.getElementById(i).getAttribute('class') == 'card flipped') {
            document.getElementById(i).setAttribute('class', 'card');
        }
    }
    quant = 0;
    pair1 = 0;
    pair2 = 0;
    if (notMatched == 4){
        score = 0;
        scoreID.innerHTML = score;
        notMatched = 0;
    }
}

// when pairs are right, disable the cards
function isOk() {
    notMatched = 0;
    for (let i = 1; i <= cardNumber; i++) {
        if (document.getElementById(i).getAttribute('class') == 'card flipped') {
            document.getElementById(i).setAttribute('class', 'card matched');
        }
    }
    score += 12.5;
    scoreID.innerHTML = score;

    quant = 0;
    pair1 = 0;
    pair2 = 0;
    remainingPairs -= 1;
    document.getElementById("remainingPairs").innerHTML = remainingPairs;
    // If the game has been finished
    if (remainingPairs == 0) {
        timer(0);
        youWin();
    }
}


// game timer
let interval;
function timer(op) {   //op  = 0   1 
   
    if (op == 1) {
        s = 1;
        m = 0;

        interval = setInterval(function () {
            if (s == 60) { m++; s = 0; }
            if (m == 5) { s = 0; m = 0; gameTimeOut() }
            if (m > 0) {
                document.getElementById("minutes").innerHTML = m;
            }
            if (s > 0) {
                document.getElementById("seconds").innerHTML = s;
            }
            s++;
        }, 1000);
    }

    if (op == 0) {
        time = `You took: ${m} min & ${s} sec`
        s = 0;
        m = 0;
        document.getElementById("minutes").innerHTML = m;
        document.getElementById("seconds").innerHTML = s;
        clearInterval(interval)
    }
}


function gameTimeOut() {
    alert("Your time is out :(")
    window.location.href = '/index.html';
}

function youWin(){
    youWinID.innerHTML = '';
    youWinID.innerHTML += `
    <div class="text-center mt-20">
    <h1>Congrats you won</h1>
    <h3>${time}</h3>
    <img src="img/winIMG.png" width="350">
    </div>`
}