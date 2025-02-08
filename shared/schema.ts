import { z } from "zod";

export const botDataSchema = z.object({
  name: z.string(),
  cost: z.number(),
  "24h": z.number(),
  "7d": z.number(),
  "30d": z.number(),
  "60d": z.number(),
  "90d": z.number(),
  "all_time": z.number()
});

export const tradingDataSchema = z.object({
  trading_capital: z.number(),
  trading_capital_currency: z.string(),
  balance: z.number(),
  on_hold: z.number(),
  bots: z.array(botDataSchema)
});

export type BotData = z.infer<typeof botDataSchema>;
export type TradingData = z.infer<typeof tradingDataSchema>;
