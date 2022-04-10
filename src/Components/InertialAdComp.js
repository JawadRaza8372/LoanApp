import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { mainColor } from "../AppInfo";
import { w, h } from "react-native-responsiveness";
const InertialAdComp = () => {
  return (
    <>
      <View style={styles.inetialAdMain}>
        <Image
          style={styles.imageInt}
          source={require("../../assets/intAdd.png")}
        />
      </View>
    </>
  );
};

export default InertialAdComp;

const styles = StyleSheet.create({
  inetialAdMain: {
    position: "absolute",
    top: 0,
    width: w("100%"),
    height: h("100%"),
    backgroundColor: mainColor,
    zIndex: 100,
  },
  imageInt: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
