let form = document.getElementById("contact");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let captcha = document.getElementById("g-recaptcha-response").value;

  form.reset();

  fetch("https://contact-api.dedomil.workers.dev/", {
    method: "POST",
    body: JSON.stringify({
      name,
      email,
      message,
      captcha,
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(data => data.json()).then(data => alert(data.message));
});
