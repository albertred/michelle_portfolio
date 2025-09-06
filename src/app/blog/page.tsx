import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

// TODO: Replace with actual blog posts from content/blog/*.mdx files
const blogPosts = [
  {
    slug: 'building-spotify-mcp',
    title: 'Building a Spotify MCP Server for Claude',
    excerpt: 'How I built a Model Context Protocol server to integrate Spotify with Claude Desktop for natural language music control.',
    date: '2025-01-15',
    readTime: '5 min read'
  },
  {
    slug: 'wlp4-compiler-journey',
    title: 'Building a C++ Compiler from Scratch',
    excerpt: 'My experience implementing a full compiler for WLP4, including lexical analysis, parsing, semantic analysis, and code generation.',
    date: '2024-12-10',
    readTime: '8 min read'
  }
];

export default function BlogPage() {
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
            Blog
          </h1>
          <p className="text-xl text-ink-muted leading-relaxed">
            Thoughts on software development, machine learning, and technology.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {blogPosts.length > 0 ? (
            blogPosts.map((post) => (
              <article key={post.slug} className="bg-card rounded-2xl border border-border p-6 hover:border-accent transition-colors duration-200">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-ink hover:text-accent-600 transition-colors duration-200 mb-2">
                        {post.title}
                      </h2>
                      <p className="text-ink-muted leading-relaxed mb-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-ink-muted">
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-ink-muted text-lg">
                TODO: Blog posts coming soon! 📝
              </p>
              <p className="text-ink-muted text-sm mt-2">
                Add your blog posts to the content/blog/ directory
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}