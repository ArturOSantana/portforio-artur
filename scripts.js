document.getElementById("btn-contact").addEventListener("click", () => {document.getElementById("contact").scrollIntoView({behavior:"smooth"});
});

// Simulação de envio de formulário (sem backend)
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = e.target.name.value.trim();
  const email = e.target.email.value.trim();
  const message = e.target.message.value.trim();

  if (!name || !email || !message) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  alert(`Obrigado pela mensagem, ${name}! Vou responder em breve.`);
  e.target.reset();
});