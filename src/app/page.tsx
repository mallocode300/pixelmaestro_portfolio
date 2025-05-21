"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Featured works - these would ideally be fetched from an API or CMS
const featuredWorks = [
  {
    id: 1,
    title: "Digital Dreamscape",
    description: "An AI-generated surreal landscape blending nature and technology",
    image: "/images/work1.jpg",
  },
  {
    id: 2,
    title: "Neon Harmony",
    description: "Vibrant cityscape with neon lights creating a futuristic atmosphere",
    image: "/images/work2.jpg",
  },
  {
    id: 3,
    title: "Cosmic Convergence",
    description: "Abstract representation of cosmic energy and celestial bodies",
    image: "/images/work3.jpg",
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-primary mb-6">
          PixelMaestro AI Art Portfolio
        </h1>
        <p className="text-xl mb-8">
          Explore the boundary between human creativity and machine intelligence through stunning AI-generated artwork.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg shadow-md">
              <div className="h-40 bg-gradient-to-br from-purple-500 to-blue-500 rounded-md mb-4"></div>
              <h2 className="text-xl font-semibold mb-2">Artwork {i}</h2>
              <p className="text-gray-600 dark:text-gray-300">
                An example of an AI-generated masterpiece.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
