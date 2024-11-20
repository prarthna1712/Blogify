export default async function Page({ params }) {
  // Simulated blog object (replace this with dynamic data if needed)
  const blog = {
    title: "Sample Blog Title",
    author: "John Doe",
    description: "A brief overview of the blog content.",
    date: "November 18, 2024",
    content:
      "<p>This is the detailed HTML content of the blog. You can add paragraphs, images, or any valid HTML here.</p>",
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500 text-sm mb-2 italic">
        By {blog.author} on {blog.date}
      </p>
      <blockquote className="border-l-4 border-gray-300 pl-4 text-lg italic text-gray-600 mb-6">
        &quot;{blog.description}&quot;
      </blockquote>
      <div
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      ></div>
    </div>
  );
}
