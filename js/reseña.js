async function enviarEncuesta() {
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const experienciaInput = document.getElementById('experiencia');
    const comentariosInput = document.getElementById('comentarios');

    // Señalar el error y colocar el cursor en el campo correspondiente
    function mostrarError(mensaje, inputElement) {
        alert(mensaje);
        inputElement.focus();
    }

    try {
        // Validar campos antes de enviar
        if (!nombreInput.value) {
            mostrarError('Por favor, ingresa tu nombre.', nombreInput);
            return;
        }

        if (!emailInput.value) {
            mostrarError('Por favor, ingresa tu correo electrónico.', emailInput);
            return;
        }

        if (experienciaInput.value === '') {
            mostrarError('Por favor, selecciona tu experiencia.', experienciaInput);
            return;
        }

        const formData = {
            nombre: nombreInput.value,
            email: emailInput.value,
            experiencia: experienciaInput.value,
            comentarios: comentariosInput.value
        };

        const response = await fetch('https://formspree.io/f/mnqkydeq', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            // Limpiar campos
            nombreInput.value = '';
            emailInput.value = '';
            experienciaInput.value = 'default';
            comentariosInput.value = '';

            alert('¡Gracias por tu retroalimentación!');
        } else {
            alert('Hubo un problema al enviar la encuesta. Por favor, inténtalo de nuevo más tarde.');
        }
    } catch (error) {
        console.error('Error al enviar la encuesta:', error);
        alert('Hubo un problema al enviar la encuesta. Por favor, inténtalo de nuevo más tarde.');
    }
}
