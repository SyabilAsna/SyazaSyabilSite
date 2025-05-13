let currentQuestion = 0;

const questions = [
  {
    question: "What is your favorite color?",
    answers: ['Red', 'Blue', 'Green', 'Purple'],
    correctAnswer: 'Blue'
  },
  {
    question: "What is your favorite food?",
    answers: ['Pizza', 'Sushi', 'Pasta', 'Burger'],
    correctAnswer: 'Sushi'
  },
  {
    question: "What is your favorite season?",
    answers: ['Summer', 'Winter', 'Spring', 'Fall'],
    correctAnswer: 'Spring'
  }
];

function showQuestion() {
  const quizContainer = document.getElementById("quiz");
  const current = questions[currentQuestion];
  quizContainer.innerHTML = `<p>${current.question}</p>`;
  
  current.answers.forEach(answer => {
    quizContainer.innerHTML += `<button onclick="nextQuestion('${answer}')">${answer}</button>`;
  });
}

function nextQuestion(selectedAnswer) {
  const current = questions[currentQuestion];
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    displayResult();
  }
}

function displayResult() {
  document.getElementById('quiz').style.display = 'none';
  document.getElementById('result').style.display = 'block';
}

function showSurprise() {
  // Add snowy background and animation
  document.body.classList.add('snowy');

  // Show snowflakes
  for (let i = 0; i < 50; i++) {
    let snowflake = document.createElement("div");
    snowflake.classList.add("snow");
    snowflake.style.left = Math.random() * 100 + "vw";  // Random horizontal position
    snowflake.style.animationDuration = (Math.random() * 5 + 5) + "s"; // Random speed
    document.body.appendChild(snowflake);
  }

  // Reveal the surprise message
  document.getElementById('finishButton').style.display = 'none';
  document.getElementById('surpriseMessage').style.display = 'block';
}

showQuestion();
