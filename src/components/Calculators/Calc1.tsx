import { useState } from "react";

const Calc1 = () => {
  const [eth, setEth] = useState(0);
  const [time, setTime] = useState(0);
  const [active, setActive] = useState(false);
  const [currency, setCurrency] = useState("eth");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActive(true);
    console.log({ eth, time });
    (document.getElementById("res-eth") as HTMLInputElement).value = eth * time + currency;
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="input-group p-3">
          <input
            type="number"
            aria-label="ethereum"
            className="form-control"
            value={eth}
            onChange={(e) => setEth(parseInt(e.target.value))}
          ></input>
          <select
            onChange={(e) => setCurrency(e.target.value)}
            className="form-select"
            aria-label="Default select example"
          >
            <option value="eth" selected>
              ETH
            </option>
            <option value="btc">BTC</option>
            <option value="dgc">Doge</option>
          </select>
          <span className="input-group-text">Time</span>
          <input
            type="number"
            aria-label="time"
            className="form-control"
            value={time}
            onChange={(e) => setTime(parseInt(e.target.value))}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        <div className={"input-group p-3" + (active ? "" : " collapse")}>
          <span className="input-group-text">Final offer</span>
          <input type="text" aria-label="ethereum" id="res-eth"></input>
        </div>
      </form>
    </div>
  );
};

export default Calc1;
