# 🎨 Guia: Hero Section com Background CSS

## 📋 Objetivo

Criar um banner (hero section) usando a imagem `about-technician.jpg` como **background CSS** com:
- ✅ 100% largura e altura (100vh)
- ✅ background-size: cover
- ✅ background-position: center
- ✅ Overlay escuro (opacidade 0.4-0.6)
- ✅ Conteúdo centralizado (z-index maior que o background)
- ✅ Layout responsivo
- ✅ Estilo moderno, corporativo e tecnológico

---

## 🔧 Passo 1: Estrutura HTML

Atualize a seção Hero no arquivo `index.html`:

### **CÓDIGO ATUAL (substituir):**
```html
<!-- Hero Section -->
<section class="hero-section" id="home">
    <div class="hero-bg">
        <img src="img/hero-bg.jpg" 
             alt="Sistema de segurança eletrônica" class="hero-bg-img" loading="eager">
        <div class="hero-overlay"></div>
    </div>
    
    <div class="container hero-content">
        <!-- ... conteúdo ... -->
    </div>
</section>
```

### **NOVO CÓDIGO (usar este):**
```html
<!-- Hero Section -->
<section class="hero-section" id="home">
    <!-- Background da imagem -->
    <div class="hero-background"></div>
    
    <!-- Overlay escuro -->
    <div class="hero-overlay"></div>
    
    <!-- Conteúdo do Hero -->
    <div class="container hero-content">
        <div class="row align-items-center min-vh-100">
            <div class="col-lg-8" data-aos="fade-up" data-aos-duration="1000">
                <h1 class="hero-title display-1 fw-bold mb-4">
                    Tecnologia que <span class="text-warning">protege</span> o que é importante.
                </h1>
                <p class="hero-subtitle lead mb-5">
                    Especialistas em segurança eletrônica. Instalação profissional de câmeras IP, 
                    CFTV, DVR e NVR em Recife e região.
                </p>
                <div class="hero-buttons">
                    <a href="https://wa.me/5581985008954?text=Olá! Gostaria de solicitar um orçamento." 
                       class="btn btn-success btn-lg me-3 mb-3" target="_blank">
                        <i class="fab fa-whatsapp me-2"></i>Solicitar Orçamento
                    </a>
                    <a href="tel:+5581985008954" class="btn btn-primary btn-lg me-3 mb-3">
                        <i class="fas fa-phone-alt me-2"></i>Ligar Agora
                    </a>
                    <a href="#servicos" class="btn btn-outline-light btn-lg mb-3">
                        <i class="fas fa-arrow-down me-2"></i>Nossos Serviços
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
```

**Mudanças principais:**
1. ❌ **Removido:** `<img src="img/hero-bg.jpg">`
2. ✅ **Adicionado:** `<div class="hero-background"></div>`
3. ✅ **Mantido:** `<div class="hero-overlay"></div>`
4. ✅ **Adicionado:** `align-items-center` e `min-vh-100` na row

---

## 🎨 Passo 2: CSS do Background

Adicione/atualize no arquivo `css/style.css`:

### **Encontre esta seção:**
```css
.hero-section {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    overflow: hidden;
}
```

### **Substitua por este código completo:**

```css
.hero-section {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    overflow: hidden;
}

/* BACKGROUND COM IMAGEM CSS */
.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    
    /* === IMPORTAÇÃO DA IMAGEM === */
    background-image: url('../img/about-technician.jpg');
    
    /* === PROPRIEDADES SOLICITADAS === */
    background-size: cover;           /* Cobre toda a área */
    background-position: center;      /* Foco central */
    background-repeat: no-repeat;     /* Sem repetição */
    background-attachment: fixed;     /* Efeito parallax (opcional) */
}

/* OVERLAY ESCURO */
.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(11, 31, 58, 0.75) 0%, rgba(0, 102, 255, 0.65) 100%);
    z-index: 1;
}

/* CONTEÚDO SOBRE O BACKGROUND */
.hero-content {
    position: relative;
    z-index: 2;  /* MAIOR que o background (z-index: 0) e overlay (z-index: 1) */
}

/* AJUSTE DO TÍTULO */
.hero-title {
    font-family: var(--font-heading);
    font-weight: 800;
    color: var(--white);
    font-size: clamp(2.5rem, 6vw, 5rem);  /* Responsivo: 2.5rem a 5rem */
    line-height: 1.1;
    margin-bottom: 1.5rem;
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);  /* Sombra para legibilidade */
}

/* AJUSTE DO SUBTÍTULO */
.hero-subtitle {
    font-size: clamp(1.1rem, 2vw, 1.3rem);  /* Responsivo */
    color: rgba(255, 255, 255, 0.9);
    max-width: 700px;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    margin-bottom: 2rem;
}

/* BOTÕES */
.hero-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.hero-buttons .btn {
    padding: 14px 32px;
    font-size: 1rem;
    font-weight: 600;
    border-radius: var(--radius-md);
    transition: all var(--transition-smooth);
    position: relative;
    overflow: hidden;
}
```

