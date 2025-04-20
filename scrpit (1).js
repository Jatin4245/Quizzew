const correctAnswers = {
  q1: "a",
  q2: "d",
  q3: "b",
  q4: "a",
  q5: "b",
};

document.getElementById("submit").addEventListener("click", () => {
  for (let i = 1; i <= 5; i++) {
    const q = document.querySelector(`input[name="q${i}"]:checked`);
    const result = document.getElementById(`res${i}`);
    const questionBox = document.getElementById(`q${i}`);
    if (q) {
      if (q.value === correctAnswers[`q${i}`]) {
        result.textContent = "Correct!";
        questionBox.classList.add("correct");
        questionBox.classList.remove("incorrect");
      } else {
        result.textContent = "Incorrect!";
        questionBox.classList.add("incorrect");
        questionBox.classList.remove("correct");
      }
    } else {
      result.textContent = "Please select an answer.";
      questionBox.classList.remove("correct", "incorrect");
    }
  }
});

document.getElementById("reset").addEventListener("click", () => {
  for (let i = 1; i <= 3; i++) {
    const inputs = document.querySelectorAll(`input[name="q${i}"]`);
    inputs.forEach((input) => (input.checked = false));
    const result = document.getElementById(`res${i}`);
    result.textContent = "";
    const questionBox = document.getElementById(`q${i}`);
    questionBox.classList.remove("correct", "incorrect");
  }
  resetTimer();
});

// Timer
let timeLeft = 60;
let timerId;

function startTimer() {
  timerId = setInterval(() => {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerId);
      document.getElementById("submit").click();
      alert("Time's up! Your quiz has been submitted.");
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timerId);
  timeLeft = 30;
  document.getElementById("time").textContent = timeLeft;
  startTimer();
}

startTimer();
