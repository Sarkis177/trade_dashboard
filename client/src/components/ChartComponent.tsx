import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
} from "chart.js";
import { generateChartData, getTimeLabels, TimeRange } from "@/lib/data";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

interface Props {
  timeRange: TimeRange;
  botColor: string;
}

export function ChartComponent({ timeRange, botColor }: Props) {
  const [chartData, setChartData] = useState(generateChartData());
  
  useEffect(() => {
    setChartData(generateChartData());
  }, [timeRange, botColor]);

  const data = {
    labels: getTimeLabels(timeRange),
    datasets: [
      {
        fill: true,
        data: chartData,
        borderColor: botColor,
        backgroundColor: `${botColor}33`,
        tension: 0.4,
        pointRadius: 0
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true,
        mode: 'index' as const,
        intersect: false,
      }
    },
    scales: {
      x: {
        display: false
      },
      y: {
        display: false
      }
    }
  };

  return (
    <div className="h-[200px] w-full">
      <Line data={data} options={options} />
    </div>
  );
}
