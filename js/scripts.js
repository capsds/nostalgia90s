document.addEventListener("DOMContentLoaded", function () {
  // Agregar iconos de FontAwesome (si no están en tu página)
  let fontAwesome = document.createElement("link");
  fontAwesome.rel = "stylesheet";
  fontAwesome.href =
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css";
  document.head.appendChild(fontAwesome);
  // Crear botón flotante
  let accButton = document.createElement("button");
  accButton.innerHTML = '<i class="fa-solid fa-universal-access"></i>';
  accButton.style.position = "fixed";
  accButton.style.bottom = "20px";
  accButton.style.left = "20px";
  accButton.style.width = "60px";
  accButton.style.height = "60px";
  accButton.style.backgroundColor = "#007BFF";
  accButton.style.color = "white";
  accButton.style.border = "none";
  accButton.style.borderRadius = "50%";
  accButton.style.fontSize = "28px";
  accButton.style.cursor = "pointer";
  accButton.style.boxShadow = "2px 2px 15px rgba(0, 0, 0, 0.4)";
  accButton.style.transition = "transform 0.3s ease-in-out";
  accButton.style.zIndex = "1000";

  // Efectos al pasar el mouse
  accButton.onmouseover = function () {
    accButton.style.transform = "scale(1.2)";
  };
  accButton.onmouseout = function () {
    accButton.style.transform = "scale(1)";
  };

  // Animación de rebote cada 3 segundos
  setInterval(() => {
    accButton.style.transform = "scale(1.1)";
    setTimeout(() => {
      accButton.style.transform = "scale(1)";
    }, 300);
  }, 3000);

  // Crear el menú de accesibilidad
  let menu = document.createElement("div");
  menu.style.position = "fixed";
  menu.style.bottom = "90px";
  menu.style.left = "20px";
  menu.style.width = "250px";
  menu.style.backgroundColor = "#fff";
  menu.style.border = "1px solid #ddd";
  menu.style.borderRadius = "10px";
  menu.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.3)";
  menu.style.padding = "10px";
  menu.style.display = "none";
  menu.style.fontFamily = "Arial, sans-serif";
  menu.style.zIndex = "999";

  let options = [
    { text: "Modo Oscuro", icon: "fa-moon", action: toggleDarkMode },
    { text: "Alto Contraste", icon: "fa-adjust", action: highContrastMode },
    { text: "Aumentar Texto", icon: "fa-plus", action: increaseFontSize },
    { text: "Disminuir Texto", icon: "fa-minus", action: decreaseFontSize },
    { text: "Resaltar Enlaces", icon: "fa-link", action: highlightLinks },
    { text: "Leer Página", icon: "fa-volume-up", action: readPageText },
  ];

  options.forEach((opt) => {
    let btn = document.createElement("button");
    btn.innerHTML = `<i class="fa ${opt.icon}"></i> ${opt.text}`;
    btn.style.width = "100%";
    btn.style.margin = "5px 0";
    btn.style.padding = "10px";
    btn.style.border = "none";
    btn.style.cursor = "pointer";
    btn.style.backgroundColor = "#007BFF";
    btn.style.color = "white";
    btn.style.borderRadius = "5px";
    btn.style.display = "flex";
    btn.style.alignItems = "center";
    btn.style.gap = "10px";
    btn.style.fontSize = "16px";

    btn.onclick = opt.action;
    menu.appendChild(btn);
  });

  // Alternar menú de accesibilidad
  accButton.onclick = function () {
    menu.style.display = menu.style.display === "none" ? "block" : "none";
  };

  // Agregar al documento
  document.body.appendChild(accButton);
  document.body.appendChild(menu);

  // Función: Alternar Modo Oscuro
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    if (!document.body.classList.contains("dark-mode")) {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    } else {
      document.body.style.backgroundColor = "#222";
      document.body.style.color = "#fff";
    }
  }

  // Función: Alternar Modo Alto Contraste
  function highContrastMode() {
    document.body.classList.toggle("high-contrast");
    if (!document.body.classList.contains("high-contrast")) {
      document.body.style.filter = "";
    } else {
      document.body.style.filter = "contrast(1.5)";
    }
  }

  // Función: Aumentar tamaño de texto
  function increaseFontSize() {
    document.body.style.fontSize =
      parseInt(window.getComputedStyle(document.body).fontSize) + 2 + "px";
  }

  // Función: Disminuir tamaño de texto
  function decreaseFontSize() {
    document.body.style.fontSize =
      parseInt(window.getComputedStyle(document.body).fontSize) - 2 + "px";
  }

  // Función: Resaltar enlaces
  function highlightLinks() {
    document.querySelectorAll("a").forEach((link) => {
      link.style.backgroundColor = "yellow";
      link.style.color = "black";
      link.style.fontWeight = "bold";
    });
  }

  // Función: Leer texto de la página
  function readPageText() {
    let speech = new SpeechSynthesisUtterance();
    speech.text = document.body.innerText;
    speech.lang = "es-ES";
    window.speechSynthesis.speak(speech);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Crear el enlace
  let waLink = document.createElement("a");
  waLink.href = "https://wa.me/1234567890"; // Reemplaza con tu número
  waLink.target = "_blank";
  waLink.style.position = "fixed";
  waLink.style.bottom = "20px";
  waLink.style.right = "20px";
  waLink.style.width = "60px";
  waLink.style.height = "60px";
  waLink.style.backgroundColor = "#25D366";
  waLink.style.borderRadius = "50%";
  waLink.style.display = "flex";
  waLink.style.alignItems = "center";
  waLink.style.justifyContent = "center";
  waLink.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.3)";
  waLink.style.transition =
    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, opacity 0.5s";
  waLink.style.cursor = "pointer";
  waLink.style.opacity = "0"; // Para efecto de aparición

  // Efecto hover (brillo y escala)
  waLink.onmouseover = function () {
    waLink.style.transform = "scale(1.2)";
    waLink.style.boxShadow = "2px 2px 15px rgba(0, 255, 0, 0.6)";
  };
  waLink.onmouseout = function () {
    waLink.style.transform = "scale(1)";
    waLink.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.3)";
  };

  // Crear la imagen dentro del enlace
  let waImg = document.createElement("img");
  waImg.src = "https://cdn-icons-png.flaticon.com/512/733/733585.png"; // URL corregida
  waImg.alt = "WhatsApp";
  waImg.style.width = "40px";
  waImg.style.height = "40px";

  // Agregar la imagen al enlace
  waLink.appendChild(waImg);

  // Agregar el botón al body
  document.body.appendChild(waLink);

  // Efecto de aparición suave
  setTimeout(() => {
    waLink.style.opacity = "1";
  }, 300);

  // Animación de rebote cada 3 segundos
  setInterval(() => {
    waLink.style.transform = "scale(1.1)";
    setTimeout(() => {
      waLink.style.transform = "scale(1)";
    }, 300);
  }, 3000);
});
