import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Index = () => {
  return (
    <View style={{ gap: 16, padding: 16 }}>
      <Link href={"(tabs)"} style={{ fontSize: 20 }}>
       Icons SVG vs PNG Demo
      </Link>
      <Link href={"/buttondemo"} style={{ fontSize: 20 }}>
        Button
      </Link>
      <Link href={"/chipdemo"} style={{ fontSize: 20 }}>
        Chip
      </Link>
      <Link href={"/avatardemo"} style={{ fontSize: 20 }}>
        Avatar
      </Link>
    </View>
  );
};

export default Index;
