import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PenTool, Hammer, RefreshCw, ClipboardCheck, Play } from 'lucide-react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import SafeImage from '../components/SafeImage';
import { PROJECTS, SERVICES } from '../constants';

const Home: React.FC = () => {
  const featuredProjects = PROJECTS.slice(0, 3);
  const icons = { PenTool, Hammer, RefreshCw, ClipboardCheck };

  return (
    <Layout>
      {/* Cinematic Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax-like fixity */}
        <div className="absolute inset-0 z-0">
          <SafeImage 
            src="images/hero.jpg" 
            alt="Construction site at sunset" 
            className="w-full h-full object-cover opacity-60"
            fallbackType="building"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-transparent to-transparent opacity-90" />
        </div>

        {/* Animated Background Shapes */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-blob mix-blend-overlay"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-overlay"></div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-sm font-medium text-gray-300 uppercase tracking-widest">Est. 1995</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading text-white mb-8 leading-tight animate-fade-in-up [animation-delay:200ms]">
              Constructing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200 text-glow">The Future</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed border-l-4 border-primary pl-6 animate-fade-in-up [animation-delay:400ms]">
              Precision engineering meets visionary design. We build the infrastructure that powers modern life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up [animation-delay:600ms]">
              <Button to="/projects" variant="primary" className="text-lg px-8 py-4">
                View Projects
              </Button>
              <Button to="/enquiry" variant="outline" className="text-lg px-8 py-4 text-white border-gray-500 hover:border-white">
                Start Enquiry
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block text-gray-500">
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <div className="bg-dark-lighter border-y border-gray-800 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-800">
            {[
              { label: 'Years Experience', value: '28+' },
              { label: 'Projects Completed', value: '150+' },
              { label: 'Team Members', value: '45' },
              { label: 'Awards Won', value: '12' },
            ].map((stat, idx) => (
              <div key={idx} className="py-8 text-center hover:bg-white/5 transition-colors group cursor-default">
                <div className="text-3xl md:text-5xl font-black font-heading text-white mb-2 group-hover:text-primary transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-500 uppercase tracking-widest font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section with Glow Cards */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <span className="text-primary font-bold tracking-widest uppercase mb-2 block">What We Do</span>
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-white">Our Capabilities</h2>
            </div>
            <p className="text-gray-400 max-w-md mt-4 md:mt-0 text-right md:text-left">
              From blueprint to reality, we deliver comprehensive construction solutions across all sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, idx) => {
              const Icon = icons[service.iconName];
              return (
                <div key={service.id} className="group relative">
                  {/* Back Glow */}
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-orange-600 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
                  
                  {/* Card Content */}
                  <div className="relative h-full bg-dark-lighter border border-gray-800 p-8 rounded-2xl overflow-hidden hover:transform hover:-translate-y-1 transition-all duration-300">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Icon size={120} />
                    </div>
                    
                    <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center mb-8 border border-gray-700 group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                      <Icon className="h-7 w-7 text-gray-300 group-hover:text-primary transition-colors" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4 font-heading">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center text-primary text-sm font-bold uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                      Learn More <ArrowRight size={14} className="ml-2" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects - Asymmetrical Grid */}
      <section className="py-24 bg-dark-lighter border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <span className="text-primary font-bold tracking-widest uppercase mb-2 block">Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-white">Featured Works</h2>
            </div>
            <Button to="/projects" variant="outline" className="mt-6 md:mt-0">
              View All Projects
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <div 
                key={project.id} 
                className={`group relative rounded-2xl overflow-hidden cursor-pointer ${idx === 1 ? 'md:col-span-2' : ''}`}
              >
                <div className="aspect-[4/3] md:aspect-auto md:h-96 w-full relative">
                  <SafeImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    fallbackType="building"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-primary text-dark text-xs font-bold uppercase tracking-wider rounded mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-heading">{project.title}</h3>
                    <p className="text-gray-300 line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {project.description}
                    </p>
                    <div className="h-1 w-0 bg-primary group-hover:w-20 transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video / Call to Action Section */}
      <section className="relative py-32 overflow-hidden">
         {/* Background */}
         <div className="absolute inset-0 bg-primary">
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-dark to-transparent"></div>
         </div>

         <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-4xl md:text-6xl font-black font-heading text-white mb-6">
                Ready to Build <br/>Something Iconic?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                Partner with a team that values integrity, precision, and sustainability. Let's bring your vision to life.
              </p>
              <Button to="/enquiry" variant="primary" className="bg-white text-dark hover:bg-gray-100 hover:text-primary shadow-2xl border-none">
                Get a Free Consultation
              </Button>
            </div>
            
            <div className="flex-1 relative">
               <div className="relative rounded-2xl overflow-hidden border-8 border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                 <SafeImage src="images/project-4.jpg" className="w-full aspect-video object-cover" />
                 <div className="absolute inset-0 flex items-center justify-center bg-black/40 group cursor-pointer hover:bg-black/20 transition-colors">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
                       <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </div>
                 </div>
               </div>
            </div>
         </div>
      </section>
    </Layout>
  );
};

export default Home;