import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import projectData from './data/Projects.json';
import Navbar from './Navbar';
import Footer from './Footer';

const ProjectDetails = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);

    useEffect(() => {
        // Scroll to top when page loads
        window.scrollTo(0, 0);
        // Find project by slug
        const foundProject = projectData.find(p => p.slug === slug);
        setProject(foundProject);
    }, [slug]);

    if (!project) return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>;

    return (
        <>
            <Navbar />
            <div className="min-h-screen pt-32 pb-12 transition-all duration-300" style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }}>
                <div className="container mx-auto px-4 max-w-6xl">

                    {/* Back Navigation Bar */}
                    <button
                        onClick={() => navigate('/')}
                        className="group inline-flex items-center text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors mb-8 bg-transparent border-0 outline-none shadow-none cursor-pointer p-0"
                    >
                        <svg className="w-6 h-6 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Portfolio
                    </button>

                    {/* Hero Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
                    >
                        {/* Text Content */}
                        <div>
                            {project.tag && (
                                <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-slate-800/50 border border-emerald-200 dark:border-slate-700 rounded-full">
                                    {project.tag}
                                </span>
                            )}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                                {project.title}
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-gray-300 mb-8 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                {project.demo && (
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full transition-colors shadow-lg shadow-emerald-600/30 flex items-center gap-2">
                                        Live Preview
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                    </a>
                                )}
                                {project.source && (
                                    <a href={project.source} target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-slate-800 dark:bg-gray-800 hover:bg-slate-700 dark:hover:bg-gray-700 text-white font-bold rounded-full transition-colors border border-slate-700 dark:border-gray-700 flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
                                        Source Code
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative rounded-2xl overflow-hidden border border-slate-300 dark:border-gray-800 bg-slate-100 dark:bg-gray-900 aspect-video flex items-center justify-center">
                                <img src={project.imageSrc} alt={project.title} className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </motion.div>

                    <hr className="border-slate-300 dark:border-gray-800 mb-20 transition-colors" />

                    {/* Deep Dive Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                        {/* Left Column: Problem & Solution */}
                        <div className="lg:col-span-2 space-y-16">
                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-500/10 text-red-600 dark:text-red-500 flex items-center justify-center text-sm border border-red-200 dark:border-red-500/20">01</span>
                                    The Challenge
                                </h3>
                                <p className="text-lg leading-relaxed p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm transition-colors" style={{ backgroundColor: 'var(--bg-surface)', color: 'var(--text-muted)' }}>
                                    {project.problemStatement || "The core challenge involved building a scalable, responsive, and robust application that solved complex user-specific problems without compromising on performance."}
                                </p>
                            </motion.section>

                            <motion.section
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-500 flex items-center justify-center text-sm border border-green-200 dark:border-green-500/20">02</span>
                                    The Solution
                                </h3>
                                <p className="text-lg leading-relaxed p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm transition-colors" style={{ backgroundColor: 'var(--bg-surface)', color: 'var(--text-muted)' }}>
                                    {project.solution || "We architected a solution built on modern frameworks, heavily optimizing the rendering pipeline and ensuring state management was predictable resulting in a premium user experience."}
                                </p>
                            </motion.section>
                        </div>

                        {/* Right Column: Stack & Features */}
                        <div className="space-y-12">

                            {/* Tech Stack */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm transition-colors"
                                style={{ backgroundColor: 'var(--bg-surface)' }}
                            >
                                <h4 className="text-xl font-bold mb-6 border-b border-slate-200 dark:border-slate-700 pb-4 text-slate-900 dark:text-white">Technologies Used</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack ? project.techStack.map((tech, i) => (
                                        <span key={i} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 rounded-md text-sm border border-slate-200 dark:border-slate-700 font-medium transition-colors">
                                            {tech}
                                        </span>
                                    )) : (
                                        <span className="text-slate-500 dark:text-slate-500 italic">Core web technologies</span>
                                    )}
                                </div>
                            </motion.div>

                            {/* Key Features */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm transition-colors"
                                style={{ backgroundColor: 'var(--bg-surface)' }}
                            >
                                <h4 className="text-xl font-bold mb-6 border-b border-slate-200 dark:border-slate-700 pb-4 text-slate-900 dark:text-white">Key Features</h4>
                                <ul className="space-y-4">
                                    {project.features ? project.features.map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-500 mt-1 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                            <span className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{feature}</span>
                                        </li>
                                    )) : (
                                        <li className="text-slate-500 dark:text-gray-500 italic">Premium tailored features for optimal UX</li>
                                    )}
                                </ul>
                            </motion.div>
                        </div>

                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProjectDetails;
