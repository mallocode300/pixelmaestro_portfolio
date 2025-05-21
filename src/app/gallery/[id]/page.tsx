"use client";

import { useState, useEffect } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft, FiShare2, FiDownload, FiInfo } from "react-icons/fi";

// This would be fetched from an API/database in a real application
const galleryItems = [
  {
    id: 1,
    title: "Digital Dreamscape",
    description: "An AI-generated surreal landscape blending nature and technology. This artwork explores the intersection of the natural world and digital realms, creating a dreamlike environment where organic forms merge with technological elements.",
    image: "/images/work1.jpg",
    category: "landscape",
    year: 2023,
    technique: "Stable Diffusion with custom fine-tuning",
    dimensions: "4000 x 3000 pixels",
    format: "Digital artwork (available as NFT)",
  },
  {
    id: 2,
    title: "Neon Harmony",
    description: "Vibrant cityscape with neon lights creating a futuristic atmosphere. Inspired by the aesthetics of cyberpunk fiction and the neon-lit streets of Tokyo, this piece captures the energy and vibrancy of an imagined future metropolis.",
    image: "/images/work2.jpg",
    category: "cityscape",
    year: 2023,
    technique: "Midjourney with custom post-processing",
    dimensions: "5000 x 3000 pixels",
    format: "Digital artwork (available as print)",
  },
  {
    id: 3,
    title: "Cosmic Convergence",
    description: "Abstract representation of cosmic energy and celestial bodies. This artwork draws inspiration from deep space imagery and abstract expressionism to create a visual representation of the universe's fundamental forces and energies.",
    image: "/images/work3.jpg",
    category: "abstract",
    year: 2023,
    technique: "GAN-based generation with neural style transfer",
    dimensions: "4500 x 4500 pixels",
    format: "Digital artwork (available as print and NFT)",
  },
  {
    id: 4,
    title: "Synthetic Soul",
    description: "A portrait exploring the idea of consciousness in artificial beings. This piece questions the nature of consciousness and emotion, presenting an AI entity with apparent emotional depth and introspection.",
    image: "/images/work4.jpg",
    category: "portrait",
    year: 2022,
    technique: "StyleGAN with creative direction",
    dimensions: "3000 x 4500 pixels",
    format: "Digital artwork (limited edition)",
  },
  {
    id: 5,
    title: "Mechanical Gardens",
    description: "A fusion of organic plant life with mechanical components. This artwork reimagines botanical forms through a technological lens, creating a garden where mechanical and organic elements coexist in harmonious balance.",
    image: "/images/work5.jpg",
    category: "nature",
    year: 2022,
    technique: "Stable Diffusion with custom prompt engineering",
    dimensions: "5000 x 3500 pixels",
    format: "Digital artwork (available as print)",
  },
  {
    id: 6,
    title: "Neural Pathways",
    description: "Abstract visualization of neural networks and thought processes. Inspired by both biological neural structures and artificial neural networks, this piece visualizes the complex pathways of thought and information processing.",
    image: "/images/work6.jpg",
    category: "abstract",
    year: 2022,
    technique: "Custom GAN with controlled latent space exploration",
    dimensions: "4000 x 4000 pixels",
    format: "Digital artwork (available as NFT)",
  },
  {
    id: 7,
    title: "Quantum Dreams",
    description: "Visualization of quantum mechanics concepts through surreal imagery. This piece attempts to represent the strange and counterintuitive nature of quantum physics through dreamlike visual metaphors.",
    image: "/images/work7.jpg",
    category: "abstract",
    year: 2022,
    technique: "Diffusion model with custom conditioning",
    dimensions: "4500 x 3000 pixels",
    format: "Digital artwork (limited edition)",
  },
  {
    id: 8,
    title: "Silicon Sunset",
    description: "A technological interpretation of a natural sunset over the ocean. This artwork reimagines the classic sunset scene through a digital filter, creating a scene where the natural beauty of a sunset is enhanced and transformed by technology.",
    image: "/images/work8.jpg",
    category: "landscape",
    year: 2023,
    technique: "Stable Diffusion with img2img refinement",
    dimensions: "6000 x 3000 pixels",
    format: "Digital artwork (available as panoramic print)",
  },
];

