import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { colors } from "../../styles/colors";

const NumbersContainer = ({ children }) => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default NumbersContainer;

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    marginVertical: 20,
    borderColor: "#f2ebda",
    borderWidth: 0.2,
    elevation: 6,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 1,

    backgroundColor: colors.primary50,
  },
  text: {
    fontSize: 24,
    fontFamily: "bold-font",
    color: colors.secondary100,
    textAlign: "center",
  },
});
