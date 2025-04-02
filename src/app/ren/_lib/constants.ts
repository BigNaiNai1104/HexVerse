// 六神数组
export const LIUSHEN = [
  "大安",
  "留连",
  "速喜",
  "赤口",
  "小吉",
  "空亡",
] as const;
export type LiuShen = (typeof LIUSHEN)[number];

interface DivinationResult {
  divination1: LiuShen;
  divination2: LiuShen;
  divination3: LiuShen;
}

// 六神释义结构定义
export interface LiuShenExplanation {
  name: LiuShen;
  wuxing: string;
  color: string;
  direction: string;
  animal?: string;
  numbers: string;
  meanings: string;
  poem: string;
}

// 六神释义详细信息
export const LIUSHEN_EXPLANATIONS: LiuShenExplanation[] = [
  {
    name: "大安",
    wuxing: "木",
    color: "青色",
    direction: "东方",
    animal: "青龙",
    numbers: "一、五、七",
    meanings: "静止、心安、吉祥",
    poem: "大安事事昌，求谋在东方，失物去不远，宅舍保安康。行人身未动，病者主无妨。将军回田野，仔细好推详。",
  },
  {
    name: "留连",
    wuxing: "水",
    color: "黑色",
    direction: "北方",
    animal: "玄武",
    numbers: "二、八、十",
    meanings: "喑味不明，延迟、纠缠、拖延、漫长",
    poem: "留连事难成，求谋日未明。官事只宜缓，去者来回程，失物南方去，急寻方心明。更需防口舌，人事且平平。",
  },
  {
    name: "速喜",
    wuxing: "火",
    color: "红色",
    direction: "南方",
    animal: "朱雀",
    numbers: "三、六、九",
    meanings: "快速、喜庆，吉利，指时机已到",
    poem: "速喜喜来临，求财向南行。失物申未午，逢人要打听。官事有福德，病者无须恐。田宅六畜吉，行人音信明。",
  },
  {
    name: "赤口",
    wuxing: "金",
    color: "白色",
    direction: "西方",
    animal: "白虎",
    numbers: "四、七、十",
    meanings: "不吉、惊恐，凶险、口舌是非",
    poem: "赤口主口舌，官非切要防。失物急去寻，行人有惊慌。鸡犬多作怪，病者出西方。更须防咀咒，恐怕染瘟殃",
  },
  {
    name: "小吉",
    wuxing: "木",
    color: "",
    direction: "",
    animal: "六合",
    numbers: "一、五、七",
    meanings: "和合、吉利",
    poem: "小吉最吉昌，路上好商量。阴人来报喜，失物在坤方。行人立便至，交易甚是强，凡事皆和合，病者祈上苍。",
  },
  {
    name: "空亡",
    wuxing: "土",
    color: "黄色",
    direction: "中央",
    animal: "勾陈",
    numbers: "三、六、九",
    meanings: "不吉、无结果、忧虑",
    poem: "空亡事不祥，阴人多乖张。求财无利益，行人有灾殃。失物寻不见，官事有刑伤。病人逢暗鬼，析解可安康。",
  },
];

// 按名称获取六神释义
export const getLiuShenExplanation = (
  name: LiuShen,
): LiuShenExplanation | undefined => {
  return LIUSHEN_EXPLANATIONS.find((item) => item.name === name);
};

export const calculateDivination = (
  num1: number,
  num2: number,
  num3: number,
): DivinationResult => {
  const index1 = num1 % 6;
  const index2 = (num1 + num2 - 1) % 6;
  const index3 = (num1 + num2 + num3 - 2) % 6;

  // 使用类型断言确保返回类型正确
  const divination1 = LIUSHEN.at(index1 - 1) as LiuShen;
  const divination2 = LIUSHEN.at(index2 - 1) as LiuShen;
  const divination3 = LIUSHEN.at(index3 - 1) as LiuShen;

  return {
    divination1,
    divination2,
    divination3,
  };
};

interface DivinationText {
  explain1: string;
  explain2: string;
  explain3: string;
}

export const generateDivinationText = (
  divination1: LiuShen,
  divination2: LiuShen,
  divination3: LiuShen,
): DivinationText => {
  const texts: Record<LiuShen, string> = {
    大安: "万事大吉，身心安泰，所求皆如意。",
    留连: "事多阻滞，凡事宜缓不宜急。",
    速喜: "喜事临门，吉祥如意，吉庆可期。",
    赤口: "口舌是非，谨慎言行，避免争执。",
    小吉: "平安顺遂，虽无大利，亦无大害。",
    空亡: "事难成就，凡事宜守不宜进。",
  };

  return {
    explain1: texts[divination1],
    explain2: texts[divination2],
    explain3: texts[divination3],
  };
};
