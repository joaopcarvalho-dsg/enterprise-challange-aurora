# Aurora Protagonize — Landing Page

Landing page desenvolvida em HTML e CSS puro como entrega do **Enterprise Challenge — People First Cup**, turma 1TWDOA.

## 🌐 Deploy

Acesse a landing page em produção:
**[enterprise-challange-aurora.vercel.app](https://enterprise-challange-aurora.vercel.app/)**

## 🎬 Vídeo Pitch

[![Assista ao vídeo pitch](https://cdn.loom.com/sessions/thumbnails/6e48be437db641dda552775bc7baf2f8-with-play.gif)](https://www.loom.com/share/6e48be437db641dda552775bc7baf2f8)

---

## Sobre o projeto

A Aurora é um RH as a Service que transforma dados espalhados em uma visão clara por experiência de cada colaborador — para que líderes tomem decisões mais conscientes, criem planos de ação individuais e desenvolvam pessoas com propósito.

Este projeto consiste no redesign e desenvolvimento da landing page da Aurora, com foco em comunicação B2B, identidade visual da marca e experiência de navegação convincente.

---

## Estrutura de pastas

```
aurora/
├── index.html
├── css/
│   ├── variables.css   # Tokens de cor e variáveis globais
│   ├── reset.css       # Reset e base global
│   ├── typo.css        # Escala tipográfica
│   ├── grid.css        # Container e grid
│   ├── components.css  # Botões, cards e formulário
│   └── main.css        # Layout das sections e responsivo
├── js/
│   └── form.js         # Envio do formulário via fetch + Formspree
└── images/
    └── ...             # Imagens, ícones e ilustrações
```

---

## Seções da página

| # | Seção | Objetivo |
|---|---|---|
| 1 | Hero | Apresentar o problema e CTA principal |
| 2 | O Problema | Dados reais sobre o desafio da liderança com dados de RH |
| 3 | Como Funciona | Da visão geral ao plano de ação individual |
| 4 | Plataforma | 4 funcionalidades principais com print real |
| 5 | Depoimentos | Vozes reais do mercado validando a dor |
| 6 | Planos | Rosa e Violeta com preços e CTAs |
| 7 | Formulário | Captação e qualificação de lead com envio funcionando |

---

## Identidade visual

| Token | Valor |
|---|---|
| Rosa Aurora | `#E744A2` |
| Roxo Aurora | `#7959AB` |
| Preto (textos) | `#1F1F1F` |
| Branco | `#FFFFFF` |
| Fundo escuro | `#1A1325` |
| Fundo roxo claro | `#F0EDF7` |

**Tipografia:** [Geist](https://fonts.google.com/specimen/Geist) via Google Fonts

---

## Formulário de captação de lead

O formulário coleta e envia os dados via **[Formspree](https://formspree.io)**, sem necessidade de backend.

**Campos:**
- Nome completo
- E-mail corporativo
- Empresa
- Nº de colaboradores
- Maior desafio de pessoas (opcional)

**Como funciona (`js/form.js`):**
1. Intercepta o submit com `event.preventDefault()` — sem recarregar a página
2. Coleta os dados com `FormData`
3. Envia para o Formspree via `fetch` com `method: POST`
4. Exibe mensagem de sucesso ou erro conforme a resposta

---

## Recursos de acessibilidade

- `lang="pt-br"` declarado no HTML
- Atributo `alt` descritivo em todas as imagens
- `aria-label` no botão de menu mobile
- Hierarquia semântica de headings (`h1` → `h2` → `h4` → `h5`)
- Tags semânticas: `<header>`, `<nav>`, `<section>`, `<footer>`, `<form>`
- `<label>` vinculado a cada `<input>` via atributo `for`/`id`
- Atributo `name` em todos os campos do formulário
- Contraste de cores adequado entre texto e fundo
- `scroll-behavior: smooth` para navegação acessível entre seções

---

## Navegação

O header contém links âncora para todas as seções principais:

| Label | Âncora |
|---|---|
| Como funciona | `#como-funciona` |
| Plataforma | `#plataforma` |
| Planos | `#planos` |
| Depoimentos | `#depoimentos` |
| Agendar demo | `#demo` |

---

## Tecnologias

- HTML5 semântico
- CSS3 puro (sem frameworks)
- JavaScript puro (sem frameworks)
- Google Fonts (Geist)
- Formspree (envio de formulário)
- Vercel (deploy)

---

## Breakpoints responsivos

| Breakpoint | Dispositivo alvo |
|---|---|
| `1100px` | Laptops menores |
| `991px` | Tablets landscape |
| `768px` | Tablets portrait |
| `560px` | Mobile |

---

## Como rodar localmente

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/aurora-landing.git
```
2. Abra o arquivo `index.html` diretamente no navegador — não requer servidor ou dependências.

---

Desenvolvido por [Nomes dos integrantes] · People First Cup 2025
