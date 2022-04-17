import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: "3/15",
      uv: 0.1,
      pv: 2400,
      amt: 2400
    },
    {
      name: "3/20",
      uv: 0.205,
      pv: 1398,
      amt: 2210
    },
    {
      name: "3/25",
      uv: 0.23,
      pv: 9800,
      amt: 2290
    },
    {
      name: "4/05",
      uv: 0.28,
      pv: 3908,
      amt: 2000
    },
    {
      name: "4/10",
      uv: 0.301,
      pv: 4800,
      amt: 2181
    },
    {
      name: "4/15",
      uv: 0.36,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Current",
      uv: 0.4,
      pv: 4300,
      amt: 2100
    }
];

function LineGraph() {
  return (
    <>
      <ResponsiveContainer width="100%" aspect={3}>
        <AreaChart 
          width={500} 
          height={400} 
          data={data} 
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}

export default LineGraph;
