var userScore = 0;
var computerScore = 0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p=document.querySelector(".result > p");
const rock_div=document.getElementById("r");
const scissor_div=document.getElementById("s");
const paper_div=document.getElementById("p");

function getComputerChoice() {
    const choices=['r','s','p'];
    const randomNumber=Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if (letter==="r") return "Rock";
    if (letter==="s") return "Scissor";
    return "Paper";

}

function win(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(4).sup();
    const smallComWord = "com".fontsize(4).sup();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML=`${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallComWord}. You Win!!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() =>userChoice_div.classList.remove('green-glow'), 300); //function을 쓰지않는 다른 방법
}

function lose(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(4).sup();
    const smallComWord = "com".fontsize(4).sup();
    const userChoice_div = document.getElementById(userChoice);s
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML=`${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallComWord}. You Lose...`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() =>userChoice_div.classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(4).sup();
    const smallComWord = "com".fontsize(4).sup();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML=`${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallComWord}. It's a Draw`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() =>userChoice_div.classList.remove('gray-glow'), 300);
}

function game(userChoice) {
    const computerChoice=getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs": //user win
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;  
        case "rp": //com win
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr": //draw 
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () =>game("r"));
    scissor_div.addEventListener('click', () =>game("s"));
    paper_div.addEventListener('click', () =>game("p"));
}


main();