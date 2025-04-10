document.addEventListener("DOMContentLoaded", function () {
  // Set the event date (YYYY, MM (0-based), DD, HH, MM, SS)
  const eventDate = new Date("2025-09-15T09:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    if (timeLeft <= 0) {
      document.getElementById("countdown-box").innerHTML = `
        <span class="event-started">The event has started!</span>
      `;
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown-box").innerHTML = `
      <span class="days">
        <span class="number">${days}</span>
        <span class="unit">Days</span>
      </span>
      <span class="hours">
        <span class="number">${hours}</span>
        <span class="unit">Hrs</span>
      </span>
      <span class="minutes">
        <span class="number">${minutes}</span>
        <span class="unit">Mins</span>
      </span>
      <span class="secs">
        <span class="number">${seconds}</span>
        <span class="unit">Secs</span>
      </span>
    `;
  }

  // Update countdown every second
  setInterval(updateCountdown, 1000);
  updateCountdown(); // Run immediately
});
