// Seleccionamos el campo de entrada de texto y el párrafo donde se mostrará el mensaje
const keydownInput = document.getElementById('keydownInput');
const keydownMessage = document.getElementById('keydownMessage');

// Añadimos un evento 'keydown' al campo de entrada de texto
keydownInput.addEventListener('keydown', (event) => {
    // Cuando se presiona una tecla dentro del campo de texto, se actualiza el contenido del párrafo con la tecla presionada
    keydownMessage.textContent = `Tecla presionada: ${event.key}`;
});
