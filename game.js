var prompt = require('sync-prompt').prompt;
var colors = require('colors/safe');

function game(){

  var wallet = 10;
  var guess, 
      correctGuess,
      bet;

  function makeBet(){
    bet = prompt(colors.rainbow("how much do you want to bet? "));
    return bet;
  }

  function makeRandomNumber(){
    correctGuess = Math.floor((Math.random() * 10) + 1);
    return correctGuess;
  }

  function makeGuess(){
    guess = prompt(colors.rainbow("guess a number between 1 and 10: "));
    return guess;
  }

  function checkGuess(){
    if (guess == correctGuess) {
      console.log(colors.green("congratz! you earned: $" + (bet*2)));
      doubleMoney();
    } else if (Math.abs(guess - correctGuess) == 1){
      console.log(colors.yellow("close, you can keep your money: $" + bet));
    } else {
    console.log(colors.red("sorry, no good, I'm taking $" + bet));
      loseMoney();
    };
    console.log(colors.blue("your guess: " + guess));
    console.log(colors.blue("the correct guess: " + correctGuess));
    console.log(colors.blue("your wallet: " + wallet));
  }

  function loseMoney(){
    wallet-=bet;
    if (wallet < 5) { 
      console.log(colors.red.bold("You can't afford another bet, You Lose!"));
      // $("#again").toggleClass("invisible");
      // $("#last").toggleClass("invisible");
    }
  }

   
  function doubleMoney(){
    bet*=2;
    wallet+=bet;
  }; 

  while (wallet >= 5) {
    makeRandomNumber();
    makeGuess();
    makeBet();
    checkGuess();
  } 
  
};

game();


  // $("#again").click(function(){
  //     location.reload();
  // });

 

//   $("#first-button").click(function(e){
//     e.preventDefault();
//     if ($("input#bet").val() <=10 && $("input#bet").val() >= 5){
//       $("#first").toggleClass("invisible");
//       $("#second").toggleClass("invisible");
//       makeBet();
//       makeRandomNumber();
  
//     } else {
//       $("#first-p").text("Try Again! place a bet between $5 and $10")
//     }
//   });



//   $("#second-button").click(function(e){
//     e.preventDefault();
//       if ($("input#guess").val() <=10 && $("input#bet").val() >= 1){
//       $("#second").toggleClass("invisible");
//       $("#third").toggleClass("invisible");
//       makeGuess();
//       checkGuess();
//       $("#wallet").text("Wallet amount: $" + wallet);
//       $("#input_guess").text("your guess was: " + guess);
//       $("#number").text("The correct guess was: " + correctGuess);
//     } else {
//       $("#first-p").text("Try Again! place a bet between $5 and $10")
//     }
//   });


//   $("#last").click(function(e){
//     e.preventDefault();
//     $("#third").toggleClass("invisible");
//     $("#first").toggleClass("invisible");
//   })

// });




