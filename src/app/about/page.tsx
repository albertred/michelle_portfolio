import Link from 'next/link';
import { ChevronLeft, Mail, Download, Github, Linkedin } from 'lucide-react';

const skills = {
  'Programming Languages': ['C++', 'C', 'Python', 'JavaScript', 'HTML/CSS'],
  'Frameworks & Libraries': ['React', 'Angular', 'Node.js', 'Express.js', '.NET Core', 'PyTorch', 'TailwindCSS'],
  'Tools & Technologies': ['Git', 'Linux', 'Playwright', 'Insomnia'],
  'Databases': ['SQL', 'MongoDB Atlas'],
  'Cloud & Deployment': ['Vercel', 'Azure']
};

const values = [
  {
    title: 'Continuous Learning',
    description: 'In the very fast-paced world of technology, I love learning and keeping up with new advancements'
  },
  {
    title: 'Creativity',
    description: 'I like to have fun while building software'
  },
  {
    title: 'Collaboration',
    description: 'I always appreciate diverse perspectives and believe that the best solutions come from effective teamwork'
  },
  {
    title: 'Impact-Driven',
    description: 'I want to build technology that leads to a sustainable future'
  }
];

export default function AboutPage() {
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

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-ink mb-4 tracking-tight">
            About Me
          </h1>
          <p className="text-xl text-ink-muted leading-relaxed">
            #1 Computer Science fan!! 
          </p>
        </div>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-12">
          {/* Main Content */}
          <div className="space-y-8">
            {/* Bio */}
            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Bio</h2>
              <div className="prose prose-lg text-ink-muted space-y-4">
                <p>
                  Hello! I&apos;m Michelle, a Computer Science student at the University of Waterloo. I'm passionate about problem-solving and technology that makes a difference. 
                </p>
                <p>
                  currently: nerding out
                </p>
                <p>
                  Outside of everything tech related, I like the outdoors, reading, music, and writing. 
                </p>
              </div>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Skills</h2>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h3 className="text-lg font-semibold text-ink mb-3">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-accent text-ink text-sm font-medium rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Values */}
            <section>
              <h2 className="text-2xl font-bold text-ink mb-4">Values</h2>
              <div className="grid gap-6">
                {values.map((value) => (
                  <div key={value.title} className="bg-card rounded-2xl border border-border p-6">
                    <h3 className="text-lg font-semibold text-ink mb-2">{value.title}</h3>
                    <p className="text-ink-muted leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact CTA */}
            <section className="bg-card rounded-2xl border border-border p-8 text-center">
              <h2 className="text-2xl font-bold text-ink mb-4">Let&apos;s Work Together</h2>
              <p className="text-ink-muted mb-6 leading-relaxed">
                I&apos;m always open to discussing new opportunities, collaborations, or just having a chat about technology. 
                Whoever you are, feel free to reach out !!!
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <a 
                  href="mailto:m235lu@uwaterloo.ca"
                  className="inline-flex items-center gap-2 bg-accent-600 text-white px-6 py-3 rounded-full font-medium hover:bg-accent-600/90 transition-colors duration-200"
                >
                  <Mail size={20} />
                  <span>Get in touch</span>
                </a>
                <a 
                  href="/resume.pdf" 
                  download
                  className="inline-flex items-center gap-2 bg-accent text-ink px-6 py-3 rounded-full font-medium hover:bg-accent/80 transition-colors duration-200"
                >
                  <Download size={20} />
                  <span>Download Resume</span>
                </a>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Facts */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="font-semibold text-ink mb-4">Quick Facts</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-ink-muted">Location:</span>
                  <span className="text-ink ml-2">Waterloo, ON</span>
                </div>
                <div>
                  <span className="text-ink-muted">Education:</span>
                  <span className="text-ink ml-2">University of Waterloo</span>
                </div>
                <div>
                  <span className="text-ink-muted">Degree:</span>
                  <span className="text-ink ml-2">Bachelor of Computer Science</span>
                </div>
                <div>
                  <span className="text-ink-muted">Expected Graduation:</span>
                  <span className="text-ink ml-2">May 2028</span>
                </div>
                <div>
                  <span className="text-ink-muted">GPA:</span>
                  <span className="text-ink ml-2">91.00/100</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="font-semibold text-ink mb-4">Connect</h3>
              <div className="space-y-3">
                <a 
                  href="https://github.com/albertred" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-ink-muted hover:text-accent-600 transition-colors duration-200"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://linkedin.com/in/michellelu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-ink-muted hover:text-accent-600 transition-colors duration-200"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="mailto:m235lu@uwaterloo.ca"
                  className="flex items-center gap-3 text-ink-muted hover:text-accent-600 transition-colors duration-200"
                >
                  <Mail size={20} />
                  <span>Email</span>
                </a>
              </div>
            </div>

            {/* Currently Reading */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="font-semibold text-ink mb-4">Currently Exploring</h3>
              <div className="space-y-2 text-sm text-ink-muted">
                <p>• Model Context Protocol development</p>
                <p>• How to build an LLM from scratch </p>
                <p>• Machine learning models and their applications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}