"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function SimpleForm() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState(null);
  return (
    <div className="flex flex-col justify-center w-full h-full border-2 border-red-700 py-5">
      <div className="flex justify-center gap-4 mb-4">
        <div className="flex flex-col gap-3">
          <Label htmlFor="date-picker" className="px-1">
            Date
          </Label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                id="date-picker"
                className="w-32 justify-between font-normal"
              >
                {date ? date.toLocaleDateString() : "Select date"}
                <ChevronDownIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden p-0"
              align="start"
            >
              <Calendar
                mode="single"
                selected={date}
                captionLayout="dropdown"
                onSelect={(date) => {
                  setDate(date);
                  setOpen(false);
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="time-picker" className="px-1">
            Time
          </Label>
          <Input
            type="time"
            id="time-picker"
            step="1"
            defaultValue="10:30:00"
            className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid w-full max-w-sm items-center gap-3 mb-4">
          <Label htmlFor="userName">UserName</Label>
          <Input
            type="userName"
            id="userName"
            placeholder=" Enter Your UserName"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="grid w-full max-w-sm items-center gap-3 mb-4">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Enter Your Email" />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="grid w-full max-w-sm items-center gap-3 mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder=" Enter Your Password"
          />
        </div>
      </div>

      <div className="flex justify-center my-3">
        <div className="flex items-center gap-3">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="grid w-full max-w-sm items-center gap-3 mb-4">
          <Label htmlFor="phone">Phone Number</Label>
          <Input type="number" id="phone" placeholder="Enter Your Phone" />
        </div>
      </div>
    </div>
  );
}
