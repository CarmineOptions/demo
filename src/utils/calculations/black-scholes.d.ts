type BlackScholesLib = (
  s: number,
  k: number,
  t: number,
  v: number,
  r: number,
  callPut: OptionType
) => number;

declare module "black-scholes" {
  export const blackScholes: BlackScholesLib;
}
