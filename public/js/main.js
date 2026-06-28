/* ============================================
   SecurityTech - JavaScript Premium
   Animações, Interações e Funcionalidades
   ============================================ */

/**
 * SecurityTech Site - Main JavaScript
 * Desenvolvido com foco em performance, UX e animações suaves
 * @author SecurityTech Team
 * @version 1.0.0
 */

// ============================================
// CONFIGURAÇÕES GERAIS
// ============================================

const CONFIG = {
    loadingScreenDuration: 1500,
    scrollThreshold: 100,
    counterAnimationDuration: 2000,
    debounceDelay: 250,
    animationDuration: 1000
};

// ============================================
// LOADING SCREEN
// ============================================

/**
 * Gerencia a tela de carregamento inicial
 */
class LoadingScreen {
    constructor() {
        this.loadingScreen = document.getElementById('loading-screen');
        this.init();
    }

    init() {
        // Simula carregamento mínimo para UX
        window.addEventListener('load', () => {
            setTimeout(() => {
                this.hide();
            }, CONFIG.loadingScreenDuration);
        });

        // Fallback se window.load não disparar
        setTimeout(() => {
            this.hide();
        }, CONFIG.loadingScreenDuration + 500);
    }

    hide() {
        if (this.loadingScreen) {
            this.loadingScreen.classList.add('hidden');
            
            // Remove do DOM após transição
            setTimeout(() => {
                this.loadingScreen.style.display = 'none';
                // Dispara evento para inicializar outros scripts
                document.dispatchEvent(new CustomEvent('loadingComplete'));
            }, 600);
        }
    }
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

/**
 * Adiciona efeito de sombra e mudança de tamanho ao scroll
 */
class NavbarScroll {
    constructor() {
        this.navbar = document.getElementById('mainNav');
        this.topBar = document.getElementById('topBar');
        this.lastScroll = 0;
        this.init();
    }

    init() {
        if (!this.navbar) return;

        window.addEventListener('scroll', this.throttle(() => {
            this.handleScroll();
        }, CONFIG.debounceDelay));

        // Estado inicial
        this.handleScroll();
    }

    handleScroll() {
        const currentScroll = window.pageYOffset;

        // Adiciona classe quando scrolla
        if (currentScroll > 50) {
            this.navbar.classList.add('scrolled');
            if (this.topBar) {
                this.topBar.style.transform = 'translateY(-100%)';
            }
        } else {
            this.navbar.classList.remove('scrolled');
            if (this.topBar) {
                this.topBar.style.transform = 'translateY(0)';
            }
        }

        // Smooth transition para top bar
        if (this.topBar) {
            this.topBar.style.transition = 'transform 0.3s ease';
        }

        this.lastScroll = currentScroll;
    }

    // Throttle para otimizar performance
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// ============================================
// BACK TO TOP BUTTON
// ============================================

/**
 * Gerencia botão voltar ao topo
 */
class BackToTop {
    constructor() {
        this.button = document.getElementById('backToTop');
        this.init();
    }

    init() {
        if (!this.button) return;

        // Mostra/esconde baseado no scroll
        window.addEventListener('scroll', this.throttle(() => {
            this.toggle();
        }, CONFIG.debounceDelay));

        // Scroll ao clicar
        this.button.addEventListener('click', () => {
            this.scrollToTop();
        });

        // Estado inicial
        this.toggle();
    }

    toggle() {
        if (window.pageYOffset > 500) {
            this.button.classList.add('visible');
        } else {
            this.button.classList.remove('visible');
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// ============================================
// SMOOTH SCROLL & ACTIVE NAV
// ============================================

/**
 * Gerencia smooth scroll e destaque do menu ativo
 */
class SmoothScroll {
    constructor() {
        this.navLinks = document.querySelectorAll('.nav-link:not(.dropdown-toggle)');
        this.dropdownLinks = document.querySelectorAll('.dropdown-item');
        this.init();
    }

    init() {
        // Smooth scroll para todos os links internos
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                
                // Ignora links vazios ou apenas #
                if (!href || href === '#') return;

                e.preventDefault();
                this.scrollToSection(href);
            });
        });

