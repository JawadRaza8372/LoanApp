import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { allCenter } from "../AppInfo";
import { w, h } from "react-native-responsiveness";
const CustomButton = ({ brdrColor, bgColor, title, onPressFun }) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor: bgColor,
        borderColor: brdrColor,
      }}
      onPress={onPressFun}
    >
      <Text style={{ ...styles.title, color: brdrColor }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    width: "80%",
    height: h("8%"),
    ...allCenter,
    borderRadius: 10,
    borderWidth: 2,
    alignSelf: "center",
  },
  title: {
    fontSize: h("3%"),
  },
});
