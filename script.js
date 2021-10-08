const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display'),
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display'),
}


const reset = document.querySelector('#reset')
const winningScoreSelect = document.querySelector('#playto')
let isGameover = false;
let winningScore = 3;

function updateGame(player, opponent) {
    if (!isGameover) {
        player.score += 1;
        if (player.score === opponent.score) {
            if (player.score === winningScore - 1) {
                winningScore += 1;
            }
        }
    }
    if (player.score === winningScore) {
        win(player.display, opponent.display)
        isGameover = true;
    }
    player.display.textContent = player.score;
}

p1.button.addEventListener('click', () => {
    updateGame(p1, p2)
})

p2.button.addEventListener('click', () => {
    updateGame(p2, p1)
})

reset.addEventListener('click', (resetFunc))

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    resetFunc();
})

// "THIS" DOESN'T WORK IN A ARROW FUNCTION

function resetFunc() {
    isGameover = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('winner', 'loser')
    }
}

function win(winner, loser) {
    winner.classList.add('winner')
    loser.classList.add('loser')
}




// I REALLY THINKS THAT "ISGAMEOVER" THING GENIOUS, YOU PUT A SWITCH IN YOUR CODE, IF ONE OF THE PLAYER TURN THE SWITCH TO FALSE, YOU CANNOT RUN THE OTHER SIDE (wooow)
