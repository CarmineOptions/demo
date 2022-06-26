import React, { useState, useRef } from "react";
import Chart from "./Chart";
import { generateGraphData } from "./calculations";
import { calculate } from "../../utils/calculations/options";
import { CustomCoinList } from "../../types.d";
import { getDateNMonthsFromNow, mapDaysToMonths } from "../../utils/date/date";

const InvestWithLimitedRisk = () => {
  const [crypto, setCrypto] = useState(CustomCoinList.ETH);
  const [maxLoss, setMaxLoss] = useState(10);
  const [timeframe, setTimeframe] = useState(30);
  const [text, setText] = useState("");
  const [graphData, setGraphData] = useState({});
  const graphRef = useRef<null | HTMLDivElement>(null);

  const executeScroll = () => {
    setTimeout(() => {
      if (graphRef?.current?.scrollIntoView) {
        graphRef.current.scrollIntoView({behavior: "smooth", block: "center"});
      }
    }, 150);
  };

  const handleButtonClick = async () => {
    const { price, premium, strike } = await calculate(
      crypto,
      maxLoss,
      timeframe
    );
    const d = getDateNMonthsFromNow(mapDaysToMonths(timeframe));
    const finalDate = d.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    setText(
      `At the price $${price} for ${crypto} and maximum loss of ${maxLoss}%, your strike price would be $${Math.round(
        strike
      )} and the premium would be $${Math.round(premium)}. The option will mature on ${finalDate}.`
    );
    const gd = generateGraphData(price, premium, strike);
    console.log(gd);
    setGraphData(gd);
    executeScroll();
  };

  return (
    <div className="d-grid gap-2">
      <h4>Invest with limited risk</h4>
      <p>Select your currency, maximum loss and investment length.</p>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="currency">
          Currency
        </label>
        <select
          className="form-control text-center"
          id="currency"
          onChange={(e) => setCrypto(e.target.value as CustomCoinList)}
          value={crypto}
        >
          <option value="ethereum">ETH</option>
          <option value="bitcoin">BTC</option>
        </select>
        <label className="input-group-text" htmlFor="currency">
          versus USD
        </label>
      </div>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="max-loss">
          Maximum loss
        </label>
        <input
          className="form-control text-center"
          id="max-loss"
          onChange={(e) => {
            setMaxLoss(parseInt(e.target.value, 10) || 1);
            e.target.value = "" + maxLoss;
          }}
          value={maxLoss}
          type="number"
          min="1"
          max="100"
        ></input>
        <label className="input-group-text" htmlFor="max-loss">
          %
        </label>
      </div>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="invest-length">
          Timeframe
        </label>
        <select
          className="form-control text-center"
          id="invest-length"
          onChange={(e) => setTimeframe(parseInt(e.target.value, 10))}
          value={timeframe}
        >
          <option value={30}>1 month</option>
          <option value={90}>3 months</option>
          <option value={180}>6 months</option>
        </select>
      </div>
      <button
        onClick={handleButtonClick}
        className="btn btn-dark"
        type="button"
      >
        Calculate
      </button>
      <div ref={graphRef}>

      {!!Object.keys(graphData).length && (
        <>
          <p>{text}</p>
          <Chart data={graphData} />
        </>
      )}
      </div>
    </div>
  );
};

export default InvestWithLimitedRisk;
