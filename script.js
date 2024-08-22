function displayDateTime() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    };
    const formattedDateTime = now.toLocaleString('es-ES', options);
    document.getElementById('datetime').textContent = formattedDateTime;
}

// Llamar a la función inmediatamente para mostrar la fecha y hora al cargar la página
displayDateTime();

// Actualizar la fecha y hora cada segundo
setInterval(displayDateTime, 1000);
