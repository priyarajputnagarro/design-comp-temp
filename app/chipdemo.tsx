import { ScrollView, View } from "react-native";
import React from "react";
import Chip from "../src/components/Chip";

const Chipdemo = () => {
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

  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 16 }}>
      {showChips()}
    </ScrollView>
  );
};

export default Chipdemo;
