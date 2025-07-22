import React from 'react';
"use client";
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b">
      <div className="text-primary font-bold text-xl">YourCompany</div>
      <ul className="flex space-x-6 text-gray-700">
        <li><a href="#features" className="hover:text-primary">Features</a></li>
        <li><a href="#pricing" className="hover:text-primary">Pricing</a></li>
        <li><a href="#contact" className="hover:text-primary">Contact</a></li>
      </ul>
    </nav>
  );
} 