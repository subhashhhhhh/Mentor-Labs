import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import matter from 'gray-matter';

interface PostData {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  imageUrl: string;
  content: string;
}

const BlogPostDetail = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<PostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!postId) {
        setError('No post ID provided');
        setLoading(false);
        return;
      }
      setLoading(true);
      setError(null);
      try {
        // Find the correct module using the postId (slug)
        const modules: Record<string, any> = import.meta.glob('/src/posts/*.md');
        const postPath = `/src/posts/${postId}.md`;
        const resolver = modules[postPath];

        if (!resolver) {
           throw new Error(`Post module not found for slug: ${postId}`);
        }

        // Resolve the module to get the final URL
        const module = await resolver();
        const builtUrl = module.default;
        
        // Fetch the content from the built URL
        const response = await fetch(builtUrl);
        if (!response.ok) {
          if (response.status === 404) {
             throw new Error(`Post content not found at ${builtUrl} (404)`);
          } else {
             throw new Error(`Could not fetch post content from ${builtUrl}: ${response.statusText}`);
          }
        }
        const rawContent = await response.text();
        const { data, content } = matter(rawContent);
        
        setPost({ ...(data as Omit<PostData, 'content'>), content });
      } catch (err) {
        console.error("Error fetching post:", err);
        setError(err instanceof Error ? err.message : 'Failed to load post');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();

  }, [postId]);

  if (loading) {
    return <div className="container mx-auto px-4 py-12 text-center">Loading post...</div>;
  }

  if (error || !post) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Post Not Found</h1>
        <p className="text-gray-600 mb-8">Sorry, we couldn't find the blog post you were looking for (Error: {error || 'Post data missing'}).</p>
        <Link 
          to="/blog"
          className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="mb-8">
          <Link 
            to="/blog"
            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition duration-200 group"
          >
            <ArrowLeft className="mr-2 h-5 w-5 group-hover:text-blue-600" />
            Back to Blog
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">{post.title}</h1>
        <div className="flex items-center text-gray-500 text-sm mb-6">
          <Calendar className="h-4 w-4 mr-2" /> Published on {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          <span className="mx-2">|</span>
          <User className="h-4 w-4 mr-2" /> By {post.author}
        </div>

        <img 
          src={post.imageUrl}
          alt={`Image for ${post.title}`}
          className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg mb-10"
        />

        <div className="prose prose-lg max-w-none prose-indigo">
           <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 mb-4">Enjoyed this post? Explore more insights on our blog.</p>
          <Link 
            to="/blog"
            className="inline-flex items-center bg-blue-100 text-blue-700 px-5 py-2 rounded-md font-medium hover:bg-blue-200 transition duration-300"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail; 