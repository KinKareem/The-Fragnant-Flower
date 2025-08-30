// Mengubah navbar menjadi humberger pada mode qu mobile

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("show");
});

