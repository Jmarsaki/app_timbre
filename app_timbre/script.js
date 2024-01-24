function playRingtone() {
    const ringtone = document.getElementById('ringtone');

    // Verificar si el audio ya está reproduciéndose y reiniciar si es necesario
    if (!ringtone.paused) {
        ringtone.currentTime = 0;
    }

    // Reproducir el sonido del timbre
    ringtone.play();
}