        // Atualiza menu ativo no scroll
        window.addEventListener('scroll', this.throttle(() => {
            this.updateActiveLink();
        }, 100));

        // Fecha dropdown mobile ao clicar
        document.querySelectorAll('.navbar-collapse .nav-link').forEach(link => {
            link.addEventListener('click', () => {
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                    if (bsCollapse) {
                        bsCollapse.hide();
                    }
                }
            });
        });
    }

    scrollToSection(href) {
        const target = document.querySelector(href);
        if (!target) return;

        const offsetTop = target.offsetTop - 80; // Ajuste para navbar fixa

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });

        // Atualiza URL sem reload
        if (history.pushState) {
            history.pushState(null, null, href);
        }
    }

    updateActiveLink() {
        const scrollPos = window.pageYOffset + 100;

        // Remove classe ativa de todos
        this.navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Adiciona ao seção atual
        document.querySelectorAll('section[id]').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// ============================================
// AOS - ANIMATE ON SCROLL INITIALIZATION
// ============================================

/**
 * Inicializa e customiza o AOS
 */
class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        // Aguarda carregamento completo
        document.addEventListener('loadingComplete', () => {
            // Inicializa AOS
            AOS.init({
                duration: 800,
                easing: 'ease-out-cubic',
                once: true,
                offset: 100,
                delay: 0,
                disable: false,
                startEvent: 'DOMContentLoaded',
                initClassName: 'aos-init',
                animatedClassName: 'aos-animate'
            });

            // Refresh AOS após pequeno delay
            setTimeout(() => {
                AOS.refresh();
            }, 100);
        });

        // Refresh em resize
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                AOS.refresh();
            }, 250);
        });
    }
}

// ============================================
// SWIPER.JS - TESTIMONIALS CAROUSEL
// ============================================

/**
 * Inicializa carrossel de depoimentos
 */
class TestimonialsCarousel {
    constructor() {
        this.swiper = null;
        this.init();
    }

    init() {
        document.addEventListener('loadingComplete', () => {
            const swiperElement = document.querySelector('.testimonials-swiper');
            
            if (swiperElement && typeof Swiper !== 'undefined') {
                this.swiper = new Swiper('.testimonials-swiper', {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    loop: true,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        }
                    },
                    speed: 600,
                    grabCursor: true,
                    keyboard: {
                        enabled: true,
                        onlyInViewport: false
                    },
                    mousewheel: {
                        forceToAxis: true
                    }
                });

                console.log('✅ Swiper testimonials initialized');
            }
        });
    }

    // Método para destruir instância se necessário
    destroy() {
        if (this.swiper) {
            this.swiper.destroy();
        }
    }
}

// ============================================
// COUNTER ANIMATION - ESTATÍSTICAS
// ============================================

/**
 * Anima contadores numéricos
 */
class CounterAnimation {
    constructor() {
        this.counters = document.querySelectorAll('.stat-number-display');
        this.animated = new Set();
        this.init();
    }

    init() {
        if (!this.counters.length) return;

        // Intersection Observer para detectar quando elemento está visível
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.animated.has(entry.target)) {
                    this.animated.add(entry.target);
                    this.animateCounter(entry.target);
                }
            });
        }, observerOptions);

        this.counters.forEach(counter => {
            observer.observe(counter);
        });
    }

    animateCounter(element) {
        const text = element.textContent;
        const finalNumber = this.extractNumber(text);
        const suffix = text.replace(/[0-9.,]/g, '').trim();
        const prefix = text.match(/^[^0-9]*/)[0];
        
        const duration = CONFIG.counterAnimationDuration;
        const steps = 60;
        const stepDuration = duration / steps;
        let current = 0;
        const increment = finalNumber / steps;

        const timer = setInterval(() => {
            current += increment;
            
            if (current >= finalNumber) {
                current = finalNumber;
                clearInterval(timer);
            }

            const formattedNumber = this.formatNumber(Math.floor(current));
            element.textContent = prefix + formattedNumber + suffix;
        }, stepDuration);
    }

    extractNumber(text) {
        // Extrai número de string como "98%" ou "+5.000"
        const numberStr = text.replace(/[^0-9.,]/g, '').replace(/\./g, '').replace(',', '.');
        return parseFloat(numberStr) || 0;
    }

    formatNumber(num) {
        // Formata com separadores de milhar
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
}

