import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Badge as RNPBadge,
  BadgeProps as RNPBadgeProps,
  useTheme,
} from "react-native-paper";
import { ThemeVariablesType } from "../../app/_layout";
import { remToPx } from "../utils/helper";

const TOPLEFT = "top-left" as const;
const TOPRIGHT = "top-right" as const;
const BOTTOMLEFT = "bottom-left" as const;
const BOTTOMRIGHT = "bottom-right" as const;

type BadgePosition =
  | typeof TOPLEFT
  | typeof TOPRIGHT
  | typeof BOTTOMLEFT
  | typeof BOTTOMRIGHT;

export interface BadgeProps extends RNPBadgeProps {
  instance?: React.ReactNode;
  badgeContent?: string | undefined;
  color?: "error" | "success";
  position?: BadgePosition;
}

const Badge: React.FC<BadgeProps> = ({
  visible = true,
  badgeContent,
  instance,
  color = "success",
  position = TOPRIGHT,
}) => {
  const theme: { colors: any; variables: ThemeVariablesType } = useTheme();
  const adjustedSize = badgeContent
    ? remToPx(theme.variables.MobileGlobalGenSizeXs)
    : remToPx(theme.variables.MobileGlobalGenSize4xs);
  const positionValue = badgeContent ? -5 : 0;

  const getPosition = () => {
    switch (position) {
      case TOPLEFT:
        return { top: positionValue, left: positionValue };
      case TOPRIGHT:
        return { top: positionValue, right: positionValue };
      case BOTTOMLEFT:
        return { bottom: positionValue, left: positionValue };
      case BOTTOMRIGHT:
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
