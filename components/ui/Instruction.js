import React from "react";
import { Text, StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

const Instruction = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

export default Instruction;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    textTransform: "capitalize",
    color: colors.secondary200,
    paddingVertical: 6,
    textAlign: "center",
    fontFamily: "regular-font",
  },
});