// Get the next and previous items for navigation
const getRelatedItems = (id: number) => {
  const currentIndex = galleryItems.findIndex((item) => item.id === id);
  if (currentIndex === -1) return { prev: null, next: null };

  const prev = currentIndex > 0 ? galleryItems[currentIndex - 1] : null;
  const next = currentIndex < galleryItems.length - 1 ? galleryItems[currentIndex + 1] : null;

  return { prev, next };
};

export default function ArtworkDetail() {
  const params = useParams();
  const id = Number(params.id);
  const [mounted, setMounted] = useState(false);
  const [artwork, setArtwork] = useState<(typeof galleryItems)[0] | null>(null);
  const [relatedItems, setRelatedItems] = useState<{ prev: (typeof galleryItems)[0] | null; next: (typeof galleryItems)[0] | null }>({ prev: null, next: null });

  useEffect(() => {
    setMounted(true);
    const foundArtwork = galleryItems.find((item) => item.id === id);
    if (foundArtwork) {
      setArtwork(foundArtwork);
      setRelatedItems(getRelatedItems(id));
    }
  }, [id]);

  if (!mounted) return null;
  if (!artwork) return notFound();

  return (
    <>
      {/* Artwork Header */}
      <section className="pt-16 pb-10 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <Link 
                href="/gallery" 
                className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 mb-4"
              >
                <FiArrowLeft className="mr-2" /> Back to Gallery
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {artwork.title}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
                {artwork.category.charAt(0).toUpperCase() + artwork.category.slice(1)} · {artwork.year}
              </p>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                <FiShare2 className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                <FiDownload className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                <FiInfo className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Artwork Display */}
      <section className="py-10 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="aspect-[4/3] w-full rounded-xl overflow-hidden relative mb-12"
          >
            {/* This would be replaced with the actual artwork image */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-600 opacity-90" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-2xl font-bold">{artwork.title}</h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About This Artwork</h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-8">
                {artwork.description}
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 rounded-md bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors"
                >
                  Inquire About This Artwork
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl h-fit">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Artwork Details</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Technique</dt>
                  <dd className="text-gray-900 dark:text-white mt-1">{artwork.technique}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Category</dt>
                  <dd className="text-gray-900 dark:text-white mt-1 capitalize">{artwork.category}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Year</dt>
                  <dd className="text-gray-900 dark:text-white mt-1">{artwork.year}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Dimensions</dt>
                  <dd className="text-gray-900 dark:text-white mt-1">{artwork.dimensions}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Format</dt>
                  <dd className="text-gray-900 dark:text-white mt-1">{artwork.format}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Next/Previous Navigation */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Explore More Artworks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedItems.prev && (
              <Link href={`/gallery/${relatedItems.prev.id}`}>
                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col md:flex-row items-center">
                  <div className="h-16 w-16 rounded bg-gradient-to-br from-purple-500 to-blue-500 opacity-90 flex-shrink-0 mr-0 md:mr-6 mb-4 md:mb-0" />
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Previous</span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {relatedItems.prev.title}
                    </h3>
                  </div>
                </div>
              </Link>
            )}
            {relatedItems.next && (
              <Link href={`/gallery/${relatedItems.next.id}`} className="md:ml-auto">
                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col md:flex-row-reverse items-center">
                  <div className="h-16 w-16 rounded bg-gradient-to-br from-purple-500 to-blue-500 opacity-90 flex-shrink-0 ml-0 md:ml-6 mb-4 md:mb-0" />
                  <div className="text-right">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Next</span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {relatedItems.next.title}
                    </h3>
                  </div>
                </div>
              </Link>
            )}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="inline-block px-6 py-3 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white font-medium hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            >
              View All Artworks
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 