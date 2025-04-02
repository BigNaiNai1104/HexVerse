import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import ReactMarkDown from "react-markdown";

interface FortuneAnalysisProps {
  result: string;
  isLoading?: boolean;
}

export default function FortuneAnalysis({ result }: FortuneAnalysisProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>命理解析</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <div className="whitespace-pre-wrap">
          <ReactMarkDown>{result}</ReactMarkDown>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
