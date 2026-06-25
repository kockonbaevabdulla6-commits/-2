document.addEventListener("DOMContentLoaded", function() {
    // 1. "Оюнчуларды көрүү" баскычы басылганда кооз жылмышып (smooth scroll) түшүү
    const mainButton = document.querySelector('.btn-main');
    if (mainButton) {
        mainButton.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // 2. Карточкаларга чычканды жакындатканда эффект берүү
    const cards = document.querySelectorAll('.player-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const jersey = this.querySelector('.jersey-num');
            if (jersey) {
                jersey.style.color = 'rgba(0, 255, 102, 0.7)'; // Түсү ачык болот
                jersey.style.transform = 'scale(1.2) translateY(-5px)'; // Чоңоюп өйдө жылат
                jersey.style.transition = 'all 0.3s ease';
            }
        });

        card.addEventListener('mouseleave', function() {
            const jersey = this.querySelector('.jersey-num');
            if (jersey) {
                jersey.style.color = 'rgba(0, 255, 102, 0.2)'; // Мурунку абалына кайтат
                jersey.style.transform = 'scale(1) translateY(0)';
            }
        });
    });
});