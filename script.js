window.onload = function () {
    console.log("Página de la selva cargada correctamente.");
    
    // Array de imágenes de fondo
    const changeBgButton = document.getElementById("change-bg");
    if (changeBgButton) {
    const backgrounds = [
    "https://source.unsplash.com/1600x900/?jungle",
    "https://source.unsplash.com/1600x900/?savanna",
    "https://source.unsplash.com/1600x900/?rainforest"
    ];
    
    changeBgButton.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    document.body.style.background = `url(${backgrounds[randomIndex]}) no-repeat center center fixed`;
    document.body.style.backgroundSize = "cover";
    });
    }
    };
    
    document.addEventListener("DOMContentLoaded", () => {
        const darkBtn = document.getElementById("toggle-dark");
        darkBtn.addEventListener("click", () => {
          document.body.classList.toggle("dark-mode");
          darkBtn.textContent = document.body.classList.contains("dark-mode")
            ? "Modo Claro"
            : "Modo Oscuro";
        });
      });
    

    // Desplazamiento suave en los enlaces del menú
    document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
    window.scrollTo({
    top: targetElement.offsetTop - 50,
    behavior: "smooth"
    });
    }
    });
    });
    
    // Galería de imágenes con efecto lightbox
    document.querySelectorAll(".lista-horizontal img").forEach(img => {
    img.addEventListener("click", function () {
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.innerHTML = `
    <div class="lightbox-content">
    <span class="close">&times;</span>
    <img src="${this.src}" alt="Imagen ampliada">
    </div>`;
    document.body.appendChild(lightbox);
    document.querySelector(".close").addEventListener("click", () => lightbox.remove());
    });
    });
    
    // Menú móvil desplegable
    const menuToggle = document.createElement("button");
    menuToggle.textContent = "☰ Menú";
    menuToggle.id = "menu-toggle";
    document.querySelector("header").prepend(menuToggle);
    
    menuToggle.addEventListener("click", function () {
    document.querySelector(".menu").classList.toggle("show");
    });
    
    