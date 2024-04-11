import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    pv: 25,
    amt: 25,
  },
  {
    name: "Feb",
    pv: 35,
    amt: 10,
  },
  {
    name: "Mar",
    pv: 80,
    amt: 50,
  },
  {
    name: "Apr",
    pv: 75,
    amt: 47,
  },
  {
    name: "May",
    pv: 100,
    amt: 30,
  },
  {
    name: "Jun",
    pv: 50,
    amt: 40,
  },
  {
    name: "Jul",
    pv: 25,
    amt: 80,
  },
  {
    name: "Aug",
    pv: 100,
    amt: 100,
  },
];

const Chart = () => {
  return (
    <>
      <div className="bg-white rounded-3xl mx-4 md:mx-auto max-w-screen-md shadow-2xl mt-16">
        <div className="bg-white p-7 rounded-2xl">
          <h3 className="text-xl mb-4">Overview</h3>
          <div className="flex justify-center lg:justify-between">
            <ResponsiveContainer
              width="100%"
              height={200}
              style={{ marginLeft: "auto", marginRight: "55px" }}
            >
              <LineChart data={data}>
                <CartesianGrid />
                <XAxis dataKey="name" />
                <YAxis />
                <Line type="monotone" dataKey="pv" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chart;
