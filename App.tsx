import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Button from "./src/components/Button";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import * as theme from "./src/utils/themeVariables";
import { remToPx } from "./src/utils/helper";
import Chip from "./src/components/Chip";

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

const showChips = () => (
  <>
    <Chip size="small" color="secondary" label="Chip" icon="sell" />
    <Chip size="medium" color="secondary" label="Chip" icon="sell" />

    <Chip size="small" color="secondaryLight" label="Chip" icon="sell" />
    <Chip size="medium" color="secondaryLight" label="Chip" icon="sell" />

    <Chip size="small" color="primary" label="Chip" icon="sell" />
    <Chip size="medium" color="primary" label="Chip" icon="sell" />

    <Chip size="small" color="primaryLight" label="Chip" icon="sell" />
    <Chip size="medium" color="primaryLight" label="Chip" icon="sell" />

    <Chip size="small" color="error" label="Chip" icon="sell" />
    <Chip size="medium" color="error" label="Chip" icon="sell" />

    <Chip size="small" color="errorLight" label="Chip" icon="sell" />
    <Chip size="medium" color="errorLight" label="Chip" icon="sell" />

    <Chip size="small" color="success" label="Chip" icon="sell" />
    <Chip size="medium" color="success" label="Chip" icon="sell" />

    <Chip size="small" color="successLight" label="Chip" icon="sell" />
    <Chip size="medium" color="successLight" label="Chip" icon="sell" />
  </>
);

const showButtons = () => (
  <>
    <Button label="Label" size="large" color="primary" mode="contained" />
    <Button label="Label" size="medium" color="primary" mode="contained" />
    <Button label="Label" size="small" color="primary" mode="contained" />

    <Button label="Label" size="large" color="primary" mode="outlined" />
    <Button label="Label" size="medium" color="primary" mode="outlined" />
    <Button label="Label" size="small" color="primary" mode="outlined" />

    <Button label="Label" size="large" color="primary" mode="text" />
    <Button label="Label" size="medium" color="primary" mode="text" />
    <Button label="Label" size="small" color="primary" mode="text" />

    <Button
      label="Label"
      size="large"
      color="secondaryLight"
      mode="contained"
    />
    <Button
      label="Label"
      size="medium"
      color="secondaryLight"
      mode="contained"
    />
    <Button
      label="Label"
      size="small"
      color="secondaryLight"
      mode="contained"
    />

    <Button label="Label" size="large" color="error" mode="contained" />
    <Button label="Label" size="medium" color="error" mode="contained" />
    <Button label="Label" size="small" color="error" mode="contained" />
  </>
);

const App = () => {
  return (
    <PaperProvider theme={MyTheme}>
      <ScrollView contentContainerStyle={styles.container}>
        {showChips()}

        {showButtons()}
      </ScrollView>
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexGrow: 1,
    padding: 40,
    gap: 10,
  },
});
