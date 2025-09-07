// ===== Menu responsive =====
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("showing");
});

// ===== Animation simple au scroll =====
window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add("visible");
    }
  });
});
