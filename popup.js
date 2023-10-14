let timerInterval;
let workDuration = 25 * 60; // 25 minutes in seconds
let breakDuration = 5 * 60; // 5 minutes in seconds
let isBreak = false;

function startTimer() {
  let duration = isBreak ? breakDuration : workDuration;
  timerInterval = setInterval(() => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    const timerDisplay = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    document.getElementById('timer').innerText = timerDisplay;
    if (duration <= 0) {
      clearInterval(timerInterval);
      // Handle end of the Pomodoro session here
      if (!isBreak) {
        alert('Pomodoro session complete! Take a break.');
      } else {
        alert('Break time is over. Back to work!');
      }
    }
    duration--;
  }, 1000);
}

document.getElementById('startPomodoro').addEventListener('click', () => {
  startTimer();
});

const motivationalQuotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Believe you can and you're halfway there. –Theodore Roosevelt",
    // Add more quotes here
  ];
  
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    return motivationalQuotes[randomIndex];
  }
  
  const quoteElement = document.getElementById('quote');
  quoteElement.innerText = getRandomQuote();
  