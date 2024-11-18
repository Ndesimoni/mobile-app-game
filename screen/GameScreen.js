import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import Tittle from "../components/ui/Tittle";
import NumbersContainer from "../components/Game/NumbersContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import Instruction from "../components/ui/Instruction";
import ButtonContainer from "../components/ui/ButtonContainer";
import Entypo from "@expo/vector-icons/Entypo";
import GuestOut from "../components/ui/GuestOut";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minNumber = 1;
let maxNumber = 100;

const GameScreen = ({ usersInputValue, handleGameOver }) => {
  const initialValue = generateRandomBetween(1, 100, usersInputValue);
  const [generatedNumber, setGeneratedNumber] = useState(initialValue);
  const [guessRounds, setGuessRounds] = useState([initialValue]);

  useEffect(() => {
    if (+usersInputValue === generatedNumber) {
      handleGameOver(guessRounds.length);
    }
  }, [usersInputValue, generatedNumber, handleGameOver]);

  useEffect(() => {
    minNumber = 1;
    maxNumber = 100;
  }, []);

  function handelNextGuestNumber(direction) {
    if (
      (direction === "lower" && generatedNumber < usersInputValue) ||
      (direction === "higher" && generatedNumber > usersInputValue)
    ) {
      Alert.alert("don't lie", "you know that this is  wrong ...", [
        { text: "cancel", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxNumber = generatedNumber;
    } else {
      minNumber = generatedNumber + 1;
    }

    const newRandNumber = generateRandomBetween(
      minNumber,
      maxNumber,
      generatedNumber
    );

    setGeneratedNumber(newRandNumber);
    setGuessRounds((allRounds) => [newRandNumber, ...allRounds]);
  }

  const totalRounds = guessRounds.length;

  return (
    <View style={styles.main}>
      <Tittle>opponent's Guess</Tittle>

      <View style={{ alignItems: "center", gap: "30%" }}>
        <NumbersContainer>{generatedNumber} </NumbersContainer>

        <Card>
          <Instruction>higher or lower ?</Instruction>

          <ButtonContainer>
            <View style={styles.buttonHold}>
              <PrimaryButton onPress={() => handelNextGuestNumber("lower")}>
                <Entypo name="minus" size={24} color="black" />
              </PrimaryButton>
            </View>

            <View style={styles.buttonHold}>
              <PrimaryButton onPress={() => handelNextGuestNumber("higher")}>
                <Entypo name="plus" size={24} color="black" />
              </PrimaryButton>
            </View>
          </ButtonContainer>
        </Card>
      </View>
      <View style={{ flex: 1, padding: 25 }}>
        <FlatList
          data={guessRounds}
          renderItem={(dataItems) => (
            <GuestOut
              totalRounds={totalRounds - dataItems.index}
              dataItems={dataItems.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 24,
    marginTop: "2%",
    gap: "30%",
    justifyContent: "center",
    alignContent: "center",
    padding: 5,
  },

  buttonHold: {
    flex: 1,
  },
});
