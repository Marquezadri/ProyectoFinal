let playerScore = 0;
let bootScore = 0;

function playGame(userChoice) {
    const choices = ['piedra', 'papel', 'tijera'];
    const bootChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = '';

    if (userChoice === bootChoice) {
        result = 'Empate';
    } else if (
        (userChoice === 'piedra' && bootChoice === 'tijera') ||
        (userChoice === 'papel' && bootChoice === 'piedra') ||
        (userChoice === 'tijera' && bootChoice === 'papel')
    ) {
        result = 'Victoria';
        playerScore++;
    } else {
        result = 'Derrota';
        bootScore++;
    }

    document.getElementById('result').textContent = result;
    document.getElementById('score').textContent = `Jugador: ${playerScore} | Boot: ${bootScore}`;

    if (playerScore === 3 || bootScore === 3) {
        endGame();
    }
}

function endGame() {
    const finalResult = playerScore === 3 ? 'Ganado, GG 🐐' : 'Perdido 🤣😵';
    document.getElementById('result').textContent = `Has ${finalResult}`;

    document.getElementById('btnPiedra').disabled = true;
    document.getElementById('btnPapel').disabled = true;
    document.getElementById('btnTijera').disabled = true;
}