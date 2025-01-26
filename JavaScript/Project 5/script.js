document.addEventListener('DOMContentLoaded', function () {
  const questions = [
    {
      Question: "Which planet is known as the Red Planet?",
      Option: ["Mars", "Jupiter", "Venus", "Saturn"],
      Answer: "Mars",
    },
    {
      Question: "What is the square root of 144?",
      Option: ["10", "12", "14", "16"],
      Answer: "12",
    },
    {
      Question: "Who wrote 'Hamlet'?",
      Option: [
        "Charles Dickens",
        "William Shakespeare",
        "J.K. Rowling",
        "Mark Twain",
      ],
      Answer: "William Shakespeare",
    },
    {
      Question: "What is the chemical symbol for gold?",
      Option: ["Au", "Ag", "Pb", "Fe"],
      Answer: "Au",
    },
    {
      Question: "Which continent is the Sahara Desert located in?",
      Option: ["Asia", "Africa", "South America", "Australia"],
      Answer: "Africa",
    },
    {
      Question: "What will it print on the console "
        + "console.log(2 + '2' - '2');",
      Option: ["22", "4", "NaN", "undefined"],
      Answer: "22",
    },
    {
      Question: "What is the capital of France?",
      Option: ["Berlin", "Madrid", "Paris", "Rome"],
      Answer: "Paris",
    },
    {
      Question: "Which programming language is this quiz written in?",
      Option: ["Python", "JavaScript", "Java", "C++"],
      Answer: "JavaScript",
    },
    {
      Question: "What is the largest mammal in the world?",
      Option: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      Answer: "Blue Whale",
    },
    {
      Question: "Who painted the Mona Lisa?",
      Option: [
        "Vincent van Gogh",
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Claude Monet",
      ],
      Answer: "Leonardo da Vinci",
    }
  ];

  let currentQuestion = 0;
  let score = 0;

  const quesContainer = document.getElementById('question-container')
  const questionText = document.getElementById('question-text');
  const choicesList = document.getElementById('choices-list');
  const nextButton = document.getElementById('next-btn');
  const resultContainer = document.getElementById('result-container');
  const scoreText = document.getElementById('score');
  const restartBtn = document.getElementById('restart-btn');
  const startBtn = document.getElementById('start-btn');

  startBtn.addEventListener('click', startQuiz);
  nextButton.addEventListener('click', nextQuestion);
  restartBtn.addEventListener('click', restartQuiz);

  function startQuiz() {
    startBtn.classList.add('hidden');
    quesContainer.classList.remove("hidden");
    choicesList.classList.remove('hidden');
    nextButton.classList.remove('hidden');
    loadQuestion();
  }

  function loadQuestion() {
    const question = questions[currentQuestion];
    questionText.textContent = question.Question;
    choicesList.innerHTML = '';
    question.Option.forEach(option => {
      const li = document.createElement('li');
      li.textContent = option;
      li.addEventListener('click', checkAnswer);
      choicesList.appendChild(li);
    });
  }

  function checkAnswer(e) {
    const selectedAnswer = e.target.textContent;
    const correctAnswer = questions[currentQuestion].Answer;
    if (selectedAnswer === correctAnswer) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }

  function showResult() {
    questionText.classList.add('hidden');
    choicesList.classList.add('hidden');
    nextButton.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    scoreText.textContent = `Your score: ${score}`;
  }

  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }

  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    resultContainer.classList.add('hidden');
    startQuiz();
  }
});