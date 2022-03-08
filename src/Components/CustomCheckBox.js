import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import { alignStart, allCenter, justifyStart, mainColor } from "../AppInfo";
import { MaterialIcons } from "@expo/vector-icons";

const CustomCheckBox = ({ isChecked, title, onPressFun, isCircle }) => {
  return (
    <TouchableOpacity onPress={onPressFun} style={styles.checkboxCont}>
      {!isCircle ? (
        <View style={styles.checkBox}>
          {isChecked && (
            <MaterialIcons name="done" size={h("2.5%")} color={mainColor} />
          )}
        </View>
      ) : (
        <View style={styles.checkBoxCircle}>
          {isChecked && <View style={styles.checkBoxMini} />}
        </View>
      )}
      <Text
        style={{
          ...styles.checkBoxTxt,
          color: isCircle ? mainColor : "black",
          fontWeight: isCircle ? "bold" : "600",
          fontSize: isCircle ? h("2.2%") : h("2.1%"),
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomCheckBox;

const styles = StyleSheet.create({
  checkboxCont: {
    width: "90%",
    ...justifyStart,
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: h("3%"),
    overflow: "hidden",
  },
  checkBox: {
    width: h("3%"),
    height: h("3%"),
    borderColor: mainColor,
    borderWidth: 2,
    marginRight: 15,
    ...allCenter,
    overflow: "hidden",
  },
  checkBoxCircle: {
    width: h("3%"),
    height: h("3%"),
    borderRadius: h("3%"),
    borderColor: mainColor,
    borderWidth: 2,
    marginRight: 15,
    ...allCenter,
    overflow: "hidden",
  },
  checkBoxMini: {
    width: h("1.8%"),
    height: h("1.8%"),
    borderRadius: h("1.8%"),
    backgroundColor: mainColor,
    overflow: "hidden",
  },
  checkBoxTxt: {
    width: "88%",
  },
});
