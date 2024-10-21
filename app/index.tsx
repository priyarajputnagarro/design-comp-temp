import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Index = () => {
  return (
    <View style={{ gap: 16, padding: 16 }}>
      <Link href={"/buttondemo"} style={{ fontSize: 20 }}>
        Button
      </Link>
      <Link href={"/chipdemo"} style={{ fontSize: 20 }}>
        Chip
      </Link>
    </View>
  );
};

export default Index;
