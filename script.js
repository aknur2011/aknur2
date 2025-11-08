const correctPassword = "12345"; // правильный пароль
const loginButton = document.getElementById("loginButton");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");
const lockScreen = document.getElementById("lockScreen");
const content = document.getElementById("content");

loginButton.addEventListener("click", checkPassword);

function checkPassword() {
  const input = passwordInput.value;

  if (input === correctPassword) {
    // Показать сайт
    lockScreen.style.display = "none";
    content.style.display = "block";
  } else {
    // Неверный пароль
    message.textContent = "❌ Неверный пароль! Доступ запрещен!";
    passwordInput.value = "";
    passwordInput.style.animation = "shake 0.3s";
    passwordInput.addEventListener("animationend", () => {
      passwordInput.style.animation = "";
    });
  }
}

// Дополнительно: запретить Escape, F12 и правую кнопку мыши
document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("keydown", e => {
  if (["Escape", "F12"].includes(e.key)) e.preventDefault();
});

  

