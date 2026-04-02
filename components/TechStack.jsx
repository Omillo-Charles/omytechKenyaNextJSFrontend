"use client";

import React from "react";
import { motion } from "framer-motion";

const technologies = [
  { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs" },
  { name: "React", logo: "https://cdn.simpleicons.org/react" },
  { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "Python", logo: "https://cdn.simpleicons.org/python" },
  { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql" },
  { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb" },
  { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript" },
  { name: "Docker", logo: "https://cdn.simpleicons.org/docker" },
  { name: "Kubernetes", logo: "https://cdn.simpleicons.org/kubernetes" },
  { name: "TensorFlow", logo: "https://cdn.simpleicons.org/tensorflow" },
  { name: "Figma", logo: "https://cdn.simpleicons.org/figma" },
  { name: "Tailwind", logo: "https://cdn.simpleicons.org/tailwindcss" },
  { name: "Git", logo: "https://cdn.simpleicons.org/git" },
  { name: "GraphQL", logo: "https://cdn.simpleicons.org/graphql" },
  { name: "Redux", logo: "https://cdn.simpleicons.org/redux" },
  { name: "Firebase", logo: "https://cdn.simpleicons.org/firebase" },
  { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel" },
  { name: "Nginx", logo: "https://cdn.simpleicons.org/nginx" },
];

export default function TechStack() {
  return (
    <section className="relative py-12 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">
            Technologies We Use
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col items-center justify-center gap-3 opacity-50 hover:opacity-100 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  className="w-full h-full object-contain brightness-0 invert"
                  loading="lazy"
                />
              </div>
              <span className="text-gray-400 text-sm font-medium text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
