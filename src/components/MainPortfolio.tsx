'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import Link from 'next/link';
import Card from './Card';

const projects = [
  {
    id: 'spotify-mcp',
    type: 'project' as const,
    title: 'Spotify MCP',
    period: 'Aug 2025 - Present',
    summary: 'Building a custom Model Context Protocol server to connect Claude Desktop with Spotify API',
    bullets: [
      'Building a custom Model Context Protocol server to connect with Claude Desktop with the Spotify API',
      'Enabling playlist creation, song recommendations, and personalized music management through natural language commands while deepening understanding of API integration and Agentic AI'
    ],
    tech: ['TypeScript', 'Node.js', 'Spotify API'],
    links: {
      github: 'https://github.com/albertred',
      live: ''
    },
    images: []
  },
  {
    id: 'wlp4-compiler',
    type: 'project' as const,
    title: 'WLP4 Compiler',
    period: 'Jan 2025 - Apr 2025',
    summary: 'Built a full C++ compiler for WLP4, a C subset including functions and pointers',
    bullets: [
      'Built a full C++ compiler for WLP4, a C subset including functions and pointers, translating to MIPS assembly',
      'Implemented key compiler stages: scanning, parsing, semantic analysis, and code generation'
    ],
    tech: ['C++'],
    links: {
      github: 'https://github.com/albertred',
      live: ''
    },
    images: []
  },
  {
    id: 'mingo',
    type: 'project' as const,
    title: 'Mingo, Hack the North',
    period: 'Sep 2024',
    summary: 'Web application to enhance attendee experiences at networking events',
    bullets: [
      'Developed a web application in collaboration with 3 teammates to enhance attendee experiences at networking events with a user-friendly UI for exploring event venues created using React and TailwindCSS',
      'Integrated Cohere\'s API to generate AI summaries of verbal conversations, enhancing recall and accessibility'
    ],
    tech: ['Cohere API', 'React', 'TailwindCSS'],
    links: {
      github: 'https://github.com/albertred',
      live: ''
    },
    images: []
  },
  {
    id: 'fridgefriend',
    type: 'project' as const,
    title: 'FridgeFriend, Technova Best UI/UX Winner',
    period: 'Sep 2024',
    summary: 'Web application that recommends recipes based on food images',
    bullets: [
      'Built a web application with Streamlit Python that recommends recipes to users based on input of food images, created with image detection using YOLOv5 and a vectorizer trained recipe dataset from Kaggle',
      'Implemented user authentication with PropelAuth and stored user recipe data using MongoDB Atlas'
    ],
    tech: ['Python', 'PropelAuth', 'MongoDB Atlas'],
    links: {
      github: 'https://github.com/albertred',
      live: ''
    },
    images: []
  },
  {
    id: 'payroll-software',
    type: 'project' as const,
    title: 'Payroll Management Software',
    period: 'Jun 2023 - Aug 2023',
    summary: 'Payroll management system automating extraction, calculation, and PDF generation',
    bullets: [
      'Co-developed a payroll management system using Python and Django, automating extraction, calculation, and PDF generation of paystubs from Excel data',
      'Leveraged Pandas and Openpyxl for data processing and PyPDF2 for document creation'
    ],
    tech: ['Python', 'Django'],
    links: {
      github: 'https://github.com/albertred',
      live: ''
    },
    images: []
  }
];

