import React from "react";
import { Button, useTheme } from "react-native-paper";
import { capitalize } from "../utils/helper";

interface ButtonComponentProps {
  size: string;
  color: string;
  label: string;
  mode: "text" | "outlined" | "contained";
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  size,
  color,
  label,
  mode,
}) => {
  const theme: any = useTheme(); // need to create theme interface
  return (
    <Button
      theme={{
        colors: {
          primary: theme.colors[color],
          onPrimary: theme.colors[`on${capitalize(color)}`],
        },
      }}
      mode={mode}
      compact
      style={{ ...theme.buttonSizes[size], borderColor: theme.colors[color] }}
      labelStyle={{ fontSize: theme.buttonSizes[size].fontSize }}
      onPress={() => console.log("hey")}
    >
      {label}
    </Button>
  );
};

export default ButtonComponent;
