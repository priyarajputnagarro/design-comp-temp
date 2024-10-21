import React from "react";
import { Chip, useTheme } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { capitalize } from "../utils/helper";

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
  const theme: any = useTheme(); // need to create theme interface

  return (
    <Chip
      icon={() => (
        <MaterialIcons
          name={icon}
          size={theme.chipSizes[size].fontSize}
          color={theme.colors[`on${capitalize(color)}`]}
        />
      )}
      closeIcon={() => (
        <MaterialIcons
          name="close"
          size={theme.chipSizes[size].fontSize}
          color={theme.colors[`on${capitalize(color)}`]}
        />
      )}
      style={{ ...theme.chipSizes[size], backgroundColor: theme.colors[color] }}
      onClose={() => {}}
      textStyle={{
        color: theme.colors[`on${capitalize(color)}`],
        fontSize: theme.chipSizes[size].fontSize,
      }}
    >
      {label}
    </Chip>
  );
};

export default ChipComponent;
