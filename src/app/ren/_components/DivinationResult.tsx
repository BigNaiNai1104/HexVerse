import React from "react";
import { Badge } from "@/components/ui/badge";
import { DivinationResult as DivinationResultType } from "../_lib/types";

interface DivinationResultProps {
  result: DivinationResultType;
}

export function DivinationResult({ result }: DivinationResultProps) {
  return (
    <div className="bg-muted/30 rounded-lg p-4">
      <h3 className="mb-2 text-lg font-semibold">卦象结果</h3>
      <div className="my-4 flex justify-center gap-4">
        {[result.divination1, result.divination2, result.divination3].map(
          (div, idx) => (
            <Badge
              key={idx}
              variant="outline"
              className="border-2 px-4 py-2 text-lg"
            >
              {div}
            </Badge>
          ),
        )}
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-start">
          <span className="min-w-[60px] font-medium">
            {result.divination1}:
          </span>
          <span>{result.explain1}</span>
        </div>
        <div className="flex items-start">
          <span className="min-w-[60px] font-medium">
            {result.divination2}:
          </span>
          <span>{result.explain2}</span>
        </div>
        <div className="flex items-start">
          <span className="min-w-[60px] font-medium">
            {result.divination3}:
          </span>
          <span>{result.explain3}</span>
        </div>
      </div>
    </div>
  );
}
