// AUTO ACTIVE NAVBAR LINK
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop(); 

  document.querySelectorAll(".nav-link").forEach(link => {
    const linkPage = link.getAttribute("href");

    // Hilangkan semua 'active' dulu
    link.classList.remove("active");

    // Jika URL cocok dengan link → aktifkan
    if (linkPage === currentPage) {
      link.classList.add("active");
    }

    // Khusus halaman index (root) → aktifkan Beranda
    if (currentPage === "" && linkPage === "index.html") {
      link.classList.add("active");
    }
  });
});
