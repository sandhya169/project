function playGame(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    document.getElementById("user-choice").textContent = `You chose: ${userChoice}`;
    document.getElementById("computer-choice").textContent = `Computer chose: ${computerChoice}`;
  
    if (userChoice === computerChoice) {
      document.getElementById("result-message").textContent = "It's a tie!";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      document.getElementById("result-message").textContent = "You win!";
    } else {
      document.getElementById("result-message").textContent = "You lose!";
    }
  }
  