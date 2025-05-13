"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, type TooltipProps } from "recharts"
import { cn } from "@/lib/utils"

// Sample data for the chart
const generateChartData = (points: number, baseValue: number, volatility: number) => {
  const data = []
  let currentValue = baseValue

  for (let i = 0; i < points; i++) {
    // Add some randomness to simulate price movements
    const change = (Math.random() - 0.5) * volatility
    currentValue = Math.max(currentValue + change, 0.1) // Ensure value doesn't go below 0.1

    data.push({
      time: i,
      price: currentValue,
    })
  }

  return data
}

const timeframes = [
  { id: "1h", label: "1H", points: 60, baseValue: 60000, volatility: 100 },
  { id: "1d", label: "1D", points: 24, baseValue: 59800, volatility: 300 },
  { id: "1w", label: "1W", points: 7, baseValue: 58000, volatility: 1000 },
  { id: "1m", label: "1M", points: 30, baseValue: 55000, volatility: 2000 },
  { id: "1y", label: "1Y", points: 12, baseValue: 40000, volatility: 5000 },
]

const chartData = {
  "1h": generateChartData(60, 60000, 100),
  "1d": generateChartData(24, 59800, 300),
  "1w": generateChartData(7, 58000, 1000),
  "1m": generateChartData(30, 55000, 2000),
  "1y": generateChartData(12, 40000, 5000),
}

const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-dark-300 border border-dark-100 p-2 rounded shadow-dark-sm text-sm">
        <p className="text-gray-200">{`Price: $${payload[0].value?.toLocaleString()}`}</p>
      </div>
    )
  }

  return null
}

export default function CryptoChart() {
  const [activeTimeframe, setActiveTimeframe] = useState("1d")

  // Calculate if price went up or down
  const data = chartData[activeTimeframe as keyof typeof chartData]
  const priceChange = data[data.length - 1].price - data[0].price
  const percentChange = (priceChange / data[0].price) * 100
  const isPositive = priceChange >= 0

  return (
    <Card className="bg-dark-300 border-dark-100 shadow-dark-lg p-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h3 className="text-xl font-bold text-white">Bitcoin (BTC)</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-2xl font-mono font-semibold text-white">
              ${data[data.length - 1].price.toLocaleString()}
            </span>
            <span className={cn("text-sm font-medium", isPositive ? "text-green-500" : "text-red-500")}>
              {isPositive ? "+" : ""}
              {percentChange.toFixed(2)}%
            </span>
          </div>
        </div>

        <Tabs defaultValue="1d" value={activeTimeframe} onValueChange={setActiveTimeframe} className="w-full md:w-auto">
          <TabsList className="bg-dark-400 border border-dark-100">
            {timeframes.map((timeframe) => (
              <TabsTrigger
                key={timeframe.id}
                value={timeframe.id}
                className="data-[state=active]:bg-[#6a5aff] data-[state=active]:text-white"
              >
                {timeframe.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData[activeTimeframe as keyof typeof chartData]}
            margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
            <XAxis
              dataKey="time"
              stroke="#a0a0a0"
              tick={{ fill: "#a0a0a0" }}
              tickFormatter={(value) => {
                // Format based on timeframe
                if (activeTimeframe === "1h") return `${value}m`
                if (activeTimeframe === "1d") return `${value}h`
                if (activeTimeframe === "1w") return `Day ${value + 1}`
                if (activeTimeframe === "1m") return `Day ${value + 1}`
                return `Month ${value + 1}`
              }}
            />
            <YAxis
              stroke="#a0a0a0"
              tick={{ fill: "#a0a0a0" }}
              domain={["auto", "auto"]}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#6a5aff"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6, fill: "#6a5aff", stroke: "#fff" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
