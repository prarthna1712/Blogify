// pages/contact.js
import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-white text-center ">
          Get in Touch
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-center mt-2">
          Feel free to reach out to us using the form below.
        </p>
        <form className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-white bg-gray-50 dark:bg-gray-700 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-white bg-gray-50 dark:bg-gray-700 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-800 dark:text-white bg-gray-50 dark:bg-gray-700 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium"
          >
            Send Message
          </button>
        </form>
        <div className="text-center mt-6">
          <p className="text-gray-600 dark:text-gray-400">
            Or reach us directly at:
          </p>
          <p className="text-purple-600 dark:text-purple-400 font-semibold">
            contact@yourblog.com
          </p>
        </div>
      </div>
    </div>
  );
}
