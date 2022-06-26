import {
  CallGraphData,
  ProfitGraphDataset,
  ProfitGraphEntry,
} from "../../types.d";

const RANGE_PADDING = 0.5;
const NUMBER_OF_STEPS = 150;

const roundToDecimalPlaces = (n: number, amount = 2): number => {
  const base = 10 ** amount;
  return Math.round(n * base) / base;
};

const getProfit = (n: number, price: number, premium: number): number => {
  return Math.max(-premium, n - price - premium);
};

const getPriceRange = (price: number, premium: number): number[] => {
  const MULTIPLE_PADDING = 2;
  const center = price + premium / 2;
  const offset = MULTIPLE_PADDING * premium;
  return [center - offset, center + offset];
};

const getStepSize = (range: number[]): number => {
  return Math.abs(Math.abs(range[0]) - Math.abs(range[1])) / NUMBER_OF_STEPS;
};

const getRange = (data: ProfitGraphDataset): number[] => {
  const lowBase = data[0].profit;
  const highBase = data[data.length - 1].profit;
  const range = [
    Math.floor(lowBase * (1 - Math.sign(lowBase) * RANGE_PADDING)),
    Math.ceil(highBase * (1 + Math.sign(highBase) * RANGE_PADDING)),
  ];
  return range;
};

const getDomain = (data: ProfitGraphDataset): number[] => {
  const low = data[0].name;
  const high = data[data.length - 1].name;
  return [low, high];
};

const transformGraphData = (data: ProfitGraphDataset): ProfitGraphDataset => data.map(
    ({ name, profit }: ProfitGraphEntry): ProfitGraphEntry => ({
      name: roundToDecimalPlaces(name),
      profit: roundToDecimalPlaces(profit),
    })
  );

const getXTicks = (priceRange: number[]): number[] => {
  const ticks = [] as number[];
  const average = (priceRange[0] + priceRange[1]) / 2;
  ticks[0] = Math.ceil(priceRange[0] / 10) * 10;
  ticks[1] = Math.round(average / 10) * 10;
  ticks[2] = Math.floor(priceRange[1] / 10) * 10;
  return ticks;
};

const getYTicks = (range: number[], premium: number): number[] => {
  const ticks = [] as number[];
  ticks[0] = range[0];
  ticks[1] = -1 * Math.round(premium);
  ticks[2] = 0;
  ticks[3] = range[1];
  return ticks;
};

export const generateGraphData = (
  price: number,
  premium: number,
  strike: number
): CallGraphData => {
  const plot = [] as ProfitGraphDataset;
  const priceRange = getPriceRange(price, premium);
  const step = getStepSize(priceRange);

  for (let i = 0; i < NUMBER_OF_STEPS; i++) {
    const curPrice = priceRange[0] + i * step;
    plot.push({
      name: curPrice,
      profit: getProfit(curPrice, price, premium),
    });
  }

  plot.sort((a, b) => a.name - b.name);

  const range = getRange(plot);

  return {
    plot: transformGraphData(plot),
    range,
    domain: getDomain(plot),
    xTicks: getXTicks(priceRange),
    yTicks: getYTicks(range, premium),
  };
};
