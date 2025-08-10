"use client";
import React from "react";
import { Input } from "./ui/input";
import MagicButton from "./ui/magic-button";
import { FaPaperPlane } from "react-icons/fa";

export function Contact() {
  return (
    <div className="p-8 rounded-lg shadow-lg w-full max-w-md mx-auto bg-white dark:bg-black-200">
      <h2 className="text-2xl font-bold text-center mb-6 text-black dark:text-white">Contact Me</h2>
      <form className="space-y-4">
        <Input id="name" placeholder="Your Name" type="text" />
        <Input id="email" placeholder="Your Email" type="email" />
        <textarea
          id="message"
          placeholder="Your Message"
          className="flex w-full border-none bg-gray-50 dark:bg-zinc-800 dark:text-white shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400 h-32 resize-none"
        ></textarea>
        <div className="flex justify-center">
          <MagicButton 
            title="Send Message" 
            icon={<FaPaperPlane />} 
            position="right" 
          />
        </div>
      </form>
    </div>
  );
}
