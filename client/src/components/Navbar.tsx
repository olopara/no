import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 glass-effect border-b backdrop-blur-md ${scrolled ? 'border-purple-500/20 bg-black/50' : 'border-transparent'} transition-all duration-300`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="relative h-10 w-10">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20C0 8.95431 8.95431 0 20 0ZM20 4C11.1634 4 4 11.1634 4 20C4 28.8366 11.1634 36 20 36C28.8366 36 36 28.8366 36 20C36 11.1634 28.8366 4 20 4Z"/>
              <path d="M28 20C28 24.4183 24.4183 28 20 28V32C26.6274 32 32 26.6274 32 20H28Z"/>
            </svg>
          </div>
          <span className="text-2xl font-heading font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">QuantumHost</span>
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-2">
            <NavigationMenuItem>
              <Link href="/" className="text-white/90 hover:text-white hover:bg-purple-500/10 px-4 py-2 rounded-lg transition-all duration-200">
                Home
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white/90 hover:text-white bg-black/50 hover:bg-gradient-to-r from-black/80 to-purple-900/50 transition-all duration-300">
                Game Hosting
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[280px] p-4 bg-gradient-to-br from-black/95 to-purple-900/95 backdrop-blur-xl border border-purple-500/20 rounded-xl shadow-xl">
                  <a href="#" className="flex items-center space-x-3 p-3 hover:bg-gradient-to-r from-purple-900/30 to-purple-500/20 rounded-lg group transition-all duration-200">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-lg flex items-center justify-center">
                      <i className="fas fa-cube text-purple-400"></i>
                    </div>
                    <div>
                      <div className="font-medium text-white group-hover:text-purple-400 transition-colors">Minecraft Hosting</div>
                      <div className="text-sm text-white/60">Premium game servers</div>
                    </div>
                  </a>
                  <a href="#" className="flex items-center space-x-3 p-3 hover:bg-gradient-to-r from-purple-900/30 to-purple-500/20 rounded-lg group transition-all duration-200">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-lg flex items-center justify-center">
                      <i className="fas fa-car text-purple-400"></i>
                    </div>
                    <div>
                      <div className="font-medium text-white group-hover:text-purple-400 transition-colors">FiveM GTA 5</div>
                      <div className="text-sm text-white/60">High-performance servers</div>
                    </div>
                  </a>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white/90 hover:text-white bg-black/50 hover:bg-gradient-to-r from-black/80 to-purple-900/50 transition-all duration-300">
                Other Hosting
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[280px] p-4 bg-gradient-to-br from-black/95 to-purple-900/95 backdrop-blur-xl border border-purple-500/20 rounded-xl shadow-xl">
                  <a href="#" className="flex items-center p-3 hover:bg-gradient-to-r from-purple-900/30 to-purple-500/20 rounded-lg group transition-all duration-200">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-lg flex items-center justify-center">
                      <i className="fas fa-server text-purple-400"></i>
                    </div>
                    <div>
                      <div className="font-medium text-white group-hover:text-purple-400 transition-colors">VPS Hosting</div>
                      <div className="text-sm text-white/60">Starting at $6.00</div>
                    </div>
                  </a>
                  <a href="#" className="flex items-center p-3 hover:bg-gradient-to-r from-purple-900/30 to-purple-500/20 rounded-lg group transition-all duration-200">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-lg flex items-center justify-center">
                      <i className="fab fa-discord text-purple-400"></i>
                    </div>
                    <div>
                      <div className="font-medium text-white group-hover:text-purple-400 transition-colors">Discord Hosting</div>
                      <div className="text-sm text-white/60">Starting at $1.00</div>
                    </div>
                  </a>
                  <a href="https://billing.quantumhost.site" className="flex items-center p-3 hover:bg-gradient-to-r from-purple-900/30 to-purple-500/20 rounded-lg group transition-all duration-200">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-lg flex items-center justify-center">
                      <i className="fas fa-globe text-purple-400"></i>
                    </div>
                    <div>
                      <div className="font-medium text-white group-hover:text-purple-400 transition-colors">Web Hosting</div>
                      <div className="text-sm text-white/60">Starting at $1.00</div>
                    </div>
                  </a>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white/90 hover:text-white bg-black/50 hover:bg-gradient-to-r from-black/80 to-purple-900/50 transition-all duration-300">
                Important
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[280px] p-4 bg-gradient-to-br from-black/95 to-purple-900/95 backdrop-blur-xl border border-purple-500/20 rounded-xl shadow-xl">
                  <Link href="/support" className="flex items-center space-x-3 p-3 hover:bg-gradient-to-r from-purple-900/30 to-purple-500/20 rounded-lg group transition-all duration-200">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-lg flex items-center justify-center">
                      <i className="fas fa-headset text-purple-400"></i>
                    </div>
                    <div>
                      <div className="font-medium text-white group-hover:text-purple-400 transition-colors">Support</div>
                      <div className="text-sm text-white/60">Get help with your services</div>
                    </div>
                  </Link>
                  <Link href="/tos" className="flex items-center space-x-3 p-3 hover:bg-gradient-to-r from-purple-900/30 to-purple-500/20 rounded-lg group transition-all duration-200">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-lg flex items-center justify-center">
                      <i className="fas fa-file-contract text-purple-400"></i>
                    </div>
                    <div>
                      <div className="font-medium text-white group-hover:text-purple-400 transition-colors">Terms of Service</div>
                      <div className="text-sm text-white/60">Our policies and guidelines</div>
                    </div>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <a href="https://billing.quantumhost.site" className="hidden md:block px-5 py-2 rounded-lg border border-[#7C4DFF]/30 text-white hover:border-[#7C4DFF] transition-all duration-300 hover:bg-[#7C4DFF]/10 hover:scale-105">
            Login
          </a>
          <a href="https://billing.quantumhost.site" className="px-5 py-2 bg-gradient-to-r from-[#7C4DFF] to-[#9969FF] rounded-lg text-white font-medium shadow-glow hover:shadow-glow-strong hover:-translate-y-1 hover:scale-105 transition-all duration-300">
            Get Started
          </a>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white text-2xl"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090612]/95 backdrop-blur-lg border-t border-purple-500/20">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-white/90 hover:text-white hover:bg-purple-500/10 px-4 py-2 rounded-lg transition-all duration-200">Home</Link>
              <Link href="/minecraft-plans" className="text-white/90 hover:text-white hover:bg-purple-500/10 px-4 py-2 rounded-lg transition-all duration-200">Minecraft Hosting</Link>
              <div className="text-white/90 hover:text-white hover:bg-purple-500/10 px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer">Game Hosting</div>
              <div className="text-white/90 hover:text-white hover:bg-purple-500/10 px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer">Other Hosting</div>
              <div className="text-white/90 hover:text-white hover:bg-purple-500/10 px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer">Important</div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;