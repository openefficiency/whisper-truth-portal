
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, FileText, Check, X, Clock } from "lucide-react";

const mockReports = [
  {
    id: "rep-001",
    title: "Accounting Irregularities Report",
    category: "Financial",
    priority: "High",
    status: "New",
    submittedOn: "2025-05-19",
    assignedTo: null
  },
  {
    id: "rep-002",
    title: "Workplace Harassment Complaint",
    category: "Harassment",
    priority: "Critical",
    status: "Under Investigation",
    submittedOn: "2025-05-15",
    assignedTo: "John Doe"
  },
  {
    id: "rep-003",
    title: "Safety Violations in Warehouse",
    category: "Safety",
    priority: "Medium",
    status: "Resolved",
    submittedOn: "2025-05-10",
    assignedTo: "Jane Smith"
  }
];

const ReportManagement = () => {
  const [selectedReport, setSelectedReport] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelectReport = (reportId: string) => {
    setSelectedReport(reportId === selectedReport ? null : reportId);
  };

  const filteredReports = mockReports.filter(report => 
    report.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    report.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "New": return "bg-blue-900/30 text-blue-300 hover:bg-blue-900/40";
      case "Under Investigation": return "bg-yellow-900/30 text-yellow-300 hover:bg-yellow-900/40";
      case "Resolved": return "bg-green-900/30 text-green-300 hover:bg-green-900/40";
      default: return "bg-gray-900/30 text-gray-300 hover:bg-gray-900/40";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Low": return "bg-gray-900/30 text-gray-300 hover:bg-gray-900/40";
      case "Medium": return "bg-blue-900/30 text-blue-300 hover:bg-blue-900/40";
      case "High": return "bg-yellow-900/30 text-yellow-300 hover:bg-yellow-900/40";
      case "Critical": return "bg-red-900/30 text-red-300 hover:bg-red-900/40";
      default: return "bg-gray-900/30 text-gray-300 hover:bg-gray-900/40";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search reports by title or category..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            Filter
          </Button>
          <Button className="bg-whistle-accent hover:bg-whistle-green">
            <FileText className="mr-2 h-4 w-4" /> New Report
          </Button>
        </div>
      </div>

      <div className="bg-whistle-blue rounded-lg border border-gray-700">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left p-4">Title</th>
                <th className="text-left p-4">Category</th>
                <th className="text-left p-4">Priority</th>
                <th className="text-left p-4">Status</th>
                <th className="text-left p-4">Submitted On</th>
                <th className="text-left p-4">Assigned To</th>
              </tr>
            </thead>
            <tbody>
              {filteredReports.map((report) => (
                <React.Fragment key={report.id}>
                  <tr 
                    className={`border-b border-gray-700 hover:bg-whistle-darker cursor-pointer ${selectedReport === report.id ? 'bg-whistle-darker' : ''}`}
                    onClick={() => handleSelectReport(report.id)}
                  >
                    <td className="p-4 font-medium">{report.title}</td>
                    <td className="p-4">{report.category}</td>
                    <td className="p-4">
                      <Badge variant="outline" className={getPriorityColor(report.priority)}>
                        {report.priority}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <Badge variant="outline" className={getStatusColor(report.status)}>
                        {report.status === "New" && <Clock className="mr-1 h-3 w-3" />}
                        {report.status === "Under Investigation" && <Search className="mr-1 h-3 w-3" />}
                        {report.status === "Resolved" && <Check className="mr-1 h-3 w-3" />}
                        {report.status}
                      </Badge>
                    </td>
                    <td className="p-4">{report.submittedOn}</td>
                    <td className="p-4">{report.assignedTo || "Unassigned"}</td>
                  </tr>
                  {selectedReport === report.id && (
                    <tr>
                      <td colSpan={6} className="bg-whistle-darker p-6">
                        <div className="space-y-6">
                          <div className="flex justify-between">
                            <h3 className="text-lg font-medium">{report.title}</h3>
                            <div className="space-x-2">
                              <Button size="sm" variant="outline">
                                <Clock className="mr-1 h-4 w-4" /> Status
                              </Button>
                              <Button size="sm" variant="outline">
                                Assign
                              </Button>
                              <Button size="sm" className="bg-whistle-accent hover:bg-whistle-green">
                                View Full Report
                              </Button>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="text-sm font-medium text-gray-400 mb-2">Description</h4>
                              <p className="bg-whistle-dark p-4 rounded-md">
                                Reporter has observed irregular accounting practices involving miscategorized transactions. These were first noticed in January during quarterly report review. When concerns were raised to management, they were instructed to ignore the issue.
                              </p>
                            </div>
                            
                            <div>
                              <h4 className="text-sm font-medium text-gray-400 mb-2">Evidence</h4>
                              <p className="bg-whistle-dark p-4 rounded-md">
                                Call recording from 2025-05-19 14:32 contains details about specific transactions and dates. Reporter mentioned they have screenshots of the accounting system showing the problematic entries.
                              </p>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-medium text-gray-400 mb-2">Initial Assessment</h4>
                            <p className="bg-whistle-dark p-4 rounded-md">
                              This report involves potential financial misreporting that requires investigation by the internal audit team. Recommend scheduling a follow-up call with the whistleblower to gather more specific transaction details.
                            </p>
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

export default ReportManagement;
