// src/data/portfolioData.js
const portfolioData = {
  personal: {
    name: "Seu Nome Completo",
    title: "Desenvolvedor Full Stack",
    bio: "Desenvolvedor apaixonado por criar soluções inovadoras e experiências digitais incríveis. Especializado em React, Next.js e tecnologias modernas.",
    email: "seuemail@exemplo.com",
    phone: "(81) 99999-9999",
    location: "Recife, PE",
    github: "seu-usuario",
    linkedin: "seu-usuario",
    photo: "https://via.placeholder.com/300x300?text=Sua+Foto"
  },
  
  education: [
    {
      institution: "Universidade Federal de Pernambuco",
      degree: "Bacharelado em Ciência da Computação",
      period: "2020 - 2024",
      description: "Formação completa em desenvolvimento de software, algoritmos e estruturas de dados."
    },
    {
      institution: "Curso Técnico",
      degree: "Técnico em Informática",
      period: "2018 - 2020",
      description: "Base sólida em programação, redes e sistemas operacionais."
    }
  ],
  
  experience: [
    {
      company: "Tech Solutions Inc.",
      role: "Desenvolvedor Full Stack",
      period: "Jan 2023 - Presente",
      description: "Desenvolvimento de aplicações web escaláveis usando React, Node.js e PostgreSQL. Liderança técnica em projetos de grande impacto.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"]
    },
    {
      company: "StartupXYZ",
      role: "Desenvolvedor Front-end Jr.",
      period: "Jun 2021 - Dez 2022",
      description: "Criação de interfaces responsivas e interativas. Colaboração com equipe de design para implementar experiências de usuário excepcionais.",
      technologies: ["React", "TypeScript", "Tailwind CSS"]
    }
  ],
  
  technologies: {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
    backend: ["Node.js", "Express", "Python", "Django"],
    database: ["PostgreSQL", "MongoDB", "MySQL"],
    tools: ["Git", "Docker", "VS Code", "Figma"],
    apis: ["GitHub API", "RESTful APIs", "GraphQL"]
  }
};

export default portfolioData;