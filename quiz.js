function checkAnswer() {
    // Identify the correct answer
    const correctAnswer = "4";
    
    // Retrieve the user's answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Check if an answer has been selected
    if (!userAnswer) {
        document.getElementById('feedback').textContent = "Please select an answer.";
        return;
    }

    // Access the value of the selected radio button
    const userValue = userAnswer.value;

    // Compare the user's answer with the correct answer
    if (userValue === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

// Add an event listener to the Submit Answer button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
