function mostrarHora() {
    const horaElement = document.getElementById("hora")
    const agora = new Date(); // Obter a hora atual
    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');

    horaElement.textContent = `${horas}:${minutos}:${segundos}`
}

setInterval(mostrarHora, 1000)