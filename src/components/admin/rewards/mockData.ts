
export interface RewardItem {
  id: string;
  reportId: string;
  reportTitle: string;
  amount: string;
  status: string;
  date: string;
}

export const mockRewards: RewardItem[] = [
  {
    id: "rwd-001",
    reportId: "rep-003",
    reportTitle: "Safety Violations in Warehouse",
    amount: "$5,000",
    status: "Pending",
    date: "2025-05-18"
  },
  {
    id: "rwd-002",
    reportId: "rep-001",
    reportTitle: "Unauthorized Data Access",
    amount: "$2,500",
    status: "Issued",
    date: "2025-05-15"
  },
  {
    id: "rwd-003",
    reportId: "rep-002",
    reportTitle: "Environmental Regulation Violations",
    amount: "$10,000",
    status: "Paid",
    date: "2025-05-10"
  }
];
