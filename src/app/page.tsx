import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* 全局背景元素 - 覆盖整个页面 */}
      <div className="bg-background fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(0,72%,65%,10%),hsl(24,62%,73%,5%),transparent_70%)] opacity-70"></div>
        <div className="absolute h-full w-full bg-[linear-gradient(180deg,transparent,var(--background)_95%)] opacity-40"></div>
      </div>

      {/* 装饰元素 - 贯穿整个页面 */}
      <div className="fixed top-0 right-0 left-0 -z-10 h-full">
        <div className="animate-spin-slow border-primary/5 absolute top-[10%] -left-[30%] h-[60rem] w-[60rem] rounded-full border opacity-30"></div>
        <div
          className="animate-spin-slow border-primary/5 absolute top-[30%] -right-[40%] h-[80rem] w-[80rem] rounded-full border opacity-20"
          style={{ animationDirection: "reverse", animationDuration: "40s" }}
        ></div>
        <div
          className="animate-spin-slow border-primary/10 absolute top-[60%] left-[10%] h-[40rem] w-[40rem] rotate-45 border-2 opacity-30"
          style={{ animationDuration: "25s" }}
        ></div>
      </div>

      {/* 英雄区域 */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-6 text-6xl font-bold tracking-tight md:text-7xl lg:text-8xl">
          <span className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-transparent">
            Hex
          </span>
          <span>Verse</span>
        </h1>

        <p className="text-muted-foreground mb-10 max-w-3xl text-lg md:text-xl lg:text-2xl">
          探索古老智慧，通过传统占卜方法揭示命运轨迹
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link href="/yao">
            <Button size="lg" className="text-base">
              六爻起卦
            </Button>
          </Link>

          <Link href="/ren">
            <Button size="lg" className="text-base">
              小六壬占卜
            </Button>
          </Link>

          <Link href="/fortune">
            <Button size="lg" className="text-base">
              命理分析
            </Button>
          </Link>
        </div>
      </section>

      {/* 特色部分 - 使用连贯的背景过渡 */}
      <section className="relative px-4 py-20">
        <div className="container mx-auto">
          <h2 className="mb-12 text-center text-3xl font-bold">
            探索东方古老智慧
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="border-border bg-card/80 rounded-lg border p-6 shadow-sm backdrop-blur-sm transition-all hover:scale-[1.02] hover:shadow-md"
              >
                <div className="bg-primary/10 text-primary mb-4 flex h-12 w-12 items-center justify-center rounded-full p-3">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 添加页脚做平滑过渡 */}
    </main>
  );
}

// 特色内容
const features = [
  {
    title: "六爻预测",
    description: "基于《周易》的卦象演算，预测事情发展和变化趋势。",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22V2M4 10h16M4 14h16M4 18h16M4 6h16" />
      </svg>
    ),
  },
  {
    title: "小六壬",
    description: "简便快捷的占卜方式，适合日常事务与紧急决策参考。",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "命理分析",
    description: "通过八字命盘分析先天禀赋，把握人生方向。",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m12 14 4-4" />
        <path d="M3.34 19a10 10 0 1 1 17.32 0" />
      </svg>
    ),
  },
];
