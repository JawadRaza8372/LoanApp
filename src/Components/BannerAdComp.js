import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { allCenter, mainColor } from "../AppInfo";
import { w, h } from "react-native-responsiveness";
const BannerAdComp = () => {
  return (
    <View style={styles.adDivstyle}>
      <Image source={require("../../assets/banner.jpg")} style={styles.Image} />
    </View>
  );
};

export default BannerAdComp;

const styles = StyleSheet.create({
  adDivstyle: {
    position: "absolute",
    bottom: 5,
    width: "95%",
    borderRadius: 10,
    backgroundColor: mainColor,
    alignSelf: "center",
    height: h("12%"),
    overflow: "hidden",
    ...allCenter,
  },
  Image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
