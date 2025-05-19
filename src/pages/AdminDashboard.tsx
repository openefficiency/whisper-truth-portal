
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, CheckSquare, Phone, Award, Home } from "lucide-react";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("reports");

  return (
    <div className="min-h-screen bg-whistle-dark">
      <header className="bg-whistle-blue border-b border-gray-700 py-4">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Admin Investigation Dashboard</h1>
          <div className="flex items-center space-x-4">
            <Button variant="outline" asChild className="text-gray-300">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Link>
            </Button>
            <Button variant="outline" asChild className="text-gray-300">
              <Link to="/vapi-dashboard">
                <Phone className="mr-2 h-4 w-4" />
                Vapi Dashboard
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="reports" className="text-lg">
              <FileText className="mr-2 h-4 w-4" /> Reports
            </TabsTrigger>
            <TabsTrigger value="investigation" className="text-lg">
              <CheckSquare className="mr-2 h-4 w-4" /> Investigation
            </TabsTrigger>
            <TabsTrigger value="calls" className="text-lg">
              <Phone className="mr-2 h-4 w-4" /> Call Integration
            </TabsTrigger>
            <TabsTrigger value="rewards" className="text-lg">
              <Award className="mr-2 h-4 w-4" /> Rewards
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="reports" className="p-6 bg-whistle-blue rounded-lg border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-4">Report Management</h2>
            <p className="text-gray-300 mb-8">
              This section will include features for viewing and managing whistleblower reports,
              with filtering, sorting, and detailed views.
            </p>
            <div className="bg-whistle-darker p-6 rounded-lg border border-gray-700">
              <p className="text-center text-gray-400">
                Report management features will be implemented in the next phase.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="investigation" className="p-6 bg-whistle-blue rounded-lg border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-4">Investigation Tools</h2>
            <p className="text-gray-300 mb-8">
              This section will include tools for tracking investigation progress,
              managing notes, assigning tasks, and monitoring completion.
            </p>
            <div className="bg-whistle-darker p-6 rounded-lg border border-gray-700">
              <p className="text-center text-gray-400">
                Investigation tools will be implemented in the next phase.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="calls" className="p-6 bg-whistle-blue rounded-lg border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-4">Call Integration</h2>
            <p className="text-gray-300 mb-8">
              This section will include features for reviewing calls associated with reports,
              initiating new calls, and adding transcripts to investigation notes.
            </p>
            <div className="bg-whistle-darker p-6 rounded-lg border border-gray-700">
              <p className="text-center text-gray-400">
                Call integration features will be implemented in the next phase.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="rewards" className="p-6 bg-whistle-blue rounded-lg border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-4">Reward System</h2>
            <p className="text-gray-300 mb-8">
              This section will include features for issuing monetary rewards for valuable reports,
              tracking reward status, and configuring notifications.
            </p>
            <div className="bg-whistle-darker p-6 rounded-lg border border-gray-700">
              <p className="text-center text-gray-400">
                Reward system features will be implemented in the next phase.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
