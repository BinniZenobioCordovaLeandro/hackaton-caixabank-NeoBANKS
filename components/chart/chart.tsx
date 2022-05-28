import React from "react";
import { View } from "react-native";
import { ChartProps } from "./chart.props";
import { InteractiveLineChart } from "./interactiveLine.chart";
import { PieChart } from "./pie.chart";

export default function Chart(props: ChartProps) {
  const { name } = props;

  switch (name) {
    case "pie":
      return <PieChart {...props} />;
      break;

    case "interactiveLine":
      return <InteractiveLineChart />;
      break;

    default:
      return <View />;
      break;
  }
}
