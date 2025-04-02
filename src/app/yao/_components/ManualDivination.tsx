import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ManualDivinationProps {
  manualValues: string[];
  onSelectChange: (index: number, value: string) => void;
  onGenerate: () => void;
}

export default function ManualDivination({
  manualValues,
  onSelectChange,
  onGenerate,
}: ManualDivinationProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">投掷规则</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                同时投掷三枚硬币
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                面额朝上为正面(3分)，反面为2分
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                记录每次投掷的总分数
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">分数对照表</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center justify-between rounded-md bg-slate-50 p-2">
              <span className="text-slate-700">三枚正面 (9分)</span>
              <span className="font-medium">老阳 (9)</span>
            </div>
            <div className="flex items-center justify-between rounded-md bg-slate-50 p-2">
              <span className="text-slate-700">两正一反 (8分)</span>
              <span className="font-medium">少阳 (8)</span>
            </div>
            <div className="flex items-center justify-between rounded-md bg-slate-50 p-2">
              <span className="text-slate-700">两反一正 (7分)</span>
              <span className="font-medium">少阴 (7)</span>
            </div>
            <div className="flex items-center justify-between rounded-md bg-slate-50 p-2">
              <span className="text-slate-700">三枚反面 (6分)</span>
              <span className="font-medium">老阴 (6)</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 手动投掷结果输入区 */}
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>记录结果</CardTitle>
          <CardDescription>请输入六次投掷的结果</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[5, 4, 3, 2, 1, 0].map((index) => (
              <div key={index} className="space-y-2">
                <Label className="text-muted-foreground text-sm font-medium">
                  第{6 - index}次投掷
                </Label>
                <Select
                  value={manualValues[5 - index] || ""}
                  onValueChange={(value) => onSelectChange(index, value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="请选择..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="9">三正-老阳 (9分)</SelectItem>
                    <SelectItem value="8">两正一反-少阳 (8分)</SelectItem>
                    <SelectItem value="7">两反一正-少阴 (7分)</SelectItem>
                    <SelectItem value="6">三反-老阴 (6分)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <Button
              onClick={onGenerate}
              disabled={
                manualValues.length !== 6 || manualValues.some((v) => !v)
              }
            >
              生成卦象
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
