import React from "react";
import { Stack } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";
import * as theme from "../src/utils/themeVariables";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { remToPx } from "../src/utils/helper";

const Layout = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: theme.ColorPrimaryMain,
      onPrimary: theme.ColorPrimaryContrast,
      secondary: theme.ColorSecondaryDark,
      onSecondary: theme.ColorTextContrast,
      error: theme.ColorBackgroundErrorMain,
      onError: theme.ColorPrimaryContrast, // wrong color for now, new color not present in const file
      success: theme.ColorBackgroundSuccessMain,
      onSuccess: theme.ColorPrimaryContrast, // wrong color for now, new color not present in const file
      primaryLight: theme.ColorPrimarySubtlest,
      onPrimaryLight: theme.ColorPrimaryMain,
      secondaryLight: theme.ColorValidationBackgroundNeutralSubtle,
      onSecondaryLight: theme.ColorTextPrimary,
      errorLight: theme.ColorBackgroundErrorSubtlest,
      onErrorLight: theme.ColorTextErrorMain,
      successLight: theme.ColorBackgroundSuccessSubtlest,
      onSuccessLight: theme.ColorTextSuccessMain,
      chipTextLight: theme.ColorPrimaryContrast,
    },
    buttonSizes: {
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
    },
    chipSizes: {
      small: {
        height: remToPx(theme.MobileGlobalGenSizeS),
        paddingHorizontal: remToPx(theme.MobileGlobalGenSpacing2xs),
        borderRadius: remToPx(theme.MobileGlobalGenRadiusMd),
        fontSize: 12,
        width: "auto",
        alignSelf: "flex-start",
        justifyContent: "center",
      },
      medium: {
        height: remToPx(theme.MobileGlobalGenSizeM),
        paddingHorizontal: remToPx(theme.MobileGlobalGenSpacing2xs),
        borderRadius: remToPx(theme.MobileGlobalGenRadiusLg),
        fontSize: 14,
        alignSelf: "flex-start",
        justifyContent: "center",
      },
    },
  };
  return (
    <PaperProvider theme={MyTheme}>
      <ScrollView contentContainerStyle={styles.container}>
        <Stack>
          <Stack.Screen name="index" options={{ title: "Home" }} />
          <Stack.Screen name="buttondemo" options={{ title: "Button Demo" }} />
          <Stack.Screen name="chipdemo" options={{ title: "Chip Demo" }} />
          <Stack.Screen name="avatardemo" options={{ title: "Avatar Demo" }} />
        </Stack>
      </ScrollView>
    </PaperProvider>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexGrow: 1,
  },
});
