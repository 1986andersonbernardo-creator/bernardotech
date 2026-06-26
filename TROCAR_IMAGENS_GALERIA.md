# Como Trocar as Imagens da Galeria

## 📸 Passo a Passo

### 1. Adicione suas imagens na pasta `img/`

Coloque suas novas imagens de instalações na pasta `img/` com nomes fáceis:

```
img/
├── gallery-1.jpg
├── gallery-2.jpg
├── gallery-3.jpg
├── gallery-4.jpg
├── gallery-5.jpg
└── gallery-6.jpg
```

**Recomendações:**
- Use imagens em formato JPG ou PNG
- Tamanho recomendado: 800x600px ou 1920x1080px
- Peso máximo: 500KB por imagem (para carregamento rápido)
- Nomes sem espaços: `galeria-1.jpg`, `instalacao-01.jpg`, etc.

---

### 2. Edite o arquivo `index.html`

Abra o `index.html` e procure pela seção **"Galeria de Instalações"** (aproximadamente linha 280).

Você verá este código:

```html
<div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
    <div class="gallery-item">
        <img src="img/gallery-1.jpg" 
             alt="Instalação de câmeras" class="gallery-image img-fluid rounded-3 shadow" loading="lazy">
    </div>
</div>
```

**Basta trocar `gallery-1.jpg` pelo nome da sua imagem:**

```html
<div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
    <div class="gallery-item">
        <img src="img/SUA-IMAGEM.jpg" 
             alt="Descrição da sua imagem" class="gallery-image img-fluid rounded-3 shadow" loading="lazy">
    </div>
</div>
```

---

### 3. Exemplo Prático

Se você tem 6 fotos de instalações:

**Na pasta `img/`:**
- `instalacao-1.jpg` (câmera bullet)
- `instalacao-2.jpg` (DVR Intelbras)
- `instalacao-3.jpg` (central de monitoramento)
- `instalacao-4.jpg` (técnico trabalhando)
- `instalacao-5.jpg` (câmera dome)
- `instalacao-6.jpg` (cabeamento)

**No HTML, substitua:**

```html
<!-- IMAGEM 1 -->
<div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
    <div class="gallery-item">
        <img src="img/instalacao-1.jpg" 
             alt="Câmera Bullet instalada em residência" 
             class="gallery-image img-fluid rounded-3 shadow" loading="lazy">
    </div>
</div>

<!-- IMAGEM 2 -->
<div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="150">
    <div class="gallery-item">
        <img src="img/instalacao-2.jpg" 
             alt="DVR Intelbras instalado" 
             class="gallery-image img-fluid rounded-3 shadow" loading="lazy">
    </div>
</div>

<!-- Continue para as outras 4 imagens... -->
```

---

## ⚡ Dicas Importantes

### 1. **Otimize suas imagens ANTES de adicionar**

Use ferramentas para reduzir o peso:
- [TinyPNG](https://tinypng.com/) - Compressor online gratuito
- [Squoosh](https://squoosh.app/) - Do Google
- [ImageOptim](https://imageoptim.com/) - Para Mac

**Meta:** Imagens entre 100KB e 500KB

### 2. **Use nomes sem espaços e sem acentos**

✅ Certo: `instalacao-1.jpg`, `camera-bullet.jpg`
❌ Errado: `Instalação 1.jpg`, `câmera bullet.jpg`

### 3. **Sempre coloque o atributo `alt`**

```html
<!-- ✅ BOM -->
<img src="img/galeria-1.jpg" alt="Instalação de câmeras em condomínio">

<!-- ❌ RUIM -->
<img src="img/galeria-1.jpg">
```

O atributo `alt` ajuda no SEO e acessibilidade.

---

## 📝 Código Completo da Galeria (para Copiar)

Aqui está o código completo da seção de galeria já adaptado para você personalizar:

```html
<!-- Seção Galeria -->
<section class="gallery-section py-5 bg-light" id="galeria">
    <div class="container">
        <div class="section-header text-center mb-5" data-aos="fade-up">
            <h2 class="section-title">Galeria de Instalações</h2>
            <p class="section-subtitle">Conheça alguns dos nossos trabalhos</p>
        </div>
        
        <div class="row g-4">
            <!-- Imagem 1 -->
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div class="gallery-item">
                    <img src="img/instalacao-1.jpg" 
                         alt="Instalação de câmeras IP" 
                         class="gallery-image img-fluid rounded-3 shadow" loading="lazy">
                </div>
            </div>
            
            <!-- Imagem 2 -->
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="150">
                <div class="gallery-item">
                    <img src="img/instalacao-2.jpg" 
                         alt="DVR Intelbras instalado" 
                         class="gallery-image img-fluid rounded-3 shadow" loading="lazy">
                </div>
            </div>
            
            <!-- Imagem 3 -->
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div class="gallery-item">
                    <img src="img/instalacao-3.jpg" 
                         alt="Central de monitoramento" 
                         class="gallery-image img-fluid rounded-3 shadow" loading="lazy">
                </div>
            </div>
            
            <!-- Imagem 4 -->
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="250">
                <div class="gallery-item">
                    <img src="img/instalacao-4.jpg" 
                         alt="Técnico instalando sistema de segurança" 
                         class="gallery-image img-fluid rounded-3 shadow" loading="lazy">
                </div>
            </div>
            
            <!-- Imagem 5 -->
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div class="gallery-item">
                    <img src="img/instalacao-5.jpg" 
                         alt="Câmera Dome 360°" 
                         class="gallery-image img-fluid rounded-3 shadow" loading="lazy">
                </div>
            </div>
            
            <!-- Imagem 6 -->
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="350">
                <div class="gallery-item">
                    <img src="img/instalacao-6.jpg" 
                         alt="Cabeamento organizado e certificado" 
                         class="gallery-image img-fluid rounded-3 shadow" loading="lazy">
                </div>
            </div>
        </div>
    </div>
</section>
```

---

## 🎯 Resumo Rápido

1. **Salve suas fotos** na pasta `img/`
2. **Abra o arquivo** `index.html`
3. **Procure pela seção** "Galeria de Instalações"
4. **Substitua os nomes** das imagens nos atributos `src`
5. **Atualize os textos** do atributo `alt`
6. **Salve o arquivo** e recarregue o site

Pronto! Suas novas imagens aparecerão na galeria.

---

## 💡 Dica Extra

Se quiser adicionar **MAIS de 6 imagens**, basta:

1. Adicionar mais `div` com classe `col-lg-4 col-md-6`
2. Aumentar o `data-aos-delay` (ex: 400, 450, 500...)
3. Usar uma nova linha (ex: `instalacao-7.jpg`)

Exemplo:
```html
<div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
    <div class="gallery-item">
        <img src="img/instalacao-7.jpg" 
             alt="Sua descrição" 
             class="gallery-image img-fluid rounded-3 shadow" loading="lazy">
    </div>
</div>
```

---

**Dúvidas?** É só seguir esses passos que funciona!