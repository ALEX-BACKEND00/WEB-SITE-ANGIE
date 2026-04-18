/* ===============================
   ANIMACIONES PREMIUM WEBSITE
================================= */

document.addEventListener("DOMContentLoaded", () => {

    iniciarEntradaHero();
    iniciarScrollReveal();
    iniciarParallaxHero();
    iniciarHoverImagenes();
    iniciarBotonPulse();
    iniciarOcultarHeader();

});



/* ===============================
   HERO CINEMÁTICO
================================= */

function iniciarEntradaHero(){

    const elementos = [
        { el: document.querySelector(".tex-title h1"), y: 80, delay: 150 },
        { el: document.querySelector(".tex-secund"), y: 80, delay: 450 },
        { el: document.querySelector(".tex-title p"), y: 80, delay: 750 },
        { el: document.querySelector(".img-person img"), x: 120, delay: 950 },
        { el: document.querySelector(".booton"), y: 60, delay: 1200 }
    ];

    elementos.forEach(item => {

        if(!item.el) return;

        item.el.style.opacity = "0";
        item.el.style.transition = "all 1.2s cubic-bezier(.19,1,.22,1)";

        if(item.y){
            item.el.style.transform = `translateY(${item.y}px)`;
        }

        if(item.x){
            item.el.style.transform = `translateX(${item.x}px)`;
        }

        setTimeout(() => {
            item.el.style.opacity = "1";
            item.el.style.transform = "translate(0,0)";
        }, item.delay);

    });
}


/* ===============================
   SCROLL REVEAL PROFESIONAL
================================= */

function iniciarScrollReveal(){

    const bloques = document.querySelectorAll(
        ".contenido-texto, .empresa-img, .empresa-texto"
    );

    bloques.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(80px)";
        el.style.transition = "all 1.1s cubic-bezier(.19,1,.22,1)";
    });

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }

        });

    }, {
        threshold: 0.18
    });

    bloques.forEach(el => observer.observe(el));
}


/* ===============================
   PARALLAX SUAVE HERO
================================= */

function iniciarParallaxHero(){

    const imagen = document.querySelector(".img-person img");

    if(!imagen) return;

    window.addEventListener("mousemove", (e) => {

        const x = (window.innerWidth / 2 - e.clientX) / 45;
        const y = (window.innerHeight / 2 - e.clientY) / 45;

        imagen.style.transform =
        `translate(${x}px, ${y}px) scale(1.02)`;

    });

}


/* ===============================
   ZOOM HOVER IMÁGENES
================================= */

function iniciarHoverImagenes(){

    const imagenes = document.querySelectorAll(
        ".img-person img, .empresa-img img"
    );

    imagenes.forEach(img => {

        img.style.transition =
        "transform .8s cubic-bezier(.19,1,.22,1), filter .8s ease";

        img.addEventListener("mouseenter", () => {

            img.style.transform = "scale(1.08)";
            img.style.filter =
            "brightness(1.08) drop-shadow(0 18px 35px rgba(0,0,0,.45))";
        });

        img.addEventListener("mouseleave", () => {

            img.style.transform = "scale(1)";
            img.style.filter =
            "brightness(1) drop-shadow(0 10px 25px rgba(0,0,0,.35))";
        });

    });

}


/* ===============================
   BOTÓN WHATSAPP VIVO
================================= */

function iniciarBotonPulse(){
    
    const boton = document.querySelector(".btn-whatsapp");
    
    if(!boton) return;
    
    setInterval(() => {
        
        boton.animate([
            { transform: "scale(1)" },
            { transform: "scale(1.04)" },
            { transform: "scale(1)" }
        ], {
            duration: 1400,
            easing: "ease-in-out"
        });
        
    }, 2600);
}


/* ===============================
   SCROLL TO NEXT SECTION
================================ */

function scrollToNext() {
    const nextSection = document.querySelector("#whatsapp-seccion");
    if(nextSection){
        nextSection.scrollIntoView({ behavior: "smooth" });
    }
}