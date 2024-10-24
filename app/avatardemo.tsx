import React from "react";
import Avatar from "../src/components/Avatar";
import { ScrollView } from "react-native";

const AvatarDemo = () => {
  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 16 }}>
      <Avatar content={"initials"} label="TX" />
      <Avatar content={"icon"} icon={require("../assets/briefcase.png")} />
      <Avatar
        content={"image"}
        imageURL={
          "https://fastly.picsum.photos/id/204/5000/3333.jpg?hmac=EealoGuyf-stZ5_tXjA82uPviolpuqVJVaZ5cBB-hLE"
        }
      />
      <Avatar content={"initials"} label="TX" badge />
      <Avatar
        content={"icon"}
        icon={require("../assets/briefcase.png")}
        badgeProps={{ color: "success", position: "bottom-right" }}
      />
      <Avatar
        content={"image"}
        imageURL={
          "https://fastly.picsum.photos/id/204/5000/3333.jpg?hmac=EealoGuyf-stZ5_tXjA82uPviolpuqVJVaZ5cBB-hLE"
        }
        badgeProps={{
          color: "success",
          position: "bottom-right",
          badgeContent: "2",
        }}
      />
    </ScrollView>
  );
};

export default AvatarDemo;
