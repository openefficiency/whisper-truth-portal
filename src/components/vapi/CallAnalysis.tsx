
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Play, Download, MessageSquare } from "lucide-react";

const mockCalls = [
  {
    id: "call-1",
    phoneNumber: "+1 (555) 123-4567",
    date: "2025-05-19",
    time: "14:32",
    duration: "08:45",
    status: "Completed",
    hasTranscript: true
  },
  {
    id: "call-2",
    phoneNumber: "+1 (555) 987-6543",
    date: "2025-05-18",
    time: "11:15",
    duration: "15:22",
    status: "Completed",
    hasTranscript: true
  },
  {
    id: "call-3",
    phoneNumber: "+1 (555) 456-7890",
    date: "2025-05-17",
    time: "09:45",
    duration: "04:12",
    status: "Completed",
    hasTranscript: true
  }
];

const CallAnalysis = () => {
  const [selectedCall, setSelectedCall] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelectCall = (callId: string) => {
    setSelectedCall(callId === selectedCall ? null : callId);
  };

  const filteredCalls = mockCalls.filter(call => 
    call.phoneNumber.includes(searchQuery) || 
    call.date.includes(searchQuery)
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search calls by phone or date..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline">
          Filter
        </Button>
      </div>

      <div className="bg-whistle-blue rounded-lg border border-gray-700">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left p-4">Phone Number</th>
                <th className="text-left p-4">Date</th>
                <th className="text-left p-4">Time</th>
                <th className="text-left p-4">Duration</th>
                <th className="text-left p-4">Status</th>
                <th className="text-right p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCalls.map((call) => (
                <React.Fragment key={call.id}>
                  <tr 
                    className={`border-b border-gray-700 hover:bg-whistle-darker cursor-pointer ${selectedCall === call.id ? 'bg-whistle-darker' : ''}`}
                    onClick={() => handleSelectCall(call.id)}
                  >
                    <td className="p-4">{call.phoneNumber}</td>
                    <td className="p-4">{call.date}</td>
                    <td className="p-4">{call.time}</td>
                    <td className="p-4">{call.duration}</td>
                    <td className="p-4">
                      <Badge variant="outline" className="bg-green-900/30 text-green-300 hover:bg-green-900/40">
                        {call.status}
                      </Badge>
                    </td>
                    <td className="p-4 text-right">
                      <Button variant="ghost" size="sm">
                        <Play className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                      {call.hasTranscript && (
                        <Button variant="ghost" size="sm">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                      )}
                    </td>
                  </tr>
                  {selectedCall === call.id && (
                    <tr>
                      <td colSpan={6} className="bg-whistle-darker p-4">
                        <div className="space-y-4">
                          <div className="flex justify-between">
                            <h4 className="font-medium">Call Transcript</h4>
                            <div>
                              <Button size="sm" variant="outline" className="mr-2">
                                <MessageSquare className="mr-1 h-4 w-4" /> View Full Transcript
                              </Button>
                              <Button size="sm" variant="outline" className="text-whistle-accent border-whistle-accent">
                                Create Report
                              </Button>
                            </div>
                          </div>
                          <div className="bg-whistle-dark p-4 rounded-md max-h-64 overflow-y-auto">
                            <div className="space-y-3">
                              <p><span className="text-whistle-accent font-medium">Agent:</span> Thank you for calling our whistleblower hotline. Your identity will remain confidential. How can I assist you today?</p>
                              <p><span className="text-whistle-green font-medium">Caller:</span> I'd like to report some concerning accounting practices at my company.</p>
                              <p><span className="text-whistle-accent font-medium">Agent:</span> I understand. Could you please provide more details about what you've observed?</p>
                              <p><span className="text-whistle-green font-medium">Caller:</span> Over the past few months, I've noticed several large transactions being incorrectly categorized. When I brought this up to my manager, they told me to ignore it.</p>
                              <p><span className="text-whistle-accent font-medium">Agent:</span> I appreciate you sharing this information. When did you first notice these irregularities?</p>
                              <p><span className="text-whistle-green font-medium">Caller:</span> I first noticed it in January when reviewing quarterly reports.</p>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CallAnalysis;
