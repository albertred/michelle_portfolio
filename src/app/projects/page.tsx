'use client';

import Link from 'next/link';
import { ChevronLeft, Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// This would normally come from a CMS or API
const projects = [
  {
    id: 'spotify-mcp',
    title: 'Spotify MCP',
    period: 'Aug 2025 - Present',
    summary: 'Building a custom Model Context Protocol server to connect Claude Desktop with Spotify API',
    tech: ['TypeScript', 'Node.js', 'Spotify API'],
    status: 'In Progress',
    featured: true
  },
  {
    id: 'wlp4-compiler',
    title: 'WLP4 Compiler',
    period: 'Jan 2025 - Apr 2025',
    summary: 'Built a full C++ compiler for WLP4, a C subset including functions and pointers',
    tech: ['C++'],
    status: 'Completed',
    featured: true
  },
  {
    id: 'mingo',
    title: 'Mingo - Hack the North',
    period: 'Sep 2024',
    summary: 'Web application to enhance attendee experiences at networking events',
    tech: ['React', 'TailwindCSS', 'Cohere API'],
    status: 'Completed',
    featured: true
  },
  {
    id: 'fridgefriend',
    title: 'FridgeFriend - Technova Best UI/UX Winner',
    period: 'Sep 2024',
    summary: 'Web application that recommends recipes based on food images',
    tech: ['Python', 'Streamlit', 'YOLOv5'],
    status: 'Completed',
    featured: true,
    awards: ['Best UI/UX - Technova 2024']
  },
  {
    id: 'payroll-software',
    title: 'Payroll Management Software',
    period: 'Jun 2023 - Aug 2023',
    summary: 'Payroll management system automating extraction, calculation, and PDF generation',
    tech: ['Python', 'Django'],
    status: 'Completed',
    featured: false
  }
];

export default function ProjectsPage() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Back Link */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-ink-muted hover:text-accent-600 transition-colors duration-200 mb-8"
        >
          <ChevronLeft size={20} />
          <span>Back to portfolio</span>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-ink mb-4 tracking-tight">
            Projects
          </h1>
          <p className="text-xl text-ink-muted leading-relaxed max-w-3xl">
            A collection of software projects spanning web development, machine learning, systems programming, and creative problem-solving. Each project represents a journey of learning and innovation.
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-ink mb-8">Featured Projects</h2>
          <div className="grid gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border p-8 hover:border-accent transition-colors duration-200"
              >
                <Link href={`/projects/${project.id}`} className="block group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold text-ink group-hover:text-accent-600 transition-colors duration-200">
                          {project.title}
                        </h3>
                        {project.awards && (
                          <span className="px-3 py-1 bg-accent-600 text-white text-sm font-medium rounded-full">
                            🏆 Award Winner
                          </span>
                        )}
                        <motion.div
                          className="text-ink-muted group-hover:text-accent-600 transition-colors duration-200"
                          whileHover={{ x: 4 }}
                        >
                          <ArrowRight size={20} />
                        </motion.div>
                      </div>
                      
                      <div className="flex items-center gap-6 text-sm text-ink-muted mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{project.period}</span>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'In Progress' 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      
                      <p className="text-ink-muted leading-relaxed mb-4">
                        {project.summary}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 4).map((technology) => (
                          <span
                            key={technology}
                            className="px-3 py-1 bg-accent text-ink text-sm font-medium rounded-full"
                          >
                            {technology}
                          </span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="text-sm text-ink-muted self-center">
                            +{project.tech.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-ink mb-8">Other Projects</h2>
            <div className="grid gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: (featuredProjects.length + index) * 0.1 }}
                  className="bg-card rounded-2xl border border-border p-6 hover:border-accent transition-colors duration-200"
                >
                  <Link href={`/projects/${project.id}`} className="block group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold text-ink group-hover:text-accent-600 transition-colors duration-200">
                            {project.title}
                          </h3>
                          <motion.div
                            className="text-ink-muted group-hover:text-accent-600 transition-colors duration-200"
                            whileHover={{ x: 4 }}
                          >
                            <ArrowRight size={16} />
                          </motion.div>
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-ink-muted mb-2">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{project.period}</span>
                          </div>
                        </div>
                        
                        <p className="text-ink-muted text-sm leading-relaxed mb-3">
                          {project.summary}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {project.tech.slice(0, 3).map((technology) => (
                            <span
                              key={technology}
                              className="px-3 py-1 bg-accent text-ink text-xs font-medium rounded-full"
                            >
                              {technology}
                            </span>
                          ))}
                          {project.tech.length > 3 && (
                            <span className="text-xs text-ink-muted self-center">
                              +{project.tech.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}