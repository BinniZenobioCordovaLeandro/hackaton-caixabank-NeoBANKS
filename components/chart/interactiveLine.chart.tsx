import React, { useEffect, useRef, useState } from "react";
import {
  PanResponder,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AreaChart, XAxis, YAxis } from "react-native-svg-charts";
import {
  Circle,
  Defs,
  G,
  Line,
  LinearGradient,
  Path,
  Rect,
  Stop,
  Text as SvgText,
} from "react-native-svg";
import * as shape from "d3-shape";

export function InteractiveLineChart() {
  const apx = (size = 0) => {
    const width = Dimensions.get("window").width;
    return (width / 750) * size;
  };

  const [dateList, setDateList] = useState([
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
  ]);
  const [priceList, setPriceList] = useState([26, 27, 28, 26, 27, 26]);

  const size = useRef(dateList.length);

  const [positionX, setPositionX] = useState(-1); // The currently selected X coordinate position

  const panResponder = useRef(
    PanResponder.create({
      // 要求成为响应者：
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderTerminationRequest: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        updatePosition(evt.nativeEvent.locationX);
        return true;
      },
      onPanResponderMove: (evt, gestureState) => {
        updatePosition(evt.nativeEvent.locationX);
        return true;
      },
      onPanResponderRelease: () => {
        setPositionX(-1);
      },
    }),
  );

  const updatePosition = (x: any) => {
    const YAxisWidth = apx(130);
    const x0 = apx(0); // x0 position
    const chartWidth = apx(750) - YAxisWidth - x0;
    const xN = x0 + chartWidth; //xN position
    const xDistance = chartWidth / size.current; // The width of each coordinate point
    if (x <= x0) {
      x = x0;
    }
    if (x >= xN) {
      x = xN;
    }

    // console.log((x - x0) )

    // The selected coordinate x :
    // (x - x0)/ xDistance = value
    let value = parseInt(((x - x0) / xDistance).toFixed(0), 10);
    if (value >= size.current - 1) {
      value = size.current - 1; // Out of chart range, automatic correction
    }

    setPositionX(Number(value));
  };

  const CustomGrid = ({ x, y, ticks }: any) => (
    <G>
      {
        // Horizontal grid
        ticks.map((tick: any) => (
          <Line
            key={tick}
            x1="0%"
            x2="100%"
            y1={y(tick)}
            y2={y(tick)}
            stroke="#E4E4E4"
          />
        ))
      }
    </G>
  );

  const CustomLine = ({ line }: any) => (
    <Path
      key="line"
      d={line}
      stroke="#6979F8"
      strokeWidth={apx(6)}
      fill="none"
    />
  );

  const CustomGradient = () => (
    <Defs key="gradient">
      <LinearGradient id="gradient" x1="0" x2="0%" y2="100%">
        <Stop offset="0%" stopColor="#6979F8" stopOpacity={0.25} />
        <Stop offset="100%" stopColor="#6979F8" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  );

  const Tooltip = ({ x, y, ticks }: any) => {
    if (positionX < 0) {
      return null;
    }

    const date = dateList[positionX];

    return (
      <G x={x(positionX)} key="tooltip">
        <G
          x={positionX > size.current / 2 ? -apx(300 + 10) : apx(10)}
          y={y(priceList[positionX]) - apx(10)}
        >
          <Rect
            y={-apx(24 + 24 + 20) / 2}
            rx={apx(12)} // borderRadius
            ry={apx(12)} // borderRadius
            width={apx(100)}
            height={apx(96)}
            stroke="#6979F8"
            fill="rgba(255, 255, 255, 0.8)"
          />

          <SvgText x={apx(20)} fill="#617485" opacity={0.65} fontSize={apx(24)}>
            {date}
          </SvgText>
          <SvgText
            x={apx(20)}
            y={apx(24 + 20)}
            fontSize={apx(24)}
            fontWeight="bold"
            fill="#6979F8"
          >
            ${priceList[positionX]}
          </SvgText>
        </G>

        <G x={x}>
          <Line
            y1={ticks[0]}
            y2={ticks[Number(ticks.length)]}
            stroke="#6979F8"
            strokeWidth={apx(4)}
            strokeDasharray={[6, 3]}
          />

          <Circle
            cy={y(priceList[positionX])}
            r={apx(20 / 2)}
            stroke="#fff"
            strokeWidth={apx(2)}
            fill="#6979F8"
          />
        </G>
      </G>
    );
  };

  const verticalContentInset = { top: apx(40), bottom: apx(40) };

  return (
    <View
      style={{
        alignItems: "stretch",
        overflow: "hidden",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          width: apx(750),
          height: apx(570),
          alignSelf: "stretch",
        }}
      >
        <YAxis
          style={{ width: apx(100) }}
          data={priceList}
          contentInset={verticalContentInset}
          svg={{ fontSize: apx(20), fill: "#999999" }}
        />
        <View style={{ flex: 1 }} {...panResponder.current.panHandlers}>
          <AreaChart
            style={{ flex: 1 }}
            data={priceList}
            // curve={shape.curveNatural}
            curve={shape.curveMonotoneX}
            contentInset={{ ...verticalContentInset }}
            svg={{ fill: "url(#gradient)" }}
          >
            <CustomLine />
            <CustomGrid />
            {/* <CustomGradient /> */}
            <Tooltip />
          </AreaChart>
          <XAxis
            style={{
              alignSelf: "stretch",
              // marginTop: apx(57),
              width: apx(750),
              height: apx(60),
            }}
            numberOfTicks={6}
            data={priceList}
            formatLabel={(value, index) => dateList[value]}
            contentInset={{
              left: apx(36),
              right: apx(130),
            }}
            svg={{
              fontSize: apx(20),
              fill: "#999999",
              y: apx(20),
              // originY: 30,
            }}
          />
        </View>
      </View>
    </View>
  );
}
