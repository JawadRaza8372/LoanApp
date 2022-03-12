import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import SafeScreenTemp from "../Components/SafeScreenTemp";
import { cardBg, allCenter } from "../AppInfo";
import Login from "../Components/Login";
import OtherAuthButton from "../Components/OtherAuthButton";
import { UserStore } from "../store/User";
const LoginScreen = ({ navigation }) => {
  const resp = UserStore.useState();
  useEffect(() => {
    if (resp?.user) {
      navigation.replace("DashboardScreen");
    }
  }, [resp]);
  return (
    <SafeScreenTemp bgColor={cardBg}>
      <View style={styles.LoginContainer}>
        <Login
          submitForm={() => navigation.replace("DashboardScreen")}
          forgotScreen={() => {
            navigation.navigate("ResetPswdScreen");
          }}
        />
        <OtherAuthButton
          onPressFunc={() => navigation.replace("SignUpScreen")}
          title1={"Don't have an account! "}
          title2={"signup"}
        />
      </View>
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
