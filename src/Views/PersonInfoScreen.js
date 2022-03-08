import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import SafeScreenTemp from "../Components/SafeScreenTemp";
import {
  cardBg,
  allCenter,
  justifyEvenly,
  mainColor,
  alignStart,
  justifyStart,
  disableBtnBg,
  disabeBtnTxt,
  inputbg,
} from "../AppInfo";
import ScreenHeader from "../Components/ScreenHeader";
import { w, h } from "react-native-responsiveness";
import CustomButton from "../Components/CustomButton";
import CustomCheckBox from "../Components/CustomCheckBox";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
const PersonInfoScreen = ({ navigation }) => {
  const [education, seteducation] = useState("");
  const [jobStatus, setjobStatus] = useState("");
  const [salry, setsalry] = useState("");
  const [useMoney, setuseMoney] = useState("");
  const onSubmit = () => {
    if (
      education !== "" &&
      jobStatus !== "" &&
      salry?.length >= 3 &&
      useMoney?.length >= 6
    ) {
      navigation.navigate("CommitmentScreen");
    } else {
      if (
        education === "" &&
        jobStatus !== "" &&
        salry?.length >= 3 &&
        useMoney?.length >= 6
      ) {
        AlertFunction("Form Error", "Please Select Your Education.");
      } else if (
        education !== "" &&
        jobStatus === "" &&
        salry?.length >= 3 &&
        useMoney?.length >= 6
      ) {
        AlertFunction("Form Error", "Please Select Your Job status.");
      } else if (
        education !== "" &&
        jobStatus !== "" &&
        salry?.length < 3 &&
        useMoney?.length >= 6
      ) {
        AlertFunction("Form Error", "Please Enter a valid salary");
      } else if (
        education !== "" &&
        jobStatus !== "" &&
        salry?.length >= 3 &&
        useMoney?.length < 6
      ) {
        AlertFunction(
          "Form Error",
          "Please Enter the use of money in atleast 2 sentences."
        );
      } else {
        AlertFunction("Form Error", "Please Fill all fields");
      }
    }
  };
  return (
    <SafeScreenTemp bgColor={cardBg}>
      <View style={styles.dashbordCont}>
        <ScreenHeader
          title="About You"
          onPressfun={() => navigation.goBack()}
          isBack={true}
        />
        <KeyboardAvoidingScrollView
          contentContainerStyle={styles.dashBordContent}
        >
          <Text style={styles.headingTxt}>
            What is your highest level of Education ?
          </Text>
          <CustomCheckBox
            isChecked={education === "None" ? true : false}
            title="None"
            onPressFun={() => seteducation("None")}
            isCircle={true}
          />
          <CustomCheckBox
            isChecked={education === "Primary" ? true : false}
            title="Primary"
            onPressFun={() => seteducation("Primary")}
            isCircle={true}
          />
          <CustomCheckBox
            isChecked={education === "Secondry" ? true : false}
            title="Secondry"
            onPressFun={() => seteducation("Secondry")}
            isCircle={true}
          />
          <CustomCheckBox
            isChecked={education === "College / University" ? true : false}
            title="College / University"
            onPressFun={() => seteducation("College / University")}
            isCircle={true}
          />
          <Text style={styles.headingTxt}>Do you have a job?</Text>
          <View style={styles.mainDiv}>
            <View style={styles.submainDiv}>
              <CustomCheckBox
                isChecked={jobStatus === "Yes" ? true : false}
                title="Yes"
                onPressFun={() => setjobStatus("Yes")}
                isCircle={true}
              />
            </View>
            <View style={styles.submainDiv}>
              <CustomCheckBox
                isChecked={jobStatus === "No" ? true : false}
                title="No"
                onPressFun={() => setjobStatus("No")}
                isCircle={true}
              />
            </View>
          </View>

          <Text style={styles.headingTxt}>How much do you make??</Text>
          <View style={styles.inputsmainDiv}>
            <Text style={styles.kshtxt}>KSH</Text>
            <TextInput
              placeholder=""
              style={styles.simpleInput}
              value={salry}
              onChangeText={(text) => setsalry(text)}
            />
          </View>
          <Text style={styles.headingTxt}>How will you use this loan??</Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            style={styles.textarea}
            value={useMoney}
            onChangeText={(text) => setuseMoney(text)}
          />
          <CustomButton
            brdrColor={cardBg}
            bgColor={mainColor}
            title="Proceed"
            onPressFun={onSubmit}
          />
        </KeyboardAvoidingScrollView>
      </View>
    </SafeScreenTemp>
  );
};

export default PersonInfoScreen;

const styles = StyleSheet.create({
  dashbordCont: {
    width: "100%",
    height: "100%",
  },
  dashBordContent: {
    width: "100%",
    flex: 1,
    ...justifyStart,
    flexDirection: "column",
    paddingTop: h("2%"),
  },
  headingTxt: {
    width: "90%",
    textAlign: "left",
    fontSize: h("3%"),
    fontWeight: "bold",
    marginBottom: h("1%"),
  },
  textarea: {
    width: "85%",
    height: h("10%"),
    fontSize: h("2.5%"),
    backgroundColor: inputbg,
    marginBottom: h("3%"),
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  simpleInput: {
    width: "70%",
    height: h("6%"),
    backgroundColor: inputbg,
    marginBottom: h("1%"),
    fontSize: h("2.7%"),
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  kshtxt: {
    fontSize: h("3%"),
    color: disabeBtnTxt,
    marginRight: w("2%"),
  },
  mainDiv: {
    width: "90%",
    ...justifyEvenly,
    flexDirection: "row",
  },
  inputsmainDiv: {
    width: "90%",
    ...allCenter,
    flexDirection: "row",
  },
  submainDiv: {
    width: "40%",
    ...allCenter,
  },
});
