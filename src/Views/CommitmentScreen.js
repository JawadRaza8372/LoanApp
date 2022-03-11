import { StyleSheet, Text, TextInput, View, Image } from "react-native";
import React, { useState } from "react";
import ScreenHeader from "../Components/ScreenHeader";
import SafeScreenTemp from "../Components/SafeScreenTemp";
import {
  cardBg,
  justifyStart,
  justifyEvenly,
  disableBtnBg,
  mainColor,
  disabeBtnTxt,
  allCenter,
  alignStart,
  inputbg,
} from "../AppInfo";
import { w, h } from "react-native-responsiveness";
import { LoanStore } from "../store/LoanData";
import { db } from "../myFirebaseConfig";
import CustomButton from "../Components/CustomButton";
import { UserStore } from "../store/User";
const CommitmentScreen = () => {
  const [mpayMsg, setmpayMsg] = useState("");
  const resp = LoanStore.useState();
  const repUser = UserStore.useState();
  const onFormSubmit = async () => {
    if (mpayMsg.length < 10 || mpayMsg === "") {
      AlertFunction("Form Error", "Please Enter the full M-Pay message");
    } else {
      await db
        .collection("loans")
        .add({
          ...resp?.data,
          mpayMsg,
          userid: repUser?.user?.id,
        })
        .then(() => {
          AlertFunction(
            "Loan Apply Attempt Status",
            "Your Loan Apply Attempt has been completed."
          );
        });
    }
  };

  return (
    <SafeScreenTemp bgColor={cardBg}>
      <View style={styles.dashbordCont}>
        <ScreenHeader title="Commitment" />
        <View style={styles.dashBordContent}>
          <View style={styles.imgContiani}>
            <Image
              source={require("../../assets/mpesa.jpeg")}
              style={styles.imageShow}
            />
          </View>
          <View style={styles.textContainers}>
            <Text style={styles.headingTxt}>Dear Customer!</Text>
            <Text style={styles.miniTexts}>
              Our company is committed to serving our customers based on trust
              and loyalty. For that reason, it requires you to pay a customer
              commitment fee of Kshs.133 to
            </Text>
            <Text style={styles.miniTexts}>Till number</Text>
            <Text style={styles.miniTexts}>Till name</Text>
          </View>

          <View style={styles.textContainers}>
            <Text style={styles.headingTxt}>Procedure:</Text>
            <Text style={styles.miniTexts}>1. Go to Mpesa</Text>
            <Text style={styles.miniTexts}>2. Buy Goods and Services</Text>
            <Text style={styles.miniTexts}>3. Enter till number :</Text>
            <Text style={styles.miniTexts}>4. Enter Amount:</Text>
            <Text style={styles.miniTexts}>5. Enter pin. </Text>
            <Text style={styles.miniTexts}>
              6. Wait for confirmation message.
            </Text>
            <Text style={styles.miniTexts}>
              Your commitment will be refunded once your loan Is processed
              successfully.
            </Text>
          </View>

          <Text style={{ ...styles.headingTxt, textAlign: "center" }}>
            Enter your confirmation message in the box below.
          </Text>

          <TextInput
            style={styles.simpleInput}
            placeholder="Copy M-Pesa message received"
            value={mpayMsg}
            onChangeText={(text) => setmpayMsg(text)}
          />
          <CustomButton
            brdrColor={cardBg}
            bgColor={mainColor}
            title="Proceed"
            onPressFun={onFormSubmit}
          />
        </View>
      </View>
    </SafeScreenTemp>
  );
};

export default CommitmentScreen;

const styles = StyleSheet.create({
  dashbordCont: {
    width: "100%",
    height: "100%",
  },
  dashBordContent: {
    width: "100%",
    flex: 1,
    ...justifyEvenly,
    flexDirection: "column",
    paddingTop: h("1%"),
  },
  headingTxt: {
    width: "90%",
    textAlign: "left",
    fontSize: h("2.2%"),
    fontWeight: "bold",
    marginBottom: h("1%"),
    alignSelf: "center",
  },
  miniTexts: {
    fontSize: h("2%"),
    marginLeft: h("4%"),
  },
  imgContiani: {
    width: "80%",
    height: h("20%"),
    alignSelf: "center",
    backgroundColor: mainColor,
    borderRadius: 20,
    overflow: "hidden",
  },
  imageShow: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  simpleInput: {
    width: "90%",
    height: h("5%"),
    backgroundColor: inputbg,
    marginBottom: h("1%"),
    fontSize: h("2.2%"),
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  textContainers: {
    width: "100%",
    ...alignStart,
    flexDirection: "column",
  },
});
