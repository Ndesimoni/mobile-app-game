import React from "react";
import { Text, StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

const Tittle = ({ children }) => {
  return <Text style={styles.tittle}>{children}</Text>;
};

export default Tittle;

const styles = StyleSheet.create({
  tittle: {
    fontSize: 18,
    fontFamily: "bold-font",
    textAlign: "center",
    color: colors.primary50,
    padding: 10,
    textTransform: "capitalize",
    borderColor: colors.primary100,
    borderWidth: 1,
  },
});
