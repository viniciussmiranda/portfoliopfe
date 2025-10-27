// src/components/Footer.js
import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import portfolioData from '@/data/portfolioData';

export default function Footer() {
  return (
    <footer className="text-white py-8 mt-16" style={{ backgroundColor: '#6fa9ce' }}>
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="mb-4">© 2025 {portfolioData.personal.name}. Todos os direitos reservados.</p>
        <div className="flex justify-center gap-4">
          <a 
            href={`https://github.com/${portfolioData.personal.github}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href={`https://linkedin.com/in/${portfolioData.personal.linkedin}`} 
            target="_blank"
            rel="noopener noreferrer" 
            className="hover:opacity-80 transition-opacity"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}