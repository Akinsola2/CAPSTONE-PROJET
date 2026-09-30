const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click", function () {
  if (password.type === "password") {
    password.type = "text";

    togglePassword.textContent = "⏝";
  } else {
    password.type = "password";

    togglePassword.textContent = "👁";
  }
});

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const passwordValue = document.getElementById("password").value;
  const terms = document.getElementById("terms").checked;

  if (fullName === "" || email === "" || passwordValue === "") {
    alert("Please fill in all required fields.");

    return;
  }

  if (passwordValue.length < 8) {
    alert("Password must be at least 8 characters.");

    return;
  }

  if (!terms) {
    alert("Please agree to the Terms of Service.");

    return;
  }

  alert("Account created successfully! Welcome to Personal Blog Website.");
});

const searchButton = document.querySelector(".search-btn");

searchButton.addEventListener("click", function () {
  window.location.href = "search.html";
});
