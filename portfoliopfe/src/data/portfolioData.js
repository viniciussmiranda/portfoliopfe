// src/data/portfolioData.js
const portfolioData = {
  personal: {
    name: "Vinicius Miranda",
    title: "Desenvolvedor Full Stack",
    bio: "Tenho 21 anos, moro em Recife e sou apaixonado por tecnologia.",
    email: "viniciussmirandacontato@gmail.com",
    phone: "(81) 98610-3538",
    location: "Recife, PE",
    github: "viniciussmiranda",
    linkedin: "viniciussmiranda",
    photo: "/assets/minhafoto.jpg"
  },
  
  education: [
    {
      institution: "UNICAP",
      degree: "Sistemas para Internet",
      period: "2024 - 2026",
      description: "Em formação"
    },
    {
      institution: "IFPE",
      degree: "Técnico em eletrônica",
      period: "2018 - 2022",
      description: "Possuo experiência sólida em Internet das Coisas (IoT)."
    }
  ],
  
  experience: [
    {
      company: "Grupo Moura",
      role: "Estagiário de Infraestrutura e Redes",
      period: "Mar 2025 - Presente",
      description: "Atuo com firewall e monitoramento NOC utilizando as ferramentas Zabbix e Grafana",
      technologies: ["Zabbix", "Grafana", "Firewall", "Python"]
    },
    {
      company: "Parlacom Telecom M2M & IoT",
      role: "Técnico em eletrônica",
      period: "Jul 2023 - Out 2024",
      description: "Desenvolvedor de soluções IoT",
      technologies: ["PHP", "IoT", "JavaScript"]
    }
  ],
  
  technologies: {
    frontend: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
    backend: ["Node.js", "Java", "Python", "C++"],
    database: ["PostgreSQL", "MongoDB", "MySQL"],
    tools: ["Git", "Docker", "VS Code", "Figma"],
    apis: ["GitHub API", "RESTful APIs"]
  }
};

export default portfolioData;