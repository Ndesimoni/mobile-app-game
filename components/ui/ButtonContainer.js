import { View, StyleSheet } from "react-native";

const ButtonContainer = ({ children }) => {
  return <View style={styles.buttonContainer}>{children}</View>;
};

export default ButtonContainer;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    marginTop: 5,
    gap: 2,
  },
});
