import React from 'react';
"use client";
export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold text-primary leading-tight max-w-3xl">
        Unlock Smarter Solutions <br />
        for a Changing World
      </h1>
      <p className="text-gray-500 mt-6 max-w-md">
        We build next-gen tools to power the future of technology and business.
      </p>
      <button className="mt-8 bg-accent text-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition">
        Get Started
      </button>
    </section>
  );
} 