// ============================================
// LAZY LOADING IMAGES
// ============================================

/**
 * Otimiza carregamento de imagens com lazy load
 */
class LazyLoad {
    constructor() {
        this.images = document.querySelectorAll('img[loading="lazy"]');
        this.init();
    }

    init() {
        if (!this.images.length) return;

        // Intersection Observer para lazy loading nativo
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        
                        // Adiciona classe quando carregar
                        img.addEventListener('load', () => {
                            img.classList.add('loaded');
                        });

                        // Se já tem src, marca como carregado
                        if (img.complete) {
                            img.classList.add('loaded');
                        }

                        observer.unobserve(img);
                    }
                });
            });

            this.images.forEach(img => {
                imageObserver.observe(img);
            });
        } else {
            // Fallback para browsers antigos
            this.images.forEach(img => {
                img.classList.add('loaded');
            });
        }
    }
}

// ============================================
// MICRO-INTERACTIONS & HOVER EFFECTS
// ============================================

/**
 * Adiciona efeitos de hover e micro-interações
 */
class MicroInteractions {
    constructor() {
        this.init();
    }

    init() {
        // Efeito ripple em botões
        this.addRippleEffect();

        // Hover lift em cards
        this.addHoverLift();

        // Efeito magnético em botões principais
        this.addMagneticEffect();

        // Parallax sutil no hero
        this.addParallaxEffect();
    }

    addRippleEffect() {
        document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;

                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.5);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s ease-out;
                    pointer-events: none;
                `;

                this.appendChild(ripple);

                setTimeout(() => ripple.remove(), 600);
            });
        });

        // Adiciona keyframe para ripple
        if (!document.getElementById('ripple-style')) {
            const style = document.createElement('style');
            style.id = 'ripple-style';
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    addHoverLift() {
        document.querySelectorAll('.glass-card, .category-card, .product-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px)';
            });

            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }

    addMagneticEffect() {
        document.querySelectorAll('.btn-primary, .btn-warning').forEach(button => {
            button.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) translateY(-2px)`;
            });

            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translate(0, 0) translateY(0)';
            });
        });
    }

    addParallaxEffect() {
        const heroImage = document.querySelector('.hero-bg-img');
        
        if (!heroImage) return;

        window.addEventListener('scroll', this.throttle(() => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.3;

            if (scrolled < window.innerHeight) {
                heroImage.style.transform = `scale(1.1) translateY(${rate}px)`;
            }
        }, 16));
    }

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// ============================================
// PRODUCT CARD INTERACTIONS
// ============================================

/**
 * Adiciona interações aos cards de produtos
 */
class ProductInteractions {
    constructor() {
        this.init();
    }

    init() {
        // Quick view em produtos
        document.querySelectorAll('.product-card').forEach(card => {
            // Efeito de destaque no hover
            card.addEventListener('mouseenter', function() {
                const image = this.querySelector('.product-image');
                if (image) {
                    image.style.transform = 'scale(1.08)';
                }
            });

            card.addEventListener('mouseleave', function() {
                const image = this.querySelector('.product-image');
                if (image) {
                    image.style.transform = 'scale(1)';
                }
            });

            // Animação de clique nos botões
            const buttons = card.querySelectorAll('button');
            buttons.forEach(button => {
                button.addEventListener('click', function(e) {
                    // Efeito de clique
                    this.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        this.style.transform = 'scale(1)';
                    }, 150);

                    // Aqui poderia adicionar lógica de add ao carrinho
                    console.log('Botão clicado:', this.textContent.trim());
                });
            });
        });
    }
}

