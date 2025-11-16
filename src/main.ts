// --- MENÚ LATERAL (MOBILE) ---
const hamburgerBtn = document.getElementById("hamburgerBtn") as HTMLButtonElement | null;
const navLinks = document.querySelector(".nav-links") as HTMLElement | null;
const mobileOverlay = document.getElementById("mobileOverlay") as HTMLElement | null;

if (hamburgerBtn && navLinks && mobileOverlay) {
  // Abrir menu lateral
  hamburgerBtn.addEventListener("click", () => {
    navLinks.classList.add("active");
    mobileOverlay.classList.add("active");
  });

  // Cerrar al tocar afuera
  mobileOverlay.addEventListener("click", () => {
    navLinks.classList.remove("active");
    mobileOverlay.classList.remove("active");
  });

  // Cerrar al tocar un link
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      mobileOverlay.classList.remove("active");
    });
  });
}
// --- MODO OSCURO / CLARO ---
const btn = document.getElementById("themeToggle") as HTMLButtonElement;
const icon = document.getElementById("themeIcon") as HTMLElement;

// Cargar tema guardado
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light");
  icon.classList.remove("fa-sun");
  icon.classList.add("fa-moon");
}

btn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    localStorage.setItem("theme", "light");
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    localStorage.setItem("theme", "dark");
  }
});

// --- DESPLAZAMIENTO SUAVE ---
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (ev: Event) => {
    const target = ev.currentTarget as HTMLAnchorElement | null;
    if (!target) return;

    const href = target.getAttribute('href');
    if (href && href.startsWith('#')) {
      ev.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// --- ROTADOR DE ADJETIVOS ---
const adjectives = ["proactiva", "creativa", "colaborativa", "responsable", "curiosa", "resolutiva"];
let index = 0;
const adjectiveElement = document.querySelector(".dynamic-adjective");

if (adjectiveElement) {
  setInterval(() => {
    index = (index + 1) % adjectives.length;
    adjectiveElement.textContent = adjectives[index];
  }, 2500);
}

// --- FORMULARIO (SIMULADO) ---
const formEl = document.getElementById('contactForm');
if (formEl instanceof HTMLFormElement) {
  formEl.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    const successMsg = document.createElement("div");
    successMsg.className = "success-message";
    successMsg.textContent = "¡Gracias! Tu mensaje fue recibido ✨";

    formEl.insertAdjacentElement("beforebegin", successMsg);

    setTimeout(() => {
      successMsg.classList.add("hide");
      setTimeout(() => successMsg.remove(), 600);
    }, 4000);
  });
}

// --- ANIMACIONES ---
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('reveal');
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('section, .project-card').forEach(el => observer.observe(el));
}