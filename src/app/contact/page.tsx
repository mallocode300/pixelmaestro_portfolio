"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiInstagram } from "react-icons/fi";
import emailjs from '@emailjs/browser';

// EmailJS Configuration
// Replace these placeholders with your actual credentials from EmailJS
// For production, use environment variables by uncommenting the lines below
const EMAILJS_SERVICE_ID = 
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_placeholder";
const EMAILJS_TEMPLATE_ID = 
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_placeholder";
const EMAILJS_PUBLIC_KEY = 
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "public_key_placeholder";
const RECIPIENT_EMAIL = 
  process.env.NEXT_PUBLIC_RECIPIENT_EMAIL || "romainrossi25@gmail.com";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    if (!formRef.current) return;

    try {
      // Prepare template parameters
      const templateParams = {
        to_email: RECIPIENT_EMAIL,
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      // Send the email
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (err) {
      console.error("Error sending email:", err);
      setError("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Have a question, interested in commissioning artwork, or just want to say hello? Reach out using the form below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FiMail className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-700 dark:text-gray-300 font-medium">Email</p>
                    <a
                      href={`mailto:${RECIPIENT_EMAIL}`}
                      className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                    >
                      {RECIPIENT_EMAIL}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FiInstagram className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-700 dark:text-gray-300 font-medium">Instagram</p>
                    <a
                      href="https://www.instagram.com/pixelmaestro_ai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                    >
                      @pixelmaestro_ai
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FiMapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-700 dark:text-gray-300 font-medium">Location</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Villefranche-sur-Mer, France
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Commission Process
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Interested in commissioning a custom AI artwork? Here's how it works:
                </p>
                <ol className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex">
                    <span className="font-bold mr-2">1.</span>
                    <span>Initial consultation to discuss your vision and requirements</span>
                  </li>
                  <li className="flex">
                    <span className="font-bold mr-2">2.</span>
                    <span>Concept development and preliminary designs</span>
                  </li>
                  <li className="flex">
                    <span className="font-bold mr-2">3.</span>
                    <span>Feedback and refinement process</span>
                  </li>
                  <li className="flex">
                    <span className="font-bold mr-2">4.</span>
                    <span>Final artwork delivery in your preferred format</span>
                  </li>
                </ol>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {submitted ? (
                <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-xl text-center">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Send a Message
                  </h2>

                  {error && (
                    <div className="bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 p-4 rounded-md">
                      {error}
                    </div>
                  )}

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="commission">Commission Inquiry</option>
                      <option value="collaboration">Collaboration Proposal</option>
                      <option value="licensing">Licensing & Usage Rights</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full px-6 py-3 rounded-md text-white font-medium transition-colors ${
                        isSubmitting
                          ? "bg-purple-400 cursor-not-allowed"
                          : "bg-purple-600 hover:bg-purple-700"
                      }`}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about my work and commission process.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: "What is AI art?",
                answer:
                  "AI art refers to artwork created using artificial intelligence technologies such as GANs, diffusion models, or neural networks. These systems are trained on vast datasets of images and can generate new, original artwork based on text prompts or other inputs.",
              },
              {
                question: "How do you create your artwork?",
                answer:
                  "I use a combination of AI models like Stable Diffusion, Midjourney, and custom-trained GANs along with traditional digital editing tools. The process involves crafting detailed text prompts, generating multiple iterations, and then refining the outputs to achieve the final piece.",
              },
              {
                question: "Can I commission a specific piece?",
                answer:
                  "Absolutely! I regularly work on commissions for individuals, businesses, and organizations. Each commission begins with understanding your vision and requirements, then exploring various AI-generated concepts before finalizing the artwork.",
              },
              {
                question: "What formats do you provide for final artwork?",
                answer:
                  "I can deliver artwork in various digital formats including high-resolution JPG, PNG, TIFF, and vector formats when appropriate. For print purposes, I ensure all files meet professional printing standards.",
              },
              {
                question: "Do you sell NFTs of your artwork?",
                answer:
                  "Yes, I do create and sell NFTs of select pieces. If you're interested in purchasing an NFT of my work or commissioning an NFT, please contact me directly to discuss the details.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 