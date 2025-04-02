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
import {
  AutoDivination,
  Explain,
  ManualDivination,
  PageHeader,
} from "./_components";

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
    <div className="container mx-auto max-w-5xl space-y-8 py-8">
      {/* 标题区域 */}
      <PageHeader />

      {/* 主要内容区 - 选项卡 */}
      <Card className="relative overflow-hidden">
        <CardHeader>
          <CardTitle>选择起卦方式</CardTitle>
          <CardDescription>根据您的喜好选择手动投掷或自动起卦</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="auto" className="w-full">
            <TabsList className="mb-6 grid w-full grid-cols-2">
              <TabsTrigger value="auto">赛博起卦</TabsTrigger>
              <TabsTrigger value="manual">手动起卦</TabsTrigger>
            </TabsList>

            {/* 赛博起卦内容 */}
            <TabsContent value="auto">
              <AutoDivination
                isAnimating={isAnimating}
                showPreparation={showPreparation}
                results={results}
                onThrow={handleAutoThrow}
              />
            </TabsContent>

            {/* 手动起卦内容 */}
            <TabsContent value="manual">
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
          <Button variant="outline" onClick={resetDivination}>
            重新起卦
          </Button>
        </div>
      )}

      {/* 卦辞显示区域 */}
      <Explain hexagramNow={hexagramNow} hexagramFuture={hexagramFuture} />
    </div>
  );
}
