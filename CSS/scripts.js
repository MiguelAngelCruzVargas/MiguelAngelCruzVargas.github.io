// Función para mostrar u ocultar el contenido de una sección
function toggleSection(sectionId) {
    var contenido = document.getElementById(sectionId);
    if (contenido.style.display === 'none' || contenido.style.display === '') {
        contenido.style.display = 'block';
    } else {
        contenido.style.display = 'none';
    }
}
