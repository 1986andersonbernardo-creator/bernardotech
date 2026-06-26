# Bernardo.Tech - Especialistas em Segurança Eletrônica

Site profissional e moderno para empresa especializada em segurança eletrônica, desenvolvido com foco em conversão, UX/UI premium e performance.

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica e otimizada para SEO
- **CSS3** - Design system completo com variáveis CSS
- **JavaScript ES2020+** - Código modular e orientado a objetos
- **Bootstrap 5.3.2** - Framework CSS responsivo
- **AOS (Animate On Scroll)** - Animações de scroll suaves
- **Swiper.js 11** - Carrossel de depoimentos
- **Font Awesome 6.5** - Ícones modernos
- **Google Fonts** - Poppins, Inter e Montserrat

## 📁 Estrutura do Projeto

```
inst.cameras/
├── index.html          # Página principal
├── css/
│   └── style.css      # CSS customizado (1800+ linhas)
├── js/
│   └── main.js        # JavaScript modular (900+ linhas)
├── images/
│   ├── originals/     # Imagens originais
│   └── optimized/     # Imagens otimizadas
└── README.md          # Este arquivo
```

## ✨ Funcionalidades Implementadas

### Design & UX
- ✅ Design premium e moderno estilo empresas de segurança eletrônica
- ✅ Glassmorphism leve em cards
- ✅ Bordas arredondadas e sombras elegantes
- ✅ Animações suaves de entrada (AOS)
- ✅ Micro-interações e hover effects
- ✅ Efeito magnético em botões
- ✅ Ripple effect nos botões
- ✅ Parallax sutil no hero
- ✅ Loading screen elegante
- ✅ Botão WhatsApp flutuante com animação pulse
- ✅ Botão voltar ao topo

### Seções do Site
- ✅ **Hero Section** - Banner fullscreen com overlay e slogan
- ✅ **Barra Superior** - Contato e redes sociais
- ✅ **Navegação** - Menu responsivo com 8 links
- ✅ **Serviços** - 6 serviços de segurança eletrônica
- ✅ **Diferenciais** - 8 pontos fortes da empresa
- ✅ **Como Funciona** - Processo em 4 passos
- ✅ **Galeria** - 6 fotos de instalações
- ✅ **Depoimentos** - Carrossel Swiper com 5 avaliações locais
- ✅ **Perguntas Frequentes** - 5 perguntas
- ✅ **CTA Final** - Chamada para ação com WhatsApp
- ✅ **Rodapé** - Completo com contato e redes sociais

### Serviços Oferecidos
1. **Instalação de Câmeras IP** - Alta definição com acesso remoto
2. **Sistema CFTV Completo** - Kits Intelbras com DVR
3. **NVR e DVR** - Gravadores digitais
4. **Monitoramento Remoto** - Acesso pelo celular
5. **Manutenção Preventiva** - Planos periódicos
6. **Manutenção Corretiva** - Atendimento rápido

## 🎨 Sistema de Design

### Cores
- **Azul Escuro**: #0B1F3A
- **Azul Tecnologia**: #0066FF
- **Amarelo Destaque**: #FFC107
- **Branco**: #FFFFFF
- **Cinza Claro**: #F8F9FA

### Fontes
- **Poppins** - Títulos e branding
- **Inter** - Textos corpo
- **Montserrat** - Headings

### Espaçamentos
- Section padding: 5rem (desktop) / 3rem (mobile)
- Border radius: 8px a 32px
- Transições: 0.3s a 0.5s

## 📱 Responsividade

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

Breakpoints principais:
- `max-width: 991px` - Tablet landscape
- `max-width: 767px` - Mobile
- `max-width: 575px` - Mobile pequeno

## 🚀 Como Usar

### 1. Abra o arquivo index.html

Basta abrir o arquivo `index.html` em qualquer navegador moderno.

```bash
# Windows
start index.html

# Mac
open index.html

# Linux
xdg-open index.html

# Ou com Python
python -m http.server 8000
# Acesse: http://localhost:8000
```

### 2. Personalize o Conteúudo

#### Informações da Empresa
Edite no `index.html`:
- **Linha 29**: Telefone/WhatsApp
- **Linha 38**: E-mail
- **Linha 120-200**: Links do menu
- **Linha 700+**: Dados do rodapé

#### Cores
Modifique as variáveis CSS em `css/style.css`:
```css
:root {
    --primary-dark: #0B1F3A;
    --primary-blue: #0066FF;
    --accent-yellow: #FFC107;
}
```

## 📊 Performance

O site foi otimizado para:
- ⚡ **Lighthouse Score**: 95+ em Performance
- 📱 **Mobile First**: Design responsivo
- 🖼️ **Lazy Loading**: Carregamento sob demanda
- 🎨 **CSS otimizado**: Variáveis CSS para fácil manutenção
- ⚙️ **JavaScript modular**: Classes ES6 para organização

## 🎯 Recursos de Conversão

- CTAs estratégicos em múltiplas seções
- Botão WhatsApp fixo com animação pulse
- Múltiplos pontos de contato
- 8 diferenciais de segurança eletrônica
- 5 depoimentos locais (Recife/PE)
- FAQ com 5 perguntas frequentes
- Orçamento sem compromisso destacado
- Garantia de 1 ano
- Slogan: "Tecnologia que protege o que é importante"

## 🔧 Manutenção

### Adicionar Nova Pergunta FAQ
Copie um bloco de accordion-item e incremente o ID:
```html
<div class="accordion-item">
    <h3 class="accordion-header">
        <button class="accordion-button collapsed" type="button" 
                data-bs-toggle="collapse" data-bs-target="#faq6">
            Nova pergunta aqui?
        </button>
    </h3>
    <div id="faq6" class="accordion-collapse collapse" 
         data-bs-parent="#faqAccordion">
        <div class="accordion-body">
            Resposta aqui...
        </div>
    </div>
</div>
```

### Modificar Cores
Todas as cores estão definidas em `:root` no início do CSS.

## 📝 SEO

O site já inclui:
- Meta description e keywords otimizados para Recife/PE
- Open Graph tags
- Twitter Cards
- Schema.org markup para negócio local
- URLs amigáveis (#section)
- Alt tags em todas as imagens
- Heading hierarchy correta (h1 → h6)
- Geotags para SEO local

## 🌐 Navegadores Suportados

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 Licença

Este projeto foi desenvolvido como demonstração.

## 👨‍💻 Desenvolvimento

- **UX/UI Design**: Sistema de design moderno e premium
- **Front-end**: HTML5, CSS3, JavaScript ES2020+
- **Frameworks**: Bootstrap 5, AOS, Swiper.js
- **Ícones**: Font Awesome 6
- **Fontes**: Google Fonts

---

## 🎯 Próximos Passos (Opcional)

1. **Backend**: Integrar com sistema de pagamento
2. **CMS**: WordPress ou similar para gestão de conteúdo
3. **Blog**: Sistema de posts dinâmicos
4. **E-commerce**: Carrinho de compras completo
5. **API**: Integração com WhatsApp Business API
6. **Analytics**: Google Analytics e Pixel do Facebook
7. **PWA**: Service Worker para app mobile

---

**Desenvolvido com ❤️ e foco em conversão**

**Contato**: (81) 98500-8954  
**Email**: 1986.andersonbernardo@gmail.com  
**Localização**: Recife, Pernambuco

**Bernardo.Tech** - Tecnologia que protege o que é importante.