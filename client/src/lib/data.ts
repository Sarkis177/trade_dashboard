import type { TradingData } from "@shared/schema";

export const initialData: TradingData = {
  "trading_capital": 3.081,
  "trading_capital_currency": "eth",
  "balance": 14630,
  "on_hold": 8300,
  "bots": [
    {"name":"yellow_bot","cost":10000,"24h":3.15,"7d":0.065,"30d":4.1,"60d":15.04,"90d":80.25,"all_time":126.85},
    {"name":"white_bot","cost":3800,"24h":1.5,"7d":12.0,"30d":14.15,"60d":46.5,"90d":38.4,"all_time":34.82},
    {"name":"green_bot","cost":4200,"24h":3.33,"7d":-17.6,"30d":-2.5,"60d":13.0,"90d":25.1,"all_time":4.99},
    {"name":"red_bot","cost":1500,"24h":-10.8,"7d":5.5,"30d":11.4,"60d":12.1,"90d":24.36,"all_time":71.0},
    {"name":"blue_bot","cost":7400,"24h":-6.5,"7d":-4.3,"30d":-0.17,"60d":4.32,"90d":6.8,"all_time":10.1},
    {"name":"orange_bot","cost":550,"24h":210.1,"7d":81.3,"30d":90.7,"60d":13.4,"90d":-40.6,"all_time":98.67}
  ]
};

export type TimeRange = "24h" | "7d" | "30d" | "all_time";

export const generateChartData = () => {
  const points = 24;
  const data = [];
  let value = Math.random() * 100;
  
  for (let i = 0; i < points; i++) {
    value += (Math.random() - 0.5) * 20;
    data.push(value);
  }
  
  return data;
};

export const getTimeLabels = (range: TimeRange) => {
  const now = new Date();
  const labels = [];
  
  switch (range) {
    case "24h":
      for (let i = 23; i >= 0; i--) {
        const hour = new Date(now.getTime() - i * 60 * 60 * 1000).getHours();
        labels.push(`${hour}:00`);
      }
      break;
    case "7d":
      for (let i = 6; i >= 0; i--) {
        const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
        labels.push(date.toLocaleDateString('en-US', { weekday: 'short' }));
      }
      break;
    case "30d":
      for (let i = 29; i >= 0; i--) {
        const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
        labels.push(date.getDate().toString());
      }
      break;
    case "all_time":
      for (let i = 11; i >= 0; i--) {
        const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
        labels.push(date.toLocaleDateString('en-US', { month: 'short' }));
      }
      break;
  }
  
  return labels;
};
