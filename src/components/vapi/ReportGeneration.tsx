
import React from "react";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { FileText, Send } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

type ReportFormValues = {
  title: string;
  category: string;
  priority: string;
  phone: string;
  department: string;
  description: string;
  evidence: string;
  recommendations: string;
};

const ReportGeneration = () => {
  const form = useForm<ReportFormValues>({
    defaultValues: {
      title: "Accounting Irregularities Report",
      category: "Financial",
      priority: "High",
      phone: "+1 (555) 123-4567",
      department: "Finance",
      description: "Reporter has observed irregular accounting practices involving miscategorized transactions.",
      evidence: "Call recording from 2025-05-19 14:32 contains details about specific transactions and dates.",
      recommendations: "",
    },
  });

  const handleSubmit = (data: ReportFormValues) => {
    console.log("Report data:", data);
    toast.success("Report successfully submitted to Admin Dashboard");
  };

  return (
    <div className="space-y-6">
      <div className="bg-whistle-blue p-6 rounded-lg border border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <FileText className="mr-2 text-whistle-accent" />
            <h3 className="text-lg font-medium">New Whistleblower Report</h3>
          </div>
          
          <HoverCard>
            <HoverCardTrigger asChild>
              <Badge variant="outline" className="bg-blue-900/30 text-blue-300 hover:bg-blue-900/40 cursor-help">
                AI-Assisted
              </Badge>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <p className="text-sm">
                This form has been pre-filled using AI analysis of the selected call transcript. You can edit any field before submission.
              </p>
            </HoverCardContent>
          </HoverCard>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Report Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter a descriptive title" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Reporter Phone</FormLabel>
                    <FormControl>
                      <Input disabled {...field} />
                    </FormControl>
                    <FormDescription>From call record</FormDescription>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-between">
                            {field.value} <span>▼</span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-full p-0">
                          <div className="grid divide-y divide-gray-700">
                            {["Financial", "Harassment", "Safety", "Theft", "Ethics", "Other"].map((cat) => (
                              <Button 
                                key={cat} 
                                variant="ghost" 
                                className="justify-start rounded-none h-9"
                                onClick={() => form.setValue("category", cat)}
                              >
                                {cat}
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
                name="priority"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Priority</FormLabel>
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-between">
                            {field.value} <span>▼</span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-full p-0">
                          <div className="grid divide-y divide-gray-700">
                            {["Low", "Medium", "High", "Critical"].map((pri) => (
                              <Button 
                                key={pri} 
                                variant="ghost" 
                                className="justify-start rounded-none h-9"
                                onClick={() => form.setValue("priority", pri)}
                              >
                                {pri}
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
                name="department"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Department</FormLabel>
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-between">
                            {field.value} <span>▼</span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-full p-0">
                          <div className="grid divide-y divide-gray-700">
                            {["Finance", "HR", "Operations", "IT", "Sales", "Executive", "Other"].map((dep) => (
                              <Button 
                                key={dep} 
                                variant="ghost" 
                                className="justify-start rounded-none h-9"
                                onClick={() => form.setValue("department", dep)}
                              >
                                {dep}
                              </Button>
                            ))}
                          </div>
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea className="min-h-32" placeholder="Provide a detailed description of the issue" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="evidence"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Evidence</FormLabel>
                  <FormControl>
                    <Textarea placeholder="List any evidence mentioned in the call" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="recommendations"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Recommendations</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Provide any recommendations for addressing this issue" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <div className="flex justify-end space-x-2 pt-2">
              <Button variant="outline" type="button">
                Save Draft
              </Button>
              <Button className="bg-whistle-accent hover:bg-whistle-green" type="submit">
                <Send className="mr-2 h-4 w-4" /> Submit Report
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ReportGeneration;
