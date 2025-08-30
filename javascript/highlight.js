const track = document.querySelector('.video-track');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots');

let index = 0;
let dots = [];

function getVisibleCount() {
    if (window.innerWidth <= 600) return 1;  // HP
    if (window.innerWidth <= 1024) return 2; // Tablet
    return 3;                                // Desktop
}

function updateSlider() {
    const cardWidth = track.querySelector('.video-card').offsetWidth + 25; // +gap
    track.style.transform = `translateX(-${index * cardWidth}px)`;

    dots.forEach(dot => dot.classList.remove('active'));
    const pageIndex = Math.floor(index / getVisibleCount());
    if (dots[pageIndex]) dots[pageIndex].classList.add('active');
}

function generateDots() {
    dotsContainer.innerHTML = ""; // reset dots
    const totalVideos = track.children.length;
    const totalPages = Math.ceil(totalVideos / getVisibleCount());

    dots = [];
    for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('button');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            index = i * getVisibleCount();
            updateSlider();
        });
        dotsContainer.appendChild(dot);
        dots.push(dot);
    }
}

// Inisialisasi
generateDots();
updateSlider();

nextBtn.addEventListener('click', () => {
    if (index < track.children.length - getVisibleCount()) {
        index += getVisibleCount();
        updateSlider();
    }
});

prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index -= getVisibleCount();
        updateSlider();
    }
});

window.addEventListener('resize', () => {
    index = 0; // reset ke awal kalau resize
    generateDots();
    updateSlider();
});
