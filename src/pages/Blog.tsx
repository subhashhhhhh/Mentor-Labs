import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';
import matter from 'gray-matter';

interface PostMetadata {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  imageUrl: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<PostMetadata[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        // Get module resolvers that resolve to the final asset URL
        const modules: Record<string, any> = 
            import.meta.glob('/src/posts/*.md'); 
            
        const postPromises = Object.entries(modules).map(async ([path, resolver]) => {
          const slug = path.replace('/src/posts/', '').replace('.md', '');
          try {
            // Resolve the module to get the final URL
            const module = await resolver();
            const builtUrl = module.default; 

            // Fetch the content from the built URL
            const response = await fetch(builtUrl);
            if (!response.ok) {
              throw new Error(`Failed to fetch ${builtUrl}: ${response.statusText}`);
            }
            const rawContent = await response.text();
            const { data } = matter(rawContent);
            
            if (!data.title || !data.date || !data.author || !data.excerpt || !data.imageUrl) {
                console.warn(`Incomplete frontmatter for post: ${slug}`, data);
            }
          
            return { 
                slug, 
                title: data.title || 'Untitled', 
                date: data.date || new Date().toISOString().split('T')[0],
                author: data.author || 'Unknown Author',
                excerpt: data.excerpt || '',
                imageUrl: data.imageUrl || '',
                ...(data as Partial<PostMetadata>)
            } as PostMetadata;
          } catch (postError) {
              console.error(`Error processing post ${path}:`, postError);
              return null; 
          }
        });

        const fetchedPosts = (await Promise.all(postPromises))
            .filter(p => p !== null) as PostMetadata[];

        fetchedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setPosts(fetchedPosts);
      } catch (err) {
          console.error("Error fetching post list:", err);
          setError(err instanceof Error ? err.message : 'Failed to load blog posts');
      } finally {
          setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
      return <div className="container mx-auto px-4 py-12 text-center">Loading posts...</div>;
  }

  if (error) {
      return <div className="container mx-auto px-4 py-12 text-center text-red-600">Error loading posts: {error}</div>;
  }

  if (posts.length === 0 && !loading) {
      return <div className="container mx-auto px-4 py-12 text-center text-gray-600">No blog posts found.</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Mentor Labs Blog</h1>
          <p className="text-xl md:text-2xl text-gray-600">Insights, advice, and stories for startup founders and innovators.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform transition duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <img
                  src={post.imageUrl}
                  alt={`Cover image for ${post.title}`}
                  className="w-full h-56 object-cover"
                />
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-1.5" /> {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  <span className="mx-2">|</span>
                  <User className="h-4 w-4 mr-1.5" /> {post.author}
                </div>
                <Link to={`/blog/${post.slug}`} className="block hover:text-blue-600 group">
                   <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">{post.title}</h2>
                </Link>
                <p className="text-gray-600 mb-5 flex-grow">{post.excerpt}</p>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="text-blue-600 font-semibold hover:text-blue-800 mt-auto self-start"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;