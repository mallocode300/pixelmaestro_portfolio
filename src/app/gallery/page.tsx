"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Gallery artwork data - this would be fetched from an API or CMS in a real application
const galleryItems = [
  {
    id: 1,
    title: "Digital Dreamscape",
    description: "An AI-generated surreal landscape blending nature and technology",
    image: "/images/work1.jpg",
    category: "landscape",
    year: 2023,
  },
  {
    id: 2,
    title: "Neon Harmony",
    description: "Vibrant cityscape with neon lights creating a futuristic atmosphere",
    image: "/images/work2.jpg",
    category: "cityscape",
    year: 2023,
  },
  {
    id: 3,
    title: "Cosmic Convergence",
    description: "Abstract representation of cosmic energy and celestial bodies",
    image: "/images/work3.jpg",
    category: "abstract",
    year: 2023,
  },
  {
    id: 4,
    title: "Synthetic Soul",
    description: "A portrait exploring the idea of consciousness in artificial beings",
    image: "/images/work4.jpg",
    category: "portrait",
    year: 2022,
  },
  {
    id: 5,
    title: "Mechanical Gardens",
    description: "A fusion of organic plant life with mechanical components",
    image: "/images/work5.jpg",
    category: "nature",
    year: 2022,
  },
  {
    id: 6,
    title: "Neural Pathways",
    description: "Abstract visualization of neural networks and thought processes",
    image: "/images/work6.jpg",
    category: "abstract",
    year: 2022,
  },
  {
    id: 7,
    title: "Quantum Dreams",
    description: "Visualization of quantum mechanics concepts through surreal imagery",
    image: "/images/work7.jpg",
    category: "abstract",
    year: 2022,
  },
  {
    id: 8,
    title: "Silicon Sunset",
    description: "A technological interpretation of a natural sunset over the ocean",
    image: "/images/work8.jpg",
    category: "landscape",
    year: 2023,
  },
];

// Get unique categories
const categories = ["all", ...new Set(galleryItems.map((item) => item.category))];

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [filteredItems, setFilteredItems] = useState(galleryItems);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (filter === "all") {
      setFilteredItems(galleryItems);
    } else {
      setFilteredItems(galleryItems.filter((item) => item.category === filter));
    }
  }, [filter]);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Gallery of AI Artworks
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Explore my collection of AI-generated digital art pieces, each representing a unique blend of human creativity and machine intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Filter */}
      <section className="py-12 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium capitalize transition-colors ${
                  filter === category
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <Link href={`/gallery/${item.id}`}>
                  <div className="relative h-64 w-full cursor-pointer">
                    {/* This would be replaced with actual images */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 opacity-90" />
                    <div className="absolute top-4 right-4 px-2 py-1 bg-black/50 rounded text-xs text-white">
                      {item.year}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <p className="text-sm text-gray-200 mt-1 capitalize">{item.category}</p>
                    </div>
                  </div>
                </Link>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
                  <Link
                    href={`/gallery/${item.id}`}
                    className="inline-block mt-4 text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                  >
                    View Details →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Interested in commissioning a custom AI artwork?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            I create custom pieces tailored to your vision and requirements. Let's discuss your ideas and bring them to life through AI.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 rounded-md bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </>
  );
} 