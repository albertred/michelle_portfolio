import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, Calendar, Github, ExternalLink } from 'lucide-react';

// Project data - in a real app, this would come from a CMS or markdown files
interface ProjectData {
  title: string;
  period: string;
  summary: string;
  description: string;
  tech: string[];
  links: {
    github?: string;
    live?: string;
  };
  images: string[];
  status: string;
  featured: boolean;
  awards?: string[];
}

const projectsData: Record<string, ProjectData> = {
  'spotify-mcp': {
    title: 'Spotify MCP',
    period: 'Aug 2025 - Present',
    summary: 'Building a custom Model Context Protocol server to connect Claude Desktop with Spotify API',
    description: `
      <div class="space-y-6">
        <p> With all the buzz around MCP, I wanted to try building one myself. I have always wanted to explore how AI can make personalized music recommendations / help manage playlists,
        so this was the perfect opportunity to create a Spotify MCP Server. I used the same structure as in https://www.builder.io/blog/mcp-server.</p>
        
        <h2 class="text-2xl font-bold text-ink mt-8 mb-4">The Challenge</h2>
        <p>Modern AI assistants excel at understanding natural language but struggle with real-time integration of external services like music streaming platforms. Users often need to switch between their AI chat interface and music applications, breaking the flow of conversation and productivity.</p>
        
        <h2 class="text-2xl font-bold text-ink mt-8 mb-4">Technical Implementation</h2>
        <p>The MCP server is built using TypeScript and Node.js, leveraging the Model Context Protocol specification to create a seamless bridge between Claude Desktop and Spotify's Web API. Key technical aspects include:</p>
        
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li><strong>Authentication Flow:</strong> Implemented OAuth 2.0 PKCE flow for secure Spotify authentication</li>
          <li><strong>Real-time Communication:</strong> WebSocket connections for live music state synchronization</li>
          <li><strong>Natural Language Processing:</strong> Command parsing to translate conversational requests into Spotify API calls</li>
          <li><strong>Error Handling:</strong> Robust error handling for API rate limits and network issues</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-ink mt-8 mb-4">Features I want</h2>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li>Create and manage playlists through natural language</li>
          <li>Intelligent music recommendations based on listening history</li>
          <li>Music discovery through conversational exploration</li>
          <li>Integration with Claude's contextual understanding</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-ink mt-8 mb-4">Impact & Learning</h2>
        <p>This project has allowed me to learn about using Spotify API and OAuth 2.0 authentication flows and I'm learning about how AI is becoming more useful tools. </p>
        
        <p>The project also explores the future of human-computer interaction, where natural language becomes the primary interface for complex application control. This has implications beyond music streaming, potentially revolutionizing how we interact with all digital services.</p>
      </div>
    `,
    tech: ['TypeScript', 'Node.js', 'Spotify API', 'OAuth 2.0', 'MCP Protocol'],
    links: {
      github: 'https://github.com/albertred/Spotify-MCP',
      live: ''
    },
    images: [],
    status: 'In Progress',
    featured: true
  },
  'wlp4-compiler': {
    title: 'WLP4 Compiler',
    period: 'Jan 2025 - Apr 2025',
    summary: 'Built a full C++ compiler for WLP4, a C subset including functions and pointers',
    description: `
      <div class="space-y-6">
        <p>The WLP4 Compiler project represents a comprehensive exploration of compiler design and implementation. WLP4 is a subset of C that includes essential programming constructs while maintaining manageable complexity for educational purposes. This project was in accordance to CS241 at UWaterloo. </p>
        
        <h2 class="text-2xl font-bold text-ink mt-8 mb-4">Project Overview</h2>
        <p>This compiler translates WLP4 source code into MIPS assembly language, implementing all major compiler phases from lexical analysis to code generation. The project demonstrates deep understanding of programming language theory and practical compiler construction techniques.</p>
        
        <h2 class="text-2xl font-bold text-ink mt-8 mb-4">Compiler Phases</h2>
        
        <h3 class="text-xl font-semibold text-ink mt-6 mb-3">1. Lexical Analysis (Scanner)</h3>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li>Implemented a finite state automaton to tokenize source code</li>
          <li>Handles keywords, identifiers, literals, and operators</li>
          <li>Provides detailed error reporting with line numbers and token positions</li>
          <li>Supports comments and whitespace handling</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-ink mt-6 mb-3">2. Syntax Analysis (Parser)</h3>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li>Bottom-up LR(1) parser using shift-reduce algorithm</li>
          <li>Constructs abstract syntax tree (AST) representation</li>
          <li>Implements WLP4 grammar rules for expressions, statements, and declarations</li>
          <li>Handles operator precedence and associativity correctly</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-ink mt-6 mb-3">3. Semantic Analysis</h3>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li>Type checking for variables, expressions, and function calls</li>
          <li>Symbol table management with scope handling</li>
          <li>Pointer arithmetic and dereference validation</li>
          <li>Function signature matching and return type verification</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-ink mt-6 mb-3">4. Code Generation</h3>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li>Translation to MIPS assembly language</li>
          <li>Register allocation and management</li>
          <li>Stack frame setup for function calls</li>
          <li>Optimization for common expression patterns</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-ink mt-8 mb-4">Technical Challenges</h2>
        <p>Building a compiler from scratch presented numerous technical challenges:</p>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li><strong>Memory Management:</strong> Implementing proper cleanup for complex data structures</li>
          <li><strong>Error Recovery:</strong> Providing meaningful error messages without crashing</li>
          <li><strong>Code Optimization:</strong> Balancing code efficiency with compilation speed</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-ink mt-8 mb-4">Learning Outcomes</h2>
        <p>This project provided hands-on experience with:</p>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li>Formal language theory and parsing algorithms</li>
          <li>Assembly language programming and computer architecture</li>
          <li>Software engineering practices for large, complex systems</li>
          <li>Debugging techniques for multi-phase systems</li>
          <li>Performance optimization strategies</li>
        </ul>
        
        <p>The WLP4 compiler project demonstrates the intricate relationship between high-level programming languages and machine code, providing deep insights into how modern programming languages are implemented and optimized.</p>
      </div>
    `,
    tech: ['C++', 'Assembly (MIPS)', 'Compiler Design', 'Parsing Algorithms', 'Symbol Tables'],
    links: {
      github: 'https://github.com/albertred',
      live: ''
    },
    images: [],
    status: 'Completed',
    featured: true
  },
  'mingo': {
    title: 'Mingo - Hack the North',
    period: 'Sep 2024',
    summary: 'Web application to enhance attendee experiences at networking events',
    description: `
      <div class="space-y-6">
        <p>Mingo was developed during Hack the North, one of Canada's largest hackathons, to solve a common problem at networking events: remembering conversations and making meaningful connections in crowded, noisy environments.</p>
        
        <h2 class="text-2xl font-bold text-ink mt-8 mb-4">The Problem</h2>
        <p>Networking events are crucial for career development and business growth, but they present several challenges:</p>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li>Difficulty remembering names and conversation details after meeting many people</li>
          <li>Noisy environments that make conversations hard to follow</li>
          <li>Limited time to exchange detailed information with each contact</li>
          <li>Lack of context about shared interests or potential collaboration opportunities</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-ink mt-8 mb-4">Our Solution</h2>
        <p>Mingo combines interactive venue exploration with AI-powered conversation enhancement to create a more effective networking experience.</p>
        
        <h3 class="text-xl font-semibold text-ink mt-6 mb-3">Interactive Venue Interface</h3>
        <p>Built with React and TailwindCSS, the interface provides:</p>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li>Interactive floor plans showing event layout and key areas</li>
          <li>Real-time attendee density visualization</li>
          <li>Location-based recommendations for optimal networking spots</li>
          <li>Integration with event schedules and speaker locations</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-ink mt-6 mb-3">AI-Powered Conversation Summaries</h3>
        <p>Leveraging Cohere's natural language processing capabilities:</p>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li>Real-time audio processing to capture conversation highlights</li>
          <li>Intelligent summarization focusing on key points and action items</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-ink mt-6 mb-3">AI Integration</h3>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li>Cohere API integration for natural language understanding</li>
          <li>Custom prompt engineering for conversation summarization</li>
          <li>Real-time processing pipeline for low-latency responses</li>
          <li>Error handling for API rate limits and network issues</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-ink mt-8 mb-4">Team Collaboration</h2>
        <p>Working with three teammates taught valuable lessons about:</p>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li>Rapid prototyping and iterative development under pressure</li>
          <li>Task delegation and parallel development workflows</li>
          <li>Git workflow management in a fast-paced environment</li>
          <li>User experience design with immediate feedback cycles</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-ink mt-8 mb-4">Team Collaboration & Hackathon Experience</h2>
        <p>Working as a team of four during the intense 36-hour hackathon environment was both challenging and rewarding. The image below shows our team during the final presentation, demonstrating the collaborative spirit and dedication that made Mingo successful.</p>
        
        <h2 class="text-2xl font-bold text-ink mt-8 mb-4">Impact & Recognition</h2>
        <p>Mingo demonstrated the potential for AI-enhanced social interactions and received positive feedback from hackathon judges and attendees. The project showcases how emerging AI technologies can solve real-world social challenges while maintaining user privacy and consent.</p>
        
        <p>This hackathon experience reinforced the importance of user-centered design and the power of interdisciplinary collaboration in creating innovative solutions.</p>
      </div>
    `,
    tech: ['React', 'TailwindCSS', 'Cohere API', 'Web Audio API', 'JavaScript', 'RESTful APIs'],
    links: {
      github: 'https://devpost.com/software/mingo-ua6mey',
      live: ''
    },
    images: ['/gallery.jpg'],
    status: 'Completed',
    featured: true
  },
  'fridgefriend': {
    title: 'FridgeFriend - Technova Best UI/UX Winner',
    period: 'Sep 2024',
    summary: 'Web application that recommends recipes based on food images',
    description: `
      <div class="space-y-6">
        <p>FridgeFriend won the Best UI/UX award at Technova, demonstrating how machine learning can be made accessible through thoughtful design. The application tackles food waste and meal planning by intelligently analyzing ingredients and providing personalized recipe recommendations.</p>
        
        <h2 class="text-2xl font-bold text-ink mt-8 mb-4">The Challenge</h2>
        <p>Food waste is a significant global issue, with much waste occurring at the household level due to:</p>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li>Difficulty knowing what to cook with available ingredients</li>
          <li>Lack of inspiration for using up ingredients before they spoil</li>
          <li>Time constraints that lead to ordering takeout instead of cooking</li>
          <li>Limited cooking skills to transform raw ingredients into meals</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-ink mt-8 mb-4">Solution Architecture</h2>
        
        <h3 class="text-xl font-semibold text-ink mt-6 mb-3">Computer Vision Pipeline</h3>
        <p>The core innovation lies in making ingredient detection as simple as taking a photo:</p>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li><strong>YOLOv5 Integration:</strong> Real-time object detection specifically trained for food items</li>
          <li><strong>Image Preprocessing:</strong> Automatic image enhancement for better detection accuracy</li>
          <li><strong>Confidence Scoring:</strong> Quality metrics to ensure reliable ingredient identification</li>
          <li><strong>Multi-object Detection:</strong> Simultaneous identification of multiple ingredients in a single image</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-ink mt-6 mb-3">Recipe Recommendation Engine</h3>
        <p>Transforming detected ingredients into actionable cooking suggestions:</p>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li><strong>Vector Similarity Matching:</strong> Custom-trained vectorizer on Kaggle recipe datasets</li>
          <li><strong>Ingredient Substitution Logic:</strong> Intelligent handling of missing ingredients</li>
          <li><strong>Dietary Preference Filtering:</strong> Customization for various dietary restrictions</li>
          <li><strong>Difficulty and Time Scoring:</strong> Recommendations based on user skill level and time constraints</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-ink mt-8 mb-4">User Experience Design</h2>
        <p>The Best UI/UX award recognized our focus on making AI accessible to everyday users:</p>
        
        <h3 class="text-xl font-semibold text-ink mt-6 mb-3">Intuitive Image Capture</h3>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li>One-tap photo capture with automatic processing</li>
          <li>Real-time feedback during image analysis</li>
          <li>Visual confirmation of detected ingredients with confidence indicators</li>
          <li>Easy correction mechanism for misidentified items</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-ink mt-6 mb-3">Streamlit Interface</h3>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li>Clean, card-based layout for recipe browsing</li>
          <li>Progressive disclosure of recipe details</li>
          <li>Visual recipe ratings and difficulty indicators</li>
          <li>Responsive design optimized for mobile photography</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-ink mt-8 mb-4">Technical Implementation</h2>
        
        <h3 class="text-xl font-semibold text-ink mt-6 mb-3">Backend Architecture</h3>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li><strong>Python/Streamlit:</strong> Rapid prototyping framework for ML applications</li>
          <li><strong>MongoDB Atlas:</strong> Cloud-based storage for user recipes and preferences</li>
          <li><strong>PropelAuth:</strong> Secure user authentication with social login options</li>
          <li><strong>Kaggle Dataset Integration:</strong> Over 100,000 recipes for training and recommendations</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-ink mt-6 mb-3">Machine Learning Pipeline</h3>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li>Custom YOLOv5 model fine-tuned on food imagery datasets</li>
          <li>TF-IDF vectorization for recipe similarity matching</li>
          <li>Collaborative filtering for personalized recommendations</li>
          <li>Real-time inference optimization for mobile devices</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-ink mt-8 mb-4">Data Science Approach</h2>
        <p>The project required significant data science work:</p>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li><strong>Dataset Curation:</strong> Cleaning and preprocessing diverse recipe datasets</li>
          <li><strong>Feature Engineering:</strong> Creating meaningful representations of recipes and ingredients</li>
          <li><strong>Model Evaluation:</strong> A/B testing different recommendation algorithms</li>
          <li><strong>Performance Optimization:</strong> Balancing accuracy with inference speed</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-ink mt-8 mb-4">Impact & Learning</h2>
        <p>FridgeFriend demonstrates how complex AI systems can be made accessible through thoughtful UX design. Key learnings include:</p>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li>The critical importance of user feedback in ML system design</li>
          <li>Balancing model complexity with real-world performance constraints</li>
          <li>Building trust in AI systems through transparent confidence scoring</li>
          <li>The value of rapid prototyping in validating technical concepts</li>
        </ul>
        
        <p>The project showcases the potential for AI to address sustainability challenges while creating engaging user experiences. Winning the Best UI/UX award validated our approach of putting user needs at the center of technical innovation.</p>
      </div>
    `,
    tech: ['Python', 'Streamlit', 'YOLOv5', 'PropelAuth', 'MongoDB Atlas', 'Computer Vision'],
    links: {
      github: 'https://devpost.com/software/fridge-friend-07xzct',
      live: ''
    },
    images: [],
    status: 'Completed',
    featured: true,
    awards: ['Best UI/UX - Technova 2024']
  },
  'payroll-software': {
    title: 'Payroll Management Software',
    period: 'Jun 2023 - Aug 2023',
    summary: 'Payroll management system automating extraction, calculation, and PDF generation',
    description: `
      <div class="space-y-6">
        <p>This payroll management system was developed to address the time-consuming and error-prone process of manual payroll calculation and paystub generation, inspired by my mom's own frustration with payroll tasks. Built during my early programming journey, it demonstrates fundamental software engineering principles applied to real-world business needs.</p>
        
        <h2 class="text-2xl font-bold text-ink mt-8 mb-4">Business Challenge</h2>
        <p>Small to medium-sized businesses often struggle with payroll processing due to:</p>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li>Manual calculation errors leading to compliance issues</li>
          <li>Time-intensive processes for generating paystubs</li>
          <li>Inconsistent formatting and record keeping</li>
          <li>Difficulty scaling payroll operations with business growth</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-ink mt-8 mb-4">System Architecture</h2>
        
        <h3 class="text-xl font-semibold text-ink mt-6 mb-3">Django Web Framework</h3>
        <p>Built on Django for robust web application development:</p>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li><strong>MVC Architecture:</strong> Clean separation of data, logic, and presentation layers</li>
          <li><strong>Built-in Security:</strong> Protection against common web vulnerabilities</li>
          <li><strong>User Authentication:</strong> Secure login system with role-based permissions</li>
          <li><strong>Database Abstraction:</strong> ORM for reliable data management</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-ink mt-6 mb-3">Data Processing Pipeline</h3>
        <p>Automated extraction and calculation system:</p>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li><strong>Excel Integration:</strong> Openpyxl for reading various Excel formats</li>
          <li><strong>Data Validation:</strong> Comprehensive error checking for input data</li>
          <li><strong>Calculation Engine:</strong> Pandas for complex payroll computations</li>
          <li><strong>Audit Trail:</strong> Complete logging of all calculations and changes</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-ink mt-8 mb-4">Core Features</h2>
        
        <h3 class="text-xl font-semibold text-ink mt-6 mb-3">Automated Data Extraction</h3>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li>Support for multiple Excel file formats and structures</li>
          <li>Intelligent column mapping and data type detection</li>
          <li>Batch processing capabilities for large employee datasets</li>
          <li>Error reporting with specific row and column identification</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-ink mt-6 mb-3">Payroll Calculations</h3>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li>Gross pay calculation including regular and overtime hours</li>
          <li>Tax deduction computation based on current tax brackets</li>
          <li>Benefits and deductions processing</li>
          <li>Net pay calculation with detailed breakdown</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-ink mt-6 mb-3">PDF Generation</h3>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li>Professional paystub templates with company branding</li>
          <li>PyPDF2 integration for reliable document generation</li>
          <li>Batch PDF creation for entire payroll runs</li>
          <li>Digital signature and watermarking capabilities</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-ink mt-8 mb-4">Technical Implementation</h2>
        
        <h3 class="text-xl font-semibold text-ink mt-6 mb-3">Data Processing with Pandas</h3>
        <p>Leveraging Pandas for efficient data manipulation:</p>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li>DataFrame operations for complex payroll calculations</li>
          <li>Data cleaning and normalization procedures</li>
          <li>Statistical analysis for payroll reporting</li>
          <li>Performance optimization for large datasets</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-ink mt-6 mb-3">File Handling</h3>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li><strong>Openpyxl:</strong> Reading and writing Excel files with formatting preservation</li>
          <li><strong>PyPDF2:</strong> PDF creation, manipulation, and merging capabilities</li>
          <li><strong>File Validation:</strong> Comprehensive checks for file integrity and format</li>
          <li><strong>Backup Systems:</strong> Automatic backup of processed data</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-ink mt-8 mb-4">Development Process</h2>
        <p>This project taught fundamental software development practices:</p>
        
        <h3 class="text-xl font-semibold text-ink mt-6 mb-3">Collaborative Development</h3>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li>Pair programming sessions for complex calculation logic</li>
          <li>Code reviews to ensure accuracy and maintainability</li>
          <li>Version control best practices using Git</li>
          <li>Documentation standards for future maintenance</li>
        </ul>
        
        <h3 class="text-xl font-semibold text-ink mt-6 mb-3">Testing Strategy</h3>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li>Unit tests for individual calculation functions</li>
          <li>Integration tests for end-to-end payroll processing</li>
          <li>Validation against manual calculations for accuracy</li>
          <li>Performance testing with various data set sizes</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-ink mt-8 mb-4">Learning Outcomes</h2>
        <p>This early project provided foundational experience in:</p>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li><strong>Business Logic Implementation:</strong> Translating complex business rules into code</li>
          <li><strong>Data Processing:</strong> Handling real-world data with inconsistencies and errors</li>
          <li><strong>User Interface Design:</strong> Creating intuitive interfaces for non-technical users</li>
          <li><strong>File Format Handling:</strong> Working with multiple data formats and standards</li>
          <li><strong>Quality Assurance:</strong> The critical importance of accuracy in financial calculations</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-ink mt-8 mb-4">Impact</h2>
        <p>The payroll management system demonstrated how software can solve real business problems while providing valuable learning experiences. Key achievements include:</p>
        <ul class="list-disc list-inside space-y-2 ml-4">
          <li>Reduced payroll processing time from hours to minutes</li>
          <li>Eliminated calculation errors through automated validation</li>
          <li>Standardized paystub formatting and record keeping</li>
          <li>Provided scalable foundation for business growth</li>
        </ul>
        
        <p>This project established my foundation in full-stack development and reinforced the importance of understanding user needs when designing technical solutions.</p>
      </div>
    `,
    tech: ['Python', 'Django', 'Pandas', 'Openpyxl', 'PyPDF2', 'HTML/CSS'],
    links: {
      github: 'https://github.com/albertred/payroll_system',
      live: ''
    },
    images: [],
    status: 'Completed',
    featured: false
  }
};

