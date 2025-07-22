'use client';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-gray-50 to-white">
      <h1 className="text-5xl font-bold text-primary leading-tight max-w-4xl mb-6">
        Automated Deed Creation & <br />
        Recording Services
      </h1>
      <p className="text-gray-600 mt-6 max-w-2xl text-lg">
        Streamline your real estate document workflow with our cutting-edge platform. 
        Create, share, and manage property transfer documents with ease and confidence.
      </p>
      <div className="mt-8 flex gap-4 flex-wrap justify-center">
        <a 
          href="/login" 
          className="bg-accent text-white px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:scale-105 font-semibold"
        >
          Get Started
        </a>
        <a 
          href="#features" 
          className="bg-gray-100 text-gray-700 px-8 py-4 rounded-xl hover:bg-gray-200 transition-all font-semibold"
        >
          Learn More
        </a>
      </div>
      <div className="mt-12 text-sm text-gray-500">
        ✅ Trusted by escrow officers and lenders nationwide
      </div>
    </section>
  );
} 