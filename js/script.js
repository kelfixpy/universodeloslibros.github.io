// modo claro-oscuro
function abrir(img) {

    document.getElementById('modal').style.display = "flex";
    document.getElementById('imgGrande').src = img.src;

}
function cerrar() {
    document.getElementById('modal').style.display = "none";
}
// para poner modo claro y oscuro
const logo = document.getElementById("logo");
function cambiar() {
    //busca el body y le asigna una clase o
    //le quita la clase(toggle)
    document.body.classList.toggle("dark");
    // asignar a la memoria la preferencia
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("tema", "oscuro");
        logo.src = "img/oscuro.png";
    } else {
        localStorage.setItem("tema", "claro");
        logo.src = "img/claro.png";
    }
    cambiar_nombre();
}

cambiar_nombre();

if (localStorage.getItem("tema") === "oscuro") {
    document.body.classList.add("dark");
    logo.src = "img/oscuro.png";
}
if (localStorage.getItem("tema") === "claro") {
    document.body.classList.add("claro");
    logo.src = "img/claro.png";
}

function cambiar_nombre() {
    if (document.body.classList.contains("dark")) {
        document.getElementById('btn').innerText = "☀️ ";


    } else {
        document.getElementById('btn').innerText = "🌑 ";
    }
}
//parte del carrusel
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel-example');
    const radios = carousel.querySelectorAll('input[name="carousel"]');
    let currentIndex = 0;
    let autoSlideInterval;

    function goToSlide(index) {
        if (index >= radios.length) index = 0;
        if (index < 0) index = radios.length - 1;
        radios[index].checked = true;
        currentIndex = index;
    }

    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 3000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Pausar al pasar el mouse
    carousel.addEventListener('mouseenter', stopAutoSlide);
    carousel.addEventListener('mouseleave', startAutoSlide);

    // Reiniciar timer al hacer click
    carousel.addEventListener('click', () => {
        stopAutoSlide();
        startAutoSlide();
    });

    // Sincronizar índice al cambiar manualmente
    radios.forEach((radio, index) => {
        radio.addEventListener('change', () => {
            currentIndex = index;
        });
    });

    startAutoSlide();
});