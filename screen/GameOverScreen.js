import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { colors } from "../styles/colors";
import Tittle from "../components/ui/Tittle";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({ rounds, usersNumber, handelResetGame }) => {
  return (
    <View style={styles.main2}>
      <Tittle>Game Over !</Tittle>

      <View style={styles.main}>
        <Image style={styles.image} source={require("../assets/success.png")} />
      </View>

      <Text style={styles.text}>
        it took you <Text style={styles.textSpan}>{rounds}</Text> rounds to wind
        the game with the number{" "}
        <Text style={styles.textSpan}>{usersNumber}</Text>
      </Text>
      <PrimaryButton onPress={handelResetGame}>Restart game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  main2: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  main: {
    overflow: "hidden",
    width: 300,
    height: 300,
    borderRadius: 150,
    borderColor: colors.primary100,
    borderWidth: 2,
    marginTop: 50,
  },
  image: { width: "100%", height: "100%" },

  text: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 30,
    textTransform: "capitalize",
  },
  textSpan: {
    fontFamily: "bold-font",
    color: colors.secondary100,
  },
});
