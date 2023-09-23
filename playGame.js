
const playerOneName = document.querySelector(".playerOneName");

const playerTwoName = document.querySelector(".playerTwoName");

playerOneName.innerHTML = localStorage.getItem("playerOne");

const buttonClass = document.querySelector(".button")

const takeTurnButton = document.querySelector("#takeTurn");

const playerStart = document.querySelector("#playerStart");

const questionsModal = document.querySelector(".questionsModal");

const questionOne = document.querySelector(".qOneModal");

const questionTwo = document.querySelector(".qTwoModal");

const questionThree = document.querySelector(".qThreeModal");

const questionFour = document.querySelector(".qFourModal");

const questionFive = document.querySelector(".qFiveModal");

const questionSix = document.querySelector(".qSixModal");

const questionSeven = document.querySelector(".qSevenModal");

const questionEight = document.querySelector(".qEightModal");

const questionNine = document.querySelector(".qNineModal");

const questionTen = document.querySelector(".qTenModal"); 

const clearStorage = document.querySelector("#clearLocalStorage");

const winCondition = document.querySelector(".winCondition")

const loseCondition = document.querySelector(".loseCondition")

let selectedAnswerOne = document.querySelectorAll(".selectAnswerOne");

let selectedAnswerTwo = document.querySelectorAll(".selectAnswerTwo");

let selectedAnswerThree = document.querySelectorAll(".selectAnswerThree");

let selectedAnswerFour = document.querySelectorAll(".selectAnswerFour");

let selectedAnswerFive = document.querySelectorAll(".selectAnswerFive");

let selectedAnswerSix = document.querySelectorAll(".selectAnswerSix");

let selectedAnswerSeven = document.querySelectorAll(".selectAnswerSeven");

let selectedAnswerEight = document.querySelectorAll(".selectAnswerEight");

let selectedAnswerNine = document.querySelectorAll(".selectAnswerNine")

let selectedAnswerTen = document.querySelectorAll(".selectAnswerTen");

let correctAnswer = document.querySelector(".correctAnswerModal");

let incorrectAnswer = document.querySelector(".incorrectAnswerModal"); 

let nextTurn = document.querySelectorAll(".nextTurn")

let playerOneScore = document.querySelector(".playerOneScore");

let playerScore = 0;

let questionsArray = [
    {
        question: questionOne,
        options: ["a.", "b.", "c.", "d."],
        correctAnswer: "b.",
    }, 

    {
        question: questionTwo,
        options: ["a.", "b.", "c.", "d."],
        correctAnswer: "a.",
    }, 
    {
        question: questionThree,
        options: ["a.", "b.", "c.", "d."],
        correctAnswer: "c.",
    }, 

    {
        question: questionFour,
        options: ["a.", "b.", "c.", "d."],
        correctAnswer: "a.",
    }, 
    {
        question: questionFive,
        options: ["a.", "b.", "c.", "d."],
        correctAnswer: "a.",
    }, 
    {
        question: questionSix,
        options: ["a.", "b.", "c.", "d."],
        correctAnswer: "d.",
    }, 
    {
        question: questionSeven,
        options: ["a.", "b.", "c.", "d."],
        correctAnswer: "d.",
    }, 
    {
        question: questionEight,
        options: ["a.", "b.", "c.", "d."],
        correctAnswer: "b.",
    }, 
    {
        question: questionNine,
        options: ["a.", "b.", "c.", "d."],
        correctAnswer: "b.",
    }, 
    {
        question: questionTen,
        options: ["a.", "b.", "c.", "d."],
        correctAnswer: "c."
    }
];
console.log(questionsArray);

let scoreIncrement = (amt) => {
    playerScore += amt;
    playerOneScore.innerHTML = playerScore;
    return amt;
}

let scoreDecrement = (amt) => {
    playerScore -= amt;
    playerOneScore.innerHTML = playerScore;
    return amt;
}

takeTurn = takeTurnButton.addEventListener("click", () => {
    questionsModal.style.display = "block"
    buttonClass.style.display = "none"
    let randomQuestion = questionsArray[Math.floor(Math.random() * questionsArray.length)];
    randomQuestion.question.style.display = "block"
});

