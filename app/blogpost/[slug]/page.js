import fs from "fs";
import matter from "gray-matter";
export default async function Page({ params }) {
  const filepath = `content/${params.slug}.md`;
  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { content, data } = matter(fileContent);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="text-gray-500 text-sm mb-2 italic">
        By {data.author} on {data.date}
      </p>
      <blockquote className="border-l-4 border-gray-300 pl-4 text-lg italic text-gray-600 mb-6">
        &quot;{data.description}&quot;
      </blockquote>
      <div
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
}
