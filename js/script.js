const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();

    const email = document.getElementById("email").value.trim();

    const telefone = document.getElementById("telefone").value.trim();

    const mensagem = document.getElementById("mensagem").value.trim();

    if(nome === "" || email === "" || telefone === "" || mensagem === ""){

        alert("Preencha todos os campos.");

        return;

    }

    alert("Mensagem enviada com sucesso!");

    form.reset();

});