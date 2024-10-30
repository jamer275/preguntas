const questions = [
    {
        question: "¿Que es la geografia?",
        options: ["Ciencia que trata la descriccion de la tierra" ,"Estudio del cuerpo humano", "Estudio de las galaxias"],
        correct: 0
    },
    {
        question: "¿Cuàl es el rìo mas grande del mundo?",
        options: ["El rio Nilo","El rio Amazona","El rio Misisipi"],
        correct: 0
    },
    {
        question: "La geografia de la edad moderna  utilizan tecnologias que cambiaron la vision mundial",
        options: ["VERDAD","FALSO"],
        correct: 0
    },
    {
        question: "¿ Alexander Von Humboldt nacio en el año 1769?",
        options: ["VERDAD","FALSO"],
        correct: 0
    },
    {
        question: "¿Cuàl es el pais mas poblado del mundo",
        options: ["Rusia", "China", "Chile"],
        correct: 1
    },
    {
        question: "¿ En què año murio Fernando de Fangallare?",
        options: ["EN 1277", "EN 1252" ,"EN 1551"],
        correct: 2
    },
    {
        question: "¿ Què es un desierto ?",
        options: ["Un bioma arido","aguas estancadas", "clima lluvioso"], 
        correct: 0
    },
    {
        question: "¿Alexander Von Humbolt era un botanico zoologo ,geòlogo?",
        options:["VERDAD ","FALSO"], 
        correct: 0
    },
    {
        question: "¿Quien fuè el que dio la vuelta al mundo despues de Cristobal Colon?",
        options:["Cristobal Colon","Alexander von Humbolt ","Fernando Mangallares correct"],
    },
    {
        question: "La geografia es la disciplina que trata un estudio de hechos y fenomenos biologicos y humanos", 
        options:[" VERDAD","FALSO"],      
        correct: 0
    },
    {
        question: "La geografia antigua se dedico a la descripciòn y acomulaciòn de datos geogràficos?",
        options:["VERDAD", "FALSO"], 
        correct:0 
    },
    {
        question: "¿Quien era Vasco de Gama?",
        options:["Decubrio la primera ruta comercial Europa Asia","vicecapitan de Cristobal colon", "Comerciante de esclavos"], 
        correct: 0
    },
    {
        question: "La raiz de la geografia  antigua se encuentra en Egipto",
        options:["FALSO", "VERDAD "],
        
    },
    {
        question: "¿Gracias a que se dieron cambios trancendental la vision mundial en la geografia?", 
        options:["Descubrimiento de Africa","Descubrimiento de America","Explotaciòn de los indigenas y esclavos"],
        correct:0 
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
