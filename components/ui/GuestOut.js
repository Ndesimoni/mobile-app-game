import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { colors } from "../../styles/colors";

const GuestOut = ({ dataItems, totalRounds }) => {
  return (
    <View style={styles.mainDiv}>
      <View>
        <Text style={styles.text}> No: {totalRounds}</Text>
      </View>

      <View>
        <Text style={styles.text}> opponent Guess: {dataItems}</Text>
      </View>
    </View>
  );
};

export default GuestOut;

const styles = StyleSheet.create({
  mainDiv: {
    backgroundColor: colors.secondary200,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.primary100,
    paddingVertical: 8,
    paddingHorizontal: 13,
    marginBottom: 20,
    borderRadius: 25,
    elevation: 6,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2.7 },
    shadowOpacity: 4,
    shadowRadius: 0,
  },

  text: {
    textTransform: "capitalize",
    color: colors.primary100,
    padding: 2,
  },
});

// const styles = StyleSheet.create({
//     mainDiv: {
//         backgroundColor: colors.primary100,
//         flexDirection: "row",
//         justifyContent: "space-between",
//         alignItems: "center",
//         borderWidth: 1,
//         borderColor: colors.secondary200,
//         paddingVertical: 8,
//         paddingHorizontal: 13,
//         borderRadius: 25,
//         elevation: 6,
//         shadowColor: "black",
//         shadowOffset: { width: 1, height: 4 },
//         shadowOpacity: 2,
//         shadowRadius: 2.5,
//         marginBottom: 20,
//     },

//     text: {
//         textTransform: "capitalize",
//         color: colors.secondary200,
//         padding: 2,
//     },
// });
