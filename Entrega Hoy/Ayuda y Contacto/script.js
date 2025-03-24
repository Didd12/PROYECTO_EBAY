document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
        formMessage.className = "alert alert-danger";
        formMessage.textContent = "Por favor, completa todos los campos.";
    } else {
        formMessage.className = "alert alert-success";
        formMessage.textContent = "Mensaje enviado con éxito.";
        document.getElementById("contactForm").reset();
    }

    formMessage.classList.remove("d-none");
});