const themeButton = document.querySelector("#theme-toggle");
const themeToggleDarkIcon = document.querySelector("#theme-toggle-dark-icon");
const themeToggleLightIcon = document.querySelector("#theme-toggle-light-icon");

themeButton.addEventListener("click", handleThemeButton);

function initialRunning() {
  const currentTheme = document.documentElement.classList.contains("dark");
  if (currentTheme) {
    themeToggleLightIcon.classList.toggle("hidden");
  } else {
    themeToggleDarkIcon.classList.toggle("hidden");
  }
}
initialRunning();

function handleThemeButton() {
  document.documentElement.classList.toggle("dark");
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  if (document.documentElement.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}
