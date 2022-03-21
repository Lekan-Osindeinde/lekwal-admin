import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import "./chart.css";

function Chart() {
  const data = [
    {
      name: "Jan",
      "Active User": 4000,
    },
    {
      name: "Feb",
      "Active User": 3000,
    },
    {
      name: "Mar",
      "Active User": 5000,
    },
    {
      name: "Apr",
      "Active User": 3500,
    },
    {
      name: "May",
      "Active User": 2200,
    },
    {
      name: "Jun",
      "Active User": 7000,
    },
    {
      name: "Jul",
      "Active User": 4500,
    },
    {
      name: "Aug",
      "Active User": 6500,
    },
    {
      name: "Sep",
      "Active User": 7000,
    },
    {
      name: "Oct",
      "Active User": 5500,
    },
    {
      name: "Nov",
      "Active User": 6200,
    },
    {
      name: "Dec",
      "Active User": 9000,
    },
  ];
  return (
    <div className="chart">
      <h3 className="chartTitle">User Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey="Active User" stroke="#5550bd" />
          <Tooltip />
          <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
export default Chart;
