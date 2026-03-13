import { 
  FaReact, 
  FaNodeJs, 
  FaDocker, 
  FaAws, 
  FaGitAlt, 
  FaFigma 
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiPrisma, 
  SiPostgresql, 
  SiGraphql 
} from "react-icons/si";

export const NAV_LINKS = [
  { name: "Início", hash: "#home" },
  { name: "Sobre", hash: "#about" },
  { name: "Projetos", hash: "#projects" },
  { name: "Habilidades", hash: "#skills" },
  { name: "Experiência", hash: "#experience" },
  { name: "Certificações", hash: "#certifications" },
  { name: "Contato", hash: "#contact" },
] as const;

export const HERO_DATA = {
  name: "André Ailton",
  role: "Desenvolvedor Fullstack Junior",
  description:
    "Sou um desenvolvedor com forte experiência em Front-End (React.js, Next.js, Tailwind, TS/JS) expandindo para Fullstack. Sou apaixonado por criar interfaces incríveis e funcionais.",
  socials: {
    github: "https://github.com/AndreAilton",
    linkedin: "https://linkedin.com/in/andreailton/",
  },
};

export const ABOUT_DATA = {
  description:
    "Sou um desenvolvedor com forte experiência em Front-End (React.js, Next.js, Tailwind, TS/JS) expandindo para Fullstack. Sou apaixonado por criar interfaces incríveis e funcionais. Foco em soluções digitais que impactam positivamente os usuários, usando melhores práticas e tecnologias modernas. Tenho facilidade com trabalho em equipe, resolução de problemas e aprendizado contínuo.",
};

export const PROJECTS_DATA = [
  {
    title: "Cardápio Profissional",
    description: "Landing page moderna e responsiva para uma hamburgueria gourmet, apresentando um cardápio digital interativo. Desenvolvida com foco em otimizar a experiência do usuário, atrair clientes com um visual sofisticado e garantir uma navegação fluida em qualquer dispositivo.",
    tags: ["React.js", "Tailwind CSS", "TypeScript"],
    imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1000&auto=format&fit=crop",
    githubUrl: "https://github.com/AndreAilton/Landing_Hamburguer_Gormet",
    demoUrl: "https://andreailton.github.io/Landing_Hamburguer_Gormet",
  },
  {
    title: "Simulador de Investimentos",
    description: "Ferramenta interativa que permite aos usuários simular rendimentos de renda fixa, com foco na taxa Selic. O projeto foi estruturado para auxiliar na tomada de decisões financeiras, traduzindo cálculos complexos em uma interface visualmente clara e de fácil utilização.",
    tags: ["React.js", "Tailwind CSS", "TypeScript"],
    imageUrl: "https://andrebona.com.br/wp-content/uploads/2017/09/qual-a-melhor-forma-de-investimento-lci-ou-tesouro-direto.jpeg",
    githubUrl: "https://github.com/AndreAilton/Landing_Selic_invest",
    demoUrl: "https://andreailton.github.io/Landing_Selic_invest/",
  },
  {
    title: "Sistema de Gestão para Barbearias (SaaS)",
    description: "Plataforma completa (CortaJá) para agendamento e gerenciamento de barbearias. Desenvolvida como um SaaS full-stack, a aplicação possui autenticação segura, banco de dados relacional, upload de arquivos e pagamentos integrados. A interface foi construída com componentes acessíveis e design responsivo, incluindo suporte a notificações via Capacitor.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "NextAuth", "shadcn/ui"],
    imageUrl: "https://raw.githubusercontent.com/AndreAilton/Portfolio/refs/heads/Main/public/images/image_1.png",
    githubUrl: "https://github.com/AndreAilton",
    demoUrl: "https://cortaja.vercel.app/",
  },
] as const;

export const SKILLS_DATA = {
  hard: [
    { name: "HTML", icon: FaReact, color: "#E34F26" },
    { name: "CSS", icon: FaReact, color: "#1572B6" },
    { name: "JavaScript", icon: FaReact, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "React.js", icon: FaReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs }, 
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Express", icon: FaNodeJs },
    { name: "MySQL", icon: SiPostgresql, color: "#4479A1" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "Docker", icon: FaDocker, color: "#2496ED" },
    { name: "Linux", icon: FaDocker },
    { name: "AWS", icon: FaAws, color: "#FF9900" },
    { name: "GCP", icon: FaAws },
  ],
  soft: [
    "Trabalho em Equipe",
    "Resolução de Problemas",
    "Aprendizado Contínuo",
    "Pensamento Estratégico",
    "Inovação",
  ],
} as const;

