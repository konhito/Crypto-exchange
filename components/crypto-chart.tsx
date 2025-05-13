"use client";
import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function CryptoChart() {
  const [activeTab, setActiveTab] = useState<"1H" | "1D" | "1W" | "1M" | "1Y">(
    "1D"
  );
  const [chartData, setChartData] = useState<{ time: string; price: number }[]>(
    []
  );

  // Generate random price data that generally trends upward
  useEffect(() => {
    const generateData = (points: number, startPrice: number) => {
      let price = startPrice;
      const data = [];

      // Generate dates for the x-axis based on active tab
      let startDate;
      let interval;

      switch (activeTab) {
        case "1H":
          startDate = new Date();
          startDate.setHours(startDate.getHours() - 1);
          interval = 60000 * 5; // 5 minutes
          break;
        case "1D":
          startDate = new Date();
          startDate.setDate(startDate.getDate() - 1);
          interval = 60000 * 60; // 1 hour
          break;
        case "1W":
          startDate = new Date();
          startDate.setDate(startDate.getDate() - 7);
          interval = 60000 * 60 * 6; // 6 hours
          break;
        case "1M":
          startDate = new Date();
          startDate.setMonth(startDate.getMonth() - 1);
          interval = 60000 * 60 * 24; // 1 day
          break;
        case "1Y":
          startDate = new Date();
          startDate.setFullYear(startDate.getFullYear() - 1);
          interval = 60000 * 60 * 24 * 14; // 2 weeks
          break;
        default:
          startDate = new Date();
          startDate.setDate(startDate.getDate() - 1);
          interval = 60000 * 60; // 1 hour
      }

      for (let i = 0; i < points; i++) {
        // Random price movement but with an upward bias
        const change = (Math.random() - 0.45) * 800;
        price = Math.max(price + change, 20000); // Ensure price doesn't go below $20,000

        const currentDate = new Date(startDate.getTime() + i * interval);

        data.push({
          time: formatDate(currentDate, activeTab),
          price: price,
        });
      }

      return data;
    };

    // Format dates differently based on the active time range
    const formatDate = (date: Date, tab: string) => {
      switch (tab) {
        case "1H":
          return date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });
        case "1D":
          return date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });
        case "1W":
          return `${date.getDate()}/${
            date.getMonth() + 1
          } ${date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}`;
        case "1M":
          return `${date.getDate()}/${date.getMonth() + 1}`;
        case "1Y":
          return `${date.getDate()}/${date.getMonth() + 1}/${date
            .getFullYear()
            .toString()
            .slice(2)}`;
        default:
          return date.toLocaleTimeString();
      }
    };

    // Generate the data points
    const points: Record<"1H" | "1D" | "1W" | "1M" | "1Y", number> = {
      "1H": 12,
      "1D": 24,
      "1W": 28,
      "1M": 30,
      "1Y": 26,
    };

    setChartData(generateData(points[activeTab] || 24, 66000));
  }, [activeTab]);

  return (
    <div className="bg-[#1A1D26] border border-[#2B2F36] rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-[#F7931A] flex items-center justify-center mr-3">
            <span className="text-white font-bold">₿</span>
          </div>
          <div>
            <h3 className="text-[#F6F7F8] font-medium">Bitcoin</h3>
            <p className="text-[#9DA0A6] text-xs">BTC</p>
          </div>
        </div>
        <div>
          <div className="text-[#F6F7F8] font-medium">$66,743.21</div>
          <div className="text-[#00C26F] text-xs flex items-center justify-end">
            +2.34%
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1"
            >
              <path
                d="M6 1.5L10.5 6L9.45 7.05L6.75 4.35V10.5H5.25V4.35L2.55 7.05L1.5 6L6 1.5Z"
                fill="#00C26F"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#2B2F36"
              vertical={false}
            />
            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9DA0A6", fontSize: 12 }}
            />
            <YAxis
              domain={["dataMin - 1000", "dataMax + 1000"]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9DA0A6", fontSize: 12 }}
              tickFormatter={(value) => `$${Math.round(value / 1000)}k`}
              width={50}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#272B36",
                borderColor: "#2B2F36",
                borderRadius: "8px",
                color: "#F6F7F8",
              }}
              formatter={(value) =>
                typeof value === "number"
                  ? [`$${value.toFixed(2)}`, "Price"]
                  : ["N/A", "Price"]
              }
              labelFormatter={(value) => `Time: ${value}`}
            />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#00C26F"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: "#00C26F", stroke: "#00C26F" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-between mt-4">
        {(["1H", "1D", "1W", "1M", "1Y"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1 rounded-md text-sm ${
              activeTab === tab
                ? "bg-[#272B36] text-[#00C26F] font-medium"
                : "text-[#9DA0A6] hover:text-[#F6F7F8]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
