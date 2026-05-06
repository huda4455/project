
const loader = document.getElementById("loader");
const pages = document.querySelectorAll(".page");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");

document.addEventListener("DOMContentLoaded", () => {

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }

  setTimeout(() => {
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";

      showPage("splash");

      setTimeout(() => {
        showPage("home");
      }, 1500);

    }, 400);

  }, 1000);
});

/* PAGE SYSTEM */
function showPage(id) {

  pages.forEach(p => p.classList.remove("active"));
  links.forEach(l => l.classList.remove("active-link"));

  const target = document.getElementById(id);

  if (target) {
    target.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const activeLink = document.getElementById("link-" + id);
  if (activeLink) activeLink.classList.add("active-link");

  navLinks.classList.remove("active");
}

/* Buttons */
const toggleMenu = () => navLinks.classList.toggle("active");

const toggleDark = () => {
  document.body.classList.toggle("dark");

  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
};