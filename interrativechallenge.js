// --- 1. TYPING EFFECT ---
const text = "Le plus beau cadeau de Saint-Valentin...";
let charIdx = 0;

function type() {
    const typingElement = document.getElementById("typing-text");
    if (charIdx < text.length) {
        typingElement.textContent += text.charAt(charIdx);
        charIdx++;
        setTimeout(type, 50);
    } else {
        document.getElementById("after-title").style.opacity = "1";
    }
}

// --- 2. PARTICULES ---
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let hearts = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

class Heart {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 20;
        this.size = Math.random() * 8 + 4;
        this.speed = Math.random() * 2 + 1;
        this.opacity = 1;
    }
    update() {
        this.y -= this.speed;
        this.opacity -= 0.003;
    }
    draw() {
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = '#FF69B4';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (Math.random() < 0.1) hearts.push(new Heart());
    hearts.forEach((h, i) => {
        h.update();
        h.draw();
        if (h.opacity <= 0) hearts.splice(i, 1);
    });
    requestAnimationFrame(animate);
}

// --- 3. CARROUSEL 3D ---
const reviews = [
    { n: "Marc", m: "Ma femme l'adore !" },
    { n: "Sophie", m: "Idéal pour les relations à distance." },
    { n: "Thomas", m: "Coffret magnifique." }
];

const carousel = document.getElementById('carousel');
reviews.forEach(r => {
    const div = document.createElement('div');
    div.className = 'review-card';
    div.innerHTML = `<p>"${r.m}"</p><br><strong>-${r.n}</strong>`;
    carousel.appendChild(div);
});

let angle = 0;
function rotateCarousel() {
    const cards = document.querySelectorAll('.review-card');
    cards.forEach((card, i) => {
        const cardAngle = angle + (i * (360 / reviews.length));
        const rad = cardAngle * (Math.PI / 180);
        const x = Math.sin(rad) * 250;
        const z = Math.cos(rad) * 150;
        card.style.transform = `translateX(${x}px) translateZ(${z}px)`;
        card.style.opacity = (z < 0) ? 0.4 : 1;
        card.style.zIndex = Math.round(z);
    });
    angle -= 0.5;
    requestAnimationFrame(rotateCarousel);
}

// --- 4. INITIALISATION ---
window.onload = () => {
    document.getElementById('hero-img').classList.add('show');
    setTimeout(type, 500);
    animate();
    rotateCarousel();

    setTimeout(() => {
        document.getElementById('promo-popup').style.display = 'block';
        let time = 600;
        setInterval(() => {
            let m = Math.floor(time / 60);
            let s = time % 60;
            document.getElementById('popup-timer').textContent = `${m}:${s < 10 ? '0' + s : s}`;
            if (time > 0) time--;
        }, 1000);
    }, 4000);
};