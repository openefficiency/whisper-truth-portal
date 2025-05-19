
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Award, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface RewardFormProps {
  onClose: () => void;
}

type RewardFormValues = {
  amount: string;
  method: string;
  reportId: string;
  message: string;
};

const RewardForm = ({ onClose }: RewardFormProps) => {
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
    onClose();
  };

  return (
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
                onClick={onClose}
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
  );
};

export default RewardForm;
