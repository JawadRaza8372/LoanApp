import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { w, h } from "react-native-responsiveness";
const SafeScreenTemp = ({ bgColor, children }) => {
  return (
    <>
      <StatusBar />
      <View
        style={{
          ...styles.safescreen,
          backgroundColor: bgColor ? bgColor : "transparent",
        }}
      >
        {children}
      </View>
    </>
  );
};

export default SafeScreenTemp;

const styles = StyleSheet.create({
  safescreen: {
    width: w("100%"),
    height: h("100%"),
  },
});
