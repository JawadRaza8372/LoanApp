import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import { allCenter, cardBg, mainColor } from "../AppInfo";
import { Ionicons } from "@expo/vector-icons";
const ScreenHeader = ({ title, onPressfun, isBack }) => {
  return (
    <View style={styles.screenHeaderDiv}>
      <Text style={styles.hedrTxt}>{title}</Text>
      {isBack && (
        <TouchableOpacity style={styles.backButton} onPress={onPressfun}>
          <Ionicons name="arrow-back-outline" size={h("6%")} color={cardBg} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  screenHeaderDiv: {
    width: "100%",
    height: h("9%"),
    backgroundColor: mainColor,
    ...allCenter,
    position: "relative",
  },
  hedrTxt: {
    fontSize: h("3%"),
    fontWeight: "bold",
    color: cardBg,
  },
  backButton: {
    width: w("15%"),
    height: h("9%"),
    position: "absolute",
    top: 0,
    left: 0,
    ...allCenter,
  },
});
