let computerChoice

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

let getHumanChoice = prompt("Rock,Paper or Scissors");
getHumanChoice = getHumanChoice.toLowerCase();

let humanScore = 0;
let computerScore =0;
let draw = 0;

if (getHumanChoice === computerChoice){
    draw += 1;
    console.log ("it\'s a draw")
    console.log (`You : ${getHumanChoice} , Computer : ${computerChoice}, Draws : ${draw}`);
}

