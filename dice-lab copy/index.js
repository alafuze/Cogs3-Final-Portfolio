// note: all of the variables are global variables
var die1, die2, dieSum, balance, banner, outcome, die1Name, die2Name, numRolls; // define variables
balance = 0;  // initial value
var die1Image = new Image();
var die2Image = new Image();

function rollDice() {
    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;
    dieSum = die1 + die2;

    // set the dice images based on the roll
    die1Image = document.querySelectorAll("img")[0];
    die1Name = "images/dice" + die1 + ".png";
    die1Image.setAttribute("src", die1Name);

    die2Image = document.querySelectorAll("img")[1];
    die2Name = "images/dice" + die2 + ".png";
    die2Image.setAttribute("src", die2Name);
}

function whoWon() {
    // in h3 report how much money was won or lost and the balance
    if (dieSum <= 5){
      outcome = "You lose, please pay me " + 5 + " dollars.";
      balance -= 5;
    } else if (dieSum >= 9){
      outcome = "You win, I pay you " + 5 + " dollars.";
      balance += 5;
    } else {
      outcome = "Its a draw, nobody wins or loses.";
    }

    // Report the outcome:
    banner = die1 + " + " + die2 + " is: " + dieSum;
    document.querySelector("h3").innerHTML = banner + "<br>" + outcome + "<br>" + "Your total balance is $" + balance;
}


function letsPlay(){
  var numRolls = document.getElementById("dropdownMenu").value;

  alert(numRolls);
  for(var i = 0; i < numRolls; i++){
      delay(i);
      
    }
    document.getElementById("dropdownMenu").value = "";

  function delay(i) {
    setTimeout(function() {
      rollDice();
      whoWon();
    }, i*1200);
  }
}

/*function playCount(numRolls){
  var numRolls = prompt("How many times would you like to play?");
    for(i = 1; i <= numRolls; i++){
      letsPlay(); 
      //while(numRolls > i ){
        //intervalTimer(numRolls);
      //}
      //var interval = setInterval(letsPlay, 1000);
      //if (numRolls < i){
        //clearInterval(interval);
      //}
  } 
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function numOfRolls() {
  document.getElementById("dropdownMenu").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.myBtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}