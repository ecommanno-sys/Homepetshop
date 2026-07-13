 // ===============================
// HOME PET SHOP - JAVASCRIPT
// ===============================

// Message de bienvenue
console.log("Bienvenue sur HomePetShop !");

// Attendre que la page soit chargée
document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // Boutons
    // ===============================
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();

            alert("Obrigado pelo seu interesse! Em breve nossa equipe entrará em contato.");
        });
    });

    // ===============================
    // Animation des cards
    // ===============================
    const cards = document.querySelectorAll(
        ".service-card, .testimonial-card, .diferencial-card"
    );

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-10px)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
        });

    });

    // ===============================
    // Navbar Shadow
    // ===============================
    window.addEventListener("scroll", () => {

        const header = document.querySelector("header");

        if (window.scrollY > 50) {
            header.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";
        } else {
            header.style.boxShadow = "none";
        }

    });

});