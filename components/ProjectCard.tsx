import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectProps {
  title: string;
  category: string;
  image: string;
  description: string;
  id: string;
}

const ProjectCard = ({ title, category, image, description, id }: ProjectProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-rose-50"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <span className="text-white font-medium flex items-center">
            Projekt ansehen <ArrowUpRight size={18} className="ml-2" />
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <span className="text-xs font-semibold tracking-wider text-rose-500 uppercase mb-2 block">
          {category}
        </span>
        <h3 className="text-xl font-serif font-bold text-slate-900 mb-2 group-hover:text-rose-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-500 text-sm line-clamp-2">
          {description}
        </p>
      </div>
      
      <Link to={`/projects`} className="absolute inset-0 z-10">
        <span className="sr-only">View {title}</span>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
