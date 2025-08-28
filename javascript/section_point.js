// ambil semua link navbar & section
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

// fungsi cek posisi scroll
function onScroll() {
    let scrollPos = window.scrollY + 150; // tambahkan offset

    sections.forEach((section, i) => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            navLinks.forEach(link => link.classList.remove("active"));
            navLinks[i].classList.add("active");
        }
    });
}

// jalankan saat scroll & load awal
window.addEventListener("scroll", onScroll);
window.addEventListener("load", onScroll);
