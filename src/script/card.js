// Sélection des éléments
const card = document.getElementById('businessCard');
const cardWrapper = document.querySelector('.card-wrapper');
let isFlipped = false;

// Retourner la carte au clic
card.addEventListener('click', () => {
    isFlipped = !isFlipped;
    card.classList.toggle('flipped');
});

// Effet 3D avec la souris
cardWrapper.addEventListener('mousemove', (e) => {
    if (isFlipped) return; // Pas d'effet 3D si la carte est retournée
    
    const rect = cardWrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

cardWrapper.addEventListener('mouseleave', () => {
    if (!isFlipped) {
        card.style.transform = 'rotateX(0) rotateY(0)';
    }
});

// Animations au chargement
window.addEventListener('load', () => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px) scale(0.9)';
    
    setTimeout(() => {
        card.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0) scale(1)';
    }, 100);
});

// Particules flottantes au clic
card.addEventListener('click', (e) => {
    createParticles(e.clientX, e.clientY);
});

function createParticles(x, y) {
    const colors = ['#00d4ff', '#ff00ea', '#ffd700', '#00ff88'];
    
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = '10px';
        particle.style.height = '10px';
        particle.style.borderRadius = '50%';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1000';
        particle.style.boxShadow = `0 0 10px ${colors[Math.floor(Math.random() * colors.length)]}`;
        
        document.body.appendChild(particle);
        
        const angle = (Math.PI * 2 * i) / 10;
        const velocity = 2 + Math.random() * 3;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        animateParticle(particle, vx, vy);
    }
}

function animateParticle(particle, vx, vy) {
    let opacity = 1;
    let posX = parseFloat(particle.style.left);
    let posY = parseFloat(particle.style.top);
    
    const animate = () => {
        posX += vx;
        posY += vy;
        opacity -= 0.02;
        
        particle.style.left = posX + 'px';
        particle.style.top = posY + 'px';
        particle.style.opacity = opacity;
        
        if (opacity > 0) {
            requestAnimationFrame(animate);
        } else {
            particle.remove();
        }
    };
    
    requestAnimationFrame(animate);
}

// Effet de typing sur le hint
const hints = [
    "Déplacez votre souris pour interagir",
    "Cliquez pour découvrir mes compétences",
    "Une carte de visite du futur 🚀"
];

let currentHintIndex = 0;
const hintElement = document.querySelector('.interaction-hint span');

function changeHint() {
    hintElement.style.opacity = '0';
    
    setTimeout(() => {
        currentHintIndex = (currentHintIndex + 1) % hints.length;
        hintElement.textContent = hints[currentHintIndex];
        hintElement.style.opacity = '1';
    }, 500);
}

setInterval(changeHint, 5000);

// Easter egg : Konami code
let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    card.style.animation = 'rainbow 2s linear infinite';
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    setTimeout(() => {
        card.style.animation = '';
    }, 5000);
    
    alert('🎉 Easter Egg découvert ! Vous êtes un vrai geek ! 🎮');
}

// Ajout d'un effet de parallaxe sur l'arrière-plan
document.addEventListener('mousemove', (e) => {
    const stars = document.querySelector('.stars');
    const twinkling = document.querySelector('.twinkling');
    
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    stars.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
    twinkling.style.transform = `translate(${x * -30}px, ${y * -30}px)`;
});
