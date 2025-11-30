import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import Button from './Button';
import SafeImage from './SafeImage';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Our Story', path: '/our-story' },
    { name: 'Enquiry', path: '/enquiry' },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans bg-dark text-gray-100">
      {/* Navbar */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled 
            ? 'bg-dark/90 backdrop-blur-md border-gray-800 py-3 shadow-lg' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo Placeholder */}
          <Link to="/" className="flex items-center gap-3 group relative z-50" onClick={closeMenu}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center shadow-lg shadow-primary/20 transform group-hover:rotate-3 transition-transform duration-300">
               {/* Use SafeImage if you have a logo file, otherwise generic icon */}
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 md:w-7 md:h-7 text-white">
                 <path d="M3 21h18" /><path d="M5 21V7l8-4 8 4v14" /><path d="M13 11V7" /><path d="M9 11V8" />
               </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black font-heading tracking-tighter text-white leading-none">
                APEX
              </span>
              <span className="text-[10px] md:text-xs font-bold text-primary tracking-[0.2em] uppercase leading-none">
                Construction
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-semibold tracking-wide transition-colors duration-300 rounded-full hover:text-white group overflow-hidden ${
                  location.pathname === link.path ? 'text-white' : 'text-gray-400'
                }`}
              >
                <span className={`relative z-10 ${location.pathname === link.path ? 'text-dark' : ''}`}>{link.name}</span>
                 {location.pathname === link.path && (
                   <span className="absolute inset-0 bg-primary rounded-full z-0"></span>
                 )}
                 {/* Hover effect for non-active */}
                 {location.pathname !== link.path && (
                   <span className="absolute inset-0 bg-gray-800 scale-0 group-hover:scale-100 rounded-full transition-transform duration-300 origin-center z-0"></span>
                 )}
              </Link>
            ))}
            <div className="ml-4 pl-4 border-l border-gray-700">
              <Button to="/enquiry" variant="outline" className="py-2 px-5 text-sm border-gray-600 hover:border-primary">
                Get Quote
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 p-2 text-gray-100 hover:text-primary transition-colors focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
             {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div
          className={`fixed inset-0 bg-dark/95 backdrop-blur-xl z-40 flex items-center justify-center transition-all duration-500 ease-in-out md:hidden ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
        >
          {/* Background decoration */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <nav className="flex flex-col items-center space-y-8 relative z-10 w-full px-6">
            {navLinks.map((link, idx) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`text-3xl font-heading font-bold transition-all duration-300 transform hover:scale-110 ${
                  location.pathname === link.path 
                    ? 'text-primary' 
                    : 'text-gray-400 hover:text-white'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-8 w-full max-w-xs">
              <Button to="/enquiry" fullWidth onClick={closeMenu}>
                Start a Project
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-dark-lighter border-t border-gray-800 pt-20 pb-10 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/4 w-96 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                    <span className="font-bold text-dark text-lg">A</span>
                </div>
                <span className="text-2xl font-bold font-heading text-white">
                  APEX<span className="text-primary">CIVIL</span>
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Engineering the skyline of tomorrow. We combine technical precision with creative vision to deliver infrastructure that stands the test of time.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg font-bold font-heading text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Company
              </h3>
              <ul className="space-y-3">
                {['Home', 'Projects', 'Our Story', 'Careers', 'News'].map((item) => (
                  <li key={item}>
                    <Link to="/" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group">
                      <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0 text-primary" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold font-heading text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Services
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Design & Engineering</li>
                <li className="hover:text-white transition-colors cursor-pointer">General Construction</li>
                <li className="hover:text-white transition-colors cursor-pointer">Renovation & Restoration</li>
                <li className="hover:text-white transition-colors cursor-pointer">Project Management</li>
                <li className="hover:text-white transition-colors cursor-pointer">Sustainable Building</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold font-heading text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Contact
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 group">
                  <div className="p-2 bg-gray-800 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <MapPin size={18} />
                  </div>
                  <span className="text-gray-400">123 Construction Blvd,<br />Metro City, ST 90210</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="p-2 bg-gray-800 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone size={18} />
                  </div>
                  <a href="tel:+15551234567" className="text-gray-400 hover:text-white transition-colors">+1 (555) 123-4567</a>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="p-2 bg-gray-800 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail size={18} />
                  </div>
                  <a href="mailto:info@apexcivil.com" className="text-gray-400 hover:text-white transition-colors">info@apexcivil.com</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Apex Civil & Construction. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary">Privacy Policy</a>
              <a href="#" className="hover:text-primary">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Helper component for footer link
const ChevronRight = ({size, className}: {size:number, className?: string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6"/></svg>
);

export default Layout;