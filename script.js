let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
    //rock , paper , scissor
}
const drawGame = () => {
    msg.innerText = "Game was draw!";
    msg.style.backgroundColor = "lightyellow";
    msg.style.color = "black";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win!`;
        msg.style.backgroundColor = "lightgreen";
        msg.style.color = "black";

    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose!`;
        msg.style.backgroundColor = "red";
        msg.style.color = "black";
    }
}

const playGame = (userChoice) => {
    console.log("user choice=", userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("comp Choice= ", compChoice);

    // now tell who are winning
    if (userChoice === compChoice) {
        drawGame();//draw game 
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors or paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            //rock , scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin)
    }

};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});



