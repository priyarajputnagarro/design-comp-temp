import { View, Text } from "react-native";
import React from "react";
import Avatar from "../src/components/Avatar";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native";

const AvatarDemo = () => {
  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 16 }}>
      <Avatar variant={"TEXT"} />
      <Avatar variant={"IMAGE"} />
      <Avatar
        variant={"ICON"}
        icon={() => <MaterialIcons name="folder" size={40} color="white" />}
      />
    </ScrollView>
  );
};

export default AvatarDemo;
