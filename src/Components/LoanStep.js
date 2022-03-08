import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import { alignStart, allCenter } from "../AppInfo";
const LoanStep = ({ children, title }) => {
  return (
    <View style={styles.loanStpDv}>
      <View style={styles.imgCont}>{children}</View>
      <View style={styles.txtCont}>
        <Text style={styles.txtTitle}>{title}</Text>
      </View>
    </View>
  );
};

export default LoanStep;

const styles = StyleSheet.create({
  loanStpDv: {
    width: "90%",
    height: h("9%"),
    alignSelf: "center",
    ...allCenter,
    flexDirection: "row",
    overflow: "hidden",
  },
  imgCont: {
    width: "20%",
    height: "100%",
  },
  txtCont: {
    width: "80%",
    height: "100%",
    ...alignStart,
    paddingLeft: 10,
  },
  txtTitle: {
    fontSize: h("3%"),
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});
