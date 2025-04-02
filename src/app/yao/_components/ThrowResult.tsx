import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ThrowResultsProps {
  results: string[];
}

export default function ThrowResults({ results }: ThrowResultsProps) {
  if (results.length === 0) return null;

  return (
    <div className="mt-6 space-y-6">
      <h3 className="text-center text-xl font-semibold text-slate-800">
        投掷结果
      </h3>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
        {results.map((result, index) => (
          <Card key={index}>
            <CardHeader className="pt-4 pb-2">
              <CardTitle className="text-sm text-purple-800">
                第{index + 1}次
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg font-medium text-slate-700">
                {result === "9" && "老阳 (9)"}
                {result === "8" && "少阳 (8)"}
                {result === "7" && "少阴 (7)"}
                {result === "6" && "老阴 (6)"}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
