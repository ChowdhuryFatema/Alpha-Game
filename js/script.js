
const  audio = new Audio()
let isGamePlayOn = false;
const artBoard = document.getElementById('art-board');
const modalBox = document.getElementById('modal-box');

function handleKeyboardButtonPress(event) {

    if( isGamePlayOn == false ) return;
    const pressedKey = event.key;

    // stop the game if pressed 'Esc'
    if(pressedKey === 'Escape'){
        gameOver();
    }

    const currentAlphabet = document.getElementById('current-alphabet').innerText.toLowerCase();

    // check right or wrong key pressed 
    if (pressedKey === currentAlphabet) {

        audio.src = '../audio-clip/success.mp3';
        audio.play();

        // update score 
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore)

        // start a new round 
        removeClassNameById(currentAlphabet, 'bg-orange-400')
        continueGame()
    } else {

        audio.src = '../audio-clip/wrong.mp3';
        audio.play();

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;

        const updatedLifePercentage = (updatedLife / 5) * 100;

        artBoard.style.background = `linear-gradient(#FFFFFFB3 ${updatedLifePercentage}%, red)`;

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

    isGamePlayOn = true;
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
    isGamePlayOn = false;

    artBoard.style.background = 'linear-gradient(#FFFFFFB3 100%, red)';
}

function modalOpen(event){
    if(event.clientY < 20){
        modalBox.style.display = 'flex';
    }
}

document.body.onmousemove = modalOpen;

function modalClose(){
    modalBox.style.display = 'none';
}

