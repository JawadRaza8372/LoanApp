import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { allCenter } from "../AppInfo";
import { w, h } from "react-native-responsiveness";
import InertialAdComp from "./InertialAdComp";
const CustomButton = ({ brdrColor, bgColor, title, onPressFun }) => {
  const [isLoadinCheck, setisLoadinCheck] = useState(false);
  const onClickFun = async () => {
    setisLoadinCheck(true);
    await onPressFun();
    setisLoadinCheck(false);
  };
  return (
    <>
      <TouchableOpacity
        style={{
          ...styles.button,
          backgroundColor: bgColor,
          borderColor: brdrColor,
        }}
        onPress={onClickFun}
      >
        {isLoadinCheck ? (
          <ActivityIndicator size={"small"} color={brdrColor} />
        ) : (
          <Text style={{ ...styles.title, color: brdrColor }}>{title}</Text>
        )}
      </TouchableOpacity>
    </>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    width: "95%",
    height: h("6%"),
    ...allCenter,
    borderRadius: h("1%"),
    borderWidth: 2,
    alignSelf: "center",
  },
  title: {
    fontSize: h("2.3%"),
  },
});
