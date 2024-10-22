import React from "react";
import { Button, useTheme } from "react-native-paper";
import { capitalize, remToPx } from "../utils/helper";
import { StyleSheet } from "react-native";
import { ThemeVariablesType } from "../../app/_layout";

interface ButtonComponentProps {
  size: "small" | "medium" | "large";
  color: "primary" | "secondaryLight" | "error";
  label: string;
  mode: "text" | "outlined" | "contained";
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  size,
  color,
  label,
  mode,
}) => {
  const theme: { colors: any; variables: ThemeVariablesType } = useTheme();
  const styles = getStyles(theme?.variables);

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
      style={{ ...styles[size], borderColor: theme.colors[color] }}
      labelStyle={{ fontSize: styles[size].fontSize }}
      onPress={() => console.log("hey")}
    >
      {label}
    </Button>
  );
};

export default ButtonComponent;

const getStyles = (theme: ThemeVariablesType) => {
  return StyleSheet.create({
    small: {
      // height: remToPx(theme.MobileGlobalGenSizeS), // this is causing issue in button text, find a fix
      minWidth: remToPx(theme.MobileComponentButtonMinSizeContainedSm),
      paddingVertical: 0,
      paddingHorizontal: remToPx(theme.MobileGlobalGenSpacingXs),
      fontSize: remToPx(theme.MobileGlobalFontSizeButtonS),
      borderRadius: remToPx(theme.BorderRadiusDefault),
      alignSelf: "flex-start",
      justifyContent: "center",
    },
    medium: {
      height: remToPx(theme.MobileGlobalGenSizeM),
      minWidth: remToPx(theme.MobileComponentButtonMinSizeContainedMd),
      paddingVertical: 0,
      paddingHorizontal: remToPx(theme.MobileGlobalGenSpacingS),
      fontSize: remToPx(theme.MobileGlobalFontSizeButtonM),
      borderRadius: remToPx(theme.BorderRadiusDefault),
      alignSelf: "flex-start",
      justifyContent: "center",
    },
    large: {
      height: remToPx(theme.MobileGlobalGenSizeL),
      minWidth: remToPx(theme.MobileComponentButtonMinSizeContainedLg),
      paddingVertical: 0,
      paddingHorizontal: remToPx(theme.MobileGlobalGenSpacingM),
      fontSize: remToPx(theme.MobileGlobalFontSizeButtonL),
      borderRadius: remToPx(theme.BorderRadiusDefault),
      alignSelf: "flex-start",
      justifyContent: "center",
    },
  });
};
