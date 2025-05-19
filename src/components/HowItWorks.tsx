
import { Lock, Shield, FileText } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Shield className="h-12 w-12 text-whistle-accent" />,
      title: "Access Securely",
      description: "Visit our platform using a secure browser. We recommend using Tor for maximum privacy protection."
    },
    {
      icon: <FileText className="h-12 w-12 text-whistle-accent" />,
      title: "Submit Information",
      description: "Upload documents and provide details about the wrongdoing. Our system automatically scrubs metadata."
    },
    {
      icon: <Lock className="h-12 w-12 text-whistle-accent" />,
      title: "Stay Anonymous",
      description: "Receive a secure access code to check on your submission status without revealing your identity."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-whistle-dark">
      <div className="container mx-auto px-6 md:px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our secure three-step process ensures your identity remains protected while giving you the power to expose wrongdoing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-whistle-blue rounded-lg p-8 border border-gray-700 shadow-lg hover:border-whistle-accent transition-colors"
            >
              <div className="flex justify-center mb-6">{step.icon}</div>
              <h3 className="text-xl font-bold text-white text-center mb-4">{step.title}</h3>
              <p className="text-gray-300 text-center">{step.description}</p>
              <div className="mt-6 flex justify-center">
                <span className="bg-whistle-darker text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">
                  {index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
