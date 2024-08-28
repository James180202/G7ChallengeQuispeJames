// Función para encriptar el texto
function encriptar() {
    const inputText = document.getElementById('inputText').value;
    const outputTextArea = document.getElementById('outputText');
    const imagenContenedor = document.getElementById('imagenContenedor');
    const copyButton = document.querySelector('.botones__copiar');

    if (inputText.trim() === "") {
        // Si el campo de entrada está vacío, muestra la imagen y oculta el botón "Copiar"
        outputTextArea.value = "";
        imagenContenedor.style.display = "block";
        copyButton.style.display = "none";
    } else {
        // Si hay texto, oculta la imagen y muestra el texto encriptado y el botón "Copiar"
        const resultado = inputText
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
        outputTextArea.value = resultado;
        imagenContenedor.style.display = "none";
        copyButton.style.display = "block";
    }
}

// Función para desencriptar el texto
function desencriptar() {
    const inputText = document.getElementById('inputText').value;
    const outputTextArea = document.getElementById('outputText');
    const imagenContenedor = document.getElementById('imagenContenedor');
    const copyButton = document.querySelector('.botones__copiar');

    if (inputText.trim() === "") {
        // Si el campo de entrada está vacío, muestra la imagen y oculta el botón "Copiar"
        outputTextArea.value = "";
        imagenContenedor.style.display = "block";
        copyButton.style.display = "none";
    } else {
        // Si hay texto, oculta la imagen y muestra el texto desencriptado y el botón "Copiar"
        const resultado = inputText
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
        outputTextArea.value = resultado;
        imagenContenedor.style.display = "none";
        copyButton.style.display = "block";
    }
}

// Función para copiar el texto al portapapeles
function copiarTexto() {
    const texto = document.getElementById('outputText');
    texto.select();
    document.execCommand('copy');
}

// Función del carrusel
let currentSlide = 0;
const slideInterval = 5000; // Intervalo de 5 segundos

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-image');
    const totalSlides = slides.length;
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    const newTransformValue = -currentSlide * 100 + 'px'; // Ajusta el valor según el ancho de las imágenes
    document.querySelector('.carousel-images').style.transform = `translateX(${newTransformValue})`;
}

// Inicializa el carrusel
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);

    // Cambia de imagen automáticamente cada 5 segundos
    setInterval(() => {
        currentSlide = (currentSlide + 1) % document.querySelectorAll('.carousel-image').length;
        showSlide(currentSlide);
    }, slideInterval);
});
