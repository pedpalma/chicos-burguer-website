<h1 align="center"> Chico's Burguer - Hamburgueria Gourmet</h1>

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

Site institucional da hamburgueria gourmet **Chico's Burguer**, com 4 páginas (Home, Produtos, Contato e Pedidos), construído em **HTML + CSS + JavaScript** puro.

##  Identidade Visual

- **Paleta de cores**: marrom claro/bege com tons de marrom alaranjado e escuro
  - `#FFF5E6` : fundo bege claro
  - `#3B1F0E` : marrom escuro (header / footer)
  - `#C97B3A` : marrom alaranjado (destaques)
  - `#8B5A2B` : marrom médio (texto)
- **Fontes**: Cormorant Garamond (display/títulos), Playfair Display (subtítulos), Lora (corpo)
- **Estilo**: Sofisticado, gourmet, visualmente confortável e levemente apelativo, inspirado no [domrestaurante.com.br](https://domrestaurante.com.br)

## Estrutura de Arquivos

```
chicos-burguer/
├── index.html                  → Home
├── pages/
│   ├── produtos.html           → Cardápio com cards + popup
│   ├── contato.html            → Formulário de contato
│   └── pedidos.html            → CRUD de pedidos (tabela)
└── assets/
    ├── css/
    │   ├── base.css            → Top bar, nav, FAQ, footer (compartilhado)
    │   ├── index.css           → Hero slider, sobre nós, mapa, vídeo
    │   ├── produtos.css        → Cards de produtos + popup modal
    │   ├── contato.css         → Formulário estilizado
    │   └── pedidos.css         → Tabela + form de adição
    ├── js/
    │   ├── base.js             → Hamburger menu mobile
    │   ├── slider.js           → Hero slider automático
    │   ├── faq.js              → Accordion do FAQ
    │   ├── produtos.js         → Abre/fecha popup de produto
    │   ├── contato.js          → Validação + máscara de telefone
    │   ├── pedidos.js          → Cálculo de totais e formatação BRL
    │   ├── adicionar_pedido.js → Inserir novo pedido na tabela
    │   ├── remover_pedido.js   → Duplo clique para excluir
    │   └── buscar_pedido.js    → Filtragem em tempo real
    └── images/                 → Coloque aqui suas imagens
```

## Componentes Comuns (Base Top / Base Bottom)

### Base Top (em todas as páginas)

- **Top bar** com telefone, horário e endereço
- **Header** com logo, navegação e botão hamburger (mobile)

### Base Bottom (em todas as páginas)

- **FAQ** com perguntas frequentes (accordion)
- **Footer** com 3 colunas: marca, contato e mais informações
- Direitos reservados

## Páginas

### Home (`index.html`)

- Hero com slider automático (3 slides, 6s cada)
- Seção "Sobre Nós"
- Mapa Google "Onde nos encontrar"
- Vídeo do YouTube institucional

### Produtos (`pages/produtos.html`)

- Grid de 6 cards de hambúrgueres com nome, descrição e preço
- Clique no card abre **popup modal** com detalhes completos

### Contato (`pages/contato.html`)

- Formulário completo com: nome, e-mail, telefone, motivo, mensagem
- Radio button para preferência de contato
- Sistema de avaliação por estrelas
- Checkbox de newsletter

### Pedidos (`pages/pedidos.html`)

- Tabela com 6 pedidos pré-cadastrados (hardcoded)
- Campo de busca por nome do cliente
- Formulário para adicionar novo pedido (seleção auto-preenche preço)
- **Duplo clique** em uma linha para excluí-la

Locais onde adicionar imagens:

1. **Logo** (em todas as páginas) → `assets/images/logo-image.png`
2. **3 banners do hero slider** (home) → 1920x600
3. **Foto sobre nós** (home) → 600x400
4. **6 fotos dos produtos** (produtos) → 500x300
5. **Imagem do popup** (produtos) → 450x300

```

## Responsividade

Layout totalmente responsivo, testado em:
- Desktop (1920px+, 1366px, 1024px)
- Tablet (768px)
- Mobile (480px, 360px)

O menu hamburger aparece automaticamente em telas ≤ 768px.

---

© 2026 Chico's Burguer - Hamburgueria Gourmet. Todos os direitos reservados.
```
