export interface ChartProps {
  data?: any[];
  gradient?: boolean;
  dateList?: string[];
  priceList?: number[];
  height?: number;
  width?: number;
  name?: "pie" | "bar" | "line" | "interactiveLine";
}
