import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CustomInput from "./CustomInput";
import { w, h } from "react-native-responsiveness";
import {
  allCenter,
  disabeBtnTxt,
  disableBtnBg,
  mainColor,
  cardBg,
  alignStart,
  AlertFunction,
} from "../AppInfo.js";
import CustomButton from "./CustomButton";
import CustomPswdInput from "./CustomPswdInput";
import FormHeading from "./FormHeading";
const Login = ({ submitForm, forgotScreen }) => {
  const [loginInfo, setloginInfo] = useState({ email: "", password: "" });
  const buttonBack =
    loginInfo?.email && loginInfo?.password ? mainColor : disableBtnBg;
  const buttontext =
    loginInfo?.email && loginInfo?.password ? cardBg : disabeBtnTxt;
  const onSubmit = () => {
    if (loginInfo?.email.length >= 4 && loginInfo?.password.length >= 4) {
      submitForm();
    } else {
      if (loginInfo?.email.length < 4 && loginInfo?.password.length >= 4) {
        AlertFunction("Auth Error", "Please Enter a valid email.");
      } else if (
        loginInfo?.email.length >= 4 &&
        loginInfo?.password.length < 4
      ) {
        AlertFunction(
          "Auth Error",
          "Please Enter a valid password of atleast length 4."
        );
      } else {
        AlertFunction("Auth Error", "Please fill all fields.");
      }
    }
  };
  const onForgot = () => {
    forgotScreen();
  };
  return (
    <>
      <FormHeading title="Login" />
      <CustomInput
        placeholder="Enter Your Email Address"
        onChange={(text) =>
          setloginInfo((prevalue) => {
            return {
              ...prevalue,
              email: text,
            };
          })
        }
        value={loginInfo.email}
        keyboardType="email-address"
      />
      <CustomPswdInput
        placeholder="Enter Your Password"
        onChange={(text) =>
          setloginInfo((prevalue) => {
            return {
              ...prevalue,
              password: text,
            };
          })
        }
        value={loginInfo.password}
      />
      <TouchableOpacity
        onPress={onForgot}
        style={{
          width: "90%",
          height: h("8%"),
          alignSelf: "center",
          display: "flex",
          alignItems: "flex-start",
          marginBottom: h("2%"),
        }}
      >
        <Text style={{ fontSize: h("2.3%"), color: mainColor }}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
      <CustomButton
        brdrColor={cardBg}
        bgColor={mainColor}
        title={"Login"}
        onPressFun={onSubmit}
      />
    </>
  );
};

export default Login;

const styles = StyleSheet.create({});
