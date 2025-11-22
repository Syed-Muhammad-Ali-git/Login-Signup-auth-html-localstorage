// JavaScript for login form validation and submission
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const emailValue = document.getElementById("form1Example13").value;
    const passwordValue = document.getElementById("form1Example23").value;

    // Basic validation
    if (!emailValue || !passwordValue) {
      alert("Please fill in all fields.");
      return;
    }

    if (!isValidEmail(emailValue)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (passwordValue.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    // Check local storage for users
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === emailValue && u.password === passwordValue);

    if (user) {
      // Login successful
      localStorage.setItem('loggedInUser', emailValue);
      alert("Login successful!");
      window.location.href = '../../index.html'; // Redirect to home
    } else {
      alert("Invalid email or password.");
    }
  });

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
