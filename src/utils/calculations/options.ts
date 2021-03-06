import { coinValues } from "./coins";
import { INTEREST_RATE, VOLATILITY } from "./constants";
import { blackScholes } from "black-scholes";
import { CustomCoinList, OptionType } from "../../types.d";

export const getPremium = (price: number, strikePrice: number, days: number, type: OptionType): number =>
  blackScholes(
    price,
    strikePrice,
    days / 365,
    VOLATILITY,
    INTEREST_RATE,
    type,
  );

export const roundReasonably = (n: number): number => {
  const breakPoints = [
    [100, 5],
    [1000, 100],
  ];
  let res = n;
  breakPoints.forEach(([breakPoint, rounder]) => {
    if (n >= breakPoint) {
      res = Math.round(n / rounder) * rounder;
    }
  });

  return res;
};

export const getStrikePrice = (price: number, maxLoss: number) => {
  return roundReasonably(price * (1 - maxLoss / 100));
};

export const calculate = async (crypto: CustomCoinList, maxLoss: number, timeframe: number) => {
  const coins = await coinValues;
  console.log(coins);
  const price = Math.round(coins[crypto].usd);
  const strike = getStrikePrice(price, maxLoss);
  console.log({ price, maxLoss, strike });

  const premium = getPremium(price, strike, timeframe, OptionType.call);

  return { price, premium, strike };
};
