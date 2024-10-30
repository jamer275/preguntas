const questions = [
        {
            question: "¿En qué año comenzó la Guerra del Pacífico?",
            options: ["1879", "1884", "1895"],
            correct: 0
        },
        {
            question: "¿Cuáles países participaron en la Guerra del Pacífico?",
            options: ["Chile, Perú y Bolivia", "Argentina, Chile y Perú", "Brasil, Bolivia y Perú"],
            correct: 0
        },
        {
            question: "¿Qué recurso natural fue una de las principales causas del conflicto?",
            options: ["Petróleo", "Salitre", "Oro"],
            correct: 1
        },
        {
            question: "¿Cuál fue el tratado que puso fin a la Guerra del Pacífico?",
            options: ["Tratado de París", "Tratado de Ancón", "Tratado de Versalles"],
            correct: 1
        },
        {
            question: "¿Qué país resultó victorioso en la Guerra del Pacífico?",
            options: ["Bolivia", "Perú", "Chile"],
            correct: 2
        },
        {
            question: "¿Qué ciudad peruana fue ocupada por tropas chilenas durante la guerra?",
            options: ["Cusco", "Lima", "Arequipa"],
            correct: 1
        },
        {
            question: "¿Qué batalla fue decisiva para el triunfo de Chile en la Guerra del Pacífico?",
            options: ["Batalla de Iquique", "Batalla de Arica", "Batalla de Tacna"],
            correct: 2
        },
        {
            question: "¿En qué año terminó la Guerra del Pacífico?",
            options: ["1883", "1881", "1886"],
            correct: 0
        },
        {
            question: "¿Qué provincia boliviana fue anexionada por Chile después de la guerra?",
            options: ["Tarija", "Potosí", "Antofagasta"],
            correct: 2
        },
        {
            question: "¿Qué país perdió su acceso al mar después de la Guerra del Pacífico?",
            options: ["Perú", "Bolivia", "Ecuador"],
            correct: 1
        },
        {
            question: "¿Cuál fue el héroe peruano en la Batalla de Arica?",
            options: ["Miguel Grau", "Andrés A. Cáceres", "Francisco Bolognesi"],
            correct: 2
        },
        {
            question: "¿Cuál fue el héroe chileno en la Batalla de Iquique?",
            options: ["Arturo Prat", "Manuel Bulnes", "José Miguel Carrera"],
            correct: 0
        },
        {
            question: "¿En qué batalla murió el héroe peruano Miguel Grau?",
            options: ["Batalla de Angamos", "Batalla de Arica", "Batalla de Lima"],
            correct: 0
        },
        {
            question: "¿Cómo se llamó el buque chileno que participó en la Batalla de Iquique?",
            options: ["Covadonga", "Esmeralda", "Huascar"],
            correct: 1
        },
        {
            question: "¿Qué tratado definió la frontera entre Chile y Perú después de la guerra?",
            options: ["Tratado de Ancón", "Tratado de Tordesillas", "Tratado de Lima"],
            correct: 0
        },
        {
            question: "¿Qué país construyó el monitor Huáscar?",
            options: ["Chile", "Bolivia", "Perú"],
            correct: 2
        },
        {
            question: "¿Qué puerto boliviano fue ocupado al inicio de la guerra?",
            options: ["Antofagasta", "Arica", "Potosí"],
            correct: 0
        },
        {
            question: "¿Qué aliado tuvo Bolivia durante la Guerra del Pacífico?",
            options: ["Ecuador", "Argentina", "Perú"],
            correct: 2
        },
        {
            question: "¿En qué batalla combatió Francisco Bolognesi hasta el final?",
            options: ["Batalla de Iquique", "Batalla de Arica", "Batalla de Tacna"],
            correct: 1
        },
        {
            question: "¿Qué país reclamaba impuestos por el salitre en la zona en conflicto?",
            options: ["Perú", "Chile", "Bolivia"],
            correct: 2
        },
        {
            question: "¿Qué tratado entre Bolivia y Chile fue firmado en 1874?",
            options: ["Tratado de Ancón", "Tratado de Paz y Amistad", "Tratado de Alianza Defensiva"],
            correct: 1
        },
        {
            question: "¿Qué héroe chileno murió en la Batalla de Iquique?",
            options: ["Arturo Prat", "Manuel Baquedano", "Patricio Lynch"],
            correct: 0
        },
        {
            question: "¿Qué región peruana fue cedida a Chile tras la guerra?",
            options: ["Tacna", "Tarapacá", "Arequipa"],
            correct: 1
        },
        {
            question: "¿Quién lideró la resistencia peruana en la Sierra durante la ocupación chilena?",
            options: ["Miguel Grau", "Francisco Bolognesi", "Andrés A. Cáceres"],
            correct: 2
        },
        {
            question: "¿Cómo se llamó la alianza entre Perú y Bolivia durante la guerra?",
            options: ["Alianza Defensiva", "Alianza Estratégica", "Alianza del Pacífico"],
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
