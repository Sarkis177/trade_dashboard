import { useState, useEffect } from "react";
import { TradingData, BotData } from "@shared/schema";
import { initialData, TimeRange } from "@/lib/data";

export function useTradingData() {
  const [data, setData] = useState<TradingData>(() => {
    const saved = localStorage.getItem("tradingData");
    return saved ? JSON.parse(saved) : initialData;
  });

  const [selectedBot, setSelectedBot] = useState<BotData>(data.bots[0]);
  const [timeRange, setTimeRange] = useState<TimeRange>("24h");

  useEffect(() => {
    localStorage.setItem("tradingData", JSON.stringify(data));
  }, [data]);

  return {
    data,
    selectedBot,
    setSelectedBot,
    timeRange,
    setTimeRange,
  };
}
