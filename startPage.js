 const enterGame = document.querySelector("#enter-game")

let redirectPage = function(){
    window.location.href = "playerSelect.html";
}

enterGame.addEventListener("click", redirectPage)