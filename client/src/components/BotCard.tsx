import { cn } from "@/lib/utils";
import { BotData } from "@shared/schema";
import { TimeRange } from "@/lib/data";

interface Props {
  bot: BotData;
  isSelected: boolean;
  timeRange: TimeRange;
  onClick: () => void;
}

const BOT_COLORS = {
  yellow_bot: "#FFD700",
  white_bot: "#FFFFFF",
  green_bot: "#4CAF50",
  red_bot: "#FF0000",
  blue_bot: "#2196F3",
  orange_bot: "#FF9800"
};

export function BotCard({ bot, isSelected, timeRange, onClick }: Props) {
  const performance = bot[timeRange];
  const color = BOT_COLORS[bot.name as keyof typeof BOT_COLORS];
  
  return (
    <button
      onClick={onClick}
      className={cn(
        "p-4 rounded-lg transition-all duration-200",
        isSelected ? "bg-accent" : "bg-card hover:bg-accent/50"
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <div
          className="w-8 h-8"
          style={{
            backgroundColor: color,
            clipPath: "polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)"
          }}
        />
        <span className={cn(
          "text-sm font-medium",
          performance >= 0 ? "text-green-500" : "text-red-500"
        )}>
          {performance >= 0 ? "+" : ""}{performance.toFixed(1)}%
        </span>
      </div>
    </button>
  );
}
