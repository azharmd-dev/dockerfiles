const messages = [
  "We’re working hard to launch this site.",
  "This is a test page running inside the container.",
  "Please check back again later."
];

let index = 0;
const subtitleEl = document.getElementById("subtitle");

function changeSubtitle() {
  if (!subtitleEl) return;

  // Fade out
  subtitleEl.style.opacity = 0;

  setTimeout(() => {
    index = (index + 1) % messages.length;
    subtitleEl.textContent = messages[index];
    subtitleEl.style.opacity = 1;
  }, 350);
}

if (subtitleEl) {
  subtitleEl.style.transition = "opacity 0.35s ease";
}

setInterval(changeSubtitle, 3000);
