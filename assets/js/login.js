document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const errorEl = document.getElementById("loginError");
    errorEl.textContent = "";

    const emailValue = document.getElementById("loginEmail").value.trim();
    const passwordValue = document.getElementById("loginPass").value.trim();

    if (!emailValue || !passwordValue) {
      errorEl.textContent = "Please fill in all fields.";
      return;
    }

    if (!isValidEmail(emailValue)) {
      errorEl.textContent = "Please enter a valid email address.";
      return;
    }

    if (passwordValue.length < 6) {
      errorEl.textContent = "Password must be at least 6 characters long.";
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === emailValue && u.password === passwordValue
    );

    if (user) {
      localStorage.setItem("loggedInUser", emailValue);
      window.location.href = "../../index.html";
    } else {
      errorEl.textContent = "Invalid email or password.";
    }
  });

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
