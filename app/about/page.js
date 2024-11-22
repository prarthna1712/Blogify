"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-indigo-600">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            About Our Blog
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Dive into the world of programming and technology with our curated
            articles, tutorials, and project showcases.
          </p>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Explore Our Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4">
                {/* Image Placeholder */}
              </div>
              <h3 className="text-lg font-semibold">Project Title {item}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Brief description of the project showcased in the blog.
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutHero;
