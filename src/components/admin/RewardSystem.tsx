
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";
import RewardSearch from "./rewards/RewardSearch";
import RewardForm from "./rewards/RewardForm";
import RewardTable from "./rewards/RewardTable";
import { mockRewards } from "./rewards/mockData";

const RewardSystem = () => {
  const [showNewReward, setShowNewReward] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRewards = mockRewards.filter(reward => 
    reward.reportTitle.toLowerCase().includes(searchQuery.toLowerCase()) || 
    reward.reportId.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

      <RewardTable rewards={filteredRewards} />
    </div>
  );
};

export default RewardSystem;
