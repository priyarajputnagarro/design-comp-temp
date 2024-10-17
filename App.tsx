import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Button from "./src/components/Button";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import * as theme from "./src/utils/themeVariables";
import { remToPx } from "./src/utils/helper";
import Chip from "./src/components/Chip";

const MyTheme = {
  ...DefaultTheme,
  roundness: 1,
  // roundness: remToPx(theme.BorderRadiusDefault),
  colors: {
    ...DefaultTheme.colors,
    primary: theme.ColorPrimaryMain,
    onPrimary: theme.ColorPrimaryContrast,
    secondary: theme.ColorDisabledDecorationSubtle,
    onSecondary: theme.ColorTextDisabled,
    error: theme.ColorBackgroundErrorMain,
    onError: theme.ColorPrimaryContrast, // wrong color for now, new color not present in const file
  },
  buttonSizes: {
    small: {
      // height: remToPx(theme.MobileGlobalGenSizeS),
      minWidth: remToPx(theme.MobileComponentButtonMinSizeContainedSm),
      paddingVertical: 0,
      paddingHorizontal: remToPx(theme.MobileGlobalGenSpacingXs),
      fontSize: remToPx(theme.MobileGlobalFontSizeButtonS),
      // lineHeight: remToPx(theme.MobileGlobalLineHeightButtonS),
      alignSelf: "flex-start",
    },
    medium: {
      // height: remToPx(theme.MobileGlobalGenSizeM),
      minWidth: remToPx(theme.MobileComponentButtonMinSizeContainedMd),
      paddingVertical: 0,
      paddingHorizontal: remToPx(theme.MobileGlobalGenSpacingS),
      fontSize: remToPx(theme.MobileGlobalFontSizeButtonM),
      alignSelf: "flex-start",
    },
    large: {
      // height: remToPx(theme.MobileGlobalGenSizeL),
      minWidth: remToPx(theme.MobileComponentButtonMinSizeContainedLg),
      paddingVertical: 0,
      paddingHorizontal: remToPx(theme.MobileGlobalGenSpacingM),
      fontSize: remToPx(theme.MobileGlobalFontSizeButtonL),
      alignSelf: "flex-start",
    },
  },
};

const App = () => {
  return (
    <PaperProvider theme={MyTheme}>
      <ScrollView contentContainerStyle={styles.container}>
        <Chip />

        <Button label="Label" size="large" color="primary" mode="contained" />
        <Button label="Label" size="medium" color="primary" mode="contained" />
        <Button label="Label" size="small" color="primary" mode="contained" />

        <Button label="Label" size="large" color="secondary" mode="contained" />
        <Button
          label="Label"
          size="medium"
          color="secondary"
          mode="contained"
        />
        <Button label="Label" size="small" color="secondary" mode="contained" />

        <Button label="Label" size="large" color="error" mode="contained" />
        <Button label="Label" size="medium" color="error" mode="contained" />
        <Button label="Label" size="small" color="error" mode="contained" />
      </ScrollView>
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexGrow: 1,
    padding: 20,
    gap: 10,
  },
});
