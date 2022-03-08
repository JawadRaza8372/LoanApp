import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import {
  allCenter,
  disabeBtnTxt,
  disableBtnBg,
  mainColor,
  cardBg,
  alignStart,
} from "../AppInfo.js";
const FormHeading = ({ title }) => {
  return (
    <View style={styles.formheadDiv}>
      <Text style={styles.heading}>{title}</Text>
    </View>
  );
};

export default FormHeading;

const styles = StyleSheet.create({
  formheadDiv: {
    width: "90%",
    height: h("8%"),
    alignSelf: "center",
    ...allCenter,
    marginBottom: h("5%"),
  },
  heading: { fontSize: h("6.2%"), color: mainColor, fontWeight: "bold" },
});
