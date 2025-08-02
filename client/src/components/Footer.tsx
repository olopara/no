import { Link } from 'wouter';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="pt-20 pb-10 relative bg-[#090612] border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="relative h-8 w-8">
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="19" stroke="white" strokeWidth="2"/>
                  <path d="M12 20C12 15.5817 15.5817 12 20 12C24.4183 12 28 15.5817 28 20C28 24.4183 24.4183 28 20 28" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M20 28L12 20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-xl font-heading font-extrabold"><span className="text-[#9969FF]">Quantum</span>Host</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Premium Minecraft server hosting solutions with lightning-fast performance and 24/7 support.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#231A3F] flex items-center justify-center hover:bg-[#7C4DFF]/20 transition-colors">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.2701 5.4C17.9901 4.85 16.6101 4.45 15.1801 4.2C15.0301 4.5 14.8501 4.9 14.7301 5.2C13.1901 4.97 11.6701 4.97 10.1701 5.2C10.0501 4.9 9.87009 4.5 9.72009 4.2C8.29009 4.45 6.90009 4.85 5.61009 5.4C2.86009 9.61 2.12009 13.72 2.49009 17.77C4.14009 19.03 5.74009 19.78 7.33009 20.28C7.73009 19.73 8.08009 19.14 8.39009 18.51C7.77009 18.29 7.19009 18 6.65009 17.66C6.77009 17.57 6.89009 17.47 7.00009 17.37C10.1701 18.82 13.7201 18.82 16.8601 17.37C16.9801 17.47 17.0901 17.57 17.2101 17.66C16.6701 18 16.0801 18.29 15.4601 18.51C15.7701 19.14 16.1201 19.73 16.5201 20.28C18.1201 19.78 19.7201 19.03 21.3701 17.77C21.8101 13.08 20.6101 9.01 19.2701 5.4ZM8.74009 15.25C7.74009 15.25 6.93009 14.35 6.93009 13.25C6.93009 12.15 7.73009 11.25 8.74009 11.25C9.75009 11.25 10.5501 12.15 10.5401 13.25C10.5401 14.35 9.75009 15.25 8.74009 15.25ZM15.1901 15.25C14.1901 15.25 13.3801 14.35 13.3801 13.25C13.3801 12.15 14.1801 11.25 15.1901 11.25C16.2001 11.25 17.0001 12.15 16.9901 13.25C16.9901 14.35 16.2001 15.25 15.1901 15.25Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#231A3F] flex items-center justify-center hover:bg-[#7C4DFF]/20 transition-colors">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#231A3F] flex items-center justify-center hover:bg-[#7C4DFF]/20 transition-colors">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7615 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.12838C15.4785 9.73529 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#231A3F] flex items-center justify-center hover:bg-[#7C4DFF]/20 transition-colors">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.5401 6.42C22.4213 5.94541 22.1794 5.51057 21.8387 5.15941C21.4981 4.80824 21.0708 4.55318 20.6001 4.42C18.8801 4 12.0001 4 12.0001 4C12.0001 4 5.12008 4 3.40008 4.46C2.92933 4.59318 2.50206 4.84824 2.16143 5.19941C1.8208 5.55057 1.57887 5.98541 1.46008 6.46C1.14579 8.20556 0.991838 9.97631 1.00008 11.75C0.988641 13.537 1.14259 15.3213 1.46008 17.08C1.59104 17.5398 1.83839 17.9581 2.17823 18.2945C2.51806 18.6308 2.9389 18.8738 3.40008 19C5.12008 19.46 12.0001 19.46 12.0001 19.46C12.0001 19.46 18.8801 19.46 20.6001 19C21.0708 18.8668 21.4981 18.6118 21.8387 18.2606C22.1794 17.9094 22.4213 17.4746 22.5401 17C22.8524 15.2676 23.0063 13.5103 23.0001 11.75C23.0116 9.96295 22.8576 8.1787 22.5401 6.42Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.75 15.02L15.5 11.75L9.75 8.48001V15.02Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li><a href="https://billing.quantumhost.site" className="text-gray-400 hover:text-[#7C4DFF] transition-colors">Minecraft Hosting</a></li>
              <li><a href="https://billing.quantumhost.site" className="text-gray-400 hover:text-[#7C4DFF] transition-colors">Modpack Hosting</a></li>
              <li><a href="https://billing.quantumhost.site" className="text-gray-400 hover:text-[#7C4DFF] transition-colors">Game Server Hosting</a></li>
              <li><a href="https://billing.quantumhost.site" className="text-gray-400 hover:text-[#7C4DFF] transition-colors">Web Hosting</a></li>
              <li><a href="https://billing.quantumhost.site" className="text-gray-400 hover:text-[#7C4DFF] transition-colors">VPS Hosting</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-[#7C4DFF] transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#7C4DFF] transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#7C4DFF] transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#7C4DFF] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#7C4DFF] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#7C4DFF] mt-1 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-gray-400">support@quantumhost.com</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#7C4DFF] mt-1 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.09501 3.90347 2.12788 3.62476 2.21649 3.36163C2.30511 3.09849 2.44756 2.85669 2.63476 2.65163C2.82196 2.44656 3.04981 2.28271 3.30379 2.17052C3.55778 2.05833 3.83234 2.00026 4.10999 2H7.10999C7.5953 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04208 3.23945 9.10999 3.72C9.2336 4.68007 9.47094 5.62273 9.81999 6.53C9.94454 6.88792 9.97366 7.27691 9.90393 7.65088C9.8342 8.02485 9.66842 8.36811 9.41999 8.64L8.08999 9.97C9.51355 12.4649 11.5351 14.4864 14.03 15.91L15.36 14.58C15.6319 14.3316 15.9751 14.1658 16.3491 14.0961C16.7231 14.0263 17.1121 14.0555 17.47 14.18C18.3773 14.5291 19.3199 14.7664 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-[#7C4DFF] mt-1 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-gray-400">123 Server Ave, Cloud City, CA 94043</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {currentYear} QuantumHost. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Terms</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
