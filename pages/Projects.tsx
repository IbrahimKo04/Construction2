import React, { useState, useEffect } from 'react';
import { ChevronRight, X, MapPin, Calendar, DollarSign, ExternalLink } from 'lucide-react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import SafeImage from '../components/SafeImage';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Residential' | 'Commercial' | 'Infrastructure'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const categories = ['All', 'Residential', 'Commercial', 'Infrastructure'];

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <Layout>
      {/* Header */}
      <div className="bg-dark relative py-20 md:py-32 overflow-hidden">
         <div className="absolute inset-0">
             <SafeImage src="images/project-2.jpg" className="w-full h-full object-cover opacity-20" />
             <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
         </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4 uppercase tracking-widest font-bold">
            <span>Home</span>
            <ChevronRight size={14} className="text-primary" />
            <span className="text-primary">Projects</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black font-heading text-white mb-6">Our Portfolio</h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
             A showcase of engineering excellence. Browse our collection of landmark projects across the region.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Filter Pills */}
        <div className="flex flex-wrap gap-4 mb-16 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 border ${
                filter === cat
                  ? 'bg-primary text-dark border-primary shadow-[0_0_20px_rgba(245,158,11,0.4)]'
                  : 'bg-transparent text-gray-400 border-gray-700 hover:border-gray-500 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div 
              key={project.id} 
              className="group relative bg-dark-lighter rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="relative h-72 overflow-hidden">
                <SafeImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  fallbackType="building"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                   <Button 
                      variant="primary" 
                      onClick={() => setSelectedProject(project)}
                      className="transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 delay-100"
                   >
                      View Details
                   </Button>
                </div>
                <div className="absolute top-4 right-4 bg-dark/80 backdrop-blur text-primary text-xs font-bold px-3 py-1 rounded border border-gray-700 uppercase tracking-wide">
                  {project.category}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2 font-heading group-hover:text-primary transition-colors">{project.title}</h3>
                <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                  <span className="flex items-center gap-1"><MapPin size={14} /> {project.location}</span>
                  <span className="flex items-center gap-1"><Calendar size={14} /> {project.year}</span>
                </div>
                <p className="text-gray-400 line-clamp-3 mb-6">
                  {project.description}
                </p>
                <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                   <div className="h-full bg-primary w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Glass Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all duration-300"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-dark border border-gray-700 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-primary hover:text-dark transition-colors z-20"
            >
              <X size={24} />
            </button>

            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <SafeImage 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  fallbackType="building"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent md:bg-gradient-to-r"></div>
              </div>

              <div className="p-8 md:p-12 flex flex-col justify-center">
                 <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2">{selectedProject.category}</span>
                 <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6 leading-tight">{selectedProject.title}</h2>
                 
                 <div className="space-y-4 mb-8">
                    <div className="flex items-center p-3 bg-white/5 rounded-lg border border-white/10">
                       <MapPin className="text-primary mr-4" size={20} />
                       <div>
                          <span className="block text-xs text-gray-500 uppercase">Location</span>
                          <span className="text-gray-200">{selectedProject.location}</span>
                       </div>
                    </div>
                    <div className="flex items-center p-3 bg-white/5 rounded-lg border border-white/10">
                       <Calendar className="text-primary mr-4" size={20} />
                       <div>
                          <span className="block text-xs text-gray-500 uppercase">Completion</span>
                          <span className="text-gray-200">{selectedProject.year}</span>
                       </div>
                    </div>
                    {selectedProject.value && (
                       <div className="flex items-center p-3 bg-white/5 rounded-lg border border-white/10">
                          <DollarSign className="text-primary mr-4" size={20} />
                          <div>
                             <span className="block text-xs text-gray-500 uppercase">Project Value</span>
                             <span className="text-gray-200">{selectedProject.value}</span>
                          </div>
                       </div>
                    )}
                 </div>

                 <h3 className="text-lg font-bold text-white mb-3">Project Overview</h3>
                 <p className="text-gray-400 leading-relaxed mb-8">
                    {selectedProject.description} This landmark development features state-of-the-art sustainable materials and innovative structural design, setting a new benchmark for {selectedProject.category.toLowerCase()} construction.
                 </p>

                 <Button to="/enquiry" variant="primary">
                    Start Similar Project
                 </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Projects;