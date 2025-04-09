function loadHTML(id, file, callback) {
  fetch(file)
    .then((res) => res.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
      if (callback) callback();
    })
    .catch((err) => console.error(`Nepavyko įkelti ${file}:`, err));
}
loadHTML("header-in", "header.html", highlightActiveLink);
loadHTML("footer-in", "footer.html");

function highlightActiveLink() {
  const currentPath = window.location.pathname.split("/").pop(); // Paimam failo pavadinimą
  const navLinks = document.querySelectorAll("nav a"); // Renkam visus <nav> esančius <a>

  navLinks.forEach(link => {
    const linkPath = link.getAttribute("href");
    if (linkPath === currentPath || (linkPath === "index.html" && currentPath === "")) {
      link.classList.add("active"); // Bootstrap klasė
    } else {
      link.classList.remove("active");
    }
  });
}

