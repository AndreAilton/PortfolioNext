"use client";

import { useLanguage } from "@/context/language-context";

export const translations = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      projects: "Projetos",
      skills: "Habilidades",
      experience: "Experiência",
      certifications: "Certificações",
      contact: "Contato",
    },
    hero: {
      greeting: "Olá, eu sou",
      role: "Desenvolvedor Fullstack Junior",
      description:
        "Sou um desenvolvedor com forte experiência em Front-End (React.js, Next.js, Tailwind, TS/JS) expandindo para Fullstack. Sou apaixonado por criar interfaces incríveis e funcionais.",
      contactBtn: "Entre em contato",
      downloadCv: "Baixar CV",
    },
    about: {
      title: "Sobre mim",
      description1:
        "Sou um desenvolvedor com forte experiência em Front-End (React.js, Next.js, Tailwind, TS/JS) expandindo para Fullstack. Sou apaixonado por criar interfaces incríveis e funcionais. Foco em soluções digitais que impactam positivamente os usuários, usando melhores práticas e tecnologias modernas. Tenho facilidade com trabalho em equipe, resolução de problemas e aprendizado contínuo.",
      description2:
        "Gosto muito de inovação. Meus hobbies são jogar xadrez (o que me ajuda no pensamento estratégico) e assistir filmes e séries.",
    },
    projects: {
      title: "Meus Projetos",
      descBtn: "Descrição do projeto",
      items: [
        {
          title: "Cardápio Profissional",
          description:
            "Landing page moderna e responsiva para uma hamburgueria gourmet, apresentando um cardápio digital interativo. Desenvolvida com foco em otimizar a experiência do usuário, atrair clientes com um visual sofisticado e garantir uma navegação fluida em qualquer dispositivo.",
        },
        {
          title: "Simulador de Investimentos",
          description:
            "Ferramenta interativa que permite aos usuários simular rendimentos de renda fixa, com foco na taxa Selic. O projeto foi estruturado para auxiliar na tomada de decisões financeiras, traduzindo cálculos complexos em uma interface visualmente clara e de fácil utilização.",
        },
        {
          title: "Sistema de Gestão para Barbearias (SaaS)",
          description:
            "Plataforma completa (CortaJá) para agendamento e gerenciamento de barbearias. Desenvolvida como um SaaS full-stack, a aplicação possui autenticação segura, banco de dados relacional, upload de arquivos e pagamentos integrados. A interface foi construída com componentes acessíveis e design responsivo, incluindo suporte a notificações via Capacitor.",
        },
      ],
    },
    skills: {
      title: "Minhas Habilidades",
      hard: "Habilidades Técnicas",
      soft: "Soft Skills",
      softItems: [
        "Trabalho em Equipe",
        "Resolução de Problemas",
        "Aprendizado Contínuo",
        "Pensamento Estratégico",
        "Inovação",
      ],
    },
    experience: {
      title: "Minha Experiência",
      items: [
        {
          title: "Análise e Desenvolvimento de Sistemas",
          location: "Faculdade Descomplica",
          description: "Foco em tecnologias modernas para o mercado.",
        },
        {
          title: "Projetos Acadêmicos - Desenvolvedor Front-End",
          location: "Serrana, São Paulo",
          description:
            "Desenvolvimento de Portfólio Pessoal, Sistema de Gerenciamento de Tarefas com integração RESTful e Landing Page focada em conversão e UX.",
        },
        {
          title: "Técnico em Administração",
          location: "ETEC",
          description: "Foco em gestão, planejamento estratégico e liderança.",
        },
      ],
    },
    certifications: {
      title: "Minhas Certificações",
      viewBtn: "Ver Certificado",
      items: [
        {
          title:
            "SaaS from Scratch to Professional with Next.js, TypeScript, Database, and Stripe Payments",
          issuer: "Udemy",
          date: "2025",
          description:
            "Building complete SaaS applications integrating Next.js, TypeScript, databases, and payment gateway with Stripe.",
          link: "https://www.udemy.com/certificate/UC-f43a4181-21db-44f1-99fb-ec456563cbe2/",
        },
        {
          title: "SQL Impressionador by Hashtag Treinamentos",
          issuer: "Hashtag Treinamentos",
          date: "2023",
          description:
            "Mastery of data modeling, advanced queries, and database management using Microsoft SQL Server.",
          link: "https://portalhashtag.com/certificado-hashtag/1702634273166x339481875285581950",
        },
        {
          title: "Python Impressionador by Hashtag Treinamentos",
          issuer: "Hashtag Treinamentos",
          date: "2023",
          description:
            "Python development with a focus on task automation, exploratory analysis, and efficient data manipulation.",
          link: "https://portalhashtag.com/certificado-hashtag/1700506735685x598630659170238500",
        },
        {
          title: "Power BI Impressionador by Hashtag Treinamentos",
          issuer: "Hashtag Treinamentos",
          date: "2023",
          description:
            "Creation of interactive dashboards and advanced analytical reports for insight extraction and strategic decision-making.",
          link: "https://portalhashtag.com/certificado-hashtag/1697495649813x771563991798906900",
        },
        {
          title: "JavaScript Developer Training",
          issuer: "DIO",
          date: "2026",
          description:
            "Mastery of the JavaScript language, covering everything from programming logic to modern web development practices.",
          link: "https://hermes.dio.me/certificates/TDDOLSI0.pdf",
        },
        {
          title: "BI AND BIG DATA",
          issuer: "Descomplica",
          date: "2024",
          description:
            "Specialization in information architecture, processing, and mining of large data volumes aimed at Business Intelligence.",
          link: "https://certificados.descomplica.com.br/graduacao/712194d679239d0c54d5dd21f3460de3a227a1beae5a7697e74b75b5e26b7449",
        },
        {
          title: "Systems Analysis and Development",
          issuer: "Descomplica",
          date: "2025",
          description:
            "Comprehensive training in the software lifecycle, encompassing requirements gathering, architecture, and systems development.",
          link: "https://media.licdn.com/dms/image/v2/D5622AQHTCYXaU-v8bQ/feedshare-shrink_800/B56ZiuLFTzG0Ak-/0/1755268799147?e=1775088000&v=beta&t=TShlpFya3obFmUeDY8kcUb6oK371eA0Iy_04So4uV-w",
        },
      ],
    },
    github: {
      title: "Meu GitHub",
      chartTab: "Gráfico de Contribuições",
      reposTab: "Meus Repositórios",
      contribText: "{{count}} contribuições no último ano",
      loading: "Carregando repositórios...",
      noDesc: "Sem descrição disponível.",
      noRepos: "Nenhum repositório encontrado.",
    },
    contact: {
      title: "Entre em contato",
      desc1: "Por favor, entre em contato diretamente pelo e-mail",
      desc2: "ou através deste formulário.",
      emailPlaceholder: "Seu e-mail",
      msgPlaceholder: "Sua mensagem",
      sendBtn: "Enviar",
      successMsg: "Mensagem enviada com sucesso! (Simulado)",
      emailError: "Por favor, insira um e-mail válido.",
      msgError: "A mensagem deve ter pelo menos 10 caracteres.",
    },
    footer: {
      rights: "Todos os direitos reservados.",
      about: "Sobre este site:",
      builtWith:
        "construído com React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, hospedagem na Vercel.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      certifications: "Certifications",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      role: "Junior Fullstack Developer",
      description:
        "I'm a developer with strong Front-End experience (React.js, Next.js, Tailwind, TS/JS) expanding to Fullstack. I'm passionate about creating amazing and functional interfaces.",
      contactBtn: "Contact me",
      downloadCv: "Download CV",
    },
    about: {
      title: "About me",
      description1:
        "I'm a developer with strong Front-End experience (React.js, Next.js, Tailwind, TS/JS) expanding to Fullstack. I'm passionate about creating amazing and functional interfaces. I focus on digital solutions that positively impact users, using best practices and modern technologies. I have an easy time with teamwork, problem solving, and continuous learning.",
      description2:
        "I really like innovation. My hobbies are playing chess (which helps me with strategic thinking) and watching movies and series.",
    },
    projects: {
      title: "My Projects",
      descBtn: "Project description",
      items: [
        {
          title: "Professional Menu",
          description:
            "Modern and responsive landing page for a gourmet burger shop, featuring an interactive digital menu. Developed with a focus on optimizing user experience, attracting customers with a sophisticated look, and ensuring smooth navigation on any device.",
        },
        {
          title: "Investment Simulator",
          description:
            "Interactive tool that allows users to simulate fixed-income returns, focusing on the Selic rate. The project was structured to assist in financial decision-making, translating complex calculations into a visually clear and easy-to-use interface.",
        },
        {
          title: "Barbershop Management System (SaaS)",
          description:
            "Complete platform (CortaJá) for scheduling and managing barbershops. Developed as a full-stack SaaS, the application features secure authentication, a relational database, file uploads, and integrated payments. The interface was built with accessible components and responsive design, including support for notifications via Capacitor.",
        },
      ],
    },
    skills: {
      title: "My Skills",
      hard: "Technical Skills",
      soft: "Soft Skills",
      softItems: [
        "Teamwork",
        "Problem Solving",
        "Continuous Learning",
        "Strategic Thinking",
        "Innovation",
      ],
    },
    experience: {
      title: "My Experience",
      items: [
        {
          title: "Systems Analysis and Development",
          location: "Descomplica College",
          description: "Focus on modern technologies for the market.",
        },
        {
          title: "Academic Projects - Front-End Developer",
          location: "Serrana, São Paulo",
          description:
            "Development of Personal Portfolio, Task Management System with RESTful integration, and Landing Page focused on conversion and UX.",
        },
        {
          title: "Business Administration Technician",
          location: "ETEC",
          description:
            "Focus on management, strategic planning, and leadership.",
        },
      ],
    },
    certifications: {
      title: "My Certifications",
      viewBtn: "View Certificate",
      items: [
        {
          title:
            "SaaS from Scratch to Professional with Next.js, TypeScript, Database, and Stripe Payments",
          issuer: "Udemy",
          date: "2025",
          description:
            "Building complete SaaS applications integrating Next.js, TypeScript, databases, and payment gateway with Stripe.",
          link: "https://www.udemy.com/certificate/UC-f43a4181-21db-44f1-99fb-ec456563cbe2/",
        },
        {
          title: "SQL Impressionador by Hashtag Treinamentos",
          issuer: "Hashtag Treinamentos",
          date: "2023",
          description:
            "Mastery of data modeling, advanced queries, and database management using Microsoft SQL Server.",
          link: "https://portalhashtag.com/certificado-hashtag/1702634273166x339481875285581950",
        },
        {
          title: "Python Impressionador by Hashtag Treinamentos",
          issuer: "Hashtag Treinamentos",
          date: "2023",
          description:
            "Python development with a focus on task automation, exploratory analysis, and efficient data manipulation.",
          link: "https://portalhashtag.com/certificado-hashtag/1700506735685x598630659170238500",
        },
        {
          title: "Power BI Impressionador by Hashtag Treinamentos",
          issuer: "Hashtag Treinamentos",
          date: "2023",
          description:
            "Creation of interactive dashboards and advanced analytical reports for insight extraction and strategic decision-making.",
          link: "https://portalhashtag.com/certificado-hashtag/1697495649813x771563991798906900",
        },
        {
          title: "JavaScript Developer Training",
          issuer: "DIO",
          date: "2026",
          description:
            "Mastery of the JavaScript language, covering everything from programming logic to modern web development practices.",
          link: "https://hermes.dio.me/certificates/TDDOLSI0.pdf",
        },
        {
          title: "BI AND BIG DATA",
          issuer: "Descomplica",
          date: "2024",
          description:
            "Specialization in information architecture, processing, and mining of large data volumes aimed at Business Intelligence.",
          link: "https://certificados.descomplica.com.br/graduacao/712194d679239d0c54d5dd21f3460de3a227a1beae5a7697e74b75b5e26b7449",
        },
        {
          title: "Systems Analysis and Development",
          issuer: "Descomplica",
          date: "2025",
          description:
            "Comprehensive training in the software lifecycle, encompassing requirements gathering, architecture, and systems development.",
          link: "https://media.licdn.com/dms/image/v2/D5622AQHTCYXaU-v8bQ/feedshare-shrink_800/B56ZiuLFTzG0Ak-/0/1755268799147?e=1775088000&v=beta&t=TShlpFya3obFmUeDY8kcUb6oK371eA0Iy_04So4uV-w",
        },
      ],
    },
    github: {
      title: "My GitHub",
      chartTab: "Contributions Chart",
      reposTab: "My Repositories",
      contribText: "{{count}} contributions in the last year",
      loading: "Loading repositories...",
      noDesc: "No description available.",
      noRepos: "No repositories found.",
    },
    contact: {
      title: "Contact me",
      desc1: "Please contact me directly at",
      desc2: "or through this form.",
      emailPlaceholder: "Your email",
      msgPlaceholder: "Your message",
      sendBtn: "Send",
      successMsg: "Message sent successfully! (Simulated)",
      emailError: "Please enter a valid email.",
      msgError: "Message must be at least 10 characters long.",
    },
    footer: {
      rights: "All rights reserved.",
      about: "About this website:",
      builtWith:
        "built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.",
    },
  },
};

export function useTranslation() {
  const { language } = useLanguage();
  return { t: translations[language], lang: language };
}
