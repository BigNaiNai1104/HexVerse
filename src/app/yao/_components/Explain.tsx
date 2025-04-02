"use client";
import React from "react";
import explains from "../_lib/explains.json";
import AIExplain from "./AIExplain";
import Hexagram from "./Hexagram";

interface ExplainProps {
  hexagramNow: string;
  hexagramFuture: string;
}

const Explain: React.FC<ExplainProps> = ({ hexagramNow, hexagramFuture }) => {
  // 如果没有生成卦象，显示提示信息
  if (!hexagramNow || !hexagramFuture) {
    return <></>;
  }

  // 从数据中获取卦辞
  const nowExplain = explains[hexagramNow as keyof typeof explains];
  const futureExplain = explains[hexagramFuture as keyof typeof explains];

  return (
    <>
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold text-slate-800">卦象</h2>
        <div className="space-y-6">
          {/* 本卦 */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-slate-700">
              本卦：{nowExplain?.序号}卦 {nowExplain?.卦名}{" "}
            </h3>
            {hexagramNow}
            <Hexagram code={hexagramNow} />
            <div className="space-y-2">
              <p className="text-slate-600">
                <span className="font-medium">卦辞：</span>
                {nowExplain?.卦辞}
              </p>
              <p className="text-slate-600">
                <span className="font-medium">彖辞：</span>
                {nowExplain?.彖辞}
              </p>
              <p className="text-slate-600">
                <span className="font-medium">象辞：</span>
                {nowExplain?.象辞}
              </p>
            </div>
          </div>
          <hr />

          {/* 变卦 */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-slate-700">
              变卦：{futureExplain?.序号}卦 {futureExplain?.卦名}{" "}
            </h3>
            {hexagramFuture}
            <Hexagram code={hexagramFuture} />
            <div className="space-y-2">
              <p className="text-slate-600">
                <span className="font-medium">卦辞：</span>
                {futureExplain?.卦辞}
              </p>
              <p className="text-slate-600">
                <span className="font-medium">彖辞：</span>
                {futureExplain?.彖辞}
              </p>
              <p className="text-slate-600">
                <span className="font-medium">象辞：</span>
                {futureExplain?.象辞}
              </p>
            </div>
          </div>
        </div>
      </div>
      <AIExplain hexagramNow={nowExplain} hexagramFuture={futureExplain} />
    </>
  );
};

export default Explain;
