import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when typing
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      }, 1500);
    }
  };

  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} id="contact" className={`force-dark py-24 bg-bg relative transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Let's <span className="text-accent">Build Something</span> Together</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-primary">Get In Touch</h3>
            <p className="text-secondary leading-relaxed">
              I'm currently open to new opportunities, collaborations, and interesting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-6 pt-4">
              <a href="mailto:radhakrishna2787@gmail.com" className="flex items-start group">
                <div className="w-12 h-12 rounded-full bg-accent-soft flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors duration-300">
                  <Mail className="text-accent group-hover:text-white transition-colors duration-300" size={20} />
                </div>
                <div className="ml-4 pt-1">
                  <h4 className="text-sm font-semibold text-primary mb-1">Email</h4>
                  <p className="text-secondary group-hover:text-accent transition-colors">radhakrishna2787@gmail.com</p>
                </div>
              </a>
              
              <div className="flex items-start group cursor-default">
                <div className="w-12 h-12 rounded-full bg-accent-soft flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors duration-300">
                  <MapPin className="text-accent group-hover:text-white transition-colors duration-300" size={20} />
                </div>
                <div className="ml-4 pt-1">
                  <h4 className="text-sm font-semibold text-primary mb-1">Location</h4>
                  <p className="text-secondary">Yeleswaram, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-bg p-8 rounded-3xl border border-border-theme shadow-sm">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 min-h-[350px]">
                <div className="w-16 h-16 bg-accent-soft rounded-full flex items-center justify-center">
                  <CheckCircle className="text-accent" size={32} />
                </div>
                <h4 className="text-xl font-bold text-primary">Message Sent!</h4>
                <p className="text-secondary max-w-sm">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-accent font-medium hover:text-accent-hover"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : 'border-border-theme focus:border-accent focus:ring-accent-soft'} bg-surface text-primary outline-none transition-all focus:ring-2`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : 'border-border-theme focus:border-accent focus:ring-accent-soft'} bg-surface text-primary outline-none transition-all focus:ring-2`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : 'border-border-theme focus:border-accent focus:ring-accent-soft'} bg-surface text-primary outline-none transition-all focus:ring-2 resize-none`}
                    placeholder="How can we work together?"
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-6 py-4 rounded-xl bg-accent text-[#18181B] font-medium hover:bg-accent-hover transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
