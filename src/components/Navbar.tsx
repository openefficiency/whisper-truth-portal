
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-whistle-darker text-white py-4 px-6 md:px-8 lg:px-16 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Shield className="h-6 w-6 text-whistle-accent" />
          <span className="font-bold text-xl">WhistleShield</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="hover:text-whistle-accent transition-colors">How It Works</a>
          <a href="#features" className="hover:text-whistle-accent transition-colors">Security</a>
          <a href="#faq" className="hover:text-whistle-accent transition-colors">FAQ</a>
          <Button variant="outline" className="border-whistle-accent text-whistle-accent hover:bg-whistle-accent hover:text-white">
            Report Now
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-whistle-darker border-t border-gray-700 mt-4 py-4">
          <div className="container mx-auto flex flex-col space-y-4">
            <a 
              href="#how-it-works" 
              className="px-4 py-2 hover:bg-whistle-blue rounded transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#features" 
              className="px-4 py-2 hover:bg-whistle-blue rounded transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Security
            </a>
            <a 
              href="#faq" 
              className="px-4 py-2 hover:bg-whistle-blue rounded transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <Button variant="outline" className="border-whistle-accent text-whistle-accent hover:bg-whistle-accent hover:text-white mx-4">
              Report Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
