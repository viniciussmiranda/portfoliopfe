// src/components/Navigation.js
import React from 'react';
import { Code, User, GraduationCap, Briefcase, Home } from 'lucide-react';

export default function Navigation({ currentPage, setCurrentPage }) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'Sobre', icon: User },
    { id: 'education', label: 'Acadêmica', icon: GraduationCap },
    { id: 'experience', label: 'Profissional', icon: Briefcase },
    { id: 'projects', label: 'Projetos', icon: Code }
  ];

  return (
    <nav className="bg-white text-black shadow-lg sticky top-0 z-50 border-b-2" style={{ borderColor: '#6fa9ce' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-xl flex items-center gap-2">
            <Code className="w-6 h-6" style={{ color: '#6fa9ce' }} />
            <span>Portfolio</span>
          </div>
          <div className="flex gap-1">
            {navItems.map(item => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
                    currentPage === item.id ? 'font-semibold' : ''
                  }`}
                  style={{
                    backgroundColor: currentPage === item.id ? '#6fa9ce' : 'transparent',
                    color: currentPage === item.id ? '#ffffff' : '#757575'
                  }}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden md:inline">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}