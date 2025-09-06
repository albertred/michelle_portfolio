import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

// TODO: Replace with actual MDX file reading logic
interface BlogPost {
  title: string;
  date: string;
  readTime: string;
  content: string;
}

const getBlogPost = async (slug: string): Promise<BlogPost | null> => {
  // This would normally read from content/blog/[slug].mdx
  const mockPosts: Record<string, BlogPost> = {
    'building-spotify-mcp': {
      title: 'Building a Spotify MCP Server for Claude',
      date: '2025-01-15',
      readTime: '5 min read',
      content: `
        <h2>Introduction</h2>
        <p>TODO: This would be the actual MDX content from your blog post file.</p>
        
        <h2>Getting Started</h2>
        <p>Add your blog posts as .mdx files in the content/blog/ directory.</p>
        
        <h2>Implementation</h2>
        <p>Each blog post should have frontmatter with title, date, and excerpt.</p>
      `
    },
    'wlp4-compiler-journey': {
      title: 'Building a C++ Compiler from Scratch',
      date: '2024-12-10',
      readTime: '8 min read',
      content: `
        <h2>The Challenge</h2>
        <p>TODO: This would be the actual MDX content from your blog post file.</p>
        
        <h2>Lexical Analysis</h2>
        <p>Breaking down the source code into tokens...</p>
        
        <h2>Parsing</h2>
        <p>Building an abstract syntax tree...</p>
      `
    }
  };

  return mockPosts[slug] || null;
};

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back Link */}
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-ink-muted hover:text-accent-600 transition-colors duration-200 mb-8"
        >
          <ChevronLeft size={20} />
          <span>Back to blog</span>
        </Link>

        {/* Article Header */}
        <article className="prose prose-lg max-w-none">
          <header className="mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-ink mb-4 tracking-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-ink-muted">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          {/* Article Content */}
          <div 
            className="prose prose-lg prose-pink max-w-none text-ink prose-headings:text-ink prose-strong:text-ink prose-code:text-accent-600 prose-pre:bg-card prose-pre:border prose-pre:border-border"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* TODO: Add actual MDX rendering */}
        <div className="mt-12 p-6 bg-card rounded-2xl border border-border">
          <h3 className="font-semibold text-ink mb-2">Development Note</h3>
          <p className="text-sm text-ink-muted">
            To add real blog posts, create .mdx files in the content/blog/ directory with frontmatter containing title, date, and excerpt. 
            Then update this page to read and render the actual MDX content.
          </p>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  // TODO: Return actual blog post slugs from content/blog/*.mdx files
  return [
    { slug: 'building-spotify-mcp' },
    { slug: 'wlp4-compiler-journey' }
  ];
}