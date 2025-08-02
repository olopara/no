import { useState } from 'react';

interface PlanProps {
  name: string;
  description: string;
  price: string;
  features: {
    included: boolean;
    text: string;
  }[];
  isPrimary?: boolean;
  isPopular?: boolean;
}

const PlanCard = ({ name, description, price, features, isPrimary, isPopular }: PlanProps) => (
  <div className={`
    ${isPopular ? 'bg-gradient-to-b from-[#231A3F] to-[#231A3F] border-2 border-[#7C4DFF]/30' : 'bg-[#231A3F] border border-white/10'} 
    rounded-xl overflow-hidden transition-all hover:-translate-y-2 animate-on-scroll relative
  `}>
    {isPopular && (
      <div className="absolute top-0 right-0 bg-[#7C4DFF] text-white py-1 px-4 text-sm font-medium rounded-bl-lg">
        POPULAR
      </div>
    )}
    <div className="p-6 pb-4">
      <h3 className="text-xl font-heading font-semibold mb-2">{name}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <div className="mb-4">
        <span className="text-3xl font-bold font-heading">{price}</span>
        <span className="text-gray-400">/month</span>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            {feature.included ? (
              <i className="fas fa-check text-[#7C4DFF] mt-1 mr-2"></i>
            ) : (
              <i className="fas fa-times text-gray-500 mt-1 mr-2"></i>
            )}
            <span className={feature.included ? '' : 'text-gray-500'}>{feature.text}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="px-6 pb-6">
      <a 
        href="https://billing.quantumhost.site" 
        className={`block w-full py-3 px-4 ${
          isPrimary 
            ? 'bg-gradient-to-r from-[#7C4DFF] to-[#9969FF] shadow-glow hover:shadow-glow-strong' 
            : 'bg-white/5 hover:bg-white/10 border border-white/10'
        } rounded-lg text-center transition-all`}
      >
        Get Started
      </a>
    </div>
  </div>
);

const Plans = () => {
  const [showPremium, setShowPremium] = useState(false);
  
  const budgetPlans = [
    {
      name: "Basic",
      description: "Perfect for small friend groups",
      price: "₹30",
      features: [
        { included: true, text: "1GB RAM" },
        { included: true, text: "10 Player Slots" },
        { included: true, text: "Standard Support" },
        { included: true, text: "Vanilla Minecraft" },
        { included: false, text: "Mod Support" }
      ]
    },
    {
      name: "Standard",
      description: "Great for casual communities",
      price: "₹60",
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
      name: "Advanced",
      description: "For growing communities",
      price: "₹120",
      features: [
        { included: true, text: "4GB RAM" },
        { included: true, text: "40 Player Slots" },
        { included: true, text: "Priority Support" },
        { included: true, text: "Full Mod Support" },
        { included: true, text: "Daily Backups" }
      ]
    }
  ];
  
  const premiumPlans = [
    {
      name: "Pro",
      description: "For serious gameplay",
      price: "₹320",
      features: [
        { included: true, text: "8GB RAM" },
        { included: true, text: "80 Player Slots" },
        { included: true, text: "24/7 Priority Support" },
        { included: true, text: "Full Mod/Plugin Support" },
        { included: true, text: "Hourly Backups" }
      ]
    },
    {
      name: "Elite",
      description: "Perfect for active communities",
      price: "₹480",
      features: [
        { included: true, text: "12GB RAM" },
        { included: true, text: "120 Player Slots" },
        { included: true, text: "24/7 Premium Support" },
        { included: true, text: "Premium Modpack Support" },
        { included: true, text: "Custom Domain Included" }
      ],
      isPrimary: true,
      isPopular: true
    },
    {
      name: "Ultimate",
      description: "For large communities",
      price: "₹640",
      features: [
        { included: true, text: "16GB RAM" },
        { included: true, text: "Unlimited Player Slots" },
        { included: true, text: "24/7 Dedicated Support" },
        { included: true, text: "All Premium Features" },
        { included: true, text: "White Label Branding" }
      ]
    }
  ];
  
  return (
    <section id="plans" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 grid-pattern"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Choose Your <span className="gradient-text">Perfect Plan</span>
          </h2>
          <p className="text-gray-300 mb-8">
            Whether you're just starting out or running a large community, we have the right plan for your Minecraft server.
          </p>
          
          {/* Plan toggle */}
          <div className="flex items-center justify-center">
            <span className={`mr-4 font-medium ${!showPremium ? 'text-[#7C4DFF]' : 'text-gray-400'}`}>Budget</span>
            <div className="relative inline-block w-16 h-8 align-middle select-none">
              <div 
                className={`absolute w-full h-full rounded-full transition-colors duration-300 ${showPremium ? 'bg-[#7C4DFF]' : 'bg-[#231A3F]'} cursor-pointer`}
                onClick={() => setShowPremium(!showPremium)}
              >
                <div 
                  className={`absolute w-6 h-6 top-1 bg-white rounded-full shadow transition-transform duration-300 ${
                    showPremium ? 'transform translate-x-9 border-2 border-[#7C4DFF]' : 'transform translate-x-1'
                  }`}
                ></div>
              </div>
              <input 
                type="checkbox" 
                id="plan-toggle" 
                className="sr-only"
                checked={showPremium}
                onChange={() => setShowPremium(!showPremium)} 
              />
            </div>
            <span className={`ml-4 font-medium ${showPremium ? 'text-[#7C4DFF]' : 'text-gray-400'}`}>Premium</span>
          </div>
        </div>
        
        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Budget Plans */}
          <div 
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 col-span-full ${showPremium ? 'hidden' : 'block'}`}
          >
            {budgetPlans.map((plan, index) => (
              <PlanCard 
                key={`budget-${index}`}
                name={plan.name}
                description={plan.description}
                price={plan.price}
                features={plan.features}
                isPrimary={plan.isPrimary}
              />
            ))}
          </div>
          
          {/* Premium Plans */}
          <div 
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 col-span-full ${showPremium ? 'block' : 'hidden'}`}
          >
            {premiumPlans.map((plan, index) => (
              <PlanCard 
                key={`premium-${index}`}
                name={plan.name}
                description={plan.description}
                price={plan.price}
                features={plan.features}
                isPrimary={plan.isPrimary}
                isPopular={plan.isPopular}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center animate-on-scroll">
          <p className="text-gray-400 mb-6">Need a custom solution for your large community or network?</p>
          <a href="#contact" className="inline-flex items-center text-[#7C4DFF] hover:text-[#9969FF] transition-colors font-medium">
            Contact us for custom plans <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Plans;
