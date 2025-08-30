// ambil semua link navbar & section
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

// tinggi header (disesuaikan dengan CSS header)
const headerOffset = 70;

// fungsi cek posisi scroll
function onScroll() {
    let scrollPos = window.scrollY + headerOffset;

    sections.forEach((section, i) => {
        let top = section.offsetTop;
        let bottom = top + section.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
            navLinks.forEach(link => link.classList.remove("active"));
            if (navLinks[i]) navLinks[i].classList.add("active");
        }
    });
}

// jalankan saat scroll & load awal
window.addEventListener("scroll", onScroll);
window.addEventListener("load", onScroll);
