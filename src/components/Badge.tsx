import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Badge as RNPBadge,
  BadgeProps as RNPBadgeProps,
  useTheme,
} from "react-native-paper";
import { ThemeVariablesType } from "../../app/_layout";
import { remToPx } from "../utils/helper";

export interface BadgeProps extends RNPBadgeProps {
  instance?: React.ReactNode;
  badgeContent?: string | undefined;
  color?: "error" | "success";
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

const Badge: React.FC<BadgeProps> = ({
  visible = true,
  badgeContent,
  instance,
  color = "success",
  position = "top-right",
}) => {
  const theme: { colors: any; variables: ThemeVariablesType } = useTheme();
  const adjustedSize = badgeContent
    ? remToPx(theme.variables.MobileGlobalGenSizeXs)
    : remToPx(theme.variables.MobileGlobalGenSize4xs);
  const positionValue = badgeContent ? -5 : 0;

  const getPosition = () => {
    switch (position) {
      case "top-left":
        return { top: positionValue, left: positionValue };
      case "top-right":
        return { top: positionValue, right: positionValue };
      case "bottom-left":
        return { bottom: positionValue, left: positionValue };
      case "bottom-right":
        return { bottom: positionValue, right: positionValue };
    }
  };

  return (
    <View style={styles.instanceContainer}>
      {instance}

      <RNPBadge
        visible={visible}
        style={{
          ...styles.badge,
          ...getPosition(),
          backgroundColor: theme.colors[color],
        }}
        size={adjustedSize}
      >
        {badgeContent}
      </RNPBadge>
    </View>
  );
};

const styles = StyleSheet.create({
  instanceContainer: {
    alignSelf: "flex-start",
  },
  badge: {
    position: "absolute",
  },
});

export default Badge;
