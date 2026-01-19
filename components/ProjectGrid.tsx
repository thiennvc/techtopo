
import React from 'react';
import { Project } from '../types';

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Horizon Analytics',
    description: 'A data visualization platform for monitoring climate changes in real-time.',
    tags: ['Next.js', 'D3.js', 'Typescript'],
    link: '#',
    imageUrl: 'https://picsum.photos/800/600?random=1'
  },
  {
    id: '2',
    title: 'Pulse Design System',
    description: 'A modular, accessible design system built for enterprise scalability.',
    tags: ['React', 'Tailwind', 'Storybook'],
    link: '#',
    imageUrl: 'https://picsum.photos/800/600?random=2'
  },
  {
    id: '3',
    title: 'GeoFlow Engine',
    description: 'Spatial data processing engine for mapping complex topological networks.',
    tags: ['Rust', 'Wasm', 'Mapbox'],
    link: '#',
    imageUrl: 'https://picsum.photos/800/600?random=3'
  }
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="group relative glass-panel rounded-2xl overflow-hidden hover:border-zinc-600 transition-all">
    <div className="h-64 overflow-hidden">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
      />
    </div>
    <div className="p-6">
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(tag => (
          <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full border border-zinc-800 text-zinc-400 uppercase tracking-widest">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
      <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
        {project.description}
      </p>
      <a href={project.link} className="inline-flex items-center gap-2 text-sm font-bold text-white hover:gap-3 transition-all">
        Explore Project 
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
      </a>
    </div>
  </div>
);

const ProjectGrid: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Expeditions</h2>
          <p className="text-zinc-400 max-w-md">Selected works that showcase my approach to solving technical challenges with visual elegance.</p>
        </div>
        <div className="text-zinc-600 font-medium text-sm">
          01 — 03 PROJECTS
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </section>
  );
};

export default ProjectGrid;
