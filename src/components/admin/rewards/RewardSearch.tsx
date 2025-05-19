
import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface RewardSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const RewardSearch = ({ searchQuery, setSearchQuery }: RewardSearchProps) => {
  return (
    <div className="relative flex-1">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
      <Input
        type="search"
        placeholder="Search rewards by report ID or title..."
        className="pl-9"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default RewardSearch;
