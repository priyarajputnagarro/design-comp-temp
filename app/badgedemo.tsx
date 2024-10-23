import React from "react";
import Avatar from "../src/components/Avatar";
import { ScrollView } from "react-native";
import { Badge } from "../src/components/Badge";

const AvatarDemo = () => {
  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 16 }}>
      <Badge instance={<Avatar content={"initials"} label="TX" />} />
      <Badge
        color="error"
        position="bottom-right"
        instance={
          <Avatar content={"icon"} icon={require("../assets/briefcase.png")} />
        }
      />
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
