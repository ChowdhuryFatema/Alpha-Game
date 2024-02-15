
function handleKeyboardButtonPress(event) {
    const pressedKey = event.key;

    // stop the game if pressed 'Esc'
    if(pressedKey === 'Escape'){
        gameOver();
    }

    const currentAlphabet = document.getElementById('current-alphabet').innerText.toLowerCase();

    // check right or wrong key pressed 
    if (pressedKey === currentAlphabet) {
        // update score 
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore)

        // start a new round 
        removeClassNameById(currentAlphabet, 'bg-orange-400')
        continueGame()
    } else {
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife)
        if (updatedLife === 0) {
            gameOver();
        }
    }


}
document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame() {
    // generate a random alphabet 
    const alphabet = getARandomAlphabet()

    // set randomly generated alphabet to the screen 

    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    setClassNameById(alphabet, 'bg-orange-400')
}


function play() {
    // hide everything show only the playground 
    setClassNameById('score', 'hidden')
    setClassNameById('home-screen', 'hidden')
    removeClassNameById('play-ground', 'hidden')

    // reset score and life 
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame()
}

function gameOver() {
    removeClassNameById('score', 'hidden')
    setClassNameById('play-ground', 'hidden')
    //update final score

    const finalScore = getTextElementValueById('current-score');
    setTextElementValueById('final-score', finalScore);

    // clear the last selected alphabet highlight 

    const currentAlphabet = getElementTextById('current-alphabet');
    removeClassNameById(currentAlphabet, 'bg-orange-400')
}