// ============================================
// FAQ ACCORDION SMOOTH
// ============================================

/**
 * Melhora experiência do accordion
 */
class FAQAccordion {
    constructor() {
        this.accordionItems = document.querySelectorAll('.accordion-item');
        this.init();
    }

    init() {
        this.accordionItems.forEach((item, index) => {
            const button = item.querySelector('.accordion-button');
            const collapse = item.querySelector('.accordion-collapse');

            if (!button || !collapse) return;

            // Adiciona delay escalonado
            button.setAttribute('data-aos-delay', (index + 1) * 50);

            // Fecha outros itens ao abrir um (opcional - comportamento accordion padrão)
            button.addEventListener('click', function() {
                const isExpanding = !this.classList.contains('collapsed');
                const parentAccordion = this.closest('.accordion');
                
                // Fecha todos os outros
                if (isExpanding && parentAccordion) {
                    const allButtons = parentAccordion.querySelectorAll('.accordion-button');
                    const allCollapses = parentAccordion.querySelectorAll('.accordion-collapse');
                    
                    allButtons.forEach(btn => {
                        if (btn !== this && !btn.classList.contains('collapsed')) {
                            btn.classList.add('collapsed');
                            const collapseId = btn.getAttribute('data-bs-target');
                            if (collapseId) {
                                const collapseEl = document.querySelector(collapseId);
                                if (collapseEl) {
                                    const bsCollapse = bootstrap.Collapse.getInstance(collapseEl);
                                    if (bsCollapse) {
                                        bsCollapse.hide();
                                    }
                                }
                            }
                        }
                    });
                }
            });
        });
    }
}

// ============================================
// MOBILE MENU ENHANCEMENT
// ============================================

/**
 * Melhora experiência do menu mobile
 */
class MobileMenu {
    constructor() {
        this.navbarToggler = document.querySelector('.navbar-toggler');
        this.navbarCollapse = document.querySelector('.navbar-collapse');
        this.init();
    }

    init() {
        if (!this.navbarToggler || !this.navbarCollapse) return;

        // Fecha menu ao clicar fora
        document.addEventListener('click', (e) => {
            const isClickInside = this.navbarCollapse.contains(e.target);
            const isToggler = this.navbarToggler.contains(e.target);
            
            if (!isClickInside && !isToggler && 
                this.navbarCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(this.navbarCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });

        // Previne scroll do body quando menu está aberto
        this.navbarCollapse.addEventListener('show.bs.collapse', () => {
            document.body.style.overflow = 'hidden';
        });

        this.navbarCollapse.addEventListener('hide.bs.collapse', () => {
            document.body.style.overflow = '';
        });
    }
}

// ============================================
// FORM VALIDATION (IF NEEDED)
// ============================================

/**
 * Utilitários para validação de formulários
 */
class FormValidator {
    static email(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    static phone(phone) {
        const re = /^[\d\s\-\+\(\)]{10,}$/;
        return re.test(phone);
    }

    static required(value) {
        return value && value.trim() !== '';
    }
}

// ============================================
// PERFORMANCE OPTIMIZATIONS
// ============================================

/**
 * Otimizações de performance
 */
class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        // Preload de fontes críticas
        this.preloadFonts();

        // Otimiza eventos de scroll
        this.optimizeScrollEvents();

        // Lazy load de seções abaixo do fold
        this.lazyLoadSections();
    }

    preloadFonts() {
        // Adiciona preload para fontes críticas
        const fontPreload = `
            <link rel="preload" 
                  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" 
                  as="style" 
                  onload="this.onload=null;this.rel='stylesheet'">
            <noscript>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
            </noscript>
        `;
        
        // Apenas se não existir
        if (!document.querySelector('link[href*="Inter"]')) {
            document.head.insertAdjacentHTML('beforeend', fontPreload);
        }
    }

    optimizeScrollEvents() {
        // Usa requestAnimationFrame para otimizar animações de scroll
        let ticking = false;

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    // Todas as funções de scroll são chamadas aqui
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    lazyLoadSections() {
        // Carrega seções sob demanda
        const sectionsToLazyLoad = document.querySelectorAll(
            '.blog-section, .faq-section, .testimonials-section'
        );

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('loaded');
                    sectionObserver.unobserve(entry.target);
                }
            });
        }, { rootMargin: '200px' });

        sectionsToLazyLoad.forEach(section => {
            sectionObserver.observe(section);
        });
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Funções utilitárias
 */