const getProject = async (slug: string) => {
  return projectsData[slug] || null;
};

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back Link */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-ink-muted hover:text-accent-600 transition-colors duration-200 mb-8"
        >
          <ChevronLeft size={20} />
          <span>Back to portfolio</span>
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-ink tracking-tight">
              {project.title}
            </h1>
            {project.awards && (
              <div className="flex gap-2">
                {project.awards.map((award: string) => (
                  <span key={award} className="px-3 py-1 bg-accent-600 text-white text-sm font-medium rounded-full">
                    🏆 {award}
                  </span>
                ))}
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-6 text-ink-muted mb-6">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{project.period}</span>
            </div>
            {project.status && (
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                project.status === 'In Progress' 
                  ? 'bg-yellow-100 text-yellow-800' 
                  : 'bg-green-100 text-green-800'
              }`}>
                {project.status}
              </span>
            )}
          </div>

          <p className="text-xl text-ink-muted leading-relaxed mb-8">
            {project.summary}
          </p>

          {/* Tech Stack */}
          {project.tech.length > 0 && (
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-ink-muted mb-3 uppercase tracking-wide">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((technology: string) => (
                  <span
                    key={technology}
                    className="px-4 py-2 bg-accent text-ink text-sm font-medium rounded-full"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Links */}
          {(project.links.github || project.links.live) && (
            <div className="flex gap-4 mb-8">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-ink text-bg px-6 py-3 rounded-full font-medium hover:bg-ink/90 transition-colors duration-200"
                >
                  <Github size={20} />
                  <span>View Code</span>
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent-600 text-white px-6 py-3 rounded-full font-medium hover:bg-accent-600/90 transition-colors duration-200"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          )}
        </div>

        {/* Project Content */}
        <article className="prose prose-lg prose-pink max-w-none">
          <div 
            className="text-ink leading-relaxed prose-headings:text-ink prose-headings:font-bold prose-strong:text-ink prose-code:text-accent-600 prose-pre:bg-card prose-pre:border prose-pre:border-border prose-ul:text-ink prose-li:text-ink"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
        </article>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-border">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-600/80 transition-colors duration-200 font-medium"
          >
            <ChevronLeft size={20} />
            <span>View all projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug,
  }));
}