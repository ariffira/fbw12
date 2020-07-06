// quant = Count how many cards are flipped
quant = 0;
// par = Verify the cards are equals
  window.pair1 = 0;
  window.pair2 = 0;

// cardNumber/Number of Cards = Count how many carts exists in game
  window.cardNumber = document.getElementsByClassName("card").length;

// rowCards = How many cards per row
  window.rowCards = cardNumber / 4;

// remainingPairs = How many cards are remaining
  window.remainingPairs = cardNumber / 2;
// firstClick = BOOLEAN - Used to start timer
  window.firstClick = 0;

  let pairsElement = document.getElementById("remainingPairs");
  pairsElement.innerHTML = remainingPairs ;

    // Sort cards Function
    function sortCards() {

      deck = document.querySelectorAll('.wrapper .item');
      deck = Array.prototype.slice.call(deck);

      for (let i = deck.length - 1; i >= 0; i--) { //Shuffle deck
        randomIndex = Math.floor(Math.random() * (i + 1)); //Pick a random index
        itemAtIndex = deck[randomIndex]; //Take the value of that random index

        deck[randomIndex] = deck[i]; //Now swipe the values of the original index with the random index
        deck[i] = itemAtIndex;
      }
      return deck;
    }

    window.onload = function() {

      let div = document.querySelector('.wrapper');

      let newdeck = sortCards();
      newdeck.forEach(function (p) {
        div.appendChild(p);
      });

    };

    // game timer
    let interval;
    function timer(op) {

      if (op == 1) {
      let s = 1;
      let m = 0;
      let h = 0;

      interval = window.setInterval(function() {
        if (s == 60) { m++; s = 0; }
        if (m == 60) { h++; s = 0; m = 0; }
        if (h > 0) {
          document.getElementById("hours").innerHTML = h + "h &nbsp;";
          //window.saveHour = h + "h &nbsp;";
        }
        if (m > 0) {
          document.getElementById("minutes").innerHTML = m + "m&nbsp;";
          //window.saveMinute = m + "m &nbsp;";
        }   
        if (s > 0) {
          document.getElementById("seconds").innerHTML = s + "s";
         // window.saveSecond = s + "s &nbsp;";
        }
        s++;
      }, 1000);
      }

      if (op == 0) {
        if (typeof saveHour !== 'undefined') {
          window.saveTime = saveHour + saveMinute + saveSecond;
        } else if (typeof saveMinute !== 'undefined') {
          window.saveTime = saveMinute + saveSecond;
        } else if (typeof saveSecond !== 'undefined') {
          window.saveTime = saveSecond;
        } else {
          window.saveTime = "";
        }
        window.clearInterval(interval);
      }
    }

    // unflip cards
    function unset(){
      for (let i = 1; i <= cardNumber; i++) {
          if (document.getElementById(i).getAttribute('class') == 'card flipped') {
            document.getElementById(i).setAttribute('class' , 'card');
          }
      }
      quant = 0;
      window.pair1 = 0;
      window.pair2 = 0;
    }

    // when pairs are right, disable the cards
    function isOk() {
      for (let i = 1; i <= cardNumber; i++) {
          if (document.getElementById(i).getAttribute('class') == 'card flipped') {
            document.getElementById(i).setAttribute('class' , 'card matched');
          }
      }
      quant = 0;
      pair1 = 0;
      pair2 = 0;
      remainingPairs -= 1;
      let pairsElement = document.getElementById("remainingPairs");
      pairsElement.innerHTML= remainingPairs ;
      // If the game has been finished
      if (remainingPairs == 0) {
        timer(0);
        youWin();
      }
    }

    //Show de finish message
    function youWin(){
      document.getElementById("finaltime").innerHTML = saveTime;

      setTimeout(showPopup, 1);
      let el = document.getElementById("win-block");
      function fadeIn(el) {
        el.style.opacity = 0;
        let tick = function() {
          el.style.opacity = +el.style.opacity + 0.04;
          if (+el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
          }
        };
        setTimeout(tick, 10);
      }
      fadeIn(el);
    }

    function showPopup() {
      document.getElementById("win-block").style.display = "block";
      window.winblockon = 1;
    }

    // Function to reset the game
    function reset(){
      if (winblockon == 1) {
        function hidePopup() {
          document.getElementById("win-block").style.display = "none";
        }
      }
      
      sortCards();
      
      for (let i = 1; i <= cardNumber; i++) {
          if (document.getElementById(i).getAttribute('class') == 'card') {
            document.getElementById(i).setAttribute('class' , 'card');
          }
      }      
      // reset variables
      quant = 0;
      window.pair1 = 0;
      window.pair2 = 0;
      window.firstClick = 0;
    }

    // Main Funcition - active when click on any card
    function flip(e)  {

      if (e.getAttribute('class') == 'card'){
        window.firstClick++;
        // Timer starter
        if (firstClick == 1) {
          timer(1);
        }

        if (quant < 2) {
          if (quant == 0) {
            window.pair1 = e.getAttribute('par');
          }
          else if (quant > 0) {
            window.pair2 = e.getAttribute('par');
          }
            e.setAttribute('class', 'card flipped');
            quant = document.getElementsByClassName("card flipped").length;
            if (quant == 2) {
              if (pair1 == pair2) {
                setTimeout(isOk, 500);
              }else if (pair1 != pair2) {
                setTimeout(unset, 500);
              }
            }
        } else if (quant > 2) { //Remove bug. Now, can't tilt when the user click faster
          quant = 0;
        }
      }
    }