import { View, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../buttons/PrimaryButton";

const StartGameScreen = () => {
  return (
    <View style={styles.main}>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
      />

      <PrimaryButton>start game</PrimaryButton>
      <PrimaryButton>stop game</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#72063c",
    borderRadius: 8,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.35,
    shadowRadius: 6,
  },

  textInput: {
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    height: 30,
    fontSize: 18,
    color: "#fff",
    paddingVertical: 5,
    textAlign: "center",
    width: 35,
  },
});

export default StartGameScreen;
