import React, { useState } from 'react';
import { ChevronRight, CheckCircle, AlertCircle, Phone, Mail, MapPin, Send } from 'lucide-react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import SafeImage from '../components/SafeImage';

const Enquiry: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-dark pt-24 pb-12 md:pb-24 flex items-center relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-800 via-dark to-dark opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Left Column: Info */}
            <div className="lg:w-5/12 text-white">
               <div className="flex items-center gap-2 text-sm text-gray-400 mb-6 uppercase tracking-widest font-bold">
                  <span>Home</span>
                  <ChevronRight size={14} className="text-primary" />
                  <span className="text-primary">Contact</span>
               </div>
               
               <h1 className="text-5xl md:text-6xl font-black font-heading mb-6 leading-tight">
                  Let's Build <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Something Great</span>
               </h1>
               
               <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                  Have a vision for your next project? Our team of engineers and project managers are ready to bring it to life.
               </p>

               <div className="space-y-8">
                  <div className="group flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                     <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                        <Phone className="text-white w-5 h-5" />
                     </div>
                     <div>
                        <h3 className="text-lg font-bold mb-1">Call Us</h3>
                        <p className="text-gray-400 mb-1">Mon-Fri from 8am to 6pm</p>
                        <a href="tel:+15551234567" className="text-lg text-primary hover:text-white transition-colors font-semibold">+1 (555) 123-4567</a>
                     </div>
                  </div>

                  <div className="group flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                     <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                        <Mail className="text-white w-5 h-5" />
                     </div>
                     <div>
                        <h3 className="text-lg font-bold mb-1">Email Us</h3>
                        <p className="text-gray-400 mb-1">For quotes and general enquiries</p>
                        <a href="mailto:project@apexcivil.com" className="text-lg text-primary hover:text-white transition-colors font-semibold">project@apexcivil.com</a>
                     </div>
                  </div>

                  {/* Map Placeholder */}
                  <div className="rounded-2xl overflow-hidden border border-gray-700 h-48 relative">
                     <SafeImage src="images/map.jpg" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
                     <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                        <div className="flex items-center gap-2 text-white">
                           <MapPin size={16} className="text-primary" />
                           <span className="text-sm">123 Construction Blvd, Metro City</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:w-7/12">
               <div className="bg-dark-lighter border border-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                  {/* Glow top border */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-orange-500 to-primary"></div>
                  
                  {formStatus === 'success' ? (
                     <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in-up">
                        <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
                           <CheckCircle className="h-12 w-12 text-green-500" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">Enquiry Received</h3>
                        <p className="text-gray-400 mb-8 max-w-md">
                           Thank you for contacting Apex Civil. Our project estimation team will review your requirements and respond within 24 hours.
                        </p>
                        <Button onClick={() => setFormStatus('idle')} variant="outline">
                           Send Another Message
                        </Button>
                     </div>
                  ) : (
                     <form onSubmit={handleSubmit} className="space-y-8">
                        <div>
                           <h3 className="text-2xl font-bold text-white mb-2">Project Details</h3>
                           <p className="text-gray-500 text-sm">Tell us about your needs and we'll start the conversation.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           <div className="relative group">
                              <input 
                                 type="text" 
                                 name="name" 
                                 required
                                 placeholder=" "
                                 value={formData.name}
                                 onChange={handleChange}
                                 className="peer w-full bg-dark border-b-2 border-gray-700 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder-transparent"
                              />
                              <label className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm">
                                 Full Name *
                              </label>
                           </div>
                           <div className="relative group">
                              <input 
                                 type="text" 
                                 name="company" 
                                 placeholder=" "
                                 value={formData.company}
                                 onChange={handleChange}
                                 className="peer w-full bg-dark border-b-2 border-gray-700 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder-transparent"
                              />
                              <label className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm">
                                 Company Name
                              </label>
                           </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           <div className="relative group">
                              <input 
                                 type="email" 
                                 name="email" 
                                 required
                                 placeholder=" "
                                 value={formData.email}
                                 onChange={handleChange}
                                 className="peer w-full bg-dark border-b-2 border-gray-700 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder-transparent"
                              />
                              <label className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm">
                                 Email Address *
                              </label>
                           </div>
                           <div className="relative group">
                              <input 
                                 type="tel" 
                                 name="phone" 
                                 required
                                 placeholder=" "
                                 value={formData.phone}
                                 onChange={handleChange}
                                 className="peer w-full bg-dark border-b-2 border-gray-700 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder-transparent"
                              />
                              <label className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm">
                                 Phone Number *
                              </label>
                           </div>
                        </div>

                        <div className="relative group">
                           <select 
                              name="projectType" 
                              required
                              value={formData.projectType}
                              onChange={handleChange}
                              className="peer w-full bg-dark border-b-2 border-gray-700 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none"
                           >
                              <option value="" disabled className="bg-dark">Select Project Type</option>
                              <option value="commercial" className="bg-dark">Commercial Construction</option>
                              <option value="residential" className="bg-dark">Residential Development</option>
                              <option value="infrastructure" className="bg-dark">Infrastructure</option>
                              <option value="renovation" className="bg-dark">Renovation</option>
                           </select>
                           <label className="absolute left-0 -top-3.5 text-gray-500 text-sm">
                              Project Type *
                           </label>
                           <div className="absolute right-0 top-4 pointer-events-none text-gray-500">
                              <ChevronRight className="rotate-90 w-4 h-4" />
                           </div>
                        </div>

                        <div className="relative group">
                           <textarea 
                              name="message" 
                              rows={4}
                              required
                              placeholder=" "
                              value={formData.message}
                              onChange={handleChange}
                              className="peer w-full bg-dark border-b-2 border-gray-700 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder-transparent resize-none"
                           ></textarea>
                           <label className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm">
                              Brief Description of Requirements *
                           </label>
                        </div>

                        <div className="pt-4">
                           <Button type="submit" fullWidth disabled={formStatus === 'submitting'} className="py-4 text-lg">
                              {formStatus === 'submitting' ? 'Processing...' : (
                                 <span className="flex items-center gap-2">Send Enquiry <Send size={18} /></span>
                              )}
                           </Button>
                        </div>
                     </form>
                  )}
               </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Enquiry;