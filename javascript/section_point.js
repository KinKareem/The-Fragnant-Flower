const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

const headerOffset = 50;

// Fungsi untuk scroll Section
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

// Memberikan Efek Smooth scroll
navLinks.forEach((link, i) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetSection = sections[i];
        const targetPos = targetSection.offsetTop - headerOffset;

        window.scrollTo({
            top: targetPos,
            behavior: "smooth"
        });
    });
});

window.addEventListener("scroll", onScroll);
window.addEventListener("load", onScroll);
