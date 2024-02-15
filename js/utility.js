function setClassNameById(elementId, className){
    const homeScreen = document.getElementById(elementId);
    homeScreen.classList.add(className);
}

function removeClassNameById(elementId, className){
    const playGround = document.getElementById(elementId);
    playGround.classList.remove(className);
}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}
 
function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

function getARandomAlphabet(){
    // get and create an alphabet array 

    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    // get a random index 
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;

}