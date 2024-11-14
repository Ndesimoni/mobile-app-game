import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.main}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.iosPress, styles.Press] : styles.Press
        }
        onPress={onPress}
        android_ripple={{ color: "#f0ece6" }}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  main: {
    margin: 4,
    overflow: "hidden",
    borderRadius: 28,
  },

  Press: {
    backgroundColor: "#f2e0bf",
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 4,
  },

  text: {
    color: "#1c1a18",
    fontSize: 16,
    fontWeight: "semibold",
    textAlign: "center",
  },

  iosPress: {
    opacity: 0.8,
  },
});
