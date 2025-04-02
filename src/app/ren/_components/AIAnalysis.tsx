import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { DivinationResult } from "../_lib/types";

interface AIAnalysisProps {
  result: DivinationResult;
  userQuestion: string;
  setUserQuestion: (question: string) => void;
  completion: string;
  isLoading: boolean;
  sendMsg: (result: DivinationResult) => Promise<void>;
}

export function AIAnalysis({
  result,
  userQuestion,
  setUserQuestion,
  completion,
  isLoading,
  sendMsg,
}: AIAnalysisProps) {
  return (
    <div className="bg-muted/30 rounded-lg p-4">
      <h3 className="mb-2 text-lg font-semibold">AI分析卦象</h3>
      <div className="space-y-3">
        <Input
          placeholder="输入你刚才想的的问题"
          value={userQuestion}
          onChange={(e) => setUserQuestion(e.target.value)}
          className="mb-3"
        />

        {!completion ? (
          <Button
            onClick={() => sendMsg(result)}
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? "分析中..." : "分析卦象"}
          </Button>
        ) : (
          <Alert>
            <AlertTitle className="flex items-center">AI解析结果</AlertTitle>
            <AlertDescription>{completion}</AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );
}
