import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
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
import FormHeading from "./FormHeading";
const ResetPswd = ({ onSubmit }) => {
  const [emil, setemil] = useState("");
  const onSubmitForm = () => {
    if (emil === "" && emil.length < 5) {
      AlertFunction("Form Error", "Please enter your valid email address");
    } else {
      onSubmit();
    }
  };
  return (
    <>
      <FormHeading title="Reset" />
      <CustomInput
        placeholder="Enter Your Email Address"
        onChange={(text) => setemil(text)}
        value={emil}
        keyboardType="email-address"
      />
      <CustomButton
        brdrColor={cardBg}
        bgColor={mainColor}
        title={"Reset"}
        onPressFun={onSubmitForm}
      />
    </>
  );
};

export default ResetPswd;

const styles = StyleSheet.create({});
