const questions = [
        {
            question: "¿En qué año comenzó la Guerra del Acre?",
            options: ["1899", "1901", "1903"],
            correct: 0
        },
        {
            question: "¿Qué país sudamericano fue uno de los protagonistas de la Guerra del Acre junto a Bolivia?",
            options: ["Chile", "Brasil", "Paraguay"],
            correct: 1
        },
        {
            question: "¿Cuál fue la principal causa de la Guerra del Acre?",
            options: ["Disputas por petróleo", "Disputas por caucho", "Disputas por oro"],
            correct: 1
        },
        {
            question: "¿En qué año finalizó la Guerra del Acre?",
            options: ["1903", "1910", "1899"],
            correct: 0
        },
        {
            question: "¿Qué tratado puso fin a la Guerra del Acre?",
            options: ["Tratado de Petrópolis", "Tratado de Versalles", "Tratado de Ancón"],
            correct: 0
        },
        {
            question: "¿Qué territorio fue cedido por Bolivia a Brasil tras la guerra?",
            options: ["Pando", "Acre", "Santa Cruz"],
            correct: 1
        },
        {
            question: "¿Cuál era el principal recurso natural de la región del Acre?",
            options: ["Cobre", "Caucho", "Hierro"],
            correct: 1
        },
        {
            question: "¿Qué país financió a los colonos en la región del Acre para explotar el caucho?",
            options: ["Perú", "Brasil", "Argentina"],
            correct: 1
        },
        {
            question: "¿Qué región de Bolivia fue afectada principalmente por la Guerra del Acre?",
            options: ["La Paz", "Santa Cruz", "Beni"],
            correct: 2
        },
        {
            question: "¿Qué nación buscó obtener una salida al río Amazonas mediante el conflicto?",
            options: ["Bolivia", "Brasil", "Paraguay"],
            correct: 0
        },
        {
            question: "¿Qué líder boliviano intentó establecer el control en Acre durante el conflicto?",
            options: ["Andrés de Santa Cruz", "José Manuel Pando", "Antonio José de Sucre"],
            correct: 1
        },
        {
            question: "¿Cómo se llamó el tratado que dio acceso comercial a Bolivia al Atlántico?",
            options: ["Tratado de Petrópolis", "Tratado de Ayacucho", "Tratado de Lima"],
            correct: 0
        },
        {
            question: "¿Qué país respaldó a los colonos brasileños en su disputa con Bolivia?",
            options: ["Argentina", "Brasil", "Chile"],
            correct: 1
        },
        {
            question: "¿Qué puerto fluvial recibió Bolivia como compensación tras la guerra?",
            options: ["Puerto Maldonado", "Puerto Suárez", "Puerto Alonso"],
            correct: 1
        },
        {
            question: "¿Cuál fue uno de los motivos económicos detrás del conflicto en Acre?",
            options: ["Demanda de caucho en Europa", "Descubrimiento de oro", "Explotación de cobre"],
            correct: 0
        },
        {
            question: "¿Qué grupo social de Brasil fue clave en la ocupación de Acre?",
            options: ["Soldados", "Cauchicultores", "Mineros"],
            correct: 1
        },
        {
            question: "¿Qué beneficio obtuvo Bolivia tras el Tratado de Petrópolis?",
            options: ["Un puerto en el Atlántico", "Soberanía sobre Acre", "Pago de indemnización"],
            correct: 0
        },
        {
            question: "¿Cuál fue el papel de la ‘Expedición de Alonso’ en la Guerra del Acre?",
            options: ["Conquistar la región", "Defender el territorio", "Explotar minas de caucho"],
            correct: 1
        },
        {
            question: "¿En qué ciudad se firmó el tratado que puso fin a la guerra?",
            options: ["Petrópolis", "La Paz", "Manaus"],
            correct: 0
        },
        {
            question: "¿Qué derecho le otorgó Brasil a Bolivia en el Tratado de Petrópolis?",
            options: ["Derecho al comercio de caucho", "Paso libre por el río Amazonas", "Propiedad compartida de Acre"],
            correct: 1
        },
        {
            question: "¿Qué otro nombre recibió la Guerra del Acre?",
            options: ["Guerra del Caucho", "Guerra del Amazonas", "Guerra del Salitre"],
            correct: 0
        },
        {
            question: "¿Qué personaje fue considerado un héroe de la resistencia boliviana en Acre?",
            options: ["José Ballivián", "Manuel Pando", "Plácido de Castro"],
            correct: 2
        },
        {
            question: "¿Qué país tuvo que indemnizar a Bolivia después de la guerra?",
            options: ["Perú", "Chile", "Brasil"],
            correct: 2
        },
        {
            question: "¿Cuál fue el principal objetivo de Bolivia en la Guerra del Acre?",
            options: ["Proteger sus recursos naturales", "Expandir su territorio", "Controlar el comercio en el Amazonas"],
            correct: 0
        },
        {
            question: "¿Qué conflicto precedió a la Guerra del Acre y también involucró a Bolivia?",
            options: ["Guerra del Pacífico", "Guerra de la Triple Alianza", "Guerra del Chaco"],
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
