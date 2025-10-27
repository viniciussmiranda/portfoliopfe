// src/components/HomePage.js
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import portfolioData from '@/data/portfolioData';

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fadeIn">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight" style={{ color: '#000000' }}>
              Olá! Eu sou{' '}
              <span style={{ color: '#6fa9ce' }}>
                {portfolioData.personal.name}
              </span>
            </h1>
            <h2 className="text-2xl" style={{ color: '#000000' }}>
              {portfolioData.personal.title}
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: '#757575' }}>
              {portfolioData.personal.bio}
            </p>
            <div className="flex gap-4 pt-4">
              <a 
                href={`https://github.com/${portfolioData.personal.github}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 text-white rounded-lg transition-all hover:opacity-90"
                style={{ backgroundColor: '#6fa9ce' }}
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a 
                href={`https://linkedin.com/in/${portfolioData.personal.linkedin}`}
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-6 py-3 text-white rounded-lg transition-all hover:opacity-90"
                style={{ backgroundColor: '#6fa9ce' }}
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-2xl opacity-30" style={{ backgroundColor: '#6fa9ce' }}></div>
              <img 
                src={portfolioData.personal.photo} 
                alt="Profile"
                className="relative w-80 h-80 rounded-full object-cover shadow-2xl border-8"
                style={{ borderColor: '#6fa9ce' }}
              />
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border-2" style={{ borderColor: '#6fa9ce' }}>
            <Mail className="w-10 h-10 mb-4" style={{ color: '#6fa9ce' }} />
            <h3 className="font-semibold mb-2" style={{ color: '#000000' }}>Email</h3>
            <p style={{ color: '#757575' }}>{portfolioData.personal.email}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border-2" style={{ borderColor: '#6fa9ce' }}>
            <Phone className="w-10 h-10 mb-4" style={{ color: '#6fa9ce' }} />
            <h3 className="font-semibold mb-2" style={{ color: '#000000' }}>Telefone</h3>
            <p style={{ color: '#757575' }}>{portfolioData.personal.phone}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border-2" style={{ borderColor: '#6fa9ce' }}>
            <MapPin className="w-10 h-10 mb-4" style={{ color: '#6fa9ce' }} />
            <h3 className="font-semibold mb-2" style={{ color: '#000000' }}>Localização</h3>
            <p style={{ color: '#757575' }}>{portfolioData.personal.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}