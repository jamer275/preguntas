const questions = [
        {
            question: "¿En qué año se declaró la independencia de Bolivia?",
            options: ["1825", "1810", "1821"],
            correct: 0
        },
        {
            question: "¿Quién es conocido como el 'Libertador de Bolivia'?",
            options: ["Simón Bolívar", "Antonio José de Sucre", "José de San Martín"],
            correct: 0
        },
        {
            question: "¿En qué ciudad se firmó el Acta de Independencia de Bolivia?",
            options: ["La Paz", "Cochabamba", "Sucre"],
            correct: 2
        },
        {
            question: "¿Cuál era el nombre colonial de Bolivia antes de su independencia?",
            options: ["Virreinato de Nueva Granada", "Alto Perú", "Nueva España"],
            correct: 1
        },
        {
            question: "¿En qué fecha exacta se proclamó la independencia de Bolivia?",
            options: ["6 de agosto de 1825", "16 de julio de 1809", "9 de julio de 1824"],
            correct: 0
        },
        {
            question: "¿Qué líder patriota presidió la Asamblea Constituyente de Bolivia en 1825?",
            options: ["Antonio José de Sucre", "José Ballivián", "Pedro Domingo Murillo"],
            correct: 0
        },
        {
            question: "¿Cuál fue una de las principales causas de la independencia de Bolivia?",
            options: ["Injusticias del sistema colonial", "Conflictos entre los indígenas", "Escasez de alimentos"],
            correct: 0
        },
        {
            question: "¿Qué país vecino ayudó en gran medida a la independencia de Bolivia?",
            options: ["Brasil", "Perú", "Argentina"],
            correct: 2
        },
        {
            question: "¿Qué batalla fue crucial para la independencia de Bolivia?",
            options: ["Batalla de Junín", "Batalla de Ayacucho", "Batalla de Pichincha"],
            correct: 1
        },
        {
            question: "¿Qué título ostentaba Simón Bolívar en Bolivia tras la independencia?",
            options: ["Presidente Vitalicio", "Presidente Constitucional", "Gobernador"],
            correct: 0
        },
        {
            question: "¿Qué militar venezolano fue decisivo en la lucha por la independencia de Bolivia?",
            options: ["José Antonio Páez", "Antonio José de Sucre", "Francisco de Miranda"],
            correct: 1
        },
        {
            question: "¿Quién fue el primer presidente de Bolivia?",
            options: ["Andrés de Santa Cruz", "Simón Bolívar", "Antonio José de Sucre"],
            correct: 2
        },
        {
            question: "¿Qué líder fue ejecutado durante la revuelta de 1809 en La Paz?",
            options: ["Pedro Domingo Murillo", "Simón Bolívar", "José de San Martín"],
            correct: 0
        },
        {
            question: "¿Qué pueblo indígena fue clave en la resistencia contra los españoles en Bolivia?",
            options: ["Guaraníes", "Aimaras", "Mapuches"],
            correct: 1
        },
        {
            question: "¿Cómo se llamó el proceso de independencia en América Latina liderado por Simón Bolívar?",
            options: ["Emancipación", "Revolución Latinoamericana", "Campaña Libertadora"],
            correct: 2
        },
        {
            question: "¿Qué tratado oficializó la independencia de Bolivia?",
            options: ["Tratado de Ayacucho", "Acta de Independencia", "Tratado de Tordesillas"],
            correct: 1
        },
        {
            question: "¿Cuál fue uno de los principales recursos explotados en el Alto Perú durante la colonia?",
            options: ["Petróleo", "Oro", "Plata"],
            correct: 2
        },
        {
            question: "¿Qué revolucionario encabezó la lucha en La Paz en 1809?",
            options: ["Pedro Domingo Murillo", "Andrés de Santa Cruz", "José Ballivián"],
            correct: 0
        },
        {
            question: "¿Quién fue nombrado protector de Bolivia tras la independencia?",
            options: ["Antonio José de Sucre", "José de San Martín", "Simón Bolívar"],
            correct: 2
        },
        {
            question: "¿Qué acontecimiento en Europa influyó en la independencia de las colonias americanas?",
            options: ["La Revolución Industrial", "La Revolución Francesa", "La Segunda Guerra Mundial"],
            correct: 1
        },
        {
            question: "¿Qué documento reconoció oficialmente a Bolivia como país independiente?",
            options: ["La Constitución de Cádiz", "Acta de Independencia", "Carta Magna"],
            correct: 1
        },
        {
            question: "¿Qué héroe de la independencia boliviana es considerado mártir en La Paz?",
            options: ["Pedro Domingo Murillo", "Antonio José de Sucre", "Juan José Castelli"],
            correct: 0
        },
        {
            question: "¿Cómo se denominó al movimiento independentista de 1809 en Bolivia?",
            options: ["Guerra de Ayacucho", "Revolución de La Paz", "Rebelión de Alto Perú"],
            correct: 1
        },
        {
            question: "¿Qué país tenía el control colonial sobre el Alto Perú antes de su independencia?",
            options: ["Portugal", "España", "Inglaterra"],
            correct: 1
        },
        {
            question: "¿Qué líder militar llevó a cabo la Campaña del Sur por la independencia?",
            options: ["Simón Bolívar", "Manuel Belgrano", "Antonio José de Sucre"],
            correct: 2
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
