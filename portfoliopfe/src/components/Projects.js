// src/components/ProjectsPage.js
'use client';

import React, { useState, useEffect } from 'react';
import { Code, ExternalLink } from 'lucide-react';
import portfolioData from '@/data/portfolioData';

export default function ProjectsPage() {
  const [githubRepos, setGithubRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGithubRepos();
  }, []);

  const fetchGithubRepos = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.github.com/users/${portfolioData.personal.github}/repos?sort=updated&per_page=6`
      );
      const data = await response.json();
      setGithubRepos(data);
    } catch (error) {
      console.error('Erro ao buscar repositórios:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-16" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 flex items-center gap-3" style={{ color: '#000000' }}>
          <Code className="w-10 h-10" style={{ color: '#6fa9ce' }} />
          Projetos Desenvolvidos
        </h1>
        <p className="mb-8" style={{ color: '#757575' }}>
          Integrado com GitHub API, exibindo meus repositórios mais recentes!!
        </p>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div 
              className="animate-spin rounded-full h-16 w-16 border-t-4" 
              style={{ borderColor: '#6fa9ce' }}
            ></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {githubRepos.length > 0 ? (
              githubRepos.map(repo => (
                <div 
                  key={repo.id} 
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all border-2" 
                  style={{ borderColor: '#6fa9ce' }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold flex-1" style={{ color: '#000000' }}>
                      {repo.name}
                    </h3>
                    <a 
                      href={repo.html_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ color: '#6fa9ce' }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="mb-4 text-sm" style={{ color: '#757575' }}>
                    {repo.description || 'Sem descrição disponível'}
                  </p>
                  <div className="flex items-center justify-between text-sm" style={{ color: '#757575' }}>
                    {repo.language && (
                      <span 
                        className="px-3 py-1 rounded-lg" 
                        style={{ backgroundColor: '#e8f4f8', color: '#6fa9ce' }}
                      >
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      ⭐ {repo.stargazers_count}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center py-12" style={{ color: '#757575' }}>
                <p>Configure seu usuário do GitHub para ver os repositórios aqui!</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}