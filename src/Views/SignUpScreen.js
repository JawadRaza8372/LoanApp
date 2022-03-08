import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import SafeScreenTemp from "../Components/SafeScreenTemp";
import { cardBg, allCenter } from "../AppInfo";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import OtherAuthButton from "../Components/OtherAuthButton";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
const SignUpScreen = ({ navigation }) => {
  return (
    <SafeScreenTemp bgColor={cardBg}>
      <KeyboardAvoidingScrollView contentContainerStyle={styles.LoginContainer}>
        <SignUp submitForm={() => navigation.navigate("DashboardScreen")} />
        <OtherAuthButton
          title1={"already a user! "}
          title2={"login"}
          onPressFunc={() => navigation.replace("LoginScreen")}
        />
      </KeyboardAvoidingScrollView>
    </SafeScreenTemp>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  LoginContainer: {
    width: "100%",
    height: "100%",
    ...allCenter,
    flexDirection: "column",
  },
});
