
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CheckSquare, Clock, Plus, User, MessageSquare } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Investigation = () => {
  const handleAddNote = () => {
    toast.success("Investigation note added successfully");
  };

  const handleMarkComplete = () => {
    toast.success("Task marked as complete");
  };

  return (
    <div className="space-y-8">
      <div className="bg-whistle-blue p-6 rounded-lg border border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-lg font-medium">Accounting Irregularities Investigation</h3>
            <p className="text-sm text-gray-400">Case #INV-2025-053</p>
          </div>
          <Badge variant="outline" className="bg-yellow-900/30 text-yellow-300">In Progress</Badge>
        </div>
        
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-medium">Investigation Timeline</h4>
              <div className="text-xs text-gray-400">Started on May 19, 2025</div>
            </div>
            
            <div className="relative border-l border-gray-700 pl-6 space-y-6 ml-2">
              <div>
                <div className="absolute w-3 h-3 bg-whistle-accent rounded-full -left-[7px]"></div>
                <p className="text-xs text-gray-400">May 19, 2025 - 15:45</p>
                <p className="font-medium">Investigation Opened</p>
                <p className="text-sm text-gray-300">Case created based on whistleblower report.</p>
              </div>
              
              <div>
                <div className="absolute w-3 h-3 bg-whistle-accent rounded-full -left-[7px]"></div>
                <p className="text-xs text-gray-400">May 19, 2025 - 16:30</p>
                <p className="font-medium">First Assessment</p>
                <p className="text-sm text-gray-300">Initial review suggests potential violation of accounting policies. Will need to interview finance team members.</p>
              </div>
              
              <div>
                <div className="absolute w-3 h-3 bg-whistle-accent rounded-full -left-[7px]"></div>
                <p className="text-xs text-gray-400">May 20, 2025 - 09:15</p>
                <p className="font-medium">Document Request</p>
                <p className="text-sm text-gray-300">Requested Q1 accounting records from Finance department for review.</p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-sm font-medium">Add Investigation Note</h4>
            </div>
            <div className="flex gap-2">
              <Textarea placeholder="Add your investigation notes here..." className="flex-1" />
              <Button 
                onClick={handleAddNote} 
                className="bg-whistle-accent hover:bg-whistle-green self-start"
              >
                <Plus className="h-4 w-4 mr-1" /> Add Note
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-whistle-blue p-6 rounded-lg border border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium">Investigation Tasks</h3>
          <Button className="bg-whistle-accent hover:bg-whistle-green">
            <Plus className="h-4 w-4 mr-1" /> New Task
          </Button>
        </div>
        
        <div className="space-y-4">
          <div className="bg-whistle-darker p-4 rounded-lg border border-gray-700 flex justify-between items-center">
            <div>
              <p className="font-medium">Request accounting records</p>
              <div className="flex items-center text-xs text-gray-400 mt-1">
                <Clock className="h-3 w-3 mr-1" /> Due: May 22, 2025
                <span className="mx-2">•</span>
                <User className="h-3 w-3 mr-1" /> Assigned to: John Doe
              </div>
            </div>
            <Button variant="outline" size="sm" onClick={handleMarkComplete}>
              <CheckSquare className="h-4 w-4 mr-1" /> Mark Complete
            </Button>
          </div>
          
          <div className="bg-whistle-darker p-4 rounded-lg border border-gray-700 flex justify-between items-center">
            <div>
              <p className="font-medium">Interview finance department head</p>
              <div className="flex items-center text-xs text-gray-400 mt-1">
                <Clock className="h-3 w-3 mr-1" /> Due: May 25, 2025
                <span className="mx-2">•</span>
                <User className="h-3 w-3 mr-1" /> Assigned to: Jane Smith
              </div>
            </div>
            <Button variant="outline" size="sm" onClick={handleMarkComplete}>
              <CheckSquare className="h-4 w-4 mr-1" /> Mark Complete
            </Button>
          </div>
          
          <div className="bg-whistle-darker p-4 rounded-lg border border-gray-700 flex justify-between items-center">
            <div>
              <p className="font-medium">Schedule follow-up call with whistleblower</p>
              <div className="flex items-center text-xs text-gray-400 mt-1">
                <Clock className="h-3 w-3 mr-1" /> Due: May 23, 2025
                <span className="mx-2">•</span>
                <User className="h-3 w-3 mr-1" /> Assigned to: John Doe
              </div>
            </div>
            <Button variant="outline" size="sm">
              <MessageSquare className="h-4 w-4 mr-1" /> Schedule Call
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investigation;
