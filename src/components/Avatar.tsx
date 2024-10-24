import * as React from "react";
import { StyleSheet, ImageSourcePropType } from "react-native";
import { Avatar, useTheme } from "react-native-paper";
import { remToPx } from "../utils/helper";
import { ThemeVariablesType } from "../../app/_layout";
import Badge, { BadgeProps } from "./Badge";

interface AvatarProps {
  content: "initials" | "icon" | "image";
  imageURL?: string;
  label?: string;
  icon?: ImageSourcePropType;
  badge?: boolean;
  badgeProps?: BadgeProps;
}
const AvatarComponent: React.FC<AvatarProps> = (props) => {
  const {
    content,
    icon,
    imageURL,
    label = "",
    badge = false,
    badgeProps,
    ...rest
  } = props;
  const theme: { variables: ThemeVariablesType } = useTheme();
  const styles = getStyles(theme.variables);
  let avatar = <></>;
  switch (content) {
    case "initials":
      avatar = (
        <Avatar.Text
          style={[styles.common, styles.border]}
          labelStyle={styles.label}
          label={label}
          {...rest}
        />
      );
      break;
    case "icon":
      if (icon) {
        avatar = (
          <Avatar.Icon
            size={remToPx(theme.variables.MobileGlobalGenSize3xs) / 0.6} //To override internal calculation
            style={[styles.common, styles.icon]}
            icon={icon}
            {...rest}
          />
        );
      }
      break;
    case "image":
      avatar = (
        <Avatar.Image
          size={remToPx(theme.variables.MobileGlobalGenSizeM) - 2} //To set Image Size and adjust with border
          style={[styles.common, styles.border]}
          source={{ uri: imageURL }}
          {...rest}
        />
      );
      break;
  }
  if (badge || badgeProps) {
    return <Badge instance={avatar} color="error" position="bottom-right" {...badgeProps}/>;
  }
  return avatar;
};
const getStyles = (themeVariables: ThemeVariablesType) => {
  return StyleSheet.create({
    common: {
      display: "flex",
      width: remToPx(themeVariables.MobileGlobalGenSizeM),
      height: remToPx(themeVariables.MobileGlobalGenSizeM),
      minWidth: remToPx(themeVariables.MobileGlobalGenSizeXs),
      minHeight: remToPx(themeVariables.MobileGlobalGenSizeXs),
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      borderRadius: 100,
      backgroundColor: themeVariables.ColorPrimarySubtlest,
    },
    border: {
      borderRadius: 100,
      borderColor: themeVariables.ColorPrimarySubtle,
      borderStyle: "solid",
      borderWidth: 1,
    },
    label: {
      color: themeVariables.ColorPrimaryMain,
      textAlign: "center",
      fontSize: remToPx(themeVariables.MobileGlobalFontSizeHeadingFive),
      fontWeight: "400",
      lineHeight: remToPx(themeVariables.MobileGlobalLineHeightHeadingFive),
    },
    icon: {
      minWidth: remToPx(themeVariables.MobileGlobalGenSize3xs),
      minHeight: remToPx(themeVariables.MobileGlobalGenSize3xs),
      alignSelf: "stretch",
      display: "flex",
      padding: remToPx(themeVariables.MobileGlobalGenSpacingXs),
      alignItems: "center",
      gap: remToPx(themeVariables.MobileGlobalGenSpacingXs),
    },
  });
};

export default AvatarComponent;
