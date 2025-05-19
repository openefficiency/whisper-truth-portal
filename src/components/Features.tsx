
import { Shield, ShieldAlert, ShieldCheck, Lock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-whistle-accent" />,
      title: "Complete Anonymity",
      description: "Our platform never collects IP addresses, browser fingerprints, or any identifying information."
    },
    {
      icon: <Lock className="h-10 w-10 text-whistle-accent" />,
      title: "Encrypted Communication",
      description: "All submissions and communications are protected with end-to-end encryption."
    },
    {
      icon: <Shield className="h-10 w-10 text-whistle-accent" />,
      title: "Legal Protection",
      description: "Access resources on whistleblower laws and rights in different jurisdictions."
    },
    {
      icon: <ShieldAlert className="h-10 w-10 text-whistle-accent" />,
      title: "Secure Document Handling",
      description: "Automatic scrubbing of metadata from all uploaded files to prevent tracing."
    }
  ];

  return (
    <section id="features" className="py-20 bg-whistle-blue">
      <div className="container mx-auto px-6 md:px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Security Features</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We employ state-of-the-art security measures to safeguard whistleblowers and their critical information.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-whistle-dark rounded-lg p-6 border border-gray-700 hover:border-whistle-accent transition-colors"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-whistle-darker rounded-lg border border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-white mb-3">Secure Technology Stack</h3>
              <p className="text-gray-300">
                Our platform is built on security-focused technologies, regularly audited by independent security researchers.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-whistle-dark rounded px-4 py-2 text-gray-300">End-to-end encryption</div>
              <div className="bg-whistle-dark rounded px-4 py-2 text-gray-300">Secure drop technology</div>
              <div className="bg-whistle-dark rounded px-4 py-2 text-gray-300">Tor network integration</div>
              <div className="bg-whistle-dark rounded px-4 py-2 text-gray-300">Zero-knowledge proofs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