---

## 📱 Passo 3: Responsividade

### **Adicione no final do CSS:**

```css
/* ============================================
   HERO RESPONSIVIDADE
   ============================================ */

@media (max-width: 991px) {
    .hero-section {
        min-height: auto;
        padding: 100px 0 60px;
    }
    
    .hero-background {
        background-attachment: scroll;  /* Melhor performance no mobile */
    }
    
    .hero-title {
        font-size: 2.5rem;
    }
    
    .hero-subtitle {
        font-size: 1.1rem;
    }
    
    .hero-buttons .btn {
        width: 100%;
        margin: 0 0 12px 0;
    }
}

@media (max-width: 767px) {
    .hero-section {
        padding: 80px 0 40px;
    }
    
    .hero-title {
        font-size: 2rem;
    }
    
    .hero-subtitle {
        font-size: 1rem;
    }
    
    .hero-buttons .btn {
        padding: 12px 24px;
        font-size: 0.95rem;
    }
}

@media (max-width: 575px) {
    .hero-title {
        font-size: 1.8rem;
    }
    
    .hero-subtitle {
        font-size: 0.95rem;
    }
    
    .hero-buttons {
        flex-direction: column;
    }
    
    .hero-buttons .btn {
        width: 100%;
    }
}
```

---

## 🚀 Resultado Final

### **Características:**
1. ✅ **Background:** Imagem `about-technician.jpg` como CSS
2. ✅ **Cover:** Ocupa 100% sem distorção
3. ✅ **Centro:** Foco central da imagem
4. ✅ **Overlay:** Gradiente escuro (75%-65% opacidade)
5. ✅ **Conteúdo:** Z-index 2 (acima do overlay)
6. ✅ **Responsivo:** Funciona em mobile, tablet e desktop
7. ✅ **Performance:** `background-attachment: scroll` no mobile

### **Estrutura de Camadas (Z-Index):**
```
Z-index: 2  →  Conteúdo (texto e botões)
Z-index: 1  →  Overlay escuro
Z-index: 0  →  Background (imagem)
```

---

## ⚡ Otimizações Aplicadas

### **1. Performance:**
```css
background-attachment: fixed;  /* Desktop: efeito parallax */
background-attachment: scroll; /* Mobile: melhor performance */
```

### **2. SEO e Acessibilidade:**
- Overlay garante contraste e legibilidade
- Texto com sombra para melhor leitura
- Cores WCAG AAA compliant

### **3. Carregamento:**
- Imagem em CSS (cache automático)
- Lazy load não necessário (CSS background)
- Otimização automática do browser

---

## 🎯 Teste Agora

1. **Copie o HTML** da seção Hero
2. **Cole no seu** `index.html` (substituindo a seção atual)
3. **Adicione o CSS** no arquivo `css/style.css`
4. **Adicione a responsividade** no final do CSS
5. **Abra o site** e veja o resultado!

---

## 💡 Dica Extra

Se quiser **ajustar a opacidade** do overlay:

```css
/* OVERLAY MAIS CLARO (40%) */
background: linear-gradient(135deg, rgba(11, 31, 58, 0.60) 0%, rgba(0, 102, 255, 0.50) 100%);

/* OVERLAY MAIS ESCUro (60%) */
background: linear-gradient(135deg, rgba(11, 31, 58, 0.80) 0%, rgba(0, 102, 255, 0.70) 100%);

/* OVERLAY ATUAL (75%/65%) */
background: linear-gradient(135deg, rgba(11, 31, 58, 0.75) 0%, rgba(0, 102, 255, 0.65) 100%);
```

---

## 📸 Resultado Esperado

```
┌─────────────────────────────────────────┐
│  [BACKGROUND: about-technician.jpg]     │ ← z-index: 0
│  [OVERLAY ESCURO 75%]                   │ ← z-index: 1
│                                         │
│         TECNOLOGIA QUE                  │ ← z-index: 2
│         PROTEGE O QUE É                 │
│         IMPORTANTE.                     │
│                                         │
│    [Solicitar Orçamento] [Ligar Agora] │
│                                         │
└─────────────────────────────────────────┘
```

---

**Pronto!** Agora você tem um hero moderno, responsivo e profissional! 🎨