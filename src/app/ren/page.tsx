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
    <main className="relative min-h-screen overflow-hidden">
      {/* 全局背景元素 */}
      <div className="bg-background fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(0,72%,65%,5%),hsl(24,62%,73%,3%),transparent_70%)] opacity-70"></div>
        <div className="absolute h-full w-full bg-[linear-gradient(180deg,transparent,var(--background)_95%)] opacity-40"></div>
      </div>

      {/* 装饰元素 */}
      <div className="fixed top-0 right-0 left-0 -z-10 h-full">
        <div className="animate-spin-slow border-primary/5 absolute top-[10%] -left-[30%] h-[60rem] w-[60rem] rounded-full border opacity-30"></div>
        <div
          className="animate-spin-slow border-primary/5 absolute top-[30%] -right-[40%] h-[80rem] w-[80rem] rounded-full border opacity-20"
          style={{ animationDirection: "reverse", animationDuration: "40s" }}
        ></div>
        <div
          className="animate-spin-slow border-primary/10 absolute bottom-[20%] left-[20%] h-[30rem] w-[30rem] rounded-full border-2 opacity-30"
          style={{ animationDuration: "25s" }}
        ></div>
      </div>

      {/* 页面内容 */}
      <div className="relative container mx-auto max-w-7xl space-y-8 py-8">
        {/* 标题区域 */}
        <div className="space-y-4 pt-4 text-center">
          <h1 className="text-5xl font-bold tracking-tight">
            <span className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-transparent">
              小六壬
            </span>
            <span>占卜</span>
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            简便易行的占筮方法，适用于日常事务与紧急决策的指引
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* 左侧占卜部分 */}
          <Card className="bg-card/95 border-border shadow-md backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                选择起卦方式
              </CardTitle>
              <CardDescription>
                选择适合您的起卦方式，立即获得卦象结果
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

                  <div className="mt-6 flex justify-center">
                    <Button
                      variant="outline"
                      onClick={handleReset}
                      className="border-primary/30 hover:bg-primary/10"
                    >
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
    </main>
  );
}
