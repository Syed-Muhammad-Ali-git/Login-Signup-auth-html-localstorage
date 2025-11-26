function displayUserInfo() {
  const loggedInEmail = localStorage.getItem("loggedInUser");

  if (!loggedInEmail) {
    return;
  }
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((u) => u.email === loggedInEmail);
  if (user) {
    const fullName = user.firstName + " " + user.lastName;
    const fullNameEl = document.getElementById("userFullName");
    const emailEl = document.getElementById("userEmail");
    if (fullNameEl) fullNameEl.textContent = fullName;
    if (emailEl) emailEl.textContent = user.email;
  }
}

// Check if user is logged in
if (!localStorage.getItem("loggedInUser")) {
  window.location.href = "./loginform/login.html";
} else {
  displayUserInfo();
}

function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "./loginform/login.html";
}
