"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">PixelMaestro</span>
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                As a pioneer in AI-generated art, I blend technological innovation with artistic vision to create unique digital experiences. My journey into AI art began with a fascination for how machine learning could extend the boundaries of human creativity.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                With a background in both traditional art and computer science, I approach each piece as an exploration of the relationship between human intention and algorithmic interpretation. The result is artwork that challenges our understanding of creativity in the digital age.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                My work has been featured in digital galleries worldwide and has attracted attention from art collectors interested in the evolving landscape of digital art and NFTs.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[500px] w-full rounded-xl overflow-hidden"
            >
              {/* This would be replaced with an actual image of the artist or their studio */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-600 opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-xl font-medium">
                  "I create at the intersection of human imagination and artificial intelligence."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The tools and techniques I use to create cutting-edge AI-generated artwork.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Generative Adversarial Networks",
                description: "Utilizing GAN models to create unique imagery from complex datasets and prompts.",
                icon: "🧠",
              },
              {
                title: "Stable Diffusion",
                description: "Leveraging latent diffusion models to transform text descriptions into visual art.",
                icon: "🎭",
              },
              {
                title: "Neural Style Transfer",
                description: "Applying artistic styles to content images using convolutional neural networks.",
                icon: "🖌️",
              },
              {
                title: "Prompt Engineering",
                description: "Crafting precise text prompts to guide AI models toward desired artistic outcomes.",
                icon: "✍️",
              },
              {
                title: "Digital Illustration",
                description: "Traditional digital art skills that enhance and refine AI-generated imagery.",
                icon: "🎨",
              },
              {
                title: "3D Modeling",
                description: "Creating three-dimensional environments and objects to incorporate into artwork.",
                icon: "🧊",
              },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm"
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {skill.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              My Artistic Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From traditional creative pursuits to the cutting edge of AI art generation.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                year: "2018",
                title: "First Steps into Digital Art",
                description:
                  "Began exploring digital illustration and design, developing foundational skills that would later inform my AI art practice.",
              },
              {
                year: "2020",
                title: "Discovery of AI Art Tools",
                description:
                  "First experiments with early AI art generation tools, fascinated by the creative possibilities they offered.",
              },
              {
                year: "2021",
                title: "Specialization in Prompt Engineering",
                description:
                  "Developed expertise in crafting text prompts that could guide AI models toward specific artistic visions and styles.",
              },
              {
                year: "2022",
                title: "First Digital Exhibition",
                description:
                  "Showcased a collection of AI-generated artwork in an online gallery, receiving recognition for innovative approach to digital art.",
              },
              {
                year: "Present",
                title: "Pushing Boundaries",
                description:
                  "Continuing to explore the frontiers of AI art, combining multiple techniques and technologies to create unique artistic expressions.",
              },
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex gap-6"
              >
                <div className="w-24 flex-shrink-0 text-right">
                  <div className="text-xl font-bold text-purple-600 dark:text-purple-400">
                    {milestone.year}
                  </div>
                </div>
                <div className="relative pl-6 border-l-2 border-purple-200 dark:border-purple-900">
                  <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-[9px] top-1.5" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            My Artistic Vision
          </h2>
          <p className="text-xl text-purple-100 mb-10 max-w-3xl mx-auto">
            "I believe AI art represents a new frontier in creative expression, where human intention and machine interpretation meet to create something entirely new. My goal is to continue exploring this boundary, pushing the limits of what's possible when we collaborate with artificial intelligence as a creative partner."
          </p>
          <div className="text-lg font-medium">— PixelMaestro</div>
        </div>
      </section>
    </>
  );
} 