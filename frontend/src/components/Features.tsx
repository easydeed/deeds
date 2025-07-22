'use client';

export default function Features() {
  const features = [
    {
      title: "Automated Document Generation",
      description: "Create professional deeds in minutes with our smart wizard that guides you through every step.",
      icon: "📄"
    },
    {
      title: "Secure Approval Workflows",
      description: "Share deeds with stakeholders for review and approval with bank-level security.",
      icon: "🔒"
    },
    {
      title: "Real-time Status Tracking",
      description: "Monitor your deed creation and recording process with live updates and notifications.",
      icon: "📊"
    }
  ];

  return (
    <section id="features" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Powerful Features for Real Estate Professionals
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to streamline your deed creation and recording process in one comprehensive platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 