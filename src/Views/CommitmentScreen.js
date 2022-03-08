import { StyleSheet, Text, TextInput, View } from "react-native";
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
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
const CommitmentScreen = () => {
  const [mpayMsg, setmpayMsg] = useState("");
  const onFormSubmit = () => {
    if (mpayMsg.length < 10 || mpayMsg === "") {
      AlertFunction("Form Error", "Please Enter the full M-Pay message");
    } else {
      AlertFunction(
        "Loan Apply Attempt Status",
        "Your Loan Apply Attempt has been completed."
      );
    }
  };
  return (
    <SafeScreenTemp bgColor={cardBg}>
      <View style={styles.dashbordCont}>
        <ScreenHeader title="Commitment" />
        <KeyboardAvoidingScrollView
          contentContainerStyle={styles.dashBordContent}
        >
          <View style={styles.imgContiani} />
          <View style={styles.textContainers}>
            <Text style={styles.headingTxt}>Dear Customer!</Text>
            <Text style={styles.miniTexts}>Our Company</Text>
            <Text style={styles.miniTexts}>Till number</Text>
            <Text style={styles.miniTexts}>Till name</Text>
          </View>

          <View style={styles.textContainers}>
            <Text style={styles.headingTxt}>Producer</Text>
            <Text style={styles.miniTexts}>Till number</Text>
            <Text style={styles.miniTexts}>Till name</Text>
            <Text style={styles.miniTexts}>Till name</Text>
            <Text style={styles.miniTexts}>Till name</Text>
          </View>

          <Text style={{ ...styles.headingTxt, textAlign: "center" }}>
            Commitment Refunded etc
          </Text>

          <TextInput
            style={styles.simpleInput}
            placeholder="Copy M-pesa Message Recieved"
            value={mpayMsg}
            onChangeText={(text) => setmpayMsg(text)}
          />
        </KeyboardAvoidingScrollView>
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
    paddingTop: h("2%"),
  },
  headingTxt: {
    width: "90%",
    textAlign: "left",
    fontSize: h("3%"),
    fontWeight: "bold",
    marginBottom: h("1%"),
    alignSelf: "center",
  },
  miniTexts: {
    fontSize: h("2%"),
    marginLeft: h("4%"),
  },
  imgContiani: {
    width: "90%",
    height: h("25%"),
    alignSelf: "center",
    backgroundColor: mainColor,
    borderRadius: 20,
  },
  simpleInput: {
    width: "90%",
    height: h("6%"),
    backgroundColor: inputbg,
    marginBottom: h("1%"),
    fontSize: h("2.7%"),
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  textContainers: {
    width: "100%",
    ...alignStart,
    flexDirection: "column",
  },
});
