import React, { useState } from "react";
import Calc1 from "../Calculators/Calc1";

const TabsCard = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="col-12">
      <div className="page-header">
        <h2>Demos</h2>
      </div>
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <span
                className={"nav-link" + (count === 0 ? " active" : "")}
                data-toggle="tab"
                role="button"
                onClick={() => setCount(0)}
              >
                Invest with limited risk
              </span>
            </li>
            <li className="nav-item">
              <span
                className={"nav-link" + (count === 1 ? " active" : "")}
                data-toggle="tab"
                role="button"
                onClick={() => setCount(1)}
              >
                Hedge your investment
              </span>
            </li>
            <li className="nav-item">
              <span
                className={"nav-link" + (count === 2 ? " active" : "")}
                data-toggle="tab"
                role="button"
                onClick={() => setCount(2)}
              >
                Hedge against liquidation lost
              </span>
            </li>
          </ul>
        </div>
        <div className="tab-content card-body">
          <div className={"tab-pane" + (count === 0 ? " active" : "")}>
            <Calc1 />
          </div>
          <div className={"tab-pane" + (count === 1 ? " active" : "")}>
            Facebook
          </div>
          <div className={"tab-pane" + (count === 2 ? " active" : "")}>
            Twitter
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsCard;
