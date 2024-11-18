import { View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import { colors } from "../styles/colors";
import Tittle from "../components/ui/Tittle";
import Card from "../components/ui/Card";
import Instruction from "../components/ui/Instruction";
import ButtonContainer from "../components/ui/ButtonContainer";
import Test from "../playGround/Test";

const StartGameScreen = ({ handelUsersNumber }) => {
  const [inputValue, setInputValue] = useState("");

  function handelTextInput(value) {
    setInputValue(value);
  }

  function handelReset() {
    setInputValue("");
  }

  function handleConfirm() {
    const usersInput = parseInt(inputValue);

    if (isNaN(usersInput) || usersInput <= 0 || usersInput > 99) {
      Alert.alert("invalid number", "numbers must be between 1 and 99", [
        { text: "close", style: "destructive", onPress: handelReset },
      ]);
      return;
    }

    handelUsersNumber(inputValue);
  }

  return (
    <View style={styles.main1}>
      <Tittle>Guess My Number</Tittle>

      <Card>
        <Instruction>enter a number</Instruction>

        <TextInput
          style={styles.textInput}
          maxLength={2}
          keyboardType="number-pad"
          onChangeText={handelTextInput}
          value={inputValue}
        />

        <ButtonContainer>
          <View style={styles.buttonHold}>
            <PrimaryButton onPress={handelReset}>Reset</PrimaryButton>
          </View>

          <View style={styles.buttonHold}>
            <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
          </View>
        </ButtonContainer>
      </Card>
      <Test />
    </View>
  );
};

const styles = StyleSheet.create({
  main1: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 50,
    gap: 60,
    marginTop: "35%",
  },

  textInput: {
    borderBottomColor: colors.secondary200,
    borderBottomWidth: 1,
    fontSize: 24,
    color: colors.secondary200,
    paddingVertical: 6,
    textAlign: "center",
    width: 40,
    fontWeight: "semibold",
  },

  buttonHold: {
    flex: 1,
  },
});

export default StartGameScreen;
