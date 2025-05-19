
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Shield } from "lucide-react";

const DashboardLinks = () => {
  return (
    <section className="py-10 bg-whistle-dark">
      <div className="container mx-auto px-6 md:px-8 lg:px-16">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Access Secure Dashboards
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Our comprehensive whistleblower management system features two specialized dashboards for different aspects of case handling.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
            <div className="bg-whistle-blue rounded-lg p-6 border border-gray-700 flex flex-col items-center">
              <Phone size={40} className="text-whistle-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Vapi Call Dashboard</h3>
              <p className="text-gray-300 mb-4">
                Manage voice communications with whistleblowers, record calls, and generate reports.
              </p>
              <Button asChild className="bg-whistle-accent hover:bg-whistle-green text-white mt-auto">
                <Link to="/vapi-dashboard">Access Dashboard</Link>
              </Button>
            </div>
            <div className="bg-whistle-blue rounded-lg p-6 border border-gray-700 flex flex-col items-center">
              <Shield size={40} className="text-whistle-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Admin Dashboard</h3>
              <p className="text-gray-300 mb-4">
                Investigate reports, track cases, manage tasks, and issue rewards to whistleblowers.
              </p>
              <Button asChild className="bg-whistle-accent hover:bg-whistle-green text-white mt-auto">
                <Link to="/admin-dashboard">Access Dashboard</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardLinks;
