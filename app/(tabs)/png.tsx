import * as React from "react";
import { View, Text, Image } from "react-native";

const PNG = () => {
  return (
    <View>
      <Text style={{ fontSize: 40 }}>100x100 dimensions</Text>
      <Text style={{ fontSize: 20 }}>2x PNG files</Text>
      <View style={{ flexDirection: "row", }}>
        <Image
          source={require("../../assets/png/2x/Cog-Circle.png")}
          style={{ height: 100, width: 100, margin: 10 }}
        />
        <Image
          source={require("../../assets/png/2x/User.png")}
          style={{ height: 100, width: 100, margin: 10 }}
        />
      </View>
      <Text style={{ fontSize: 20 }}>4x PNG files</Text>
      <View style={{ flexDirection: "row", }}>
        <Image
          source={require("../../assets/png/4x/Cog-Circle.png")}
          style={{ height: 100, width: 100, margin: 10 }}
        />
        <Image
          source={require("../../assets/png/4x/User.png")}
          style={{ height: 100, width: 100, margin: 10 }}
        />
      </View>

      <Text style={{ fontSize: 40 }}>50x50 dimensions</Text>
      <Text style={{ fontSize: 20 }}> 2x PNG files</Text>
      <View style={{ flexDirection: "row", }}>
        <Image
          source={require("../../assets/png/2x/Cog-Circle.png")}
          style={{ height: 50, width: 50, margin: 10 }}
        />
        <Image
          source={require("../../assets/png/2x/User.png")}
          style={{ height: 50, width: 50, margin: 10 }}
        />
      </View>
      <Text style={{ fontSize: 20 }}>4x PNG files</Text>
      <View style={{ flexDirection: "row", }}>
        <Image
          source={require("../../assets/png/4x/Cog-Circle.png")}
          style={{ height: 50, width: 50, margin: 10 }}
        />
        <Image
          source={require("../../assets/png/4x/User.png")}
          style={{ height: 50, width: 50, margin: 10 }}
        />
      </View>
    </View>
  );
};
export default PNG;
