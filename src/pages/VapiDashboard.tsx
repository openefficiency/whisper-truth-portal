
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, MessageSquare, FileText, Home, Shield } from "lucide-react";
import CallManagement from "@/components/vapi/CallManagement";
import CallAnalysis from "@/components/vapi/CallAnalysis";
import ReportGeneration from "@/components/vapi/ReportGeneration";

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
          
          <TabsContent value="calls">
            <CallManagement />
          </TabsContent>
          
          <TabsContent value="analysis">
            <CallAnalysis />
          </TabsContent>
          
          <TabsContent value="reports">
            <ReportGeneration />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default VapiDashboard;