nextTurn.forEach(nextTurn => {
    nextTurn.addEventListener("click", () => {
        for (i = 0; i < questionsModal.length; i++){
            if (questionsModal[i].style.display === "block"){
                questionsModal[i].style.display = "none"
            }
        }
        let randomQuestion = questionsArray[Math.floor(Math.random() * questionsArray.length)];
        randomQuestion.question.style.display = "block"
    })
})

selectedAnswerOne.forEach(selectAnswerOne => {
    selectAnswerOne.addEventListener("click", () => {
        for(i = 0; i < selectedAnswerOne.length; i++){
            if (selectAnswerOne.innerText === questionsArray[0].correctAnswer){
                correctAnswer.style.display = "block"
                scoreIncrement(2)
                takeTurn
            } else{
                incorrectAnswer.style.display = "block"
                scoreDecrement(1)
                takeTurn
            }
        }
        if (playerScore >= 80){
            clearStorage.style.display = "block"
            winCondition.style.display = "block"
        } else if(playerScore < 0){
            clearStorage.style.display = "block"
            loseCondition.style.display = "block"
        }
        if (questionsArray[0].question.style.display === "block"){
            questionsArray[0].question.style.display = "none"
        }
    })
})
    
    
selectedAnswerTwo.forEach(selectAnswerTwo => {
    selectAnswerTwo.addEventListener("click", () =>{
        for (i = 0; i < selectedAnswerTwo.length; i++){
            if (selectAnswerTwo.innerText === questionsArray[1].correctAnswer){
                correctAnswer.style.display = "block"
                scoreIncrement(2)
                takeTurn
            } else{
                incorrectAnswer.style.display = "block"
                scoreDecrement(1)
                takeTurn
            }
        }
        if (playerScore >= 80){
            clearStorage.style.display = "block"
            winCondition.style.display = "block"
        } else if(playerScore < 0){
            clearStorage.style.display = "block"
            loseCondition.style.display = "block"
        }
        if (questionsArray[1].question.style.display === "block"){
            questionsArray[1].question.style.display = "none"
        }
    })
})
    
    
selectedAnswerThree.forEach(selectAnswerThree => {
    selectAnswerThree.addEventListener("click", () => {
        for (i = 0; i < selectedAnswerThree.length; i++){
            if (selectAnswerThree.innerText === questionsArray[2].correctAnswer){
                correctAnswer.style.display = "block"
                scoreIncrement(2)
                takeTurn
            } else{
                incorrectAnswer.style.display = "block"
                scoreDecrement(1)
                takeTurn
            }
        }
        if (playerScore >= 80){
            clearStorage.style.display = "block"
            winCondition.style.display = "block"
        } else if(playerScore < 0){
            clearStorage.style.display = "block"
            loseCondition.style.display = "block"
        }
        if (questionsArray[2].question.style.display === "block"){
            questionsArray[2].question.style.display = "none"
        }
    })
})
    
    
selectedAnswerFour.forEach(selectAnswerFour => {
    selectAnswerFour.addEventListener("click", () => {
        for (i = 0; i < selectedAnswerFour.length; i++){
            if (selectAnswerFour.innerText === questionsArray[3].correctAnswer){
                correctAnswer.style.display = "block"
                scoreIncrement(2)
                takeTurn
            } else{
                incorrectAnswer.style.display = "block"
                scoreDecrement(1)
                takeTurn
            }
        }
        if (playerScore >= 80){
            clearStorage.style.display = "block"
            winCondition.style.display = "block"
        } else if(playerScore < 0){
            clearStorage.style.display = "block"
            loseCondition.style.display = "block"
        }

        if (questionsArray[3].question.style.display === "block"){
            questionsArray[3].question.style.display = "none"
        }
    })
})
    
    
selectedAnswerFive.forEach(selectAnswerFive => {
    selectAnswerFive.addEventListener("click", () => {
        for (i = 0; i < selectedAnswerFive.length; i++){
            if (selectAnswerFive.innerText === questionsArray[4].correctAnswer){
                correctAnswer.style.display = "block"
                scoreIncrement(2)
                takeTurn
            } else{
                incorrectAnswer.style.display = "block"
                scoreDecrement(1)
                takeTurn
            }
        }
        if (playerScore >= 80){
            clearStorage.style.display = "block"
            winCondition.style.display = "block"
        } else if(playerScore < 0){
            clearStorage.style.display = "block"
            loseCondition.style.display = "block"
        }
        if (questionsArray[4].question.style.display === "block"){
            questionsArray[4].question.style.display = "none"
        }
    })
})
    
    
selectedAnswerSix.forEach(selectAnswerSix => {
    selectAnswerSix.addEventListener("click", () => {
        for (i = 0; i < selectedAnswerSix.length; i++){
            if (selectAnswerSix.innerText === questionsArray[5].correctAnswer){
                correctAnswer.style.display = "block"
                scoreIncrement(2)
                takeTurn
            } else{
                incorrectAnswer.style.display = "block"
                scoreDecrement(1)
                takeTurn
            }
        }
        if (playerScore >= 80){
            clearStorage.style.display = "block"
            winCondition.style.display = "block"
        } else if(playerScore < 0){
            clearStorage.style.display = "block"
            loseCondition.style.display = "block"
        }
        if (questionsArray[5].question.style.display === "block"){
            questionsArray[5].question.style.display = "none"
        }
    })
})
    
    
selectedAnswerSeven.forEach(selectAnswerSeven => {
    selectAnswerSeven.addEventListener("click", () => {
        for (i = 0; i < selectedAnswerSeven.length; i++)
        {
            if (selectAnswerSeven.innerText === questionsArray[6].correctAnswer){
                correctAnswer.style.display = "block" 
                scoreIncrement(2)
                takeTurn
            } else{
                incorrectAnswer.style.display = "block"
                scoreDecrement(1)
                takeTurn
            }
        }
        if (playerScore >= 80){
            clearStorage.style.display = "block"
            winCondition.style.display = "block"
        } else if(playerScore < 0){
            clearStorage.style.display = "block"
            loseCondition.style.display = "block"
        }
        if (questionsArray[6].question.style.display === "block"){
            questionsArray[6].question.style.display = "none"
        }
    })
})
    
    
selectedAnswerEight.forEach(selectAnswerEight => {
    selectAnswerEight.addEventListener("click", () => {
        for (i = 0; i < selectedAnswerEight.length; i++){
            if (selectAnswerEight.innerText === questionsArray[7].correctAnswer){
                correctAnswer.style.display = "block"
                scoreIncrement(2)
                takeTurn
            } else{
                incorrectAnswer.style.display = "block"
                scoreDecrement(1)
                takeTurn
            }
        }
        if (playerScore >= 80){
            clearStorage.style.display = "block"
            winCondition.style.display = "block"
        } else if(playerScore < 0){
            clearStorage.style.display = "block"
            loseCondition.style.display = "block"
        }
        if (questionsArray[7].question.style.display === "block"){
            questionsArray[7].question.style.display = "none"
        }
    })
})
    
    
selectedAnswerNine.forEach(selectAnswerNine => {
    selectAnswerNine.addEventListener("click", () => {
        for (i = 0; i < selectedAnswerNine.length; i++){
            if (selectAnswerNine.innerText === questionsArray[8].correctAnswer){
                correctAnswer.style.display = "block"
                scoreIncrement(2)
                takeTurn
            } else{
                incorrectAnswer.style.display = "block"
                scoreDecrement(1)
                takeTurn
            }
        }
        if (playerScore >= 80){
            clearStorage.style.display = "block"
            winCondition.style.display = "block"
        } else if(playerScore < 0){
            clearStorage.style.display = "block"
            loseCondition.style.display = "block"
        }
        if (questionsArray[8].question.style.display === "block"){
            questionsArray[8].question.style.display = "none"
        }
    })
})
    
    
selectedAnswerTen.forEach(selectAnswerTen => {
    selectAnswerTen.addEventListener("click", () => {
        for (i = 0; i < selectedAnswerTen.length; i++){
            if (selectAnswerTen.innerText === questionsArray[9].correctAnswer){
                correctAnswer.style.display = "block"
                scoreIncrement(2)
                takeTurn
            } else{
                incorrectAnswer.style.display = "block"
                scoreDecrement(1)
                takeTurn
            }
        }
        if (playerScore >= 80){
            clearStorage.style.display = "block"
            winCondition.style.display = "block"
        } else if(playerScore < 0){
            clearStorage.style.display = "block"
            loseCondition.style.display = "block"
        } 
        if (questionsArray[9].question.style.display === "block"){
            questionsArray[9].question.style.display = "none"
        }
    })
})
    

clearStorage.addEventListener("click", () =>{
    localStorage.clear();
    window.location.href = "playerSelect.html";
});
