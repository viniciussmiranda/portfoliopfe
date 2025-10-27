// src/components/AboutPage.js
import React from 'react';
import { User, Code, Briefcase, Book, Award, ChevronRight } from 'lucide-react';
import portfolioData from '@/data/portfolioData';

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 flex items-center gap-3" style={{ color: '#000000' }}>
          <User className="w-10 h-10" style={{ color: '#6fa9ce' }} />
          Sobre Mim
        </h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2" style={{ borderColor: '#6fa9ce' }}>
          <p className="text-lg leading-relaxed mb-6" style={{ color: '#757575' }}>
            {portfolioData.personal.bio}
          </p>
          <p style={{ color: '#757575' }}>
            Estou constantemente aprendendo e me atualizando com as últimas tecnologias 
            do mercado para entregar soluções de alta qualidade.
          </p>
        </div>

        <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Tecnologias Utilizadas</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border-2" style={{ borderColor: '#6fa9ce' }}>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2" style={{ color: '#000000' }}>
              <Code className="w-6 h-6" style={{ color: '#6fa9ce' }} />
              Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
              {portfolioData.technologies.frontend.map(tech => (
                <span 
                  key={tech} 
                  className="px-4 py-2 rounded-lg font-medium"
                  style={{ backgroundColor: '#e8f4f8', color: '#6fa9ce' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-2" style={{ borderColor: '#6fa9ce' }}>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2" style={{ color: '#000000' }}>
              <Briefcase className="w-6 h-6" style={{ color: '#6fa9ce' }} />
              Backend
            </h3>
            <div className="flex flex-wrap gap-2">
              {portfolioData.technologies.backend.map(tech => (
                <span 
                  key={tech} 
                  className="px-4 py-2 rounded-lg font-medium"
                  style={{ backgroundColor: '#e8f4f8', color: '#6fa9ce' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-2" style={{ borderColor: '#6fa9ce' }}>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2" style={{ color: '#000000' }}>
              <Book className="w-6 h-6" style={{ color: '#6fa9ce' }} />
              Banco de Dados
            </h3>
            <div className="flex flex-wrap gap-2">
              {portfolioData.technologies.database.map(tech => (
                <span 
                  key={tech} 
                  className="px-4 py-2 rounded-lg font-medium"
                  style={{ backgroundColor: '#e8f4f8', color: '#6fa9ce' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-2" style={{ borderColor: '#6fa9ce' }}>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2" style={{ color: '#000000' }}>
              <Award className="w-6 h-6" style={{ color: '#6fa9ce' }} />
              Ferramentas & APIs
            </h3>
            <div className="flex flex-wrap gap-2">
              {[...portfolioData.technologies.tools, ...portfolioData.technologies.apis].map(tech => (
                <span 
                  key={tech} 
                  className="px-4 py-2 rounded-lg font-medium"
                  style={{ backgroundColor: '#e8f4f8', color: '#6fa9ce' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-white rounded-xl shadow-lg p-8" style={{ backgroundColor: '#6fa9ce' }}>
          <h3 className="text-2xl font-bold mb-4">Módulos Utilizados neste App</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <ChevronRight className="w-5 h-5" />
              <strong>React 18</strong> - Biblioteca principal para construção da UI
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="w-5 h-5" />
              <strong>Next.js 15</strong> - Framework React para produção
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="w-5 h-5" />
              <strong>Lucide React</strong> - Ícones modernos e elegantes
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="w-5 h-5" />
              <strong>GitHub API</strong> - Integração para exibir repositórios automaticamente
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="w-5 h-5" />
              <strong>Tailwind CSS</strong> - Framework CSS para estilização responsiva
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}