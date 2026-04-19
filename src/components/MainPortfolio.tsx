'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Card from './Card';

const projects = [
  {
    id: 'zoob',
    type: 'project' as const,
    title: 'Zoob: Semantic Zoom with AI',
    period: 'Mar 2026',
    summary: 'LLM-powered semantic zoom interface that adapts content to users\' level of focus',
    bullets: [
      'Built Zoob, an LLM-powered semantic zoom interface that adapts content to users\' level of focus, transitioning from task overviews to documents to paragraph-level detail',
      'Developed an interactive infinite canvas UI with graph-based nodes and smooth zoom transitions'
    ],
    tech: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Express'],
    links: {
      github: 'https://github.com/albertred',
      live: ''
    },
    images: []
  },
  {
    id: 'spotify-mcp',
    type: 'project' as const,
    title: 'Spotify MCP',
    period: 'Aug 2025 – Sep 2025',
    summary: 'Built a custom Model Context Protocol server to connect Claude Desktop with the Spotify API',
    bullets: [
      'Built a custom Model Context Protocol server to connect Claude Desktop with the Spotify API',
      'Enabled playlist creation and personalized music management through natural language commands'
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
      'Built a web application with Streamlit Python that recommends recipes to users based on input of food images, using image detection with YOLOv5 and a vectorizer trained on a Kaggle recipe dataset',
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
    id: 'axl-coop',
    type: 'experience' as const,
    title: 'AI Software Engineer Co-op',
    org: 'AXL: Human Potential, AI Superpowered',
    period: 'Jan 2026 – Present',
    summary: 'Building a SwiftUI macOS startup app to redefine AI interactions and user workflows',
    bullets: [
      'Building a SwiftUI macOS startup app in a 4-person team to redefine AI interactions and user workflows',
      'Architected a dynamic UI system with multi-phase LLM orchestration to reactively render and populate UI controls based on selected mixed-media content',
      'Engineered a FastAPI backend with secure user authentication and integrated LLM service endpoints'
    ],
    tech: ['Swift', 'SwiftUI', 'FastAPI', 'Python'],
    links: {},
    images: []
  },
  {
    id: 'vip-lab',
    type: 'experience' as const,
    title: 'Undergraduate Research Assistant',
    org: 'Vision and Image Processing Lab, University of Waterloo',
    period: 'Sep 2025 – Jan 2026',
    summary: 'Investigated real-time analytics applications of 3D human pose estimation in baseball pitching',
    bullets: [
      'Investigated real-time analytics applications of 3D human pose estimation in baseball pitching',
      'Implemented and optimized Temporal Convolutional Network models with attention mechanism on 3D joint data from motion-capture sequences (20K frames), achieving 80%+ pitch-type classification accuracy',
      'Second author to "Interpretable Pre-Release Baseball Pitch Type Anticipation from Broadcast 3D Kinematics" (arXiv:2603.04874), accepted to CVPRW 2026'
    ],
    tech: ['PyTorch', 'Python', 'NumPy'],
    links: {},
    images: []
  },
  {
    id: 'rocket-coop',
    type: 'experience' as const,
    title: 'Software Development Co-op',
    org: 'Rocket',
    period: 'May 2025 – Aug 2025',
    summary: 'Developed workflow features for a banker-facing application, contributing to 30% workflow speed improvement',
    bullets: [
      'Developed workflow features from design to implementation for a banker-facing application with C#, WPF, and SQL, contributing to the goal of improving banker workflow speed by 30%',
      'Refactored .NET Core APIs to support critical functionality and validated changes with Insomnia and MSTest',
      'Led bi-weekly retrospectives to identify bottlenecks and implement process improvements, reducing sprint planning time by 50% and improving sprint delivery consistency for a 7-person team'
    ],
    tech: ['C#', 'WPF', 'SQL', '.NET Core', 'Insomnia', 'MSTest'],
    links: {},
    images: []
  },
  {
    id: 'uw-researcher',
    type: 'experience' as const,
    title: 'Undergraduate Researcher, UR2PhD Program',
    org: 'University of Waterloo',
    period: 'Sep 2024 – Feb 2025',
    summary: 'Investigated effects of activation functions on stability in predictive coding networks',
    bullets: [
      'Worked in a team of 4 to investigate the effects of activation functions on the stability and convergence of predictive coding networks, an emerging biologically inspired deep learning architecture',
      'Implemented and evaluated regression models and neural networks in PyTorch, using NumPy and Matplotlib for data preprocessing, analysis, and visualization in real-world prediction tasks',
      'Delivered a research presentation summarizing literature review, methodological design, and results'
    ],
    tech: ['PyTorch', 'Python', 'NumPy', 'Matplotlib'],
    links: {},
    images: []
  },
  {
    id: 'ops-intern',
    type: 'experience' as const,
    title: 'Software Development Co-op',
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

// Removed allItems since we're now displaying projects and experiences in separate sections

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
                  Just a girl keeping up with the world. Passionate about problem-solving and making a real-world impact.
                </p>
              </div>

              {/* Quick Links */}
              <nav className="space-y-2">
                <a href="#experience" className="block text-ink-muted hover:text-accent-600 transition-colors duration-200">
                  → Experience
                </a>
                <a href="#publications" className="block text-ink-muted hover:text-accent-600 transition-colors duration-200">
                  → Publications
                </a>
                <a href="#work" className="block text-ink-muted hover:text-accent-600 transition-colors duration-200">
                  → Projects
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
                  Currently learning about agentic AI and improving my knowledge of machine learning models. Always open to cool opportunities and connections! Visit my notion <Link href="https://www.notion.so/current-21a63520178280569f22d4576f5739cb">here</Link> to learn more about what I&apos;m up to.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Scrollable Feed */}
          <div className="space-y-6">
            {/* Experience Section */}
            <section id="experience" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-ink mb-6 sticky top-4 bg-bg/80 backdrop-blur-sm py-2 z-10">
                Experience
              </h2>
              <div className="space-y-6">
                {experiences.map((experience) => (
                  <Card
                    key={experience.id}
                    {...experience}
                  />
                ))}
              </div>
            </section>

            {/* Publications Section */}
            <section id="publications" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-ink mb-6 sticky top-4 bg-bg/80 backdrop-blur-sm py-2 z-10">
                Publications
              </h2>
              <div className="space-y-4">
                <div className="bg-card rounded-2xl border border-border p-6">
                  <p className="text-xs font-semibold text-accent-600 uppercase tracking-wide mb-1">CVPRW 2026</p>
                  <h3 className="text-base font-semibold text-ink mb-1 leading-snug">
                    Interpretable Pre-Release Baseball Pitch Type Anticipation from Broadcast 3D Kinematics
                  </h3>
                  <p className="text-sm text-ink-muted mb-3">Vision and Image Processing Lab, University of Waterloo · Second Author</p>
                  <a
                    href="https://arxiv.org/abs/2603.04874"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-accent-600 hover:text-accent-600/80 font-medium transition-colors duration-200"
                  >
                    <ExternalLink size={14} />
                    arXiv:2603.04874
                  </a>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section id="work" className="scroll-mt-24">
              <div className="flex items-center justify-between mb-6 sticky top-4 bg-bg/80 backdrop-blur-sm py-2 z-10">
                <h2 className="text-2xl font-bold text-ink">
                  Projects
                </h2>
                <Link
                  href="/projects"
                  className="text-sm text-accent-600 hover:text-accent-600/80 transition-colors duration-200 font-medium"
                >
                  View All →
                </Link>
              </div>
              <div className="space-y-6">
                {projects.map((project) => (
                  <Card
                    key={project.id}
                    {...project}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </motion.div>
  );
}