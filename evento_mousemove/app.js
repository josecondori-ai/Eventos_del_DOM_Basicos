// Seleccionamos el área de movimiento del ratón y el párrafo donde se mostrará la posición
const mousemoveArea = document.getElementById('mousemoveArea');
const mousePosition = document.getElementById('mousePosition');

// Añadimos un evento 'mousemove' al área
mousemoveArea.addEventListener('mousemove', (event) => {
    // Cuando el ratón se mueve dentro del área, se actualiza el contenido del párrafo con la posición del ratón
    mousePosition.textContent = `Posición del ratón: X: ${event.clientX}, Y: ${event.clientY}`;
});
