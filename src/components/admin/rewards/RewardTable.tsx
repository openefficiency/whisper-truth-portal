
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Award, Check, Clock, ArrowUp, ArrowDown, Filter } from "lucide-react";

interface RewardItem {
  id: string;
  reportId: string;
  reportTitle: string;
  amount: string;
  status: string;
  date: string;
}

interface RewardTableProps {
  rewards: RewardItem[];
  onFilterByStatus: (status: string) => void;
  onSortByDate: (direction: "asc" | "desc") => void;
}

const RewardTable = ({ rewards, onFilterByStatus, onSortByDate }: RewardTableProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending": return "bg-yellow-900/30 text-yellow-300 hover:bg-yellow-900/40";
      case "Issued": return "bg-blue-900/30 text-blue-300 hover:bg-blue-900/40";
      case "Paid": return "bg-green-900/30 text-green-300 hover:bg-green-900/40";
      default: return "bg-gray-900/30 text-gray-300 hover:bg-gray-900/40";
    }
  };

  return (
    <div className="bg-whistle-blue rounded-lg border border-gray-700">
      <div className="p-4 border-b border-gray-700 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <Filter className="mr-2 h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-300">Filter by status:</span>
          </div>
          <Select onValueChange={onFilterByStatus} defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All statuses</SelectItem>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Issued">Issued</SelectItem>
              <SelectItem value="Paid">Paid</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-300">Sort by date:</span>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => onSortByDate("asc")}
            className="px-2"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => onSortByDate("desc")}
            className="px-2"
          >
            <ArrowDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left p-4">Report ID</th>
              <th className="text-left p-4">Report Title</th>
              <th className="text-left p-4">Amount</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Date</th>
              <th className="text-right p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rewards.length > 0 ? (
              rewards.map((reward) => (
                <tr 
                  key={reward.id}
                  className="border-b border-gray-700 hover:bg-whistle-darker"
                >
                  <td className="p-4">{reward.reportId}</td>
                  <td className="p-4">{reward.reportTitle}</td>
                  <td className="p-4 font-medium">{reward.amount}</td>
                  <td className="p-4">
                    <Badge variant="outline" className={getStatusColor(reward.status)}>
                      {reward.status === "Pending" && <Clock className="mr-1 h-3 w-3" />}
                      {reward.status === "Issued" && <Award className="mr-1 h-3 w-3" />}
                      {reward.status === "Paid" && <Check className="mr-1 h-3 w-3" />}
                      {reward.status}
                    </Badge>
                  </td>
                  <td className="p-4">{reward.date}</td>
                  <td className="p-4 text-right">
                    <Button variant="outline" size="sm" className="mr-2">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="p-4 text-center text-gray-400">
                  No rewards match your filters
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RewardTable;
