// script.js — robust timer + form behavior

document.addEventListener('DOMContentLoaded', () => {
  // Timer: start from 12 hours (43,200 seconds)
  let totalSeconds = 12 * 60 * 60; // you can change this value if needed

  const timerEl = document.getElementById('timer');

  // ensure element exists
  if (!timerEl) return;

  function formatTime(sec) {
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;
    return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  }

  // initial render
  timerEl.textContent = formatTime(totalSeconds);

  const intervalId = setInterval(() => {
    totalSeconds--;

    if (totalSeconds < 0) {
      timerEl.textContent = "00:00:00";
      clearInterval(intervalId);
      return;
    }

    timerEl.textContent = formatTime(totalSeconds);
  }, 1000);

  // form submit handling
  const form = document.getElementById('notifyForm');
  const emailInput = document.getElementById('email');

  if (form && emailInput) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const value = emailInput.value.trim();
      if (!value) {
        emailInput.focus();
        return;
      }
      // simple front-end confirmation; replace with real API call if needed
      alert(`Thanks — we'll notify you at: ${value}`);
      emailInput.value = '';
    });
  }
});
