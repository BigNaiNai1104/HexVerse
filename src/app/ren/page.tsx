"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useDivination, useAIAnalysis } from "./_hooks";
import { AIAnalysis, DivinationForm, DivinationResult } from "./_components";
import Explanation from "./_components/Explanation";

export default function RenPage() {
  const {
    result,
    manualNums,
    setManualNums,
    setNumsByTime,
    setNumsManually,
    resetDivination,
  } = useDivination();

  const {
    userQuestion,
    setUserQuestion,
    completion,
    isLoading,
    sendMsg,
    resetAIAnalysis,
  } = useAIAnalysis();

  const handleReset = () => {
    resetDivination();
    resetAIAnalysis();
  };

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-6 text-center text-3xl font-bold">小六壬</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* 左侧占卜部分 */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-xl">小六壬占卜</CardTitle>
            <CardDescription>
              小六壬是一种古老的占卜方法，用于预测信息、找寻失物、推算吉凶。
              起卦前，请心中默想所问之事。
            </CardDescription>
          </CardHeader>

          <CardContent>
            {!result ? (
              <DivinationForm
                manualNums={manualNums}
                setManualNums={setManualNums}
                setNumsByTime={setNumsByTime}
                setNumsManually={setNumsManually}
              />
            ) : (
              <div className="space-y-6">
                <DivinationResult result={result} />

                <AIAnalysis
                  result={result}
                  userQuestion={userQuestion}
                  setUserQuestion={setUserQuestion}
                  completion={completion}
                  isLoading={isLoading}
                  sendMsg={sendMsg}
                />

                <div className="mt-4 flex justify-center">
                  <Button variant="outline" onClick={handleReset}>
                    重新起卦
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* 右侧六神释义 */}
        <Explanation />
      </div>
    </div>
  );
}
