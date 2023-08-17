import React from "react";
import "../styles/Dashboard.css";
import { Button, LinearProgress } from "@mui/material";
import ArrowIcon from "@mui/icons-material/ArrowForward";
import DashboardItem from "./DashboardItem";
import LineChartIcon from "@mui/icons-material/SsidChartOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import ManIcon from "@mui/icons-material/Person4Outlined";
import WomanIcon from "@mui/icons-material/Person3Outlined";
import { LineChart, Line } from "recharts";

const dataBlueLineChart = [
  { name: "Page A", uv: 3, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 2, pv: 2400, amt: 2400 },
  { name: "Page C", uv: 4, pv: 2400, amt: 2400 },
  { name: "Page D", uv: 2, pv: 2400, amt: 2400 },
  { name: "Page E", uv: 6, pv: 2400, amt: 2400 },
  { name: "Page F", uv: 2, pv: 2400, amt: 2400 },
  { name: "Page G", uv: 4, pv: 2400, amt: 2400 },
];
const dataRedLineChart = [
  { name: "Page A", uv: 4, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3, pv: 2400, amt: 2400 },
  { name: "Page C", uv: 4.7, pv: 2400, amt: 2400 },
  { name: "Page D", uv: 4.5, pv: 2400, amt: 2400 },
  { name: "Page E", uv: 2.5, pv: 2400, amt: 2400 },
  { name: "Page F", uv: 3, pv: 2400, amt: 2400 },
  { name: "Page G", uv: 2, pv: 2400, amt: 2400 },
];
const dataOrangeLineChart = [
  { name: "Page A", uv: 3, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 2, pv: 2400, amt: 2400 },
  { name: "Page C", uv: 4, pv: 2400, amt: 2400 },
  { name: "Page D", uv: 2, pv: 2400, amt: 2400 },
  { name: "Page E", uv: 6, pv: 2400, amt: 2400 },
  { name: "Page F", uv: 2, pv: 2400, amt: 2400 },
  { name: "Page G", uv: 4, pv: 2400, amt: 2400 },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <div className="dashboard__headerLeft">
          <h3 className="dashboard__title">Dashboard</h3>
          <p className="dashboard__subtitle">User Quantity</p>
        </div>
        <div className="dashboard__right">
          <Button
            className="dashboard__button"
            variant="contained"
            endIcon={<ArrowIcon />}
          >
            Go to CRM
          </Button>
        </div>
      </div>
      <div className="dashboard__contentContainer">
        <div className="dashboard__leftGrid">
          <DashboardItem gridName={"left"} />
        </div>
        <div className="dashboard__rightGrid">
          <DashboardItem gridName={"right"} />
        </div>
      </div>
      <div className="dashboard__dataAnalyticsContainer">
        <div className="dashboard__dataAnalyticsHeader">
          <h3 className="dashboard__title">Data & Analytics</h3>
          <p className="dashboard__subtitle">Show updates of Post</p>
        </div>
        <div className="dashboard__dataAnalyticsContent">
          <div className="dashboard__dataAnalyticsContent--top">
            <div className="dashboard__dataAnalyticsContent--topItem blue">
              <div className="left">
                <p>Belum diproses</p>
                <h3>9,123</h3>
              </div>
              <div className="right">
                <LineChart
                  width={200}
                  height={50}
                  data={dataBlueLineChart}
                  margin={{ top: -20, right: 0, left: 0, bottom: -20 }}
                >
                  <Line
                    type="monotone"
                    dataKey="uv"
                    stroke="#22a7d5"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
                {/* <LineChartIcon className="icon blue" /> */}
              </div>
            </div>
            <div className="dashboard__dataAnalyticsContent--topItem red">
              <div className="left">
                <p>Sudah diproses</p>
                <h3>22,643</h3>
              </div>
              <div className="right">
                <LineChart
                  width={200}
                  height={50}
                  data={dataRedLineChart}
                  margin={{ top: -20, right: 0, left: 0, bottom: -20 }}
                >
                  <Line
                    type="monotone"
                    dataKey="uv"
                    stroke="#f46d6c"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
                {/* <LineChartIcon className="icon red" /> */}
              </div>
            </div>
            <div className="dashboard__dataAnalyticsContent--topItem orange">
              <div className="left">
                <p>Customer</p>
                <h3>78,623</h3>
              </div>
              <div className="right">
                <LineChart
                  width={200}
                  height={50}
                  data={dataOrangeLineChart}
                  margin={{ top: -20, right: 0, left: 0, bottom: -20 }}
                >
                  <Line
                    type="monotone"
                    dataKey="uv"
                    stroke="#fec107"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
                {/* <LineChartIcon className="icon orange" /> */}
              </div>
            </div>
            <div className="dashboard__dataAnalyticsContent--topItem"></div>
            <div className="dashboard__dataAnalyticsContent--topItem"></div>
          </div>
          <div className="dashboard__dataAnalyticsContent--bottom">
            <div className="left">
              <div className="top">
                <ClearIcon />
                <p>Belum diproses</p>
                <p>43%</p>
              </div>
              <div className="bottom">
                <LinearProgress
                  sx={{
                    backgroundColor: "#22a7d530",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: "#22a7d5",
                    },
                  }}
                  variant="determinate"
                  value={43}
                  className="icon blue"
                />
              </div>
            </div>
            <div className="left">
              <div className="top">
                <ManIcon />
                <p>Pria</p>
                <p>43%</p>
              </div>
              <div className="bottom">
                <LinearProgress
                  sx={{
                    backgroundColor: "#fec10730",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: "#fec107",
                    },
                  }}
                  variant="determinate"
                  value={43}
                  className="icon orange"
                />
              </div>
            </div>
            <div className="right">
              <div className="top">
                <CheckIcon />
                <p>Sudah diproses</p>
                <p>37%</p>
              </div>
              <div className="bottom">
                <LinearProgress
                  sx={{
                    backgroundColor: "#f46d6c30",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: "#f46d6c",
                    },
                  }}
                  variant="determinate"
                  value={37}
                  className="icon red"
                />
              </div>
            </div>
            <div className="right">
              <div className="top">
                <WomanIcon />
                <p>Wanita</p>
                <p>37%</p>
              </div>
              <div className="bottom">
                <LinearProgress
                  sx={{
                    backgroundColor: "#fec10730",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: "#fec107",
                    },
                  }}
                  variant="determinate"
                  value={37}
                  className="icon orange"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
