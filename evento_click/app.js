// Seleccionamos el botón y el párrafo donde se mostrará el mensaje
const clickButton = document.getElementById('clickButton');
const clickMessage = document.getElementById('clickMessage');

// Añadimos un evento 'click' al botón
clickButton.addEventListener('click', () => {
    // Cuando el botón es clicado, se actualiza el contenido del párrafo
    clickMessage.textContent = '¡Botón clicado!';
});