export const EXPERIENCE_DATA = [
  {
    title: "Análise e Desenvolvimento de Sistemas",
    location: "Faculdade Descomplica",
    description:
      "Foco em tecnologias modernas para o mercado.",
    icon: "React",
    date: "2023 - 2025",
  },
  {
    title: "Projetos Acadêmicos - Desenvolvedor Front-End",
    location: "Serrana, São Paulo",
    description:
      "Desenvolvimento de Portfólio Pessoal, Sistema de Gerenciamento de Tarefas com integração RESTful e Landing Page focada em conversão e UX.",
    icon: "Next.js",
    date: "2020 - 2023",
  },
  {
    title: "Técnico em Administração",
    location: "ETEC",
    description:
      "Foco em gestão, planejamento estratégico e liderança.",
    icon: "Tailwind",
    date: "2017 - 2020",
  },
] as const;

export const CERTIFICATIONS_DATA = [
  {
    title:
      "SaaS do zero ao profissional com Next JS, TypeScript, Banco de dados, Stripe pagamentos",
    issuer: "Udemy",
    date: "2025",
    description:
      "Construção de aplicações SaaS completas integrando Next.js, TypeScript, bancos de dados e gateway de pagamentos com Stripe.",
    link: "https://www.udemy.com/certificate/UC-f43a4181-21db-44f1-99fb-ec456563cbe2/",
  },
  {
    title: " Sql Impressionador da Hashtag Treinamentos",
    issuer: "Hashtag Treinamentos",
    date: "2023",
    description:
      "Domínio em modelagem de dados, consultas avançadas e gerenciamento de banco de dados utilizando Microsoft SQL Server.",
    link: "https://portalhashtag.com/certificado-hashtag/1702634273166x339481875285581950",
  },
  {
    title: "Python Impressionador da Hashtag Treinamento",
    issuer: "Hashtag Treinamentos",
    date: "2023",
    description:
      "Desenvolvimento em Python com foco em automação de tarefas, análise exploratória e manipulação eficiente de dados.",
    link: "https://portalhashtag.com/certificado-hashtag/1700506735685x598630659170238500",
  },
  {
    title: "Power Bi Impressionador da Hashtag Treinamentos",
    issuer: "Hashtag Treinamentos",
    date: "2023",
    description:
      "Criação de dashboards interativos e relatórios analíticos avançados para extração de insights e tomada de decisão estratégica.",
    link: "https://portalhashtag.com/certificado-hashtag/1697495649813x771563991798906900",
  },
  {
    title: "Formação JavaScript Developer",
    issuer: "DIO",
    date: "2026",
    description:
      "Domínio da linguagem JavaScript, abordando desde lógica de programação até práticas modernas para desenvolvimento web.",
    link: "https://hermes.dio.me/certificates/TDDOLSI0.pdf",
  },
  {
    title: "BI E BIG DATA ",
    issuer: "Descomplica",
    date: "2024",
    description:
      "Especialização em arquitetura da informação, processamento e mineração de grandes volumes de dados voltados para Business Intelligence.",
    link: "https://certificados.descomplica.com.br/graduacao/712194d679239d0c54d5dd21f3460de3a227a1beae5a7697e74b75b5e26b7449",
  },
  {
    title: "Analise e Desenvolvimento de Sistemas",
    issuer: "Descomplica",
    date: "2025",
    description:
      "Formação abrangente no ciclo de vida de software, englobando levantamento de requisitos, arquitetura e desenvolvimento de sistemas.",
    link: "https://media.licdn.com/dms/image/v2/D5622AQHTCYXaU-v8bQ/feedshare-shrink_800/B56ZiuLFTzG0Ak-/0/1755268799147?e=1775088000&v=beta&t=TShlpFya3obFmUeDY8kcUb6oK371eA0Iy_04So4uV-w",
  },
] as const;