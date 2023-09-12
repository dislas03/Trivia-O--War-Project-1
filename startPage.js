//Button click should take user to next webpage, without refreshing site entirely 
//Should redirect to playerSelect.index 
const enterGame = document.querySelector("#enter-game")

let redirectPage = function(){
    window.location.href = "playerSelect.html";
}

enterGame.addEventListener("click", redirectPage)