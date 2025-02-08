import { useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChartComponent } from "@/components/ChartComponent";
import { BotCard } from "@/components/BotCard";
import { useTradingData } from "@/hooks/useTradingData";
import { TimeRange } from "@/lib/data";

const timeRanges: { label: string; value: TimeRange }[] = [
  { label: "24h", value: "24h" },
  { label: "7 days", value: "7d" },
  { label: "30 days", value: "30d" },
  { label: "All time", value: "all_time" }
];

export default function Dashboard() {
  const { data, selectedBot, setSelectedBot, timeRange, setTimeRange } = useTradingData();
  
  const botColor = useMemo(() => {
    const colors: Record<string, string> = {
      yellow_bot: "#FFD700",
      white_bot: "#FFFFFF",
      green_bot: "#4CAF50",
      red_bot: "#FF0000",
      blue_bot: "#2196F3",
      orange_bot: "#FF9800"
    };
    return colors[selectedBot.name];
  }, [selectedBot]);

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto space-y-4">
        <h1 className="text-2xl font-bold text-center">Dashboard</h1>
        
        <Card className="p-4">
          <div className="space-y-2">
            <h2 className="text-lg font-medium">TRADING CAPITAL</h2>
            <div className="text-4xl font-bold">
              {data.trading_capital} {data.trading_capital_currency.toUpperCase()}
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <div>
                BALANCE: 
                <span className="ml-2 text-foreground">{data.balance}</span>
              </div>
              <div>
                ON HOLD: 
                <span className="ml-2 text-foreground">{data.on_hold}</span>
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <ChartComponent
              timeRange={timeRange}
              botColor={botColor}
            />
          </div>
          
          <div className="mt-4 grid grid-cols-3 gap-2">
            {data.bots.map((bot) => (
              <BotCard
                key={bot.name}
                bot={bot}
                isSelected={bot.name === selectedBot.name}
                timeRange={timeRange}
                onClick={() => setSelectedBot(bot)}
              />
            ))}
          </div>
        </Card>
        
        <div className="flex gap-2 overflow-x-auto py-2">
          {timeRanges.map(({ label, value }) => (
            <Button
              key={value}
              variant={timeRange === value ? "default" : "outline"}
              onClick={() => setTimeRange(value)}
              className="flex-1"
            >
              {label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
