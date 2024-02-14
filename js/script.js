
function continueGame(){
    // generate a random alphabet 
    const alphabet = getARandomAlphabet()

    // set randomly generated alphabet to the screen 

    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    setClassNameById(alphabet, 'bg-orange-400')

}


function play(){
    setClassNameById('home-screen', 'hidden')
    removeClassNameById('play-ground', 'hidden')
    continueGame()
}

