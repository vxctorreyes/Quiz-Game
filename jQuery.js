$(document).ready(function () {
  const questions = [
      {
          question: "What artist has the most streams on Spotify?",
          options: ["Drake", "Taylor Swift", "Bruno Mars", "Tame Impala"],
          correctAnswer: 0
      },
      {
          question: "How many minutes are in a full week?",
          options: ["200", "10,080", "12,081", "1,500"],
          correctAnswer: 1
      },
      {
          question: "How many ghosts chase Pac-Man at the start of each game?",
          options: ["2", "6", "4", "5"],
          correctAnswer: 2
      }
  ];

  let currentQuestion = 0;
  let score = 0;

  const questionText = $("#question-text");
  const optionsContainer = $("#options-container");
  const scoreDisplay = $("#score");

  function loadQuestion() {
      if (currentQuestion < questions.length) {
          questionText.text(questions[currentQuestion].question);
          optionsContainer.empty();

          $.each(questions[currentQuestion].options, function (index, option) {
              const optionButton = $("<button>").text(option).addClass("option");
              optionButton.on("click", function () {
                  checkAnswer(index);
              });
              optionsContainer.append(optionButton);
          });
      } else {
          endGame();
      }
  }

  function checkAnswer(selectedIndex) {
      const correctIndex = questions[currentQuestion].correctAnswer;
      if (selectedIndex === correctIndex) {
          score++;
          optionsContainer.children().eq(correctIndex).css("background-color", "#27ae60");
      } else {
          optionsContainer.children().eq(correctIndex).css("background-color", "#27ae60");
          optionsContainer.children().eq(selectedIndex).css("background-color", "#c0392b");
      }
      scoreDisplay.text(`Score: ${score}`);
      currentQuestion++;
      setTimeout(loadQuestion, 1000);
  }

  function endGame() {
      questionText.text("Quiz completed!");
      optionsContainer.empty();
      $("#next-button").css("display", "none");
  }

  loadQuestion();
});
