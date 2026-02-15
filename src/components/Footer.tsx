import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-rose-100 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-purple-600">
              Portfolio
            </Link>
            <p className="text-slate-500 max-w-xs">
              Interaction Design Studentin mit Fokus auf minimalistische Interfaces und nutzerzentrierte Erlebnisse.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif font-semibold text-slate-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/projects" className="text-slate-500 hover:text-rose-600 transition-colors">Projekte</Link></li>
              <li><Link to="/about" className="text-slate-500 hover:text-rose-600 transition-colors">Über mich</Link></li>
              <li><Link to="/contact" className="text-slate-500 hover:text-rose-600 transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-slate-900 mb-4">Kontakt</h3>
            <p className="text-slate-500 mb-4">
              Interessiert an einer Zusammenarbeit? Ich freue mich von dir zu hören.
            </p>
            <a 
              href="mailto:hello@example.com" 
              className="inline-flex items-center text-rose-600 font-medium hover:text-rose-700 group"
            >
              Schreib mir <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="p-2 bg-rose-50 rounded-full text-rose-600 hover:bg-rose-100 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 bg-rose-50 rounded-full text-rose-600 hover:bg-rose-100 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="p-2 bg-rose-50 rounded-full text-rose-600 hover:bg-rose-100 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-rose-50 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Interaction Design Portfolio. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-600">Impressum</a>
            <a href="#" className="hover:text-slate-600">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
