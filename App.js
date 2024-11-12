import { StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./screen/StartGameScreen";

export default function App() {
  return (
    <View>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
