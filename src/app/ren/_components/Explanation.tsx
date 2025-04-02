import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { Tabs, TabsList } from "@radix-ui/react-tabs";
import React from "react";
import { LIUSHEN, LIUSHEN_EXPLANATIONS } from "../_lib/constants";

export default function Explanation() {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="text-xl">六神释义</CardTitle>
        <CardDescription>六神释义详解，帮助您理解卦象含义</CardDescription>
      </CardHeader>

      <CardContent>
        <Tabs defaultValue="大安" className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-6">
            {LIUSHEN.map((shen) => (
              <TabsTrigger key={shen} value={shen}>
                {shen}
              </TabsTrigger>
            ))}
          </TabsList>

          {LIUSHEN_EXPLANATIONS.map((explanation) => (
            <TabsContent
              key={explanation.name}
              value={explanation.name}
              className="mt-4"
            >
              <div className="space-y-2">
                <h3 className="font-bold">{explanation.name}</h3>
                <p>
                  {explanation.name === "大安" && "身不动时，"}
                  {explanation.name === "留连" && "人未归时，"}
                  {explanation.name === "速喜" && "人即至时，"}
                  {explanation.name === "赤口" && "官事凶时，"}
                  {explanation.name === "小吉" && "人来喜时，"}
                  {explanation.name === "空亡" && "音信稀时，"}
                  五行属{explanation.wuxing}
                  {explanation.color && `，颜色${explanation.color}`}
                  {explanation.direction && `，方位${explanation.direction}`}
                  {explanation.animal && `。临${explanation.animal}`}
                  {explanation.numbers && `，凡谋事主${explanation.numbers}`}。
                  有{explanation.meanings}之含义。
                </p>
                <Separator className="my-2" />
                <p className="italic">诀曰：{explanation.poem}</p>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}
