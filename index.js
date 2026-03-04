/* PrintMind Design System — Preview Interactions */
(function () {
    'use strict';

    /* ── Floating nav scroll effect ── */
    const nav = document.getElementById('nav');
    if (nav) {
        let ticking = false;
        window.addEventListener('scroll', function () {
            if (!ticking) {
                requestAnimationFrame(function () {
                    nav.classList.toggle('scrolled', window.scrollY > 20);
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }

    /* ── Smooth active link highlighter ── */
    const sections = document.querySelectorAll('.section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (sections.length && navLinks.length) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    navLinks.forEach(function (link) {
                        link.classList.toggle('active', link.getAttribute('href') === '#' + id);
                    });
                }
            });
        }, { rootMargin: '-30% 0px -70% 0px' });

        sections.forEach(function (s) { observer.observe(s); });
    }

    /* ── Color swatch click-to-copy hex ── */
    document.querySelectorAll('.color-card').forEach(function (card) {
        card.addEventListener('click', function () {
            const hex = card.querySelector('.color-hex');
            if (!hex) return;
            const text = hex.textContent.split('·')[0].trim();
            navigator.clipboard.writeText(text).then(function () {
                const original = hex.textContent;
                hex.textContent = 'Copied!';
                setTimeout(function () { hex.textContent = original; }, 1200);
            });
        });
    });

    /* ── AI suggestion click-to-apply ── */
    document.querySelectorAll('.input-ai-icon').forEach(function (icon) {
        icon.addEventListener('click', function () {
            const wrapper = icon.closest('.input-wrapper');
            if (!wrapper) return;
            const input = wrapper.querySelector('input');
            if (input && input.placeholder) {
                input.value = input.placeholder.replace('…', '');
                wrapper.classList.remove('input-wrapper--ai');
                wrapper.style.borderStyle = 'solid';
                icon.style.display = 'none';
                const hint = wrapper.parentElement.querySelector('.input-hint');
                if (hint) hint.textContent = 'AI suggestion applied';
            }
        });
    });
})();
