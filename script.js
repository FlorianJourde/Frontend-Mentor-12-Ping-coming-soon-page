const email = document.getElementById("email")
const form = document.querySelector("form");

function validateEmail(email) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!validateEmail(email.value) && !email.classList.contains('sent')) {
    email.classList.add("alert");
  } else {
    if (email.classList.contains('alert')) {
      email.classList.remove("alert");
      email.addEventListener('webkitTransitionEnd', function() {
        email.classList.add("sent");
      });
    } else {
      email.classList.add("sent");
    }
  }
});