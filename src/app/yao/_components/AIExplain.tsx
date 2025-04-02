"use client";
import React from "react";
import { Hexagram } from "../_lib/types";
import ReactMarkdown from "react-markdown";
import { useAIAnalysis } from "../_hooks";

interface AiExplainProps {
  hexagramNow: Hexagram;
  hexagramFuture: Hexagram;
}

const AIExplain: React.FC<AiExplainProps> = ({
  hexagramNow,
  hexagramFuture,
}) => {
  const {
    userQuestion,
    setUserQuestion,
    completion,
    isLoading,
    handleAiExplain,
  } = useAIAnalysis(hexagramNow, hexagramFuture);

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold text-slate-800">AI解析</h2>
      <div className="space-y-4">
        <textarea
          className="h-24 w-full rounded-md border-slate-300 p-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
          placeholder="请输入您想问的问题"
          value={userQuestion}
          onChange={(e) => setUserQuestion(e.target.value)}
          disabled={isLoading}
        />
        {
          <button
            className={`w-full rounded-lg px-4 py-2 text-white transition-colors ${
              isLoading
                ? "cursor-not-allowed bg-slate-400"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
            onClick={handleAiExplain}
            disabled={isLoading}
          >
            {isLoading ? "正在解析..." : "获取AI解析"}
          </button>
        }
      </div>

      {/* AI解析结果 */}
      {completion && (
        <div className="mt-6 space-y-4">
          <h3 className="text-lg font-medium text-slate-700">解析结果</h3>
          <div className="max-w-none rounded-lg bg-slate-50 p-4">
            <ReactMarkdown>{completion}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIExplain;
