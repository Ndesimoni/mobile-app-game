import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: colors.primary100,
    borderRadius: 8,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.35,
    shadowRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
});
