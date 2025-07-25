console.log("Hello World");

function getComputerChoice() {
    const playerChoiceInput = document.querySelector('input[name="playerChoice"]:checked');
    if (playerChoiceInput) {
        playerChoice = playerChoiceInput.value;
    } else {
        alert("No Option Selected");
        return;
    }

    computerChoice = document.getElementById('computerChoiceDisplay');
    result = document.getElementById('resultDisplay');
    
    const choices = document.getElementsByClassName('option');
    for (let list of choices) {
        list.classList.add('locked');
    }

    document.getElementById('shootButton').classList.add('invisible');
    document.getElementById('replayButton').classList.remove('invisible');
    
    const winElement = document.getElementById('Wins');
    const drawElement = document.getElementById('Draws');
    const lossElement = document.getElementById('Losses');

    const currentWins = parseInt(winElement.textContent, 10);
    const currentDraws = parseInt(drawElement.textContent, 10);
    const currentLosses = parseInt(lossElement.textContent, 10);

    let randomNumber = Math.random();
    let randomInt = Math.floor(randomNumber * 10);
        if (randomInt == 9) {
            getComputerChoice();
        } else if (randomInt > 6) {
            console.log("Player Chooses: " + playerChoice);
            console.log("Computer Chooses: Rock");
            computerChoice.classList.toggle('fa-question');
            computerChoice.classList.toggle('fa-hand-fist');
                if (playerChoice == 'Paper') {
                    console.log("You Win!");
                    result.textContent = 'You Win!';
                    document.getElementById('outcomeDisplay').style.boxShadow = '0px 5px rgba(18, 182, 51, 0.8)';
                    const newWins = currentWins + 1;
                    winElement.textContent = newWins;
                } else if (playerChoice == 'Rock') {
                    console.log("It's a Draw!");
                    result.textContent = 'It\'s a Draw!';
                    document.getElementById('outcomeDisplay').style.boxShadow = '0px 5px rgba(255, 255, 255, 0.65)';
                    const newDraws = currentDraws + 1;
                    drawElement.textContent = newDraws;
                } else {
                    console.log("You Lose!");
                    result.textContent = 'You Lose!';
                    document.getElementById('outcomeDisplay').style.boxShadow = '0px 5px rgba(243, 68, 68, 0.8)';
                    const newLosses = currentLosses + 1;
                    lossElement.textContent = newLosses;
                }
        } else if (randomInt > 3) {
            console.log("Player Chooses: " + playerChoice);
            console.log("Computer Chooses: Paper");
            computerChoice.classList.toggle('fa-question');
            computerChoice.classList.toggle('fa-hand');
                if (playerChoice == 'Scissors') {
                    console.log("You Win!");
                    result.textContent = 'You Win!';
                    document.getElementById('outcomeDisplay').style.boxShadow = '0px 5px rgba(18, 182, 51, 0.8)';
                    const newWins = currentWins + 1;
                    winElement.textContent = newWins;
                } else if (playerChoice == 'Paper') {
                    console.log("It's a Draw!");
                    result.textContent = 'It\'s a Draw!';
                    document.getElementById('outcomeDisplay').style.boxShadow = '0px 5px rgba(255, 255, 255, 0.65)';
                    const newDraws = currentDraws + 1;
                    drawElement.textContent = newDraws;
                } else {
                    console.log("You Lose!");
                    result.textContent = 'You Lose!';
                    document.getElementById('outcomeDisplay').style.boxShadow = '0px 5px rgba(243, 68, 68, 0.8)';
                    const newLosses = currentLosses + 1;
                    lossElement.textContent = newLosses;
                }
        } else {
            console.log("Player Chooses: " + playerChoice);
            console.log("Computer Chooses: Scissors");
            computerChoice.classList.toggle('fa-question');
            computerChoice.classList.toggle('fa-hand-scissors');
                if (playerChoice == 'Rock') {
                    console.log("You Win!");
                    result.textContent = 'You Win!';
                    document.getElementById('outcomeDisplay').style.boxShadow = '0px 5px rgba(18, 182, 51, 0.8)';
                    const newWins = currentWins + 1;
                    winElement.textContent = newWins;
                } else if (playerChoice == 'Scissors') {
                    console.log("It's a Draw!");
                    result.textContent = 'It\'s a Draw!';
                    document.getElementById('outcomeDisplay').style.boxShadow = '0px 5px rgba(255, 255, 255, 0.65)';
                    const newDraws = currentDraws + 1;
                    drawElement.textContent = newDraws;
                } else {
                    console.log("You Lose!");
                    result.textContent = 'You Lose!';
                    document.getElementById('outcomeDisplay').style.boxShadow = '0px 5px rgba(243, 68, 68, 0.8)';
                    const newLosses = currentLosses + 1;
                    lossElement.textContent = newLosses;
                }
        }
    return;
}


function playAgain() {
    document.getElementById('computerChoiceDisplay').classList.remove('fa-hand-fist', 'fa-hand', 'fa-hand-scissors');
    document.getElementById('computerChoiceDisplay').classList.toggle('fa-question');
    document.getElementById('resultDisplay').textContent = '???';
    document.getElementById('outcomeDisplay').style.boxShadow = 'none';

    const choices = document.getElementsByClassName('option');
    for (let list of choices) {
        list.classList.remove('locked');
    }

    document.querySelector('input[name="playerChoice"]:checked').checked = false;

    document.getElementById('shootButton').classList.remove('invisible');
    document.getElementById('replayButton').classList.add('invisible');
}