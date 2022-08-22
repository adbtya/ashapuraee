let form = document.getElementById("contact");

form.addEventListener("submit", async (e) => {
   e.preventDefault();
   let name = document.getElementById("name").value;
   let email = document.getElementById("email").value;
   let number = document.getElementById("number").value;
   let message = document.getElementById("message").value;
   form.reset();
   fetch("https://api.ashapuraee.com/contact", {
      method: "POST",
      body: JSON.stringify({
         "name": `${name}`,
         "email": `${email}`,
         "contact": `${number}`,
         "message": `${message}`,
         "secret": "kjyhdwejqgrfgewiurfgui"
      }),
      headers: {
         "Content-Type": "application/json"
      }
   }).then(data => data.json()).then(data => alert(data.message));
});
