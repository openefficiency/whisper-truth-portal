import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, MessageSquare, FileText, Home, Shield } from "lucide-react";

const VapiDashboard = () => {
  const [activeTab, setActiveTab] = useState("calls");

  return (
    <div className="min-h-screen bg-whistle-dark">
      <header className="bg-whistle-blue border-b border-gray-700 py-4">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Vapi Call Dashboard</h1>
          <div className="flex items-center space-x-4">
            <Button variant="outline" asChild className="text-gray-300">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Link>
            </Button>
            <Button variant="outline" asChild className="text-gray-300">
              <Link to="/admin-dashboard">
                <Shield className="mr-2 h-4 w-4" />
                Admin Dashboard
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="calls" className="text-lg">
              <Phone className="mr-2 h-4 w-4" /> Call Management
            </TabsTrigger>
            <TabsTrigger value="analysis" className="text-lg">
              <MessageSquare className="mr-2 h-4 w-4" /> Call Analysis
            </TabsTrigger>
            <TabsTrigger value="reports" className="text-lg">
              <FileText className="mr-2 h-4 w-4" /> Report Generation
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="calls" className="p-6 bg-whistle-blue rounded-lg border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-4">Call Management</h2>
            <p className="text-gray-300 mb-8">
              This section will include features for initiating outbound calls, 
              selecting call scripts, and monitoring call status.
            </p>
            <div className="bg-whistle-darker p-6 rounded-lg border border-gray-700">
              <p className="text-center text-gray-400">
                Call management features will be implemented in the next phase.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="analysis" className="p-6 bg-whistle-blue rounded-lg border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-4">Call Analysis</h2>
            <p className="text-gray-300 mb-8">
              This section will include call history, audio playback, transcript viewing, 
              and AI-assisted analysis tools.
            </p>
            <div className="bg-whistle-darker p-6 rounded-lg border border-gray-700">
              <p className="text-center text-gray-400">
                Call analysis features will be implemented in the next phase.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="reports" className="p-6 bg-whistle-blue rounded-lg border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-4">Report Generation</h2>
            <p className="text-gray-300 mb-8">
              This section will include forms to create new whistleblower reports from call data,
              with AI-assisted data extraction.
            </p>
            <div className="bg-whistle-darker p-6 rounded-lg border border-gray-700">
              <p className="text-center text-gray-400">
                Report generation features will be implemented in the next phase.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default VapiDashboard;
