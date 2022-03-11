import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import SafeScreenTemp from "../Components/SafeScreenTemp";
import { cardBg, allCenter } from "../AppInfo";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import OtherAuthButton from "../Components/OtherAuthButton";
import { UserStore } from "../store/User";
const SignUpScreen = ({ navigation }) => {
  const resp = UserStore.useState();
  useEffect(() => {
    if (resp?.user) {
      navigation.replace("DashboardScreen");
    }
  }, [resp]);
  return (
    <SafeScreenTemp bgColor={cardBg}>
      <View style={styles.LoginContainer}>
        <SignUp submitForm={() => navigation.replace("DashboardScreen")} />
        <OtherAuthButton
          title1={"already a user! "}
          title2={"login"}
          onPressFunc={() => navigation.replace("LoginScreen")}
        />
      </View>
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
