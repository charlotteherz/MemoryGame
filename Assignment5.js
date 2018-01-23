var MemoryGame = {};
var idArray = [1,2,3,4,5,6,1,2,3,4,5,6];
var cardID = document.getElementsByClassName("card");
var overlay = document.getElementById("overlay");
var cardBack = document.getElementsByClassName("cardContainer");
var choices = 0;
var firstCard;
var secondCard;
var correctGuesses = 0;

function shuffleCards() {
    idArray.sort(function (a, b) {
        return 0.5 - Math.random()
    });
    for (var i = 0; i < idArray.length; i++) {
        cardID[i].setAttribute("data-id", idArray[i]);
        cardID[i].style.backgroundImage = "url(images/" + "/" + cardID[i].getAttribute("data-id") + ".jpg)";
        cardID[i].addEventListener("click", flipCard);
    }
}
shuffleCards();

function flipCard() {
    if(choices === 2){
        return;
    }
    else if(choices === 0){
        event.target.style.opacity = "1";
        firstCard = event.target;

        choices = 1;
    }
    else{
        event.target.style.opacity = "1";
        secondCard = event.target;
        choices = 2;
        setTimeout(checkCards, 1000);
    }
}
function checkCards(){
    if(correctGuesses===5){
        overlay.style.display = "block";
    }
    else if(firstCard.getAttribute("data-id") === secondCard.getAttribute("data-id")){
        correctGuesses += 1;
        firstCard.removeEventListener("click",flipCard);
        secondCard.removeEventListener("click",flipCard);
    }
    else{
        firstCard.style.opacity = "0";
        secondCard.style.opacity = "0";
    }
    choices = 0;
}
function newGame(){
    for (var i = 0; i<12; i ++){
        var card = document.getElementsByClassName("card")[i];
        card.style.opacity = "0";
    }
    overlay.style.display = "none";
    correctGuesses = 0;
    shuffleCards();
}
document.getElementById("shuffle").addEventListener("click", shuffleCards);
document.getElementById("new").addEventListener("click", newGame);
