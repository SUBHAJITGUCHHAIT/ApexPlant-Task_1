document.querySelectorAll('.card button').forEach(btn => {
    btn.addEventListener('click', () => {
      alert('This feature will be added soon!');
    });
  });
  // Home page script if needed

  // Toggle hamburger menu
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
});

// Dark/Light Mode Toggle
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Change icon
  themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";

  // Save preference
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

// Load saved theme
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
  }
});

function showAlert(){
  alert("Please select your courses first!")
}
