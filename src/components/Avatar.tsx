import * as React from "react";
import { StyleSheet, ImageSourcePropType} from "react-native";
import { Avatar, useTheme, } from "react-native-paper";
import { remToPx } from "../utils/helper";
import { ThemeVariablesType } from "../../app/_layout";

interface AvatarProps {
  content: "initials" | "icon" | "image";
  imageURL?: string;
  label?: string;
  icon?: ImageSourcePropType;
  badge?: boolean;
}
const AvatarComponent: React.FC<AvatarProps> = (props) => {
  const {
    content,
    icon,
    imageURL,
    label = "",
    badge = false, //TODO: Add badge support
    ...rest
  } = props;
  const theme: { variables: ThemeVariablesType } = useTheme();
  const styles = getStyles(theme.variables);
  switch (content) {
    case "initials":
      return (
        <Avatar.Text
          style={[styles.common, styles.border, styles.backgroundColor]}
          labelStyle={styles.label}
          label={label}
          {...rest}
        />
      );
    case "icon":
      if(icon){
        return (
          <Avatar.Icon
            size={remToPx(theme.variables.MobileGlobalGenSize3xs) / 0.6} //To override internal calculation
            style={[styles.common, styles.backgroundColor, styles.icon]}
            icon={icon}
            {...rest}
          />
        );
      }
      else{
        return <></>;
      }
    case "image":
      return (
        <Avatar.Image
          size={remToPx(theme.variables.MobileGlobalGenSizeM) - 2} //To set Image Size and adjust with border
          style={[styles.common, styles.border]}
          source={{ uri: imageURL }}
          {...rest}
        />
      );
    default:
      return <></>;
  }
};
const getStyles = (
  themeVariables: ThemeVariablesType
) => {
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
    },
    border: {
      borderRadius: 100,
      borderColor: themeVariables.ColorPrimarySubtle,
      borderStyle: "solid",
      borderWidth: 1,
    },
    backgroundColor: {
      backgroundColor: themeVariables.ColorPrimarySubtlest,
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
