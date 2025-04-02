"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React from "react";

const birthTimes = [
  "23~1",
  "1~3",
  "3~5",
  "5~7",
  "7~9",
  "9~11",
  "11~13",
  "13~15",
  "15~17",
  "17~19",
  "19~21",
  "21~23",
];

interface BirthFormProps {
  onSubmit: (formData: FormData) => void;
  isLoading?: boolean;
}

export default function BirthForm({
  onSubmit,
  isLoading = false,
}: BirthFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData.entries());
    console.log(formValues);
    onSubmit(formData);
  };

  return (
    <Card className="mx-auto w-96">
      <CardHeader>
        <CardTitle>请填写生辰八字</CardTitle>
        <CardDescription>123</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit} className="grid w-full items-center gap-4">
        <CardContent>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="birthDate">出生日期</Label>
            <Input
              id="birthDate"
              name="birthDate"
              required
              placeholder="出生日期"
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="birthTime">出生时间</Label>
            <Select name="birthTime" required>
              <SelectTrigger id="birthTime">
                <SelectValue placeholder="出生时间" />
              </SelectTrigger>
              <SelectContent position="popper">
                {birthTimes.map((time) => (
                  <SelectItem value={time} key={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="gender">性别</Label>
            <Select name="gender" required>
              <SelectTrigger id="gender">
                <SelectValue placeholder="性别" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="男">男</SelectItem>
                <SelectItem value="女">女</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="birthPlace">出生地</Label>
            <Input
              id="birthPlace"
              required
              name="birthPlace"
              placeholder="出生地"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "解析中..." : "提交"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
