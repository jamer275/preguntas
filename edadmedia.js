const questions = [
    {
        question: "¿Cuánto siglos duro la Edad Media?", 
        options: ["Duro X siglo","Duro VII Siglo","Duro  V Siglo"],
        correct: 0
    },
    {
        question: "¿Cuál era la clase social en la Edad Media?",
        options: [ "Español, Mestizos e Indios","Señores Feudales y Siervos","Incas, Esclavos"],
        correct: 1
    },
    {
        question: "¿Cómo se llaman los pueblos que se hallan organizado en Clanes?",
        options: ["Guerreros", "Gans","Dios Unido"],
        correct: 1
    },
    {
        question: "¿Alta Edad Media, este periodo de tiempo transcurrio entre el siglo V al siglo X?",
        options: ["FALSO", "VERDADERO","..............."],
        correct: 0
    },
    {
        question: "¿Roma se constituyó en un imperio luego de nombrar a...?",
        options: ["Neron", "Octavio", "Julio-Claudio"],
        correct: 1
    },
    {
        question: "¿En que año murió el emperador Teodosio I?",
        options: ["395","391","396"],
        correct: 0
    },
    {
        question: "¿Cómo se llaman sus hijos del emperador Teodosio I?",
        options: ["Arcadio y Honorio", "Anibal y Honorio", "Octavio y Arcadio"],
        correct: 0
    },
    {
        question: "¿La Baja Edad Media esta compredida entre los siglos?",
        options: ["V-XI","VI-X", "V-XV"],
        correct: 2
    },
    {
        question: "¿La Edad Media tiene una connotación por su relacionamiento llamada?",
        options: ["Edad alta", "Edad Media ", "Edad Oscura"],
        correct: 2
    },
    {
        question: "¿Las cruzadas fueron distintas incursiones militares con la finalidad de recuperar la poblacion llamada ´´tierra santa´´?",
        options: ["FALSO", "VERDADERO","............."],
        correct: 0
    },
    {
        question: "La Baja Edad Media esta comprendida entre los siglo V y XIV?",
        options: [ "FALSO", "VERDADERO","............."],
        correct: 0
    },
    {
        question: "¿Esta primera cruzada logró su cometido y toma de jerusalen estableciendo un pequeño...",
        options: ["Estado Americano", "Estado Cruzado", "Estado Regional"],
        correct: 1
    },
    {
        question: "Durante el feudalismo   un vasallo obtiene, tierra, protección y cierta prestaciones",
        options: ["FALSO", "VERDADERO", "............."],
        correct: 1
    },
    {
        question: "¿Los infieles eran aquellos que se identificaban como cristianos?",
        options: ["FALSO", "VERDADERO","..........."],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;
let lives = 3;

const questionElement = document.getElementById('question');
const optionButtons = document.querySelectorAll('.option-button');
const livesContainer = document.getElementById('lives-container');
const scoreElement = document.getElementById('score');

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    lives = 3;
    updateLives();
    showQuestion();
    scoreElement.textContent = "";
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionButtons.forEach((button, index) => {
        button.textContent = currentQuestion.options[index];
        button.onclick = () => checkAnswer(index);
    });
}

function checkAnswer(selectedOption) {
    const correctOption = questions[currentQuestionIndex].correct;
    if (selectedOption === correctOption) {
        score++;
    } else {
        lives--;
        updateLives();
        if (lives === 0) {
            alert("Has perdido todas las vidas. ¡Juego terminado!");
            scoreElement.textContent = `Tu puntaje final es: ${score}`;
            return startGame();
        }
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert("¡Has respondido todas las preguntas!");
        scoreElement.textContent = `Tu puntaje final es: ${score}`;
        startGame();
    }
}

function updateLives() {
    livesContainer.innerHTML = '';
    for (let i = 0; i < lives; i++) {
        const heart = document.createElement('span');
        heart.classList.add('heart');
        heart.textContent = '❤️';
        livesContainer.appendChild(heart);
    }
}

startGame();