const experiences = [
  {
    id: 'rocket-coop',
    type: 'experience' as const,
    title: 'Software Development Co-op',
    org: 'Rocket',
    period: 'May 2025 – Aug 2025',
    summary: 'Developed features for banker workflow management application',
    bullets: [
      'Developed features for a banker workflow management application using C#, WPF, and SQL, as well as enhancing and testing .NET Core APIs with Insomnia and MSTest to support UI and backend application functionality',
      'Took ownership of user stories from design through code implementation and delivering high-quality, maintainable solutions that support key business processes in a complex business domain',
      'Led bi-weekly team retrospectives and participating in code reviews to support agile development practices'
    ],
    tech: ['C#', 'WPF', 'SQL', '.NET Core', 'Insomnia', 'MSTest'],
    links: {},
    images: []
  },
  {
    id: 'uw-researcher',
    type: 'experience' as const,
    title: 'Undergraduate Researcher',
    org: 'University of Waterloo',
    period: 'Sep 2024 – Feb 2025',
    summary: 'Investigated activation function effects on stability in predictive coding networks',
    bullets: [
      'Investigated activation function effects on stability and convergence in predictive coding networks, applying theoretical understanding to experimental design and statistical analysis in PyTorch',
      'Produced literature reviews and research proposals, demonstrating ability to translate theory into actionable items',
      'Implemented regression models and neural networks to solve real-world prediction challenges, quickly mastering new machine learning techniques and frameworks in a dynamic research environment'
    ],
    tech: ['PyTorch', 'Python'],
    links: {},
    images: []
  },
  {
    id: 'ops-intern',
    type: 'experience' as const,
    title: 'Software Development Intern',
    org: 'Ontario Public Service',
    period: 'May 2024 – Aug 2024',
    summary: 'Automated regression test suite reducing testing time by 80%',
    bullets: [
      'Automated regression test suite using Playwright Python on the BPS Secure project, reducing testing time by 80%',
      'Resolved defects in an Angular application to enhance performance and user experience',
      'Enabled language support by enhancing the test suite with bilingual UI testing capabilities and ensured efficiency by managing user data through Python scripts'
    ],
    tech: ['Playwright Python', 'Angular', 'Python'],
    links: {},
    images: []
  }
];

const allItems = [...projects, ...experiences].sort((a, b) => {
  // Sort by period (most recent first)
  const aDate = new Date(a.period.split(' – ')[0] || a.period);
  const bDate = new Date(b.period.split(' – ')[0] || b.period);
  return bDate.getTime() - aDate.getTime();
});

export default function MainPortfolio() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-bg"
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
          {/* Left Column - Sticky */}
          <div className="lg:sticky lg:top-12 lg:self-start">
            <div className="space-y-8">
              {/* Intro */}
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-ink mb-4 tracking-tight">
                  Michelle Lu
                </h1>
                <p className="text-xl text-ink-muted mb-6 leading-relaxed">
                  Computer Science Student at University of Waterloo
                </p>
                <p className="text-ink-muted leading-relaxed">
                  Building innovative solutions through software development, machine learning, and creative problem-solving. 
                  Currently exploring the intersection of AI and human-computer interaction.
                </p>
              </div>

              {/* Quick Links */}
              <nav className="space-y-2">
                <Link href="/projects" className="block text-ink-muted hover:text-accent-600 transition-colors duration-200">
                  → Projects
                </Link>
                <a href="#experience" className="block text-ink-muted hover:text-accent-600 transition-colors duration-200">
                  → Experience  
                </a>
                <Link href="/blog" className="block text-ink-muted hover:text-accent-600 transition-colors duration-200">
                  → Blog
                </Link>
                <Link href="/about" className="block text-ink-muted hover:text-accent-600 transition-colors duration-200">
                  → About
                </Link>
              </nav>

              {/* Social Links */}
              <div className="flex gap-4">
                <a 
                  href="https://github.com/albertred" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-ink-muted hover:text-accent-600 transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/michellelu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-ink-muted hover:text-accent-600 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:m235lu@uwaterloo.ca"
                  className="p-2 text-ink-muted hover:text-accent-600 transition-colors duration-200"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
                <a 
                  href="/resume.pdf" 
                  download
                  className="p-2 text-ink-muted hover:text-accent-600 transition-colors duration-200"
                  aria-label="Download Resume"
                >
                  <Download size={20} />
                </a>
              </div>

              {/* Now Section */}
              <div className="p-4 bg-card rounded-2xl border border-border">
                <h3 className="font-semibold text-ink mb-2">Now</h3>
                <p className="text-sm text-ink-muted">
                  Currently working on my WLP4 Compiler project and exploring Model Context Protocol integrations. 
                  Always open to new opportunities and collaborations.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Scrollable Feed */}
          <div className="space-y-6">
            {allItems.map((item) => (
              <Card 
                key={item.id} 
                {...item}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}