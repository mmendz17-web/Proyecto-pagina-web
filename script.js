//  script.js 


// cargue antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function() {
    
    //  formulario
    const formulario = document.querySelector("form");

    // evento enviar
    formulario.addEventListener("submit", function(evento) {
        // evita formulario se envíe 
        evento.preventDefault();

        //  valores de los campos
        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        // campos no estén vacíos
        if (nombre === "" || correo === "" || mensaje === "") {
            alert("Completa todos los campos antes de enviar.");
        } else {
            // Simulacion del envío del formulario
            alert("Gracias " + nombre + ", hemos recibido tu mensaje. Pronto te contactaremos.");
            
            // Limpiamos el formulario
            formulario.reset();
        }
    });
});
