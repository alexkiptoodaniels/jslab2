// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Function to update live time
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString(); 
  const clockElement = document.getElementById("live-clock");
  if (clockElement) {
    clockElement.textContent = timeString;
  }
}

setInterval(updateClock, 1000);

updateClock();
