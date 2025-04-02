export interface Hexagram {
  序号: number;
  卦名: string;
  卦辞: string;
  彖辞: string;
  象辞: string;
  爻辞?: Record<string, string>;
  文言?: string;
}
