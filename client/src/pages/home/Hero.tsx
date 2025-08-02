const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden grid-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0A1F]/0 via-[#0F0A1F]/50 to-[#0F0A1F]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <div className="inline-block px-4 py-2 bg-[#7C4DFF]/10 rounded-full border border-[#7C4DFF]/20 mb-6 animate-fade-in">
              <span className="text-[#9969FF] font-medium text-sm">Premium Minecraft Hosting</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
              Power Your <span className="gradient-text">Minecraft</span> World with <span className="gradient-text">Quantum</span> Speed
            </h1>

            <p className="text-gray-300 text-lg mb-8 max-w-lg">
              Experience lag-free gaming with our advanced server infrastructure. 
              Budget or premium, we've got plans to match your Minecraft dreams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://billing.quantumhost.site" className="px-8 py-4 bg-gradient-to-r from-[#7C4DFF] to-[#9969FF] rounded-lg text-white font-medium shadow-glow hover:shadow-glow-strong hover:-translate-y-1 transition-all text-center">
                Get Started <i className="fas fa-chevron-right ml-2"></i>
              </a>
              <a href="#features" className="px-8 py-4 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-all text-center">
                Explore Features
              </a>
            </div>

            
          </div>

          <div className="md:w-1/2 relative">
            <div className="relative z-10 animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-[#7C4DFF]/20 to-[#FF6B9D]/20 rounded-2xl blur-2xl"></div>
              <div className="grid grid-cols-2 gap-4 w-full max-w-xl">
                <div className="rounded-2xl border border-white/10 bg-[#0F0A1F]/50 backdrop-blur-sm p-6">
                  <div className="text-[#9969FF] text-4xl font-bold mb-2">99.9%</div>
                  <div className="text-gray-400">Uptime Guarantee</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#0F0A1F]/50 backdrop-blur-sm p-6">
                  <div className="text-[#9969FF] text-4xl font-bold mb-2">60 sec</div>
                  <div className="text-gray-400">Instant Setup</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#0F0A1F]/50 backdrop-blur-sm p-6">
                  <div className="text-[#9969FF] text-4xl font-bold mb-2">1-Click</div>
                  <div className="text-gray-400">Mod Installation</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#0F0A1F]/50 backdrop-blur-sm p-6">
                  <div className="text-[#9969FF] text-4xl font-bold mb-2">24/7</div>
                  <div className="text-gray-400">Expert Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5">
          <div className="flex flex-col items-center gap-8">
            <div className="text-center">
              <p className="text-gray-400 mb-4 uppercase tracking-wider text-sm font-medium">Powered by</p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center">
              {/* Partner Logos */}
              <div className="h-8 opacity-70 hover:opacity-100 transition-opacity flex items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Logo-OVH.svg" alt="OVH" className="h-8" />
              </div>
              <div className="h-8 opacity-70 hover:opacity-100 transition-opacity flex items-center">
                <img src="https://www.proxmox.com/images/proxmox/Proxmox_logo_standard_hex_400px.png" alt="Proxmox" className="h-8 brightness-200" />
              </div>
              <div className="h-8 opacity-70 hover:opacity-100 transition-opacity flex items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/AMD_Logo.svg" alt="AMD" className="h-8 brightness-200" />
              </div>
              <div className="h-8 opacity-70 hover:opacity-100 transition-opacity flex items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/Intel_logo_2023.svg" alt="Intel" className="h-8 brightness-200" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated particles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full bg-[#7C4DFF]/50 animate-float"></div>
        <div className="absolute top-1/3 left-2/3 w-3 h-3 rounded-full bg-[#FF6B9D]/50 animate-float"></div>
        <div className="absolute top-2/3 left-1/6 w-2 h-2 rounded-full bg-[#50E3C2]/50 animate-float"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-[#7C4DFF]/50 animate-float"></div>
      </div>
    </section>
  );
};

export default Hero;