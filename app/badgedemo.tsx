import React from "react";
import Avatar from "../src/components/Avatar";
import { ScrollView, View } from "react-native";
import Badge from "../src/components/Badge";
import User from "../assets/svg/User";

const AvatarDemo = () => {
  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 16 }}>
      <Badge
        instance={<Avatar content={"initials"} label="TX" />}
        onPress={() => console.log("hi?")}
      />
      <Badge
        instance={<User width={50} height={50} />}
        onPress={() => console.log("hi?")}
      />

      <Badge
        color="error"
        position="bottom-right"
        onPress={() => console.log("hi???")}
        instance={
          <Avatar content={"icon"} icon={require("../assets/briefcase.png")} />
        }
      />

      <View style={{ flexDirection: "row", gap: 20 }}>
        <Badge
          position="top-left"
          instance={<User width={20} height={20} />}
          onPress={() => console.log("hi?")}
        />
        <Badge
          position="top-left"
          instance={<User width={50} height={50} />}
          onPress={() => console.log("hi?")}
        />
      </View>

      <Badge
        position="top-right"
        badgeContent={"4"}
        instance={
          <Avatar
            content={"image"}
            imageURL={
              "https://fastly.picsum.photos/id/204/5000/3333.jpg?hmac=EealoGuyf-stZ5_tXjA82uPviolpuqVJVaZ5cBB-hLE"
            }
          />
        }
      />
    </ScrollView>
  );
};

export default AvatarDemo;
