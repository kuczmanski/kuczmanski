# Olá, eu sou o Mateus 👋

**Desenvolvedor Full Stack · produtos de ponta a ponta**

Construo sistemas completos: arquitetura, backend, frontend, mobile, banco, integrações e deploy. A maior parte do trabalho fica em repositórios privados (produtos e clientes). Abaixo está o que de fato já saiu do zero — stack, decisões e o problema que cada um resolve.

📍 Brasil

---

## Stack principal

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Flutter](https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)

**Também no dia a dia:** Spring Security · JPA/Hibernate · Thymeleaf · JWT · OAuth (Google) · Flyway · Express · Vite · Tailwind · shadcn/ui · WhatsApp Cloud API / Baileys / whatsapp-web.js · Ollama · WireGuard · JavaFX · GitHub Actions

---

## O que estou construindo

**CrewOS** — sistema operacional de atendimento com colaboradores digitais (IA). Não é um chatbot genérico: cada empresa (tenant) configura **agentes por vertical e objetivo** (vender, agendar, qualificar, suporte), com base de conhecimento própria e memória por contato. WhatsApp é o primeiro canal.

- Java 17 · Spring Boot 3.2 · Spring Security · JPA · Thymeleaf no painel · MySQL 8 · H2 nos testes
- Multi-tenant: empresa, papéis `EMPRESA`/`ADMIN`, inbox, CRM leve, agenda e takeover humano
- WhatsApp Cloud API (Meta) com webhook assinado + Embedded Signup; sidecar Node (`whatsapp-web.js`) como legado, isolado por tenant
- Orquestrador local com Ollama (`qwen2.5:7b`): prompt por vertical/objetivo, FAQ sem LLM quando casa, ferramentas internas (`<<<ACOES>>>`) que atualizam CRM/agenda
- Conhecimento em texto, FAQ, URL e PDF (Apache PDFBox) · landing em React/Vite · Docker no deploy

---

## O que já construí

Sistemas que saíram do zero, com stack real — não tutoriais.

### Velaris — ERP SaaS para personal trainer
Gestão de alunos, agenda, financeiro e assinatura (planos Essencial / Pro / Elite).

- Java 17 · Spring Boot · MySQL 8 · Maven
- Billing com Asaas (API + webhooks) · OAuth Google · e-mail SMTP
- Perfis `dev`/`prod` com secrets por env · testes com H2 em memória

### Trego — app de frete (cliente, motorista e admin)
API REST + app mobile para conectar quem precisa de frete a quem conduz.

- Backend: Spring Boot 3.3 · Java 21 · MySQL · JWT · Docker · Actuator
- App: Flutter (Dart) · módulos cliente / motorista / admin

### RemoteX — acesso remoto (estilo AnyDesk)
Quatro módulos Java 17: `common`, relay WebSocket com TLS, host que captura tela/executa comandos, cliente JavaFX com multi-monitor, mouse e teclado.

### VPN WireGuard
Painel web + gerenciador de servidor + cliente Windows standalone.

- Python · WireGuard · SQLite · geração de chaves/configs · executável com config embutida · testes com pytest

### Outros produtos
- **Biblioteca Oculta / Frutas Virais** — servidor Node único (Express, MySQL, JWT, bcrypt, Baileys, uploads, PM2/VPS)
- **Gestão web fullstack** — Spring Boot (Security, JPA, JWT, Flyway, MySQL) + front Vite/Tailwind/shadcn
- **Treinador de poker (local)** — OCR da mesa (CV → Paddle/Tesseract) + motor de decisão Monte Carlo (~20k trials), pot odds e ranges por posição
- **Simulação cognitiva** — visualização em Pygame + LLM local (Ollama) para experimentação de agentes

> O código desses produtos fica em repositórios privados. Em conversa e entrevista eu mostro arquitetura, demo e decisões — é só chamar.

---

## GitHub Stats

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=kuczmanski&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true&locale=pt-br&hide_title=true)

![GitHub Streak](https://streak-stats.demolab.com?user=kuczmanski&theme=tokyonight&locale=pt_BR)

<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/kuczmanski/kuczmanski/output/github-contribution-grid-snake-dark.svg" />
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/kuczmanski/kuczmanski/output/github-contribution-grid-snake.svg" />
    <img alt="Cobrinha das contribuições" src="https://raw.githubusercontent.com/kuczmanski/kuczmanski/output/github-contribution-grid-snake.svg" />
  </picture>
</div>
