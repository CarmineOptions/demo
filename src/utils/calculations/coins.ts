import { CryptoCoins } from "../../types.d";

const COIN_API_QUERY =
  "https://api.coingecko.com/api/v3/simple/price?ids=ethereum,bitcoin,dogecoin&vs_currencies=usd";
const MAX_FETCH_WAIT = 2500;
const FALLBACK_COIN_VALUES = {
  bitcoin: { usd: 29259 },
  ethereum: { usd: 1965.59 },
} as CryptoCoins;

export const coinValues = new Promise<CryptoCoins> ((resolve) => {
  fetch(COIN_API_QUERY)
    .then((response) => response.json())
    .then((data) => resolve(data as CryptoCoins));
  setTimeout(() => resolve(FALLBACK_COIN_VALUES), MAX_FETCH_WAIT);
});
