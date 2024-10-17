import React from "react";
import { Button, useTheme } from "react-native-paper";

const ButtonComponent = ({
  size,
  color,
  label,
  mode,
}: {
  size: string;
  color: string;
  label: string;
  mode: any;
}) => {
  const theme: any = useTheme();

  const capitalize = (text: string) => text[0].toUpperCase() + text.slice(1);

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
      style={theme.buttonSizes[size]}
      labelStyle={{ fontSize: theme.buttonSizes[size].fontSize }}
      onPress={() => console.log("hey")}
    >
      {label}
    </Button>
  );
};

export default ButtonComponent;
