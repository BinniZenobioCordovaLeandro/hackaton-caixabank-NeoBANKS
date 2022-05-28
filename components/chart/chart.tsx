import React from "react";
import { View } from "react-native";
import { ChartProps } from "./chart.props";
import { PieChart } from "./pie.chart";

export default function Chart(props: ChartProps) {
  const { name } = props;

  switch (name) {
    case "pie":
      return <PieChart {...props} />;
      break;

    default:
      return <View />;
      break;
  }
}
