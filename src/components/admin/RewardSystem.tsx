
import React, { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";
import RewardSearch from "./rewards/RewardSearch";
import RewardForm from "./rewards/RewardForm";
import RewardTable from "./rewards/RewardTable";
import { mockRewards } from "./rewards/mockData";

const RewardSystem = () => {
  const [showNewReward, setShowNewReward] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateSort, setDateSort] = useState<"asc" | "desc" | null>(null);

  const filteredAndSortedRewards = useMemo(() => {
    // First filter by search query
    let filtered = mockRewards.filter(reward => 
      reward.reportTitle.toLowerCase().includes(searchQuery.toLowerCase()) || 
      reward.reportId.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    // Then filter by status if not "all"
    if (statusFilter !== "all") {
      filtered = filtered.filter(reward => reward.status === statusFilter);
    }
    
    // Finally sort by date if sorting is active
    if (dateSort) {
      return [...filtered].sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateSort === "asc" ? dateA - dateB : dateB - dateA;
      });
    }
    
    return filtered;
  }, [searchQuery, statusFilter, dateSort]);

  const handleFilterByStatus = (status: string) => {
    setStatusFilter(status);
  };

  const handleSortByDate = (direction: "asc" | "desc") => {
    setDateSort(direction);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <RewardSearch 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
        />
        
        <Button 
          className="bg-whistle-accent hover:bg-whistle-green"
          onClick={() => setShowNewReward(!showNewReward)}
        >
          <Award className="mr-2 h-4 w-4" /> New Reward
        </Button>
      </div>

      {showNewReward && (
        <RewardForm onClose={() => setShowNewReward(false)} />
      )}

      <RewardTable 
        rewards={filteredAndSortedRewards} 
        onFilterByStatus={handleFilterByStatus}
        onSortByDate={handleSortByDate}
      />
    </div>
  );
};

export default RewardSystem;
