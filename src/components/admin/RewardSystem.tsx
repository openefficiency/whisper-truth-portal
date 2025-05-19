
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Award, Check, X, Search, Phone, Mail, Clock } from "lucide-react";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

type RewardFormValues = {
  amount: string;
  method: string;
  reportId: string;
  message: string;
};

const mockRewards = [
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

const RewardSystem = () => {
  const [showNewReward, setShowNewReward] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const form = useForm<RewardFormValues>({
    defaultValues: {
      amount: "",
      method: "Bank Transfer",
      reportId: "rep-001",
      message: "Thank you for your valuable information which helped us address significant issues in our organization."
    },
  });

  const handleSubmit = (data: RewardFormValues) => {
    console.log("Reward data:", data);
    toast.success("Reward successfully created");
    setShowNewReward(false);
  };

  const filteredRewards = mockRewards.filter(reward => 
    reward.reportTitle.toLowerCase().includes(searchQuery.toLowerCase()) || 
    reward.reportId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending": return "bg-yellow-900/30 text-yellow-300 hover:bg-yellow-900/40";
      case "Issued": return "bg-blue-900/30 text-blue-300 hover:bg-blue-900/40";
      case "Paid": return "bg-green-900/30 text-green-300 hover:bg-green-900/40";
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
            placeholder="Search rewards by report ID or title..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button 
          className="bg-whistle-accent hover:bg-whistle-green"
          onClick={() => setShowNewReward(!showNewReward)}
        >
          <Award className="mr-2 h-4 w-4" /> New Reward
        </Button>
      </div>

      {showNewReward && (
        <div className="bg-whistle-blue p-6 rounded-lg border border-gray-700 mb-6">
          <h3 className="text-lg font-medium mb-4">Create New Reward</h3>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="reportId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Related Report</FormLabel>
                      <FormControl>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-between">
                              {field.value} <span>▼</span>
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-full p-0">
                            <div className="grid divide-y divide-gray-700">
                              {["rep-001", "rep-002", "rep-003"].map((id) => (
                                <Button 
                                  key={id} 
                                  variant="ghost" 
                                  className="justify-start rounded-none h-9"
                                  onClick={() => form.setValue("reportId", id)}
                                >
                                  {id}
                                </Button>
                              ))}
                            </div>
                          </PopoverContent>
                        </Popover>
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Reward Amount</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. $5,000" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="method"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Payment Method</FormLabel>
                      <FormControl>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-between">
                              {field.value} <span>▼</span>
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-full p-0">
                            <div className="grid divide-y divide-gray-700">
                              {["Bank Transfer", "Digital Wallet", "Check", "Gift Card"].map((method) => (
                                <Button 
                                  key={method} 
                                  variant="ghost" 
                                  className="justify-start rounded-none h-9"
                                  onClick={() => form.setValue("method", method)}
                                >
                                  {method}
                                </Button>
                              ))}
                            </div>
                          </PopoverContent>
                        </Popover>
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Message to Whistleblower</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="flex justify-between pt-2">
                <div className="space-x-2">
                  <Button type="button" variant="outline" size="sm">
                    <Phone className="h-4 w-4 mr-1" /> Notify by Call
                  </Button>
                  <Button type="button" variant="outline" size="sm">
                    <Mail className="h-4 w-4 mr-1" /> Notify by Email
                  </Button>
                </div>
                
                <div className="space-x-2">
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => setShowNewReward(false)}
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit"
                    className="bg-whistle-accent hover:bg-whistle-green"
                  >
                    <Award className="h-4 w-4 mr-1" /> Create Reward
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </div>
      )}

      <div className="bg-whistle-blue rounded-lg border border-gray-700">
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
              {filteredRewards.map((reward) => (
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RewardSystem;
