import * as React from "react";
import { View, Text } from "react-native";
import CogCircle from "../../assets/svg/CogCircle";
import User from "../../assets/svg/User";

const SVG = () => {
  return (
    <View>
      <Text style={{ fontSize: 40 }}>100x100 dimensions</Text>
      <View style={{ flexDirection: "row" }}>
        <View style={{ margin: 10 }}>
          <CogCircle height={100} width={100} />
        </View>
        <View style={{ margin: 10 }}>
          <User height={100} width={100} />
        </View>
      </View>
      <Text style={{ fontSize: 40 }}>50x50 dimensions</Text>
      <View style={{ flexDirection: "row" }}>
        <View style={{ margin: 10 }}>
          <CogCircle height={50} width={50} />
        </View>
        <View style={{ margin: 10 }}>
          <User height={50} width={50} />
        </View>
      </View>
    </View>
  );
};
export default SVG;
