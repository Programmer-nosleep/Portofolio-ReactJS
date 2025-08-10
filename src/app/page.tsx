"use client";
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import Hero from '@/components/hero';
import { Contact } from '@/components/contact';

export default function Home() {
  const [showContact, setShowContact] = useState(false);
  return (
    <main className="relative min-h-screen bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <h1 className="">
          <Navbar />
        <Hero onShowMore={() => setShowContact(true)} />
        </h1>
      </div>
          <AnimatePresence>
        {showContact && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-10 right-10 z-50"
          >
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
