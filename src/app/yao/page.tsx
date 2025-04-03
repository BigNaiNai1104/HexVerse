"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useHexagram } from "./_hooks";
import { AutoDivination, Explain, ManualDivination } from "./_components";

export default function DivinationPage() {
  const {
    hexagramNow,
    hexagramFuture,
    results,
    isAnimating,
    showPreparation,
    manualValues,
    handleAutoThrow,
    handleSelectChange,
    handleManualGenerate,
    resetDivination,
  } = useHexagram();

  const shouldShowReset =
    hexagramNow || results.length > 0 || manualValues.some((v) => v);

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
      </div>

      {/* 页面内容 */}
      <div className="relative container mx-auto max-w-5xl space-y-8 py-8">
        {/* 标题区域 */}
        <div className="space-y-4 pt-4 text-center">
          <h1 className="text-5xl font-bold tracking-tight">
            <span className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-transparent">
              六爻
            </span>
            <span>起卦</span>
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            源自《周易》的占卜方法，通过六爻卦象演变，推测事物发展趋势
          </p>
        </div>

        {/* 主要内容区 - 选项卡 */}
        <Card className="bg-card/95 border-border relative overflow-hidden shadow-md backdrop-blur-sm">
          <CardHeader>
            <CardTitle>选择起卦方式</CardTitle>
            <CardDescription>
              根据您的喜好选择手动投掷或自动起卦
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="auto" className="w-full">
              <TabsList className="mb-6 grid w-full grid-cols-2">
                <TabsTrigger value="auto">赛博起卦</TabsTrigger>
                <TabsTrigger value="manual">手动起卦</TabsTrigger>
              </TabsList>

              {/* 赛博起卦内容 */}
              <TabsContent value="auto" className="focus-visible:outline-none">
                <AutoDivination
                  isAnimating={isAnimating}
                  showPreparation={showPreparation}
                  results={results}
                  onThrow={handleAutoThrow}
                />
              </TabsContent>

              {/* 手动起卦内容 */}
              <TabsContent
                value="manual"
                className="focus-visible:outline-none"
              >
                <ManualDivination
                  manualValues={manualValues}
                  onSelectChange={handleSelectChange}
                  onGenerate={handleManualGenerate}
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* 重置按钮 */}
        {shouldShowReset && (
          <div className="flex justify-center">
            <Button
              variant="outline"
              onClick={resetDivination}
              className="border-primary/30 hover:bg-primary/10"
            >
              重新起卦
            </Button>
          </div>
        )}

        {/* 卦辞显示区域 */}
        <Explain hexagramNow={hexagramNow} hexagramFuture={hexagramFuture} />
      </div>
    </main>
  );
}
