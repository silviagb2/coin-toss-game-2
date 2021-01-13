$(document).ready(function(){
    
//Punts de partida
var playerScore = 0
var computerScore = 0
var randomCoin
var random

$("#heads").click (function() {
    $("#player-selection").text("heads")
    $("#player-selection").css("color", "green");
    computerSelection()
    tailsOrHeads()
    score()
    winner()
})

$("#tails").click (function() {
    $("#player-selection").text("tails")
    $("#player-selection").css("color", "blue");
    computerSelection()
    tailsOrHeads()
    score()
    winner()
})

function computerSelection(){
    random = ['heads','tails'][Math.round(Math.random())]
    $('#computer-selection').text(random)
    if(random === "tails"){
        $("#computer-selection").css("color", "blue");
    }
    if(random === "heads"){
        $("#computer-selection").css("color", "green");
    }
}

function tailsOrHeads(){
    randomCoin = ['heads','tails'][Math.round(Math.random())]
    console.log(randomCoin)
    if (randomCoin === "tails"){
        $('#image').css("background-image", "url('tails.png')");
    }
    if(randomCoin === "heads"){
        $('#image').css("background-image", "url('heads.png')");
    }
}

function score(){
    if(randomCoin == random){
        computerScore++
        $("#computer-score").text(computerScore)
    }
    if(randomCoin == $("#player-selection").text()){
        playerScore++
        $("#player-score").text(playerScore)
    }
}

function winner(){
    if (computerScore === 5){
        $("#winner").text("Computer Wins!!!")
    }
    if (playerScore === 5){
        $("#winner").text("You Win!!!")
    }

    if(computerScore === 5 && playerScore === 5){
        $("#winner").text("It's a Tie!!!")
    }
}



//Fer que la elecció del botó sigui = a lo que s'escriu al Player Selected.
//Fer que computer esculli algo random.
//Fer que el joc escolleixi random entre una part de la moneda o l'altre i la mostri per pantalla.
//Fer que es sumi un punt al player o a la computer si han escollit el que ha sortit per pantalla.



});
