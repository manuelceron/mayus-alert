document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los inputs con la clase "mayus-alert"
    const mayusAlertInputs = document.querySelectorAll('input.mayus-alert');

    mayusAlertInputs.forEach(input => {
        // Crea un span para mostrar la advertencia de mayúsculas activadas
        const mayusAlertSpan = document.createElement('span');
        mayusAlertSpan.className = 'color-warning span-mayus-alert';
        mayusAlertSpan.textContent = 'Tecla Mayúscula activada';
        mayusAlertSpan.style.display = 'none'; // Ocultar por defecto
        input.parentNode.insertBefore(mayusAlertSpan, input.nextSibling); // Insertar después del input

        // Manejar eventos de teclado
        input.addEventListener('keydown', function (event) {
            if (event.getModifierState && event.getModifierState('CapsLock')) {
                mayusAlertSpan.style.display = 'inline'; // Mostrar la alerta
            } else {
                mayusAlertSpan.style.display = 'none'; // Ocultar la alerta
            }
        });

        // Ocultar alerta al perder el foco
        input.addEventListener('blur', function () {
            mayusAlertSpan.style.display = 'none';
        });

        // Mostrar alerta al obtener foco si Caps Lock está activado
        input.addEventListener('focus', function () {
            if (event.getModifierState && event.getModifierState('CapsLock')) {
                mayusAlertSpan.style.display = 'inline';
            }
        });
    });
});
