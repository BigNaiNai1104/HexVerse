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
        出生时间：${birthTime}
        性别：${gender}
        出生地：${birthPlace}
      `;

      // 调用 complete 函数
      await complete(prompt);
    } catch (err) {
      console.error("获取解析结果时出错：", err);
    }
  };

  return (
    <div className="container mx-auto grid items-center justify-center gap-8 md:grid-cols-2">
      <BirthForm onSubmit={handleFormSubmit} isLoading={isLoading} />
      <FortuneAnalysis result={completion} />
    </div>
  );
}
