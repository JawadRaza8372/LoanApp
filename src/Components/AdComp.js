import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as FacebookAds from "expo-ads-facebook";
const { AdTriggerView, AdMediaView } = FacebookAds;

const AdComp = ({ nativeAd }) => {
  return (
    <View style={styles.addContainer}>
      <AdMediaView />
      <AdTriggerView>
        <Text>{this.props.nativeAd.bodyText}</Text>
      </AdTriggerView>{" "}
    </View>
  );
};

export default FacebookAds.withNativeAd(AdComponent);

const styles = StyleSheet.create({
  addContainer: {
    width: "100%",
    height: 50,
    fontSize: 15,
  },
});
