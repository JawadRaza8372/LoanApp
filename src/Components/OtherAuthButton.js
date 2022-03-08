import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { allCenter, mainColor } from "../AppInfo";
import { w, h } from "react-native-responsiveness";
const OtherAuthButton = ({ onPressFunc, title1, title2 }) => {
  return (
    <TouchableOpacity style={styles.oyherAuth} onPress={onPressFunc}>
      <Text style={styles.othertxt}>
        {title1} <Text style={styles.spcltxt}>{title2}</Text>
      </Text>
    </TouchableOpacity>
  );
};

export default OtherAuthButton;

const styles = StyleSheet.create({
  oyherAuth: {
    width: "90%",
    ...allCenter,
    flex: 1 / 3,
    alignSelf: "center",
    marginTop: h("3%"),
  },
  othertxt: {
    fontSize: h("2.6%"),
    fontWeight: "700",
    textTransform: "capitalize",
  },
  spcltxt: {
    color: mainColor,
    textTransform: "uppercase",
  },
});
