import { View, Text, ScrollView } from "react-native";
import React from "react";
import Button from "../src/components/Button";

const ButtonDemo = () => {
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

  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 16 }}>
      {showButtons()}
    </ScrollView>
  );
};

export default ButtonDemo;
