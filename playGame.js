//add event listener to open questions modal, should be dedicated to open button "take turn" 
//inside modal should be random questions that player is presented 
//each question has 4 listed answers each having their own event listner to choose from, correct answer shows diplay "correct" wrong answer shows display "incorrect" 
//correct answer adds 2 points to score, incorrect answer removes 1 point from score 
//last lines of code should be computer waiting for first player to reach a certain score, in this case 10 points 
//take turn button opens one of the ten questions randomly 
// import { playerOne as playerOneName } from "./playerSelect.js";
const buttonClass = document.querySelector(".button")

const takeTurnButton = document.querySelector("#takeTurn");

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

let correctAnswer = document.querySelector(".correctAnswerModal");

let incorrectAnswer = document.querySelector(".incorrectAnswerModal");

let playerOneName = document.querySelector(".playerOneName");

let playerTwoName = document.querySelector(".playerTwoName"); 

// let playerOneScore = 0 

// let playerTwoScore = 0 

// document.querySelector("")

// playerOneName.innerHTML = playerOneName

// import { playerOne as playerOneName } from "./playerSelect"; 

// playerTwoName.innerHTML = playerTwoName 

// import { playerTwo as playerTwoName } from "./playerSelect";

// let playerTwoName = document.querySelector(".playerTwoName");

let questionsArray = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen];

// let playerOneScore = document.querySelector(".playerOneScore");

// let playerTwoScore = document.querySelector(".playerTwoScore");

class CorrectAnswer {
    constructor(name){
        name = document.querySelector(name); //select the button with the correct answer
    }
    eventListener(){
        this.name.addEventListener("click", () =>{ 
            correctAnswer.style.display = "block"
        })
    }
}
//list of all the correct answers within HTML 
let modalOneAnswer = new CorrectAnswer (".aTwoModalOne");
modalOneAnswer.eventListener(); 
let modalTwoAnswer = new CorrectAnswer (".aOneModalTwo");
modalTwoAnswer.eventListener 
let modalThreeAnswer = new CorrectAnswer (".ThreeModalThree");
modalThreeAnswer.eventListener();
let modalFourAnswer = new CorrectAnswer (".aOneModalFour");
modalFourAnswer.eventListener();
let modalFiveAnswer = new CorrectAnswer (".aOneModalFive");
modalFiveAnswer.eventListener();
let modalSixAnswer = new CorrectAnswer (".aFourModalSix");
modalSixAnswer.eventListener();
let modalSevenAnswer = new CorrectAnswer (".aFourModalSeven");
modalSevenAnswer.eventListener();
let modalEightAnswer = new CorrectAnswer (".aTwoModalEight");
modalEightAnswer.eventListener();
let modalNineAnswer = new CorrectAnswer (".aTwoModalNine");
modalNineAnswer.eventListener();
let modalTenAnswer = new CorrectAnswer (".aThreeModalTen");
modalTenAnswer.eventListener();


takeTurnButton.addEventListener("click", () =>{
    questionsModal.style.display = "block"
    buttonClass.style.display = "none"
    let randomQuestion = questionsArray[Math.floor(Math.random() * questionsArray.length)];
    randomQuestion.style.display = "block"
}) 
