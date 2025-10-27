// src/components/ExperiencePage.js
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import portfolioData from '@/data/portfolioData';

export default function ExperiencePage() {
  return (
    <div className="min-h-screen py-16" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 flex items-center gap-3" style={{ color: '#000000' }}>
          <Briefcase className="w-10 h-10" style={{ color: '#6fa9ce' }} />
          Experiência Profissional
        </h1>
        
        <div className="space-y-6">
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all border-2" style={{ borderColor: '#6fa9ce' }}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg" style={{ backgroundColor: '#e8f4f8' }}>
                  <Briefcase className="w-8 h-8" style={{ color: '#6fa9ce' }} />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2" style={{ color: '#000000' }}>
                    {exp.role}
                  </h2>
                  <h3 className="text-xl mb-2" style={{ color: '#6fa9ce' }}>
                    {exp.company}
                  </h3>
                  <div className="flex items-center gap-2 mb-4" style={{ color: '#757575' }}>
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <p className="mb-4" style={{ color: '#757575' }}>{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map(tech => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 rounded-lg text-sm font-medium"
                        style={{ backgroundColor: '#e8f4f8', color: '#6fa9ce' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}