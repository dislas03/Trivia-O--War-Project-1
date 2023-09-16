let playerOne = document.querySelector("#playerOne");

let playerTwo = document.querySelector("#playerTwo");

let playerArray = [playerOne, playerTwo];

let selectPlayer = document.querySelector("#selectPlayer");

const playerOneButton = document.querySelector("#playerOneEnter");

const playerTwoButton = document.querySelector("#playerTwoEnter");

const howToPlayModal = document.querySelector("#howToPlay");

const openHowToButton = document.querySelector("#howTo");

const closeBackToGame = document.querySelector("#close");

const startGame = document.querySelector("#startGame"); 

// playerOneButton.addEventListener("click", () =>{
//     playerOne.innerHTML = playerOne.value
// });

// playerTwoButton.addEventListener("click", () =>{
//     playerTwo.innerHTML = playerTwo.value
// });

openHowToButton.addEventListener("click", () =>{
    howToPlayModal.style.display = "block"
}); 

closeBackToGame.addEventListener("click", () =>{
    howToPlayModal.style.display = "none"
});

startGame.addEventListener("click", () =>{
    window.location.href = "playGame.html";
}); 

selectPlayer.addEventListener("click", () =>{
    let randomPlayer = playerArray[Math.floor(Math.random() * playerArray.length)];
    let playerSelected = document.querySelector(".playerSelected"); 
    playerSelected.innerHTML = randomPlayer.value
}); 
