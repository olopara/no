const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#7C4DFF]/20 to-[#FF6B9D]/20 opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-br from-[#1A1336] to-[#231A3F] rounded-2xl p-8 md:p-12 shadow-glow border border-[#7C4DFF]/20 animate-on-scroll">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Ready to Power Up Your Minecraft Experience?
              </h2>
              <p className="text-gray-300 mb-0">
                Join thousands of gamers who trust QuantumHost for reliable, high-performance Minecraft server hosting.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <a href="https://billing.quantumhost.site" className="px-8 py-4 bg-gradient-to-r from-[#7C4DFF] to-[#9969FF] rounded-lg text-white font-medium shadow-glow hover:shadow-glow-strong hover:-translate-y-1 transition-all text-center">
                Get Started Now <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
