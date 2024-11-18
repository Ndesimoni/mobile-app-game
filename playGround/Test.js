import React from "react";
import { View, Text } from "react-native";
import { colors } from "../styles/colors";

const Test = () => {
  //   function recursiveFun(number) {
  //     if (number <= 0) {
  //       console.log("number found finished");
  //       console.log(number);
  //       return;
  //     } else return recursiveFun(number - 1);
  //   }
  //   recursiveFun(1000);

  const array = [];

  for (let i = 0; i <= 20; i++) {
    array.push(i);
  }

  let a = 0;

  for (let f = a; f < array.length; f++) {
    if (array[f] > a) {
      a = array[f];
    }
  }

  function recursiveFun(n, sum = 0) {
    if (n >= 0) {
      console.log("the total is is", n);
      return;
    } else {
      return recursiveFun(n - 1, sum + n);
    }
  }
  recursiveFun(a);

  //   console.log(array);

  //   function countNumbers(f, amount = 0) {
  //     if (f <= 0) {
  //       console.log(amount);
  //       return;
  //     } else {
  //       return countNumbers(f - 1, amount + f);
  //     }
  //   }

  //   countNumbers(10);

  return (
    <View>
      <Text style={{ color: colors.secondary100, fontSize: 24 }}>{a}</Text>
    </View>
  );
};

export default Test;
