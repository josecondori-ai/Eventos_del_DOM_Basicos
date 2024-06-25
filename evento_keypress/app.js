// Seleccionamos el campo de entrada de texto y el párrafo donde se mostrará el mensaje
const keypressInput = document.getElementById('keypressInput');
const keypressMessage = document.getElementById('keypressMessage');

// Añadimos un evento 'keypress' al campo de entrada de texto
keypressInput.addEventListener('keypress', (event) => {
    // Cuando se presiona una tecla dentro del campo de texto, se actualiza el contenido del párrafo con la tecla presionada
    keypressMessage.textContent = `Tecla presionada: ${event.key}`;
});
