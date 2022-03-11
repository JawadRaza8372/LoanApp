import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { w, h } from "react-native-responsiveness";
import {
  allCenter,
  disabeBtnTxt,
  disableBtnBg,
  mainColor,
  cardBg,
  AlertFunction,
} from "../AppInfo";
import CustomPswdInput from "./CustomPswdInput";
import CustomCheckBox from "./CustomCheckBox";
import FormHeading from "./FormHeading";
import { db } from "../myFirebaseConfig.js";
const SignUp = ({ submitForm }) => {
  const [signUpInfo, setsignUpInfo] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPswd: "",
    policyCheck: false,
  });
  const buttonBack =
    signUpInfo?.name && signUpInfo?.phone && signUpInfo?.password
      ? mainColor
      : disableBtnBg;
  const buttontext =
    signUpInfo?.name && signUpInfo?.phone && signUpInfo?.password
      ? cardBg
      : disabeBtnTxt;
  const onSubmit = () => {
    if (
      signUpInfo?.name.length >= 4 &&
      signUpInfo?.phone.length >= 4 &&
      signUpInfo?.email.length >= 4 &&
      signUpInfo?.password.length >= 4 &&
      signUpInfo?.confirmPswd.length >= 4 &&
      signUpInfo?.policyCheck
    ) {
      if (signUpInfo?.password === signUpInfo?.confirmPswd) {
        await db
          .collection("users")
          .where("email", "==", `${loginInfo?.email}`)
          .get()
          .then((querySnapshot) => {
            if (querySnapshot.length > 0) {
              AlertFunction(
                "Email exists",
                "You can not use a pre-registered email."
              );
            } else {
              db.collection("users")
                .add({
                  name: signUpInfo?.name,
                  phone: signUpInfo?.phone,
                  email: signUpInfo?.email,
                  password: signUpInfo?.password,
                  policyCheck: signUpInfo?.policyCheck,
                })
                .then((docRef) => {
                  storeData({ id: docRef.id });
                  submitForm();
                });
            }
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      } else {
        AlertFunction("Auth Error", "Your both passwords does not match");
      }
    } else {
      if (
        signUpInfo?.name.length < 4 &&
        signUpInfo?.phone.length >= 4 &&
        signUpInfo?.email.length >= 4 &&
        signUpInfo?.password.length >= 4 &&
        signUpInfo?.confirmPswd.length >= 4 &&
        signUpInfo?.policyCheck
      ) {
        AlertFunction("Auth Error", "Please Enter a valid name");
      }
      if (
        signUpInfo?.name.length >= 4 &&
        signUpInfo?.phone.length < 4 &&
        signUpInfo?.email.length >= 4 &&
        signUpInfo?.password.length >= 4 &&
        signUpInfo?.confirmPswd.length >= 4 &&
        signUpInfo?.policyCheck
      ) {
        AlertFunction("Auth Error", "Please Enter a valid phone number");
      }
      if (
        signUpInfo?.name.length >= 4 &&
        signUpInfo?.phone.length >= 4 &&
        signUpInfo?.email.length < 4 &&
        signUpInfo?.password.length >= 4 &&
        signUpInfo?.confirmPswd.length >= 4 &&
        signUpInfo?.policyCheck
      ) {
        AlertFunction("Auth Error", "Please Enter a valid email");
      }
      if (
        signUpInfo?.name.length >= 4 &&
        signUpInfo?.phone.length >= 4 &&
        signUpInfo?.email.length >= 4 &&
        signUpInfo?.password.length < 4 &&
        signUpInfo?.confirmPswd.length >= 4 &&
        signUpInfo?.policyCheck
      ) {
        AlertFunction("Auth Error", "Please Enter a valid password");
      }
      if (
        signUpInfo?.name.length >= 4 &&
        signUpInfo?.phone.length >= 4 &&
        signUpInfo?.email.length >= 4 &&
        signUpInfo?.password.length >= 4 &&
        signUpInfo?.confirmPswd.length < 4 &&
        signUpInfo?.policyCheck
      ) {
        AlertFunction("Auth Error", "Please Enter same password");
      }
      if (
        signUpInfo?.name.length >= 4 &&
        signUpInfo?.phone.length >= 4 &&
        signUpInfo?.email.length >= 4 &&
        signUpInfo?.password.length >= 4 &&
        signUpInfo?.confirmPswd.length >= 4 &&
        !signUpInfo?.policyCheck
      ) {
        AlertFunction("Auth Error", "Please Agree to our terms and conditions");
      }
      if (
        signUpInfo?.name.length < 4 &&
        signUpInfo?.phone.length < 4 &&
        signUpInfo?.email.length < 4 &&
        signUpInfo?.password.length < 4 &&
        signUpInfo?.confirmPswd.length < 4 &&
        !signUpInfo?.policyCheck
      ) {
        AlertFunction("Auth Error", "Please Fill all fields");
      }
    }
  };
  return (
    <>
      <FormHeading title={"Signup"} />
      <CustomInput
        placeholder="Enter Your Name"
        onChange={(text) =>
          setsignUpInfo((prevalue) => {
            return {
              ...prevalue,
              name: text,
            };
          })
        }
        value={signUpInfo.name}
      />
      <CustomInput
        placeholder="Enter Your Phone Number"
        onChange={(text) =>
          setsignUpInfo((prevalue) => {
            return {
              ...prevalue,
              phone: text,
            };
          })
        }
        value={signUpInfo.phone}
        keyboardType="number-pad"
      />
      <CustomInput
        placeholder="Enter Your Email Address"
        onChange={(text) =>
          setsignUpInfo((prevalue) => {
            return {
              ...prevalue,
              email: text,
            };
          })
        }
        value={signUpInfo.email}
        keyboardType="email-address"
      />
      <CustomPswdInput
        placeholder="Enter Your Password"
        onChange={(text) =>
          setsignUpInfo((prevalue) => {
            return {
              ...prevalue,
              password: text,
            };
          })
        }
        value={signUpInfo.password}
      />
      <CustomPswdInput
        placeholder="Re-Enter Your Password"
        onChange={(text) =>
          setsignUpInfo((prevalue) => {
            return {
              ...prevalue,
              confirmPswd: text,
            };
          })
        }
        value={signUpInfo.confirmPswd}
      />
      <CustomCheckBox
        isChecked={signUpInfo.policyCheck}
        title="By Clicking Register you Agree to Term and Condition"
        onPressFun={() =>
          setsignUpInfo((prevalue) => {
            return {
              ...prevalue,
              policyCheck: !signUpInfo.policyCheck,
            };
          })
        }
      />
      <CustomButton
        brdrColor={mainColor}
        bgColor={"transparent"}
        title={"Register"}
        onPressFun={onSubmit}
      />
    </>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
