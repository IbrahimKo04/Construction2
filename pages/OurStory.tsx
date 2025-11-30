import React from 'react';
import { ChevronRight, Award, Users, Globe, Target, Shield } from 'lucide-react';
import Layout from '../components/Layout';
import SafeImage from '../components/SafeImage';
import { MILESTONES, TEAM } from '../constants';

const OurStory: React.FC = () => {
  return (
    <Layout>
      {/* Header */}
      <div className="bg-dark relative py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-800 to-transparent skew-x-12 opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4 uppercase tracking-widest font-bold">
            <span>Home</span>
            <ChevronRight size={14} className="text-primary" />
            <span className="text-primary">About Us</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black font-heading text-white mb-6">Building Legacy</h1>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
            More than just concrete and steel. We are a collective of visionaries dedicated to shaping the environments of tomorrow.
          </p>
        </div>
      </div>

      {/* Intro Split */}
      <section className="py-24 bg-dark-lighter border-y border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 relative group">
               <div className="absolute top-4 left-4 w-full h-full border-2 border-primary rounded-lg z-0 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
               <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                  <SafeImage 
                    src="images/our-story-hero.jpg"
                    alt="Construction Team Meeting" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    fallbackType="people"
                  />
               </div>
               <div className="absolute -bottom-8 -right-8 bg-dark border border-gray-700 p-8 rounded-lg shadow-2xl z-20 hidden md:block">
                  <p className="text-5xl font-black text-primary font-heading">28+</p>
                  <p className="text-gray-400 text-sm font-bold uppercase tracking-wider mt-1">Years of Excellence</p>
               </div>
            </div>
            
            <div className="w-full lg:w-1/2">
               <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">Our Foundation</h2>
               <div className="w-20 h-1 bg-primary mb-8"></div>
               <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Founded in 1995, Apex Civil & Construction began with a single mission: to deliver engineering projects that defy expectations. What started as a modest local contractor has evolved into a regional powerhouse.
               </p>
               <p className="text-gray-400 text-lg leading-relaxed mb-10">
                  We believe that every structure tells a story. Whether it's a bridge connecting communities or a skyscraper redefining a skyline, our work is defined by integrity, safety, and an obsession with quality.
               </p>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                     { icon: Award, title: 'Award Winning', text: 'Industry recognized design' },
                     { icon: Shield, title: 'Safety First', text: 'Zero accident culture' },
                     { icon: Users, title: 'Expert Team', text: 'Certified professionals' },
                     { icon: Globe, title: 'Sustainable', text: 'Green building focus' },
                  ].map((item, i) => (
                     <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/5 hover:border-primary/50 transition-colors">
                        <item.icon className="text-primary w-8 h-8 shrink-0" />
                        <div>
                           <h4 className="font-bold text-white">{item.title}</h4>
                           <p className="text-sm text-gray-500">{item.text}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-dark relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-primary font-bold tracking-widest uppercase mb-2 block">History</span>
            <h2 className="text-4xl font-bold font-heading text-white">The Apex Timeline</h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 -translate-x-1/2"></div>
            
            {MILESTONES.map((milestone, index) => (
               <div key={index} className={`relative flex flex-col md:flex-row items-center gap-8 mb-16 last:mb-0 group ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  
                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-12 md:pl-0`}>
                     <div className="p-6 bg-dark-lighter border border-gray-700 rounded-xl hover:border-primary transition-colors duration-300 relative">
                        {/* Arrow */}
                        <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-dark-lighter border-t border-l border-gray-700 rotate-45 transition-colors duration-300 group-hover:border-primary ${index % 2 === 0 ? '-right-2.5 border-r border-t-0 border-l-0 border-b group-hover:border-r-primary group-hover:border-b-primary' : '-left-2.5 group-hover:border-t-primary group-hover:border-l-primary'}`}></div>
                        
                        <span className="text-4xl font-black text-white/10 absolute top-2 right-4 pointer-events-none">{milestone.year}</span>
                        <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{milestone.description}</p>
                     </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-dark border-4 border-gray-700 rounded-full z-10 group-hover:border-primary group-hover:scale-125 transition-all duration-300 flex items-center justify-center">
                     <div className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>

                  {/* Empty for layout */}
                  <div className="w-full md:w-1/2 hidden md:block"></div>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-dark-lighter border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-bold font-heading text-white">Leadership</h2>
             <p className="mt-4 text-gray-400">The minds engineering our path forward.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TEAM.map((member) => (
              <div key={member.id} className="group bg-dark border border-gray-800 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors duration-300">
                <div className="aspect-square overflow-hidden relative">
                   <SafeImage 
                     src={member.image} 
                     alt={member.name}
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                     fallbackType="people"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-80"></div>
                   <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-bold text-white">{member.name}</h3>
                      <p className="text-primary font-medium text-sm uppercase tracking-wide">{member.role}</p>
                   </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OurStory;