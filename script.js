let computerChoice;
let getHumanChoice;

function getComputerChoice(){
    let randomNo = Math.random();
    if (randomNo<1/3){
        computerChoice ="rock";
    }
    else if (randomNo <2/3){
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    console.log (`computer choose ${computerChoice}`);
    return computerChoice;
}



let gameRound = function gameRound(){
    getHumanChoice = prompt("Rock,Paper or Scissors");
    getHumanChoice = getHumanChoice.toLowerCase();

    let humanScore = 0;
    let computerScore = 0;
    let draw = 0;
    if (getHumanChoice === computerChoice){
        draw += 1;
        console.log ("it\'s a draw")
        console.log (`You : ${humanScore} , Computer :computerScore, Draws : ${draw}`);
    }
    else if (getHumanChoice=== "rock" && computerChoice ==="scissors"
        || getHumanChoice=== "paper" && computerChoice ==="rock "
        || getHumanChoice=== "scissors" && computerChoice ==="rock"){
            humanScore += 1;
            console.log ("You won");
            console.log (`You : ${humanScore} , Computer :computerScore, Draws : ${draw}`);
        }
    else {
        humanScore += 1;
            console.log ("You loose");
            computerScore += 1;
            console.log (`You : ${humanScore} , Computer :computerScore, Draws : ${draw}`);
    
    }
}

function playRound(){
    
    getComputerChoice();
    gameRound();
}