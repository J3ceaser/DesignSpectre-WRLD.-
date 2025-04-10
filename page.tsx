
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-6">
      <header className="text-center mb-12">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image src="/logo.png" alt="DesignSpectre Logo" width={120} height={120} />
        </div>

        <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-400">
          DesignSpectre-WRLD
        </h1>
        <p className="text-lg mt-4 text-gray-300 max-w-xl mx-auto">
          Elevating visuals with next-gen design. Join the WRLD of creativity.
        </p>
      </header>

      {/* Services Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {["Branding", "Web Design", "Illustration"].map((service, i) => (
          <motion.div
            key={service}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <Card className="rounded-2xl shadow-xl bg-gray-950 border border-gray-800 hover:scale-105 transition-transform">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-fuchsia-400">{service}</h2>
                <p className="text-gray-400">
                  Cutting-edge {service.toLowerCase()} to power your brand’s identity.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* Portfolio Section */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-6 text-cyan-400">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((id) => (
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

      {/* Flyer Section */}
      <section className="mt-20 text-center">
        <div className="flex justify-center mb-6">
          <Image
            src="/flyer.jpg"
            alt="Flyer"
            width={600}
            height={800}
            className="rounded-2xl shadow-lg"
          />
        </div>
        <a
          href="mailto:j3ceaser@gmail.com"
          className="inline-block bg-green-500 hover:bg-green-600 text-white text-lg px-6 py-3 rounded-full shadow-lg"
        >
          Book Now
        </a>
      </section>

      {/* Contact Section */}
      <section className="mt-20 text-center">
        <h2 className="text-3xl font-bold mb-4 text-fuchsia-400">Let's Connect</h2>
        <p className="text-gray-400 mb-4">Interested in collaborating? Reach out directly:</p>
        <p className="text-lg text-cyan-300">Phone: <a href="tel:+2348165001366" className="underline">08165001366</a></p>
        <p className="text-lg text-cyan-300 mt-2">Email: <a href="mailto:j3ceaser@gmail.com" className="underline">j3ceaser@gmail.com</a></p>
      </section>

      <footer className="mt-20 text-center text-sm text-gray-500">
        &copy; 2025 DesignSpectre-WRLD. All rights reserved.
      </footer>
    </main>
  );
}
