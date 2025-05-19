
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-b from-whistle-darker to-whistle-dark text-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Speak Truth<span className="text-whistle-accent">.</span><br />
              Stay Protected<span className="text-whistle-accent">.</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-lg">
              A secure platform for whistleblowers to report wrongdoing while maintaining complete anonymity and protection.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-whistle-accent hover:bg-whistle-green text-white px-8 py-6 text-lg transition-colors">
                Make a Report
              </Button>
              <Button variant="outline" className="border-gray-500 text-gray-300 hover:bg-gray-800 px-8 py-6 text-lg">
                Learn How it Works
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-whistle-blue p-8 rounded-lg border border-gray-700 shadow-xl max-w-md">
              <div className="flex items-center mb-6">
                <ShieldCheck className="h-10 w-10 text-whistle-accent mr-4" />
                <h3 className="text-2xl font-bold">Secure Reporting</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-whistle-accent rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>End-to-end encryption</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-whistle-accent rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>No logs of IP addresses</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-whistle-accent rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Anonymous submission system</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-whistle-accent rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Legal protection guidance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
