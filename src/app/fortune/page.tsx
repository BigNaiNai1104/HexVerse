"use client";
import React from "react";
import BirthForm from "./_components/BirthForm";
import FortuneAnalysis from "./_components/FortuneAnalysis";
import { useCompletion } from "@ai-sdk/react";

export default function FortunePage() {
  const { completion, isLoading, complete } = useCompletion({
    api: "/api/openai",
    onError: (error) => {
      console.error(error.message);
    },
  });

  const handleFormSubmit = async (formData: FormData) => {
    try {
      // 从表单数据中提取值
      const birthDate = formData.get("birthDate") as string;
      const birthTime = formData.get("birthTime") as string;
      const gender = formData.get("gender") as string;
      const birthPlace = formData.get("birthPlace") as string;

      // 构建提示词
      const prompt = `出生信息如下：
        出生日期：${birthDate}
        出生时间（北京时间）：${birthTime}
        性别：${gender}
        出生地：${birthPlace}
        
        请根据以上信息，计算出此人的生辰八字，包括年柱、月柱、日柱和时柱，分析五行强弱，纳音属性，并给出个性特点、事业、财运、姻缘等方面的详细命理分析。
        请以markdown格式输出（不要用代码块包裹），并分段落组织内容。
      `;

      // 调用 complete 函数
      await complete(prompt);
    } catch (err) {
      console.error("获取解析结果时出错：", err);
    }
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
          className="animate-spin-slow border-primary/10 absolute right-[15%] bottom-[20%] h-[40rem] w-[40rem] rotate-45 border-2 opacity-30"
          style={{ animationDuration: "25s" }}
        ></div>
      </div>

      {/* 页面内容 */}
      <div className="relative container mx-auto space-y-8 py-8">
        {/* 标题区域 */}
        <div className="space-y-4 pt-4 text-center">
          <h1 className="text-5xl font-bold tracking-tight">
            <span className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-transparent">
              命理
            </span>
            <span>分析</span>
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            通过传统八字命理学解析个人命盘，揭示先天禀赋与人生轨迹
          </p>
        </div>

        {/* 内容区域 */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
          <BirthForm onSubmit={handleFormSubmit} isLoading={isLoading} />
          <FortuneAnalysis result={completion} isLoading={isLoading} />
        </div>
      </div>
    </main>
  );
}
