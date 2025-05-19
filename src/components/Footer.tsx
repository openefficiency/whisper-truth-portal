
import { Shield } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-whistle-darker text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-whistle-accent" />
              <span className="font-bold text-xl text-white">WhistleShield</span>
            </div>
            <p className="mb-4">
              A secure platform for whistleblowers to report wrongdoing while maintaining complete anonymity and protection.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-white text-lg mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-whistle-accent transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-whistle-accent transition-colors">Security Features</a></li>
              <li><a href="#" className="hover:text-whistle-accent transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-whistle-accent transition-colors">Submit a Report</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-white text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-whistle-accent transition-colors">Whistleblower Rights</a></li>
              <li><a href="#" className="hover:text-whistle-accent transition-colors">Legal Protection</a></li>
              <li><a href="#" className="hover:text-whistle-accent transition-colors">Security Guides</a></li>
              <li><a href="#" className="hover:text-whistle-accent transition-colors">Secure Communication</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-white text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-whistle-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-whistle-accent transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-whistle-accent transition-colors">Ethics</a></li>
              <li><a href="#" className="hover:text-whistle-accent transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {currentYear} WhistleShield. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-whistle-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-whistle-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-whistle-accent transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
