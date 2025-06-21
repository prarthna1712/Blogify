import React from "react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";

const dirContent = fs.readdirSync("content", "utf-8");
const blogs = dirContent.map((file) => {
  const fileContent = fs.readFileSync(`content/${file}`, "utf-8");
  const { data } = matter(fileContent);
  return data;
});

const Blog = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-10 dark:bg-gray-200 bg-gray-200">
        <h1 className="text-3xl font-bold text-center mb-8 dark:text-gray-700">
          Our Blog
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <div className="text-gray-500 text-sm mb-2">
                  <p>By {blog.author}</p>
                  <p>{new Date(blog.date).toLocaleDateString()}</p>
                </div>
                <Link
                  href={`/blogpost/${blog.slug}`}
                  className={`${buttonVariants({
                    variant: "outline",
                  })} inline-block mt-4 p-2 rounded-md text-center dark:text-gray-600`}
                >
                  Click here
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
