import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import StartGameScreen from "./screen/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screen/GameScreen";
import { StatusBar } from "expo-status-bar";

import { useState } from "react";
import { colors } from "./styles/colors";
import GameOverScreen from "./screen/GameOverScreen";
import { useFonts } from "expo-font";

export default function App() {
  const [usersNumber, setUsersNumber] = useState(null);
  const [gameOverScreen, setGameOverScreen] = useState(true);
  const [rounds, setRounds] = useState(0);

  const [fontLoaded] = useFonts({
    "regular-font": require("./assets/fonts/OpenSans-Regular.ttf"),
    "bold-font": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontLoaded) {
    return <Text>"the screen is loading..."</Text>;
  }

  const handelUsersNumber = (userNumber) => {
    setUsersNumber(userNumber);
    setGameOverScreen(false);
  };

  function handleGameOver(gameRounds) {
    setGameOverScreen(true);
    setRounds(gameRounds);
  }

  function handelResetGame() {
    setUsersNumber(0);
    setGameOverScreen(false);
  }

  let screen = <StartGameScreen handelUsersNumber={handelUsersNumber} />;

  if (usersNumber) {
    screen = (
      <GameScreen
        usersInputValue={usersNumber}
        handleGameOver={handleGameOver}
      />
    );
  }

  if (gameOverScreen && usersNumber) {
    screen = (
      <GameOverScreen
        usersNumber={usersNumber}
        handelResetGame={handelResetGame}
        rounds={rounds}
      />
    );
  }

  return (
    <LinearGradient
      colors={[colors.secondary100, colors.primary100]}
      style={styles.container}
    >
      <StatusBar style="dark" />
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.image}
      >
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    opacity: 0.55,
  },
});
