import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project, index }) => {
    const navigate = useNavigate();

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => navigate(`/project/${project.slug}`)}
            className="group relative bg-slate-800 rounded-2xl overflow-hidden cursor-pointer border border-slate-700 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 transform hover:-translate-y-2"
        >
            {/* Image Container with Gradient Overlay on Hover */}
            <div className="relative h-56 w-full overflow-hidden">
                <img
                    src={project.imageSrc}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
            </div>

            {/* Content Section */}
            <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-semibold px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                        {project.tag}
                    </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                    {project.title}
                </h3>

                <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                    {project.description}
                </p>

                {/* View Details Button (appears on hover) */}
                <div className="flex items-center text-emerald-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 relative">
                    <span>View Details</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
