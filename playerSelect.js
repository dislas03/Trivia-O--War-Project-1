let playerOne = document.querySelector("#playerOne");

let playerArray = [playerOne];

let selectPlayer = document.querySelector("#namePlayer");

const players = document.querySelector(".players")

const playerOneButton = document.querySelector("#playerOneEnter");

const howToPlayModal = document.querySelector("#howToPlay");

const openHowToButton = document.querySelector("#howTo");

const closeBackToGame = document.querySelector("#close");

const openStartGame = document.querySelector("#namePlayer");

const startGame = document.querySelector(".startGame"); 

openHowToButton.addEventListener("click", () =>{
    howToPlayModal.style.display = "block"
}); 

closeBackToGame.addEventListener("click", () =>{
    howToPlayModal.style.display = "none"
});

openStartGame.addEventListener("click", () => {
    startGame.style.display = "block"
    players.style.display = "none"
})

startGame.addEventListener("click", () =>{
    window.location.href = "playGame.html";
    localStorage.setItem("playerOne", playerOne.value);
 }); 

selectPlayer.addEventListener("click", () =>{
    let randomPlayer = playerArray[Math.floor(Math.random() * playerArray.length)];
    let playerSelected = document.querySelector(".nameSelected");
    playerSelected.innerHTML = randomPlayer.value
    localStorage.setItem("namePlayer", playerSelected.innerHTML);
}); 

