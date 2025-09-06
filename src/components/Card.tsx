'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink, Github, Calendar, Building, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CardProps {
  id: string;
  type: 'project' | 'experience';
  title: string;
  org?: string;
  period: string;
  summary: string;
  bullets: string[];
  tech: string[];
  links: {
    github?: string;
    live?: string;
  };
  images: string[];
}

export default function Card({
  id,
  type,
  title,
  org,
  period,
  summary,
  bullets,
  tech,
  links,
  images
}: CardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // For projects, we want to navigate to a dedicated page
  // For experience, we want to expand inline
  const isProject = type === 'project';

  if (isProject) {
    // Project card that navigates to project page
    return (
      <motion.div
        className="bg-card rounded-2xl border border-border p-6 hover:border-accent transition-colors duration-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Link href={`/projects/${id}`} className="block group">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-semibold text-ink group-hover:text-accent-600 transition-colors duration-200">
                  {title}
                </h3>
                <motion.div
                  className="text-ink-muted group-hover:text-accent-600 transition-colors duration-200"
                  whileHover={{ x: 4 }}
                >
                  <ArrowRight size={18} />
                </motion.div>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-ink-muted mb-2">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{period}</span>
                </div>
              </div>
              
              <p className="text-ink-muted text-sm leading-relaxed mb-3">
                {summary}
              </p>

              {/* Tech Stack Preview */}
              {tech.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tech.slice(0, 3).map((technology) => (
                    <span
                      key={technology}
                      className="px-3 py-1 bg-accent text-ink text-xs font-medium rounded-full"
                    >
                      {technology}
                    </span>
                  ))}
                  {tech.length > 3 && (
                    <span className="text-xs text-ink-muted self-center">
                      +{tech.length - 3} more
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  // Experience card with inline expansion
  return (
    <motion.div
      layout
      className="bg-card rounded-2xl border border-border p-6 hover:border-accent transition-colors duration-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={toggleExpanded}
        className="w-full text-left focus:outline-none focus:ring-2 focus:ring-accent-600 focus:ring-offset-2 focus:ring-offset-card rounded-xl"
        aria-expanded={isExpanded}
        aria-controls={`card-content-${id}`}
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-semibold text-ink hover:text-accent-600 transition-colors duration-200">
                {title}
              </h3>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-ink-muted"
              >
                <ChevronDown size={20} />
              </motion.div>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-ink-muted mb-2">
              {org && (
                <div className="flex items-center gap-1">
                  <Building size={14} />
                  <span>{org}</span>
                </div>
              )}
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{period}</span>
              </div>
            </div>
            
            <p className="text-ink-muted text-sm leading-relaxed">
              {summary}
            </p>
          </div>
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            id={`card-content-${id}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-border">
              {/* Details */}
              {bullets.length > 0 && (
                <div className="mb-4">
                  <ul className="space-y-2 text-sm text-ink-muted">
                    {bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-accent-600 mt-1.5">•</span>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              {tech.length > 0 && (
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {tech.map((technology) => (
                      <span
                        key={technology}
                        className="px-3 py-1 bg-accent text-ink text-xs font-medium rounded-full"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Links */}
              {(links.github || links.live) && (
                <div className="flex gap-3">
                  {links.github && (
                    <a
                      href={links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-accent-600 transition-colors duration-200"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  )}
                  {links.live && (
                    <a
                      href={links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-accent-600 transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              )}

              {/* Images */}
              {images.length > 0 && (
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${title} screenshot ${index + 1}`}
                      className="rounded-lg border border-border"
                      loading="lazy"
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}