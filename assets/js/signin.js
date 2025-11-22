document
  .getElementById("signinForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // default submit behavior stop and page is not reload on submit...
    const errorEl = document.getElementById("signinError");
    errorEl.textContent = "";

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("signUpEmail").value.trim();
    const password = document.getElementById("signUpPass").value.trim();

    if (!firstName || !lastName || !email || !password) {
      errorEl.textContent = "Please fill in all fields.";
      return;
    }

    if (!validateEmail(email)) {
      errorEl.textContent = "Please enter a valid email address.";
      return;
    }

    if (password.length < 6) {
      errorEl.textContent = "Password must be at least 6 characters long.";
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some((u) => u.email === email)) {
      errorEl.textContent = "Email already registered.";
      return;
    }

    users.push({ firstName, lastName, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = "../loginform/login.html";
  });

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
