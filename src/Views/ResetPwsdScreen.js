import { StyleSheet, Text, View } from "react-native";
import React from "react";
import OtherAuthButton from "../Components/OtherAuthButton";
import SafeScreenTemp from "../Components/SafeScreenTemp";
import { cardBg, allCenter } from "../AppInfo";
import ResetPswd from "../Components/ResetPswd";
const ResetPwsdScreen = ({ navigation }) => {
  return (
    <SafeScreenTemp bgColor={cardBg}>
      <View style={styles.LoginContainer}>
        <ResetPswd onSubmit={() => navigation.goBack()} />
        <OtherAuthButton
          title1={"already a user! "}
          title2={"login"}
          onPressFunc={() => navigation.goBack()}
        />
      </View>
    </SafeScreenTemp>
  );
};

export default ResetPwsdScreen;

const styles = StyleSheet.create({
  LoginContainer: {
    width: "100%",
    height: "100%",
    ...allCenter,
  },
});
