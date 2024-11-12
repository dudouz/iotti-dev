import { useState } from "react";
import { cn } from "@/lib/utils";

import { CalendarIcon, MoveRight } from "lucide-react";

import { Label } from "../primitives/label";
import { Button } from "../primitives/button";
import { Popover, PopoverContent, PopoverTrigger } from "../primitives/popover";
import { Calendar } from "../primitives/calendar";
import { Input } from "../primitives/input";
import { format } from "date-fns";

export const ContactForm = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div className="justify-center flex items-center">
      <div className="rounded-md max-w-sm flex flex-col border p-8 gap-4">
        <p>Book a meeting</p>
        <div className="grid w-full max-w-sm items-center gap-1">
          <Label htmlFor="picture">Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full max-w-sm justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1">
          <Label htmlFor="firstname">First name</Label>
          <Input id="firstname" type="text" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1">
          <Label htmlFor="lastname">Last name</Label>
          <Input id="lastname" type="text" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1">
          <Label htmlFor="picture">Upload resume</Label>
          <Input id="picture" type="file" />
        </div>

        <Button className="gap-4 w-full">
          Book the meeting <MoveRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
