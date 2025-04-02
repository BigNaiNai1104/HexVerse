import React from "react";

interface HexagramProps {
  code: string; // 三位或六位二进制数字字符串
}

const Hexagram: React.FC<HexagramProps> = ({ code }) => {
  // 验证输入
  if (!/^[01]{3}$|^[01]{6}$/.test(code)) {
    return <div>请输入3位或6位的0/1数字</div>;
  }

  // SVG 配置
  const width = 100;
  const height = code.length === 3 ? 30 : 60;
  const lineWidth = 50;
  const lineGap = 8;
  const yinGap = 8;
  const strokeWidth = 3;

  // 绘制单爻
  const renderYao = (isYang: boolean, index: number) => {
    const y = height - (index + 1) * lineGap;

    if (isYang) {
      // 阳爻：实线
      return (
        <line
          key={`yao-${index}`}
          x1={(width - lineWidth) / 2}
          y1={y}
          x2={(width + lineWidth) / 2}
          y2={y}
          stroke="black"
          strokeWidth={strokeWidth}
        />
      );
    } else {
      // 阴爻：断线
      return (
        <g key={`yao-${index}`}>
          <line
            x1={(width - lineWidth) / 2}
            y1={y}
            x2={(width - yinGap) / 2}
            y2={y}
            stroke="black"
            strokeWidth={strokeWidth}
          />
          <line
            x1={(width + yinGap) / 2}
            y1={y}
            x2={(width + lineWidth) / 2}
            y2={y}
            stroke="black"
            strokeWidth={strokeWidth}
          />
        </g>
      );
    }
  };

  return (
    <svg width={width} height={height}>
      {code.split("").map((digit, index) => renderYao(digit === "1", index))}
    </svg>
  );
};

export default Hexagram;
