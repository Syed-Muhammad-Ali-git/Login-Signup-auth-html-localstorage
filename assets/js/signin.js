// JavaScript for signin form validation and submission
document
  .getElementById("signinForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const firstName = document.getElementById("form3Example1").value;
    const lastName = document.getElementById("form3Example2").value;
    const email = document.getElementById("form3Example3").value;
    const password = document.getElementById("form3Example4").value;

    // Basic validation
    if (!firstName || !lastName || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    // Simulate sign up success (in a real app, this would be an API call)
    alert("Sign up successful!");

    // Optionally, redirect or perform other actions
    // window.location.href = 'dashboard.html';
  });

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
