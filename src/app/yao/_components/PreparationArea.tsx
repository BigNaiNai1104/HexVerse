import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PreparationArea() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">起卦前的准备</h3>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">心灵准备</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {[
                { icon: "🧘", text: "找一个安静的环境" },
                { icon: "🌟", text: "放松身心，保持平和" },
                { icon: "💭", text: "明确你想要解答的问题" },
              ].map((item, index) => (
                <li
                  key={index}
                  className="text-muted-foreground flex items-center gap-3"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">问题示例</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {[
                "这个决定是否正确？",
                "当前的方向是否合适？",
                "如何改善目前的状况？",
              ].map((text, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm text-purple-800">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground">{text}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
