import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

export default function Chart({ data }) {
  return (
    <ResponsiveContainer width="95%" height={400}>
      <LineChart
        width={500}
        height={300}
        data={data.plot}
        key={data.plot}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis
          dataKey="name"
          type="number"
          domain={data.domain}
          label={{
            value: "Market value",
            position: "insideBottomRight",
            offset: -20,
          }}
          ticks={data.xTicks}
        />
        <YAxis
          domain={data.range}
          type="number"
          allowDataOverflow={true}
          label={{
            value: "Profit",
            angle: -90,
            position: "insideLeft",
            textAnchor: "middle",
          }}
          ticks={data.yTicks}
        />
        <Tooltip />
        <Legend />
        <Line dataKey="profit" stroke="#82ca9d" dot={false} />
        <ReferenceLine
          y={0}
          stroke="black"
          label={{
            value: "Break even",
            position: "bottom",
            offset: 10,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
