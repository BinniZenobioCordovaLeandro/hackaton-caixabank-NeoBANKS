import React from "react";
import { View } from "react-native";
import { Text } from "react-native-svg";
import { PieChart as PieChartPackage } from "react-native-svg-charts";
import { ChartProps } from "./chart.props";

export class PieChart extends React.PureComponent<ChartProps> {
  render() {
    const { data } = this.props;
    return (
      <View>
        <PieChartPackage
          style={{ height: 256, width: 256, alignSelf: "center" }}
          valueAccessor={({ item }: any) => item.amount}
          data={data!}
          innerRadius={0}
          padAngle={0}
          animate
          startAngle={-1}
        >
          <Labels />
        </PieChartPackage>
        <View style={{ flexDirection: "row", marginTop: 56 }}>
          {data!.map((item: any, index: number) => {
            return (
              <View
                key={index}
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  key={index}
                  style={{
                    height: 8,
                    width: 8,
                    backgroundColor: item.svg.fill,
                    marginRight: 10,
                  }}
                />
                <Text>{item.amount}</Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

const Labels = ({
  slices = [{ pieCentroid: [], data: { amount: 20 } }],
}): any => {
  return slices.map((slice, index) => {
    const { pieCentroid, data } = slice;
    return (
      <Text
        key={index}
        x={pieCentroid[0]}
        y={pieCentroid[1]}
        fill={"white"}
        textAnchor={"middle"}
        alignmentBaseline={"middle"}
        fontSize={24}
        stroke={"black"}
        strokeWidth={0.2}
      >
        {data.amount}
      </Text>
    );
  });
};
