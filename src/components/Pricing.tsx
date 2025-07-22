import React from 'react';
"use client";
export default function Pricing() {
  return (
    <section id="pricing" className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-primary">Pricing</h2>
      <div className="flex flex-col md:flex-row justify-center mt-10 space-y-6 md:space-y-0 md:space-x-8">
        <div className="border p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Starter</h3>
          <p className="text-2xl font-bold mt-4">$29/mo</p>
          <ul className="text-gray-500 mt-4 space-y-2">
            <li>Basic Features</li>
            <li>Email Support</li>
            <li>Community Access</li>
          </ul>
          <button className="mt-6 bg-accent text-white px-4 py-2 rounded">Choose</button>
        </div>
        <div className="border p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Pro</h3>
          <p className="text-2xl font-bold mt-4">$99/mo</p>
          <ul className="text-gray-500 mt-4 space-y-2">
            <li>All Starter Features</li>
            <li>Priority Support</li>
            <li>Advanced Analytics</li>
          </ul>
          <button className="mt-6 bg-accent text-white px-4 py-2 rounded">Choose</button>
        </div>
      </div>
    </section>
  );
} 