
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-whistle-dark to-whistle-darker">
      <div className="container mx-auto px-6 md:px-8 lg:px-16">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Your courage can drive positive change. Our platform ensures your identity remains protected while giving you the power to expose wrongdoing.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <Button className="bg-whistle-accent hover:bg-whistle-green text-white px-8 py-6 text-lg transition-colors">
              Submit a Report
            </Button>
            <Button variant="outline" className="border-gray-500 text-gray-300 hover:bg-gray-800 px-8 py-6 text-lg">
              Learn About Your Rights
            </Button>
          </div>
          <div className="mt-12 p-6 bg-whistle-blue rounded-lg border border-gray-700 max-w-3xl">
            <p className="text-white text-lg font-medium mb-2">Emergency Protection</p>
            <p className="text-gray-300">
              If you believe you're in immediate danger due to whistleblowing activities, 
              please contact our emergency response team through our secure hotline available 24/7.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
