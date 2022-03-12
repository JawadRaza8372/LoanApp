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
import CustomPswdInput from "./CustomPswdInput";
import { db } from "../myFirebaseConfig";
const ResetPswd = ({ onSubmit }) => {
  const [emil, setemil] = useState("");
  const [phone, setphone] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [steps, setsteps] = useState(1);
  const [myDoc, setmyDoc] = useState("");
  const checkDoc = async () => {
    await db
      .collection("users")
      .where("email", "==", `${emil}`)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setmyDoc({ id: doc.id, data: doc.data() });
        });
        if (querySnapshot.length <= 0) {
          AlertFunction("Database Responce", "User Not Found.");
        }
      });
  };
  const updatePass = async () => {
    await db
      .collection("users")
      .doc(`${myDoc?.id}`)
      .update({
        ...myDoc?.data,
        password: newPassword,
      })
      .then(() => {
        AlertFunction("Updated Successfully", "Password has been updated");
      });
  };
  const onSubmitForm = () => {
    if (steps < 3) {
      if (steps === 1) {
        if (emil === "" && emil.length < 5) {
          AlertFunction("Form Error", "Please enter your valid email address");
        } else {
          checkDoc();
          setsteps(steps + 1);
        }
      } else if (steps === 2) {
        if (phone === "" && phone.length < 5) {
          AlertFunction("Form Error", "Please enter valid phone number");
        } else {
          if (phone === myDoc?.data?.phone) {
            setsteps(steps + 1);
          } else {
            AlertFunction("Database Error", "Phone number does not match");
          }
        }
      }
    } else {
      if (newPassword === "" && newPassword.length < 5) {
        AlertFunction("Form Error", "Your Password must be atleast 6 letters");
      } else {
        updatePass();
        onSubmit();
      }
    }
  };
  // let check = emil.slice(-2);
  return (
    <>
      <FormHeading title="Reset" />
      {steps === 1 ? (
        <CustomInput
          placeholder="Enter Your Email Address"
          onChange={(text) => setemil(text)}
          value={emil}
          keyboardType="email-address"
        />
      ) : steps === 2 ? (
        <>
          <Text style={styles.phoneHint}>
            Hint: XXXXXXXXX{myDoc?.data?.phone.slice(-2)}
          </Text>
          <CustomInput
            placeholder="Enter Phone Number having last digits"
            onChange={(text) => setphone(text)}
            value={phone}
            keyboardType="number-pad"
          />
        </>
      ) : steps === 3 ? (
        <CustomPswdInput
          placeholder="Enter Your New Password"
          onChange={(text) => setNewPassword(text)}
          value={newPassword}
        />
      ) : null}
      <CustomButton
        brdrColor={cardBg}
        bgColor={mainColor}
        title={steps < 3 ? "Next" : "Reset"}
        onPressFun={onSubmitForm}
      />
    </>
  );
};

export default ResetPswd;

const styles = StyleSheet.create({
  phoneHint: {
    fontSize: h("2.3%"),
    textAlign: "center",
  },
});
