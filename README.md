# Olá, eu sou o Mateus 👋

**Desenvolvedor Java.**

Spring Boot é o que eu sei de verdade: domínio, segurança, persistência, billing, multi-tenant, deploy. HTML, JS, Node, Flutter e Python aparecem nos produtos porque alguém precisa da tela, do app ou da integração — não porque eu me posicione como full stack.

📍 Brasil

---

## Java

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![Spring Security](https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Maven](https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

JPA/Hibernate · Hibernate Envers · Thymeleaf · JWT · OAuth2 · Flyway · Actuator · Mail · testes com H2

**No produto, quando precisa:** HTML/CSS/JS · Node (sidecar WhatsApp) · Flutter · Python

---

## Agora: CrewOS

Sistema operacional de atendimento com **colaboradores digitais (IA)**. Cada empresa (tenant) configura agentes por vertical e objetivo (vender, agendar, qualificar, suporte), com conhecimento próprio e memória por contato. WhatsApp é o primeiro canal.

- Java 17 · Spring Boot 3.2 · Security · JPA · Thymeleaf · MySQL 8
- Multi-tenant, inbox, CRM leve, agenda, takeover humano, papéis `EMPRESA` / `ADMIN`
- WhatsApp Cloud API (webhook assinado, Embedded Signup) e sidecar Node legado isolado por tenant
- Orquestrador Ollama (`qwen2.5:7b`): prompt por vertical/objetivo, FAQ sem LLM quando casa, ferramentas que gravam no CRM
- Base em texto / FAQ / URL / PDF (PDFBox) · Docker

---

## Sistemas em Java

### Velaris — ERP SaaS para personal trainer
Alunos, agenda, financeiro, documentos, planos Essencial / Pro / Elite.

- Java 17 · Spring Boot 3.2 · Security (senha + OAuth Google) · JPA · Thymeleaf · MySQL
- Billing Asaas (API + webhooks) · SMTP · área admin · testes H2

### PlateOS — Velaris + IA
Mesmo núcleo do Velaris, com login do aluno, WhatsApp, análise de prato por foto (Ollama) e white-label. Painel dividido em Gestão e Automações IA.

### Trego — frete (cliente, motorista, admin)
API REST em **Java 21 · Spring Boot 3.3 · MySQL · JWT · Docker · Actuator**. App em Flutter (Dart, Dio, JWT em storage seguro) — o backend é Java.

### RemoteX — acesso remoto
Quatro módulos Java 17: `common`, relay WebSocket com TLS, host (tela + comandos) e cliente JavaFX (multi-monitor, mouse e teclado).

### Software house
Gestão da operação: clientes, tarefas, usuários, WhatsApp, geração e importação (Apache POI), auditoria.

- Java 17 · Spring Boot 3.3 · Security · JPA · Hibernate Envers · Thymeleaf · JWT · Actuator/Prometheus · MySQL · e-mail

### Academia (multi-tenant)
Gestão de academia: Spring Boot 3, Security, JPA, JWT, Flyway, MySQL, multi-tenancy. Front em React (MUI).

---

## O resto dos projetos

Não são a stack. Estão aqui porque saíram do zero e o perfil anterior escondia isso.

| Projeto | O que é | Em volta do Java |
|---------|---------|------------------|
| **Biblioteca Oculta** | Área de membros, admin, produtos, checkout, webhooks, LPs dinâmicas, tracking | Express · MySQL · JWT · Baileys · PM2/VPS |
| **Frutas Virais** | Landing/curso; o servidor é o da Biblioteca | HTML |
| **Automação WhatsApp + pagamento** | Webhook de venda → entrega e fluxos no Zap, dashboard admin | Node · Express · SQLite · whatsapp-web.js · JWT |
| **WhatsApp bot** | Sessão LocalAuth, QR, inbox de contatos | Node · Express · SQLite |
| **VPN WireGuard** | Painel, gerenciador de servidor e cliente Windows standalone | Python · SQLite · WireGuard |
| **Hotkey Login** | App desktop: atalho global, tray, login automático no browser | Python · Tkinter · Selenium · instalador Inno Setup |
| **Treinador de poker (local)** | Lê a mesa (CV → OCR) e decide com Monte Carlo, pot odds e range | Node |
| **Cérebro** | Simulação cognitiva em tempo real + LLM local | Python · Pygame · Ollama |
| **App WebView** | Shell Flutter que abre o produto web | Flutter |
| **Modelagem financeira** | Modelagem de negócios no browser (charts) | HTML · Chart.js |
| **DK Softworks** | Site da software house | HTML |
| **Portfólio (Ricardo Alves)** | Site institucional de palestrante/mentor | HTML |
| **Apple Crypto** | Landing de compra de cripto | HTML/CSS/JS |
| **Consciência Expandida** | Landing de curso / protocolo | HTML/CSS/JS |

> Código em repositórios privados. Em conversa e entrevista eu mostro arquitetura e demo.

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
