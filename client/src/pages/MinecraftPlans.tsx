
import { useState } from 'react';

const MinecraftPlans = () => {
  const [showPremium, setShowPremium] = useState(false);
  
  const basicPlans = [
    {
      name: "Basic MC",
      description: "Perfect for small friend groups",
      price: "$2.99",
      features: [
        { included: true, text: "1GB RAM" },
        { included: true, text: "10 Player Slots" },
        { included: true, text: "Basic Support" },
        { included: true, text: "Vanilla Minecraft" },
        { included: false, text: "Mod Support" }
      ]
    },
    {
      name: "Standard MC",
      description: "Great for casual communities",
      price: "$5.99",
      features: [
        { included: true, text: "2GB RAM" },
        { included: true, text: "20 Player Slots" },
        { included: true, text: "Priority Support" },
        { included: true, text: "Basic Mod Support" },
        { included: true, text: "Daily Backups" }
      ],
      isPrimary: true
    },
    {
      name: "Premium MC",
      description: "For growing communities",
      price: "$9.99",
      features: [
        { included: true, text: "4GB RAM" },
        { included: true, text: "40 Player Slots" },
        { included: true, text: "24/7 Support" },
        { included: true, text: "Full Mod Support" },
        { included: true, text: "Hourly Backups" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#090612] text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Minecraft <span className="gradient-text">Server Hosting</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            High-performance Minecraft servers with instant setup and 24/7 uptime
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {basicPlans.map((plan, index) => (
            <div key={index} className={`
              ${plan.isPrimary ? 'bg-gradient-to-b from-[#231A3F] to-[#231A3F] border-2 border-[#7C4DFF]/30' : 'bg-[#231A3F] border border-white/10'} 
              rounded-xl overflow-hidden transition-all hover:-translate-y-2 p-6
            `}>
              <h3 className="text-xl font-heading font-semibold mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
              <div className="mb-4">
                <span className="text-3xl font-bold font-heading">{plan.price}</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    {feature.included ? (
                      <i className="fas fa-check text-[#7C4DFF] mt-1 mr-2"></i>
                    ) : (
                      <i className="fas fa-times text-gray-500 mt-1 mr-2"></i>
                    )}
                    <span className={feature.included ? '' : 'text-gray-500'}>{feature.text}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="https://billing.quantumhost.site" 
                className={`block w-full py-3 px-4 ${
                  plan.isPrimary 
                    ? 'bg-gradient-to-r from-[#7C4DFF] to-[#9969FF] shadow-glow hover:shadow-glow-strong' 
                    : 'bg-white/5 hover:bg-white/10 border border-white/10'
                } rounded-lg text-center transition-all`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MinecraftPlans;
