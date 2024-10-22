import React from "react";
import { Chip, useTheme } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { capitalize, remToPx } from "../utils/helper";
import { StyleSheet } from "react-native";
import { ThemeVariablesType } from "../../app/_layout";

interface ChipComponentProps {
  size?: "small" | "medium";
  label?: string;
  icon?: keyof typeof MaterialIcons.glyphMap;
  color?: string;
}

const ChipComponent: React.FC<ChipComponentProps> = ({
  size = "medium",
  label = "Chip",
  icon = "sell",
  color = "primary",
}) => {
  const theme: { colors: any; variables: ThemeVariablesType } = useTheme();
  const styles = getStyles(theme.variables);

  return (
    <Chip
      icon={() => (
        <MaterialIcons
          name={icon}
          size={styles[size].fontSize}
          color={theme.colors[`on${capitalize(color)}`]}
        />
      )}
      closeIcon={() => (
        <MaterialIcons
          name="close"
          size={styles[size].fontSize}
          color={theme.colors[`on${capitalize(color)}`]}
        />
      )}
      style={{ ...styles[size], backgroundColor: theme.colors[color] }}
      onClose={() => {}}
      textStyle={{
        color: theme.colors[`on${capitalize(color)}`],
        fontSize: styles[size].fontSize,
      }}
    >
      {label}
    </Chip>
  );
};

export default ChipComponent;

const getStyles = (theme: ThemeVariablesType) => {
  return StyleSheet.create({
    small: {
      height: remToPx(theme.MobileGlobalGenSizeS),
      paddingHorizontal: remToPx(theme.MobileGlobalGenSpacing2xs),
      borderRadius: remToPx(theme.MobileGlobalGenRadiusMd),
      fontSize: remToPx(theme.MobileGlobalFontSizeBodyS),
    },
    medium: {
      height: remToPx(theme.MobileGlobalGenSizeM),
      paddingHorizontal: remToPx(theme.MobileGlobalGenSpacing2xs),
      borderRadius: remToPx(theme.MobileGlobalGenRadiusLg),
      fontSize: remToPx(theme.MobileGlobalFontSizeBodyM),
    },
  });
};
