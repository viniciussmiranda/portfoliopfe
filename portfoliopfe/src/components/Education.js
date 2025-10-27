// src/components/EducationPage.js
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import portfolioData from '@/data/portfolioData';

export default function EducationPage() {
  return (
    <div className="min-h-screen py-16" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 flex items-center gap-3" style={{ color: '#000000' }}>
          <GraduationCap className="w-10 h-10" style={{ color: '#6fa9ce' }} />
          Experiência Acadêmica
        </h1>
        
        <div className="space-y-6">
          {portfolioData.education.map((edu, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all border-2" style={{ borderColor: '#6fa9ce' }}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg" style={{ backgroundColor: '#e8f4f8' }}>
                  <GraduationCap className="w-8 h-8" style={{ color: '#6fa9ce' }} />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2" style={{ color: '#000000' }}>
                    {edu.degree}
                  </h2>
                  <h3 className="text-xl mb-2" style={{ color: '#6fa9ce' }}>
                    {edu.institution}
                  </h3>
                  <div className="flex items-center gap-2 mb-4" style={{ color: '#757575' }}>
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                  <p style={{ color: '#757575' }}>{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}