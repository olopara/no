import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem = ({ question, answer, isOpen, toggleOpen }: FAQItemProps) => {
  return (
    <div className="py-6 animate-on-scroll">
      <button 
        className="flex justify-between items-center w-full text-left focus:outline-none group"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium pr-8">{question}</h3>
        <span className={`text-[#7C4DFF] text-xl transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <i className="fas fa-chevron-down"></i>
        </span>
      </button>
      <div className={`mt-4 text-gray-400 ${isOpen ? 'block' : 'hidden'}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqItems = [
    {
      question: "How do I get started with my Minecraft server?",
      answer: "Getting started is easy! Simply choose a plan that fits your needs, complete the signup process, and your server will be ready in less than 60 seconds. Our control panel will guide you through the basic setup and customization options."
    },
    {
      question: "Do you support modpacks and plugins?",
      answer: "Yes! We support all major modpacks and plugins. Our premium plans include one-click installation for popular options like Forge, Fabric, Spigot, Paper, and more. You can also upload custom mods through our control panel."
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Absolutely! You can upgrade your plan at any time through your account dashboard. Your server data, worlds, and configurations will be automatically transferred to your new plan with minimal downtime."
    },
    {
      question: "How reliable is your service?",
      answer: "We maintain a 99.9% uptime guarantee on all our plans. Our infrastructure is built on enterprise-grade hardware with redundant systems to ensure your server stays online. We also provide real-time server monitoring and automatic recovery in case of any issues."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 7-day money-back guarantee if you're not satisfied with our service. Simply contact our support team within 7 days of your purchase to request a refund."
    }
  ];
  
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-300">
            Got questions? We've got answers. If you can't find what you're looking for, reach out to our support team.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="divide-y divide-white/10">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                toggleOpen={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
