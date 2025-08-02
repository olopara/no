interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-[#231A3F] p-6 rounded-xl border border-white/5 hover:border-[#7C4DFF]/30 transition-all hover:-translate-y-2 group animate-on-scroll">
    <div className="w-12 h-12 rounded-lg bg-[#7C4DFF]/20 flex items-center justify-center mb-6 group-hover:bg-[#7C4DFF]/30 transition-colors">
      <i className={`${icon} text-xl text-[#9969FF]`}></i>
    </div>
    <h3 className="text-xl font-heading font-semibold mb-4">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: "fas fa-server",
      title: "High Performance",
      description: "NVMe SSDs and high clock speed CPUs ensure your Minecraft world runs smoothly with minimal lag."
    },
    {
      icon: "fas fa-shield-alt",
      title: "DDoS Protection",
      description: "Advanced protection systems keep your server safe from attacks and ensure consistent uptime."
    },
    {
      icon: "fas fa-plug",
      title: "One-Click Mods",
      description: "Install popular mods and plugins with a single click through our intuitive control panel."
    },
    {
      icon: "fas fa-rocket",
      title: "Instant Setup",
      description: "Get your server running in less than 60 seconds with our automated deployment system."
    },
    {
      icon: "fas fa-database",
      title: "Automated Backups",
      description: "Schedule automatic backups to keep your world data safe and easily restore if needed."
    },
    {
      icon: "fas fa-headset",
      title: "24/7 Support",
      description: "Our gaming experts are available around the clock to assist with any technical issues."
    }
  ];

  return (
    <section id="features" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Advanced <span className="gradient-text">Features</span> for Your Server
          </h2>
          <p className="text-gray-300">
            QuantumHost provides everything you need to create and manage your perfect Minecraft server experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="mt-20 p-8 lg:p-12 bg-gradient-to-r from-[#1A1336] to-[#231A3F] rounded-2xl border border-[#7C4DFF]/10 shadow-glow animate-on-scroll">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-2/3 mb-8 lg:mb-0 lg:pr-12">
              <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-4">
                Custom Control Panel
              </h3>
              <p className="text-gray-300 mb-6">
                Our intuitive control panel makes server management effortless. Monitor performance, install mods, configure settings, and more with just a few clicks.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-[#7C4DFF] mr-2"></i>
                  <span>Real-time performance metrics</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-[#7C4DFF] mr-2"></i>
                  <span>One-click mod installation</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-[#7C4DFF] mr-2"></i>
                  <span>Player management</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-[#7C4DFF] mr-2"></i>
                  <span>World backup & restore</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-[#7C4DFF] mr-2"></i>
                  <span>Custom startup parameters</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-[#7C4DFF] mr-2"></i>
                  <span>Console access</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#7C4DFF]/20 to-[#FF6B9D]/20 rounded-xl blur-xl"></div>
                <div className="relative rounded-xl border border-white/10 shadow-lg w-full overflow-hidden bg-[#231A3F]">
                  <div className="aspect-w-5 aspect-h-4 w-full">
                    <div className="w-full h-full bg-gradient-to-br from-[#231A3F] to-[#0F0A1F] p-4">
                      {/* Control Panel UI */}
                      <div className="relative h-full flex flex-col">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-2">
                              <i className="fas fa-server text-[#7C4DFF]"></i>
                              <span className="text-white text-sm font-medium">Server Control</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs text-green-400">guard.quantumhost.xyz</span>
                              <div className="flex space-x-1">
                                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-3 gap-2 mb-3">
                            <div className="bg-[#1A1336] rounded p-2 border border-[#7C4DFF]/20">
                              <div className="text-xs text-gray-400 mb-1">Memory</div>
                              <div className="flex items-center">
                                <div className="w-full bg-[#090612] rounded-full h-1.5 mr-2">
                                  <div className="bg-[#7C4DFF] h-1.5 rounded-full animate-pulse" style={{width: "70%"}}></div>
                                </div>
                                <span className="text-white text-xs">3.5/5GB</span>
                              </div>
                            </div>
                            <div className="bg-[#1A1336] rounded p-2 border border-[#7C4DFF]/20">
                              <div className="text-xs text-gray-400 mb-1">CPU</div>
                              <div className="flex items-center">
                                <div className="w-full bg-[#090612] rounded-full h-1.5 mr-2">
                                  <div className="bg-[#7C4DFF] h-1.5 rounded-full animate-pulse" style={{width: "45%"}}></div>
                                </div>
                                <span className="text-white text-xs">45%</span>
                              </div>
                            </div>
                            <div className="bg-[#1A1336] rounded p-2 border border-[#7C4DFF]/20">
                              <div className="text-xs text-gray-400 mb-1">Players</div>
                              <div className="flex items-center justify-between">
                                <i className="fas fa-users text-[#7C4DFF] text-xs"></i>
                                <span className="text-white text-xs">12/50</span>
                              </div>
                            </div>
                          </div>

                          <div className="bg-[#0F0A1F] rounded p-2 border border-[#7C4DFF]/10 mb-3 flex-grow">
                            <div className="flex justify-between items-center mb-1">
                              <div className="flex items-center space-x-2">
                                <i className="fas fa-terminal text-[#7C4DFF] text-xs"></i>
                                <span className="text-white text-xs">Console</span>
                              </div>
                              <div className="flex items-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1 animate-pulse"></div>
                                <span className="text-green-500 text-xs">Online | 2h 15m</span>
                              </div>
                            </div>
                            <div className="text-[10px] text-gray-400 font-mono h-20 overflow-y-auto">
                              <div>[INFO] Starting Minecraft server version 1.20.1</div>
                              <div>[INFO] Loading world data...</div>
                              <div>[INFO] Preparing spawn area: 45%</div>
                              <div className="text-green-400">[INFO] Done! Server is ready on port 25565</div>
                              <div>[INFO] Player Steve joined the game</div>
                              <div>[INFO] Player Alex joined the game</div>
                            </div>
                          </div>

                          <div className="grid grid-cols-4 gap-2">
                            <button className="bg-green-600 hover:bg-green-700 text-white text-xs py-1.5 rounded flex items-center justify-center">
                              <i className="fas fa-play mr-1"></i> Start
                            </button>
                            <button className="bg-red-600 hover:bg-red-700 text-white text-xs py-1.5 rounded flex items-center justify-center">
                              <i className="fas fa-stop mr-1"></i> Stop
                            </button>
                            <button className="bg-[#231A3F] hover:bg-[#2F2252] text-white text-xs py-1.5 rounded border border-white/10 flex items-center justify-center">
                              <i className="fas fa-sync mr-1"></i> Restart
                            </button>
                            <button className="bg-[#231A3F] hover:bg-[#2F2252] text-white text-xs py-1.5 rounded border border-white/10 flex items-center justify-center">
                              <i className="fas fa-database mr-1"></i> Backup
                            </button>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;