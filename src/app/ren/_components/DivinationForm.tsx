import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ManualNums } from "../_lib/types";

interface DivinationFormProps {
  manualNums: ManualNums;
  setManualNums: React.Dispatch<React.SetStateAction<ManualNums>>;
  setNumsByTime: () => void;
  setNumsManually: () => void;
}

export function DivinationForm({
  setManualNums,
  setNumsByTime,
  setNumsManually,
}: DivinationFormProps) {
  const handleNumChange = (field: keyof ManualNums, value: string) => {
    const parsedValue = parseInt(value) || null;
    setManualNums((prev) => ({
      ...prev,
      [field]: parsedValue,
    }));
  };

  return (
    <div className="space-y-4">
      <div className="bg-muted/50 rounded-lg p-4">
        <h3 className="mb-2 font-medium">使用当下时辰起卦</h3>
        <Button onClick={setNumsByTime} variant="default">
          时辰起卦
        </Button>
      </div>

      <div className="bg-muted/50 rounded-lg p-4">
        <h3 className="mb-2 font-medium">手动输入数字起卦</h3>
        <p className="text-muted-foreground text-sm">
          请输入三个1-99之间的数字，用于起卦。
        </p>
        <div className="mb-3 flex gap-2">
          <Input
            type="number"
            min="1"
            max="99"
            placeholder="第一个数"
            onChange={(e) => handleNumChange("num1", e.target.value)}
            className="w-24"
          />
          <Input
            type="number"
            min="1"
            max="99"
            placeholder="第二个数"
            onChange={(e) => handleNumChange("num2", e.target.value)}
            className="w-24"
          />
          <Input
            type="number"
            min="1"
            max="99"
            placeholder="第三个数"
            onChange={(e) => handleNumChange("num3", e.target.value)}
            className="w-24"
          />
        </div>
        <Button onClick={setNumsManually} variant="outline">
          手动起卦
        </Button>
      </div>
    </div>
  );
}
