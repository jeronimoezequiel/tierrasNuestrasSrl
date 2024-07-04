document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir la recarga de la página

    const formData = new FormData(this);

    fetch('send_form.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
        triggerConfetti();
        // Puedes mostrar un mensaje de éxito aquí si lo deseas
        } else {
        // Manejar el error si ocurre
        console.error('Error en el envío del formulario');
        }
    })
    .catch(error => console.error('Error:', error));
});

function triggerConfetti() {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
    if (Date.now() > end) return;

    confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
        });
        confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
        });

        requestAnimationFrame(frame);
    };

    frame();
}
