export enum OptionType {
  call = "call",
  put = "put",
}
export enum CustomCoinList {
  ETH = "ethereum",
  BTC = "bitcoin",
} 
export type CryptoCoins = {
  [C in CustomCoinList]: { usd: number }
}

export type ProfitGraphEntry = {
  name: number,
  profit: number,
};
export type ProfitGraphDataset = ProfitGraphEntry[];

export type CallGraphData = {
  plot: ProfitGraphDataset,
  range: number[],
  domain: number[],
  xTicks: number[],
  yTicks: number[],
};
