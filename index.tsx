
import React from "react";
import { motion } from "framer-motion";

export default function HomePage(): JSX.Element {
  const services: string[] = ["Branding", "Web Design", "Illustration"];

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-6">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-400">
          DesignSpectre-WRLD
        </h1>
        <p className="text-lg mt-4 text-gray-300 max-w-xl mx-auto">
          Elevating visuals with next-gen design. Join the WRLD of creativity.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service: string, i: number) => (
          <motion.div
            key={service}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="rounded-2xl shadow-xl bg-gray-950 border border-gray-800 hover:scale-105 transition-transform p-6"
          >
            <h2 className="text-2xl font-bold mb-2 text-fuchsia-400">{service}</h2>
            <p className="text-gray-400">
              Cutting-edge {service.toLowerCase()} to power your brand’s identity.
            </p>
          </motion.div>
        ))}
      </section>

      <section className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-6 text-cyan-400">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((id: number) => (
            <motion.div
              key={id}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 rounded-2xl p-4 shadow-lg border border-gray-700"
            >
              <div className="h-40 bg-gray-700 rounded-xl mb-4"></div>
              <h3 className="text-xl text-white font-semibold">Project {id}</h3>
              <p className="text-gray-400 text-sm">Description of the project.</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-20 text-center">
        <h2 className="text-3xl font-bold mb-4 text-fuchsia-400">Let's Connect</h2>
        <p className="text-gray-400 mb-6">Interested in collaborating? Reach out below.</p>
        <a
          href="#contact"
          className="inline-block bg-fuchsia-600 hover:bg-fuchsia-700 text-white text-lg px-6 py-3 rounded-full shadow-lg"
        >
          Contact Me
        </a>
      </section>

      <footer className="mt-20 text-center text-sm text-gray-500">
        &copy; 2025 DesignSpectre-WRLD. All rights reserved.
      </footer>
    </main>
  );
}
