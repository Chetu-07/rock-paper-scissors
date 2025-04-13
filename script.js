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
    return computerChoice;
}

let humanScore = 0;
let computerScore = 0;
let draw = 0;

function gameRound(){
    getHumanChoice = prompt("Rock,Paper or Scissors");
    getHumanChoice = getHumanChoice.toLowerCase();

    
    console.log (`computer choose ${computerChoice}`);
    if (getHumanChoice === computerChoice){
        draw += 1;
        console.log ("it\'s a draw")
        console.log (`You : ${humanScore} , Computer :${computerScore}, Draws : ${draw}`);
    }
    else if ((getHumanChoice=== "rock" && computerChoice ==="scissors")
        || (getHumanChoice=== "paper" && computerChoice ==="rock")
        || (getHumanChoice=== "scissors" && computerChoice ==="paper")){
            humanScore += 1;
            console.log ("You won");
            console.log (`You : ${humanScore} , Computer :${computerScore}, Draws : ${draw}`);
        }
    else {  
            computerScore += 1;
            console.log ("You loose");
            console.log (`You : ${humanScore} , Computer :${computerScore}, Draws : ${draw}`);
    
    }

}

function playRound(){
    getComputerChoice();
    gameRound();
}
function compareScores(){
    if (humanScore> computerScore){
        alert("you won");
    }
    else if (humanScore< computerScore){
        alert("you loose");
    }
    else {
        alert("a Draw");
    }
}
function playGame(){
    for (i=1;i<6;i++){
        playRound();
    };
    compareScores();
    computerScore=0;
    humanScore=0;
    draw =0;
}