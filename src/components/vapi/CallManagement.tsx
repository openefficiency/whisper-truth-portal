
import React, { useState } from "react";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { Phone, Play, Pause } from "lucide-react";
import { toast } from "sonner";

type CallFormValues = {
  phoneNumber: string;
  notes: string;
  script: string;
};

const CallManagement = () => {
  const [isCallActive, setIsCallActive] = useState<boolean>(false);
  const [callDuration, setCallDuration] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<number | null>(null);

  const form = useForm<CallFormValues>({
    defaultValues: {
      phoneNumber: "",
      notes: "",
      script: "Welcome to the whistleblower hotline. Your identity will remain confidential. Please describe the situation you'd like to report in detail.",
    },
  });

  const startCall = () => {
    if (!form.getValues().phoneNumber) {
      toast.error("Please enter a phone number");
      return;
    }

    setIsCallActive(true);
    toast.success(`Starting call to ${form.getValues().phoneNumber}`);
    
    // Start call duration timer
    const id = window.setInterval(() => {
      setCallDuration(prev => prev + 1);
    }, 1000);
    
    setIntervalId(id as unknown as number);
  };

  const endCall = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    
    setIsCallActive(false);
    toast.info(`Call ended - Duration: ${formatDuration(callDuration)}`);
    setCallDuration(0);
  };

  const formatDuration = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      <div className="bg-whistle-blue p-6 rounded-lg border border-gray-700">
        <h3 className="text-lg font-medium mb-4">New Call</h3>
        <Form {...form}>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="+1 (555) 123-4567"
                      disabled={isCallActive} 
                      {...field} 
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="script"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Call Script</FormLabel>
                  <FormControl>
                    <Textarea 
                      disabled={isCallActive} 
                      className="h-24"
                      {...field} 
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="flex justify-between items-center">
              {!isCallActive ? (
                <Button 
                  onClick={startCall} 
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Phone className="mr-2 h-4 w-4" /> Start Call
                </Button>
              ) : (
                <Button 
                  onClick={endCall} 
                  variant="destructive"
                >
                  <Pause className="mr-2 h-4 w-4" /> End Call
                </Button>
              )}
              
              {isCallActive && (
                <div className="bg-whistle-darker px-4 py-2 rounded-md flex items-center">
                  <div className="mr-2 h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
                  <span>Recording - {formatDuration(callDuration)}</span>
                </div>
              )}
            </div>

            {isCallActive && (
              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Call Notes</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Take notes during the call..."
                        className="h-32" 
                        {...field} 
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            )}
          </div>
        </Form>
      </div>

      <div className="bg-whistle-blue p-6 rounded-lg border border-gray-700">
        <h3 className="text-lg font-medium mb-4">Live Transcription</h3>
        <div className="bg-whistle-darker p-4 rounded-lg border border-gray-700 h-64 overflow-y-auto">
          {isCallActive ? (
            <div className="space-y-2">
              <p className="text-whistle-accent">System: Call connected</p>
              <p className="text-gray-400">Agent: {form.getValues().script}</p>
              <p className="text-gray-400">Whistleblower: <span className="animate-pulse">...</span></p>
            </div>
          ) : (
            <p className="text-gray-500 text-center">Start a call to see live transcription</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CallManagement;
