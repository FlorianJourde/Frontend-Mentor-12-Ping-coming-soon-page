const email = document.getElementById("email")
const errorMessage = document.getElementById("error-message")
const successMessage = document.getElementById("success-message")
const form = document.querySelector("form");

function validateEmail(email) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!validateEmail(email.value) && !email.classList.contains('sent')) {
    email.setAttribute("aria-invalid", "true")
    errorMessage.textContent = "Please provide a valid email adress"
    email.classList.add("alert");
  } else {
    if (email.classList.contains('alert')) {
      email.setAttribute("aria-invalid", "false");
      successMessage.textContent = "Form submission success !";
      errorMessage.textContent = "";
      email.classList.remove("alert");
      email.addEventListener('webkitTransitionEnd', function() {
        email.classList.add("sent");
      });
    } else {
      email.setAttribute("aria-invalid", "false");
      successMessage.textContent = "Form submission success !";
      email.classList.add("sent");
    }
  }
});
