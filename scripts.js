// 1. Funcionalidad de Acordeón (Accordion)
let acc = document.querySelectorAll(".accordion");
acc.forEach(button => {
    button.addEventListener("click", function() {
        
        let panel = this.nextElementSibling;
        panel.style.display = (panel.style.display === "block") ? "none" : "block";
    });
});