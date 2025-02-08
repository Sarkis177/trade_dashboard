import { cn } from "@/lib/utils";
import { BotData } from "@shared/schema";
import { TimeRange } from "@/lib/data";

interface Props {
  bot: BotData;
  isSelected: boolean;
  timeRange: TimeRange;
  onClick: () => void;
}

const BOT_IMAGES = {
  yellow_bot: "/images/yellow-bot.png",
  white_bot: "/images/white-bot.png",
  green_bot: "/images/green-bot.png",
  red_bot: "/images/red-bot.png",
  blue_bot: "/images/blue-bot.png",
  orange_bot: "/images/orange-bot.png"
};

export function BotCard({ bot, isSelected, timeRange, onClick }: Props) {
  const performance = bot[timeRange];
  const imagePath = BOT_IMAGES[bot.name as keyof typeof BOT_IMAGES];

  return (
    <button
      onClick={onClick}
      className={cn(
        "p-4 rounded-lg transition-all duration-200",
        isSelected ? "bg-accent" : "bg-card hover:bg-accent/50"
      )}
    >
      <div className="flex flex-col items-center gap-2">
        <div className="w-12 h-12 relative">
          <img 
            src={imagePath} 
            alt={`${bot.name} icon`}
            className="w-full h-full object-contain"
          />
        </div>
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