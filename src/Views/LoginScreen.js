import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SafeScreenTemp from "../Components/SafeScreenTemp";
import { cardBg, allCenter } from "../AppInfo";
import Login from "../Components/Login";
import OtherAuthButton from "../Components/OtherAuthButton";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
const LoginScreen = ({ navigation }) => {
  return (
    <SafeScreenTemp bgColor={cardBg}>
      <KeyboardAvoidingScrollView contentContainerStyle={styles.LoginContainer}>
        <Login
          submitForm={() => navigation.navigate("DashboardScreen")}
          forgotScreen={() => {
            navigation.navigate("ResetPswdScreen");
          }}
        />
        <OtherAuthButton
          onPressFunc={() => navigation.replace("SignUpScreen")}
          title1={"Don't have an account! "}
          title2={"signup"}
        />
      </KeyboardAvoidingScrollView>
    </SafeScreenTemp>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  LoginContainer: {
    width: "100%",
    height: "100%",
    ...allCenter,
    flexDirection: "column",
  },
});
