const questions = [
        {
            question: "¿Entre qué años se desarrolló la Guerra del Chaco?",
            options: ["1932-1935", "1928-1932", "1935-1938"],
            correct: 0
        },
        {
            question: "¿Qué dos países participaron en la Guerra del Chaco?",
            options: ["Bolivia y Perú", "Paraguay y Argentina", "Bolivia y Paraguay"],
            correct: 2
        },
        {
            question: "¿Cuál fue una de las principales causas de la Guerra del Chaco?",
            options: ["Disputa por el salitre", "Disputa territorial y recursos de petróleo", "Control de rutas comerciales"],
            correct: 1
        },
        {
            question: "¿Cuál fue la región en disputa en la Guerra del Chaco?",
            options: ["Chaco Boreal", "Acre", "Gran Pantanal"],
            correct: 0
        },
        {
            question: "¿En qué año se firmó el tratado que puso fin a la Guerra del Chaco?",
            options: ["1935", "1938", "1945"],
            correct: 1
        },
        {
            question: "¿Qué tratado puso fin a la Guerra del Chaco?",
            options: ["Tratado de Paz y Amistad", "Protocolo de Río", "Tratado de Paz de Buenos Aires"],
            correct: 2
        },
        {
            question: "¿Qué país resultó victorioso en la Guerra del Chaco?",
            options: ["Bolivia", "Paraguay", "Fue un empate"],
            correct: 1
        },
        {
            question: "¿Qué recurso natural se sospechaba que existía en el Chaco?",
            options: ["Oro", "Petróleo", "Cobre"],
            correct: 1
        },
        {
            question: "¿Cuál fue una de las consecuencias de la Guerra del Chaco para Bolivia?",
            options: ["Ganó territorio", "Perdió el Chaco Boreal", "Obtuvo acceso al océano Atlántico"],
            correct: 1
        },
        {
            question: "¿Qué país apoyó a Paraguay en términos de armamento y asesoría militar?",
            options: ["Estados Unidos", "Argentina", "Chile"],
            correct: 1
        },
        {
            question: "¿Quién fue el líder militar boliviano durante gran parte de la guerra?",
            options: ["David Toro", "Hans Kundt", "Carlos Quintanilla"],
            correct: 1
        },
        {
            question: "¿Cuál fue una de las mayores dificultades enfrentadas por los soldados en el Chaco?",
            options: ["Clima árido y falta de agua", "Frío extremo", "Montañas escarpadas"],
            correct: 0
        },
        {
            question: "¿En qué ciudad se firmó el tratado que puso fin a la Guerra del Chaco?",
            options: ["Buenos Aires", "Asunción", "La Paz"],
            correct: 0
        },
        {
            question: "¿Qué organización internacional intervino para mediar en la paz?",
            options: ["ONU", "Sociedad de Naciones", "OEA"],
            correct: 1
        },
        {
            question: "¿Qué proporción de su ejército perdió Bolivia en la Guerra del Chaco?",
            options: ["Un tercio", "La mitad", "Dos tercios"],
            correct: 0
        },
        {
            question: "¿Qué factor contribuyó a la derrota de Bolivia en la Guerra del Chaco?",
            options: ["Mejor preparación militar de Paraguay", "Bolivia estaba en guerra con otro país", "Falta de recursos naturales"],
            correct: 0
        },
        {
            question: "¿Cómo afectó la Guerra del Chaco a la economía boliviana?",
            options: ["Generó ganancias", "Provocó una crisis económica", "No tuvo impacto significativo"],
            correct: 1
        },
        {
            question: "¿Qué país proporcionó apoyo técnico y logístico a Bolivia?",
            options: ["Alemania", "Brasil", "Estados Unidos"],
            correct: 2
        },
        {
            question: "¿Cuál era la principal estrategia de Paraguay durante la guerra?",
            options: ["Ataque directo", "Guerra de desgaste", "Bloqueo naval"],
            correct: 1
        },
        {
            question: "¿Qué presidente boliviano participó en la resolución del conflicto?",
            options: ["Hernando Siles", "Daniel Salamanca", "Gualberto Villarroel"],
            correct: 1
        },
        {
            question: "¿Cuál fue el impacto social de la guerra en Bolivia?",
            options: ["Impulso al nacionalismo", "Desinterés por el territorio", "Fomento de la paz con Paraguay"],
            correct: 0
        },
        {
            question: "¿Qué porcentaje de su ejército perdió Paraguay en la Guerra del Chaco?",
            options: ["10%", "25%", "40%"],
            correct: 2
        },
        {
            question: "¿Qué arma fue clave en las batallas en el Chaco?",
            options: ["Tanques", "Artillería ligera", "Fuerza aérea"],
            correct: 1
        },
        {
            question: "¿Qué área finalmente controló Paraguay tras la guerra?",
            options: ["Chaco Central", "Chaco Boreal", "Chaco Austral"],
            correct: 1
        },
        {
            question: "¿Qué país fue responsable de entrenar a los soldados bolivianos?",
            options: ["Estados Unidos", "Alemania", "Francia"],
            correct: 1
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