const Utils = {
    // Debounce para otimizar eventos
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Throttle para eventos frequentes
    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // Verifica se elemento está visível na viewport
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },

    // Formata moeda brasileira
    formatCurrency(value) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    },

    // Formata número de telefone
    formatPhone(phone) {
        const cleaned = phone.replace(/\D/g, '');
        const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
        if (match) {
            return `(${match[1]}) ${match[2]}-${match[3]}`;
        }
        return phone;
    }
};

// ============================================
// INITIALIZATION
// ============================================

/**
 * Inicializa todas as funcionalidades
 */
class App {
    constructor() {
        this.init();
    }

    init() {
        // Aguarda DOM estar pronto
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.start();
            });
        } else {
            this.start();
        }
    }

    start() {
        console.log('🚀 Inicializando SecurityTech...');

        // Inicializa todas as classes
        new LoadingScreen();
        new NavbarScroll();
        new BackToTop();
        new SmoothScroll();
        new ScrollAnimations();
        new TestimonialsCarousel();
        new CounterAnimation();
        new LazyLoad();
        new MicroInteractions();
        new ProductInteractions();
        new FAQAccordion();
        new MobileMenu();
        new PerformanceOptimizer();
        
        // WhatsApp button pulse animation
        this.initWhatsAppButton();

        // Torna utilitários disponíveis globalmente
        window.Utils = Utils;

        console.log('✅ SecurityTech inicializado com sucesso!');
        console.log('📊 Performance:', this.checkPerformance());
    }

    checkPerformance() {
        // Verifica performance do navegador
        if ('performance' in window) {
            const perfData = window.performance.timing;
            const loadTime = perfData.loadEventEnd - perfData.navigationStart;
            return {
                loadTime: `${(loadTime / 1000).toFixed(2)}s`,
                readyState: document.readyState
            };
        }
        return { message: 'Performance API não disponível' };
    }
    
    initWhatsAppButton() {
        // Adiciona tooltip ou animação especial no botão do WhatsApp
        const whatsappBtn = document.querySelector('.whatsapp-float');
        
        if (whatsappBtn) {
            // Adiciona attributo para analytics
            whatsappBtn.setAttribute('rel', 'noopener noreferrer');
            
            // Tracking de clique (para analytics futuro)
            whatsappBtn.addEventListener('click', () => {
                console.log('✅ Botão WhatsApp clicado');
                // Aqui você pode adicionar Google Analytics ou Facebook Pixel
            });
            
            // Remove animação após primeiro clique
            let clicked = false;
            whatsappBtn.addEventListener('click', () => {
                if (!clicked) {
                    clicked = true;
                    setTimeout(() => {
                        whatsappBtn.style.animation = 'none';
                    }, 2000);
                }
            });
        }
    }
}

// ============================================
// INICIALIZAÇÃO
// ============================================

// Inicia aplicação quando DOM estiver pronto
const app = new App();

// ============================================
// EXPORT PARA DEBUG (DESENVOLVIMENTO)
// ============================================

if (typeof window !== 'undefined') {
    window.SecurityTech = {
        app,
        Utils,
        CONFIG
    };
}

// ============================================
// SERVICE WORKER REGISTRATION (OPCIONAL)
// ============================================

/**
 * Registra Service Worker para cache (PWA)
 * Descomente abaixo para habilitar
 */
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('✅ Service Worker registrado:', registration.scope);
            })
            .catch(error => {
                console.log('❌ Service Worker falhou:', error);
            });
    });
}
*/

// ============================================
// FIM DO JAVASCRIPT
// ============================================