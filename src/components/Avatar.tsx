import * as React from "react";
import { Avatar } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";


type AvatarProps = {
  variant: "TEXT" | "IMAGE" | "ICON";
  icon?: any;
};
const AvatarComponent = (props: AvatarProps) => {
  const { variant, icon } = props;
  switch (variant) {
    case "TEXT":
      return <Avatar.Text size={64} label="TX" />;
    case "ICON":
      return <Avatar.Icon size={64} icon={icon} />;
    case "IMAGE":
      return (
        <Avatar.Image size={64} source={{ uri: "https://picsum.photos/200" }} />
      );
    default:
      return <Avatar.Text size={64} label="NA" />;
  }
};
export default AvatarComponent;
