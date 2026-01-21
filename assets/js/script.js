// Sidebar toggle
document.querySelector("[data-sidebar-btn]")
  .addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("active");
  });

// Navigation
const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll(".page");

navLinks.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    navLinks.forEach(b => b.classList.remove("active"));
    pages.forEach(p => p.classList.remove("active"));

    btn.classList.add("active");
    pages[index].classList.add("active");
  });
});
