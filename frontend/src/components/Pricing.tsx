'use client';

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include our core deed creation features.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
            <h3 className="text-2xl font-semibold text-primary mb-2">Document Preparation</h3>
            <p className="text-gray-600 mb-6">Perfect for getting started</p>
            <div className="text-4xl font-bold text-primary mb-6">$15<span className="text-lg text-gray-500">/document</span></div>
            <ul className="text-gray-600 space-y-3 mb-8">
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Basic deed templates</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Email support</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Standard processing</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Document downloads</li>
            </ul>
            <a href="/login" className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-6 rounded-lg transition-colors block text-center font-semibold">
              Get Started
            </a>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-accent relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
            <h3 className="text-2xl font-semibold text-primary mb-2">Real Estate Professional</h3>
            <p className="text-gray-600 mb-6">For busy professionals</p>
            <div className="text-4xl font-bold text-primary mb-6">$50<span className="text-lg text-gray-500">/document</span></div>
            <ul className="text-gray-600 space-y-3 mb-8">
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>All basic features</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Premium templates</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Priority support</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Advanced workflows</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Recording services</li>
            </ul>
            <a href="/login" className="w-full bg-accent hover:bg-blue-600 text-white py-3 px-6 rounded-lg transition-colors block text-center font-semibold">
              Choose Professional
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 