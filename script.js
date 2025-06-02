const question = [
    {
        question: "Find the LCM of 2/5, 3/10 and 6/25",
        answer: [
            { text: "2400", correct: false },
            { text: "2600", correct: true },
            { text: "1600", correct: false },
            { text: "2700", correct: false },
        ]
    },

    {
        question: "There are 3 prime numbers, product of first two is 1891 and product of last two is 6161. Find all 3 numbers?",
        answer: [
            { text: "105", correct: false },
            { text: "99", correct: false },
            { text: "101", correct: true },
            { text: "103", correct: false },
        ]
    },

    {
        question: "Find the smallest number which when divided by 8,6,10,12 gives remainder 5 in each case?",
        answer: [
            { text: "125", correct: true },
            { text: "564", correct: false },
            { text: "100", correct: false },
            { text: "353", correct: false },
        ]
    },

    {
        question: "Find the smallest number which divided by 5,6,7,8 gives remainder 3 in each case and is divided by completely",
        answer: [
            { text: "15 hours", correct: false },
            { text: "23 hours", correct: false },
            { text: "12 hours", correct: true },
            { text: "14 hours", correct: true },
        ]
    },

    {
        question: "It takes 6 hours for three pipes, X, Y and Z to fill a tank. When the three worked together for 2 hours, Z was closed and, X and Y filled the remaining tank in 7 hours. How many hours would it take Z alone to fill the tank? ",
        answer: [
            { text: "15 hours", correct: false },
            { text: "23 hours", correct: false },
            { text: "12 hours", correct: true },
            { text: "14 hours", correct: false },
        ]
    },

    {
        question: "It takes 6 hours for three pipes, X, Y and Z to fill a tank. When the three worked together for 2 hours, Z was closed and, X and Y filled the remaining tank in 7 hours. How many hours would it take Z alone to fill the tank? ",
        answer: [
            { text: "15 hours", correct: false },
            { text: "23 hours", correct: false },
            { text: "12 hours", correct: true },
            { text: "14 hours", correct: false },
        ]
    },

    {
        question: "It takes 6 hours for three pipes, X, Y and Z to fill a tank. When the three worked together for 2 hours, Z was closed and, X and Y filled the remaining tank in 7 hours. How many hours would it take Z alone to fill the tank? ",
        answer: [
            { text: "15 hours", correct: false },
            { text: "23 hours", correct: false },
            { text: "12 hours", correct: true },
            { text: "14 hours", correct: false },
        ]
    },

    {
        question: "It takes 6 hours for three pipes, X, Y and Z to fill a tank. When the three worked together for 2 hours, Z was closed and, X and Y filled the remaining tank in 7 hours. How many hours would it take Z alone to fill the tank? ",
        answer: [
            { text: "15 hours", correct: false },
            { text: "23 hours", correct: false },
            { text: "12 hours", correct: true },
            { text: "14 hours", correct: false },
        ]
    },

    {
        question: "It takes 6 hours for three pipes, X, Y and Z to fill a tank. When the three worked together for 2 hours, Z was closed and, X and Y filled the remaining tank in 7 hours. How many hours would it take Z alone to fill the tank? ",
        answer: [
            { text: "15 hours", correct: false },
            { text: "23 hours", correct: false },
            { text: "12 hours", correct: true },
            { text: "14 hours", correct: false },
        ]
    },

    {
        question: "It takes 6 hours for three pipes, X, Y and Z to fill a tank. When the three worked together for 2 hours, Z was closed and, X and Y filled the remaining tank in 7 hours. How many hours would it take Z alone to fill the tank? ",
        answer: [
            { text: "15 hours", correct: false },
            { text: "23 hours", correct: false },
            { text: "12 hours", correct: true },
            { text: "14 hours", correct: false },
        ]
    },

    {
        question: "It takes 6 hours for three pipes, X, Y and Z to fill a tank. When the three worked together for 2 hours, Z was closed and, X and Y filled the remaining tank in 7 hours. How many hours would it take Z alone to fill the tank? ",
        answer: [
            { text: "15 hours", correct: false },
            { text: "23 hours", correct: false },
            { text: "12 hours", correct: true },
            { text: "14 hours", correct: false },
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `your score ${score} out of ${question.length}!`;
    nextButton.innerHTML = "Try Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < question.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});
function toggleMode() {
    document.body.classList.toggle("dark-mode");
}

toggleMode();

startQuiz();