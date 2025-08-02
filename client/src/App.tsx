import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import MinecraftPlans from './pages/MinecraftPlans'; // Added import for MinecraftPlans

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/minecraft-plans" component={MinecraftPlans} /> {/* Added route for Minecraft plans */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    // Animate elements on scroll
    const animateElements = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll:not(.animated)');

      animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animated');
        }
      });
    }

    // Initial check
    animateElements();

    // Add scroll listener
    window.addEventListener('scroll', animateElements);

    return () => {
      window.removeEventListener('scroll', animateElements);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Navbar />
        <Router />
        <Footer />
        <BackToTop />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;