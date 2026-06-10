const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Markup Language",
            "Home Text Markup Language"
        ],
        correct: 0
    },
    {
        question: "Which language is used for styling web pages?",
        answers: ["HTML", "Python", "CSS", "Java"],
        correct: 2
    },
    {
        question: "Which language is used for web page interactivity?",
        answers: ["JavaScript", "CSS", "C++", "SQL"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = -1;

function loadQuestion() {
    document.getElementById("question").innerText =
        questions[currentQuestion].question;

    let buttons = document.querySelectorAll(".btn");

    buttons.forEach((button, index) => {
        button.innerText =
            questions[currentQuestion].answers[index];
        button.classList.remove("selected");
    });

    selectedAnswer = -1;
}

function selectAnswer(index) {
    let buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.classList.remove("selected");
    });

    buttons[index].classList.add("selected");
    selectedAnswer = index;
}

function nextQuestion() {

    if (selectedAnswer === questions[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.querySelector(".quiz-container").innerHTML =
            `<h1>Quiz Completed!</h1>
             <h2>Your Score: ${score}/${questions.length}</h2>`;
    }
}

loadQuestion();