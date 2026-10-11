'use strict';

document.documentElement.classList.add('js-enabled');

const WHATSAPP_NUMBER = '5581985008954';

document.querySelectorAll('[data-whatsapp]').forEach((link) => {
    const kind = link.dataset.whatsapp;
    let message = 'Olá, MONITORE+! Gostaria de solicitar um orçamento.';

    if (kind === 'service' && link.dataset.service) {
        message = `Olá, MONITORE+! Gostaria de um orçamento para ${link.dataset.service}.`;
    } else if (kind === 'product' && link.dataset.product) {
        message = `Olá, MONITORE+! Tenho interesse no produto ${link.dataset.product}. Pode me informar o valor e a disponibilidade?`;
    } else if (kind === 'category' && link.dataset.category) {
        message = `Olá, MONITORE+! Gostaria de informações sobre a categoria ${link.dataset.category}. Pode me informar os modelos e a disponibilidade?`;
    }

    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
});

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
const mobileNavigation = window.matchMedia('(max-width: 700px)');

if (menuButton && navigation) {
    const setMenuOpen = (open) => {
        navigation.classList.toggle('is-open', open);
        menuButton.setAttribute('aria-expanded', String(open));
        menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    };

    menuButton.addEventListener('click', () => {
        setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
    });

    navigation.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => setMenuOpen(false));
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') setMenuOpen(false);
    });

    mobileNavigation.addEventListener('change', () => setMenuOpen(false));
}

const floatingLink = document.querySelector('.whatsapp-float');
if (floatingLink) {
    let frame = 0;
    const occupiedElements = document.querySelectorAll('main h1, main h2, main h3, main p, main img, main a, main button, main summary, footer p, footer a');

    const updateFloatingLink = () => {
        frame = 0;
        const floatingRect = floatingLink.getBoundingClientRect();
        const menuIsOpen = navigation?.classList.contains('is-open');
        const overlapsContent = Array.from(occupiedElements).some((element) => {
            const rect = element.getBoundingClientRect();
            return rect.width > 0 && rect.height > 0 &&
                rect.right > floatingRect.left && rect.left < floatingRect.right &&
                rect.bottom > floatingRect.top && rect.top < floatingRect.bottom;
        });

        floatingLink.hidden = Boolean(menuIsOpen || overlapsContent);
    };

    const scheduleFloatingLinkUpdate = () => {
        if (!frame) frame = window.requestAnimationFrame(updateFloatingLink);
    };

    window.addEventListener('scroll', scheduleFloatingLinkUpdate, { passive: true });
    window.addEventListener('resize', scheduleFloatingLinkUpdate, { passive: true });
    menuButton?.addEventListener('click', scheduleFloatingLinkUpdate);
    window.addEventListener('load', scheduleFloatingLinkUpdate, { once: true });
    scheduleFloatingLinkUpdate();
}

const year = document.getElementById('current-year');
if (year) year.textContent = String(new Date().getFullYear());

const revealElements = document.querySelectorAll(
    '.section-heading, .service-card, .category-card, .visual-card, .process-grid li, .difference-list article, .faq-list details'
);

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    revealElements.forEach((element) => element.classList.add('is-visible'));
} else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });

    revealElements.forEach((element, index) => {
        element.classList.add('reveal-on-scroll');
        element.style.setProperty('--reveal-delay', `${(index % 4) * 70}ms`);
        revealObserver.observe(element);
    });
}
