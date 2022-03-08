import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import SafeScreenTemp from "../Components/SafeScreenTemp";
import CustomButton from "../Components/CustomButton";
import { w, h } from "react-native-responsiveness";
import {
  AlertFunction,
  allCenter,
  cardBg,
  justifyEvenly,
  mainColor,
  screenBg,
} from "../AppInfo";
import CustomCheckBox from "../Components/CustomCheckBox";
const LoanSelectScreen = ({ navigation }) => {
  const [loanType, setloanType] = useState("");
  const onSubmit = () => {
    if (loanType === "") {
      AlertFunction("Selection Error", "Please select a loan type.");
    } else {
      navigation.navigate("PhoneInfoScreen");
    }
  };
  return (
    <SafeScreenTemp bgColor={cardBg}>
      <View style={styles.imagContainer}>
        <Image
          style={styles.mainImg}
          source={require("../../assets/imageTwo.png")}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.txtHeading}>FOR FIRST TIME USERS</Text>
        <CustomCheckBox
          isChecked={
            loanType === "Bussiness Loan: Ksh 200,000 (MAX)" ? true : false
          }
          title="Bussiness Loan: Ksh 200,000 (MAX)"
          onPressFun={() => setloanType("Bussiness Loan: Ksh 200,000 (MAX)")}
          isCircle={true}
        />
        <CustomCheckBox
          isChecked={
            loanType === "Personal Loan: Ksh 50,000 (MAX)" ? true : false
          }
          title="Personal Loan: Ksh 50,000 (MAX)"
          onPressFun={() => setloanType("Personal Loan: Ksh 50,000 (MAX)")}
          isCircle={true}
        />
        <CustomCheckBox
          isChecked={
            loanType === "Emergency Loan: Ksh 20,000 (MAX)" ? true : false
          }
          title="Emergency Loan: Ksh 20,000 (MAX)"
          onPressFun={() => setloanType("Emergency Loan: Ksh 20,000 (MAX)")}
          isCircle={true}
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          brdrColor={cardBg}
          bgColor={mainColor}
          title="Proceed"
          onPressFun={onSubmit}
        />
      </View>
    </SafeScreenTemp>
  );
};

export default LoanSelectScreen;

const styles = StyleSheet.create({
  imagContainer: {
    width: "100%",
    height: h("35%"),
    backgroundColor: mainColor,
  },
  mainImg: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  textContainer: {
    width: "100%",
    height: "auto",
    marginVertical: h("4%"),
    paddingHorizontal: w("4%"),
  },
  txtHeading: {
    fontSize: h("4%"),
    fontWeight: "bold",
    marginBottom: h("5%"),
    textAlign: "center",
    color: mainColor,
  },
  txtPoint: {
    fontSize: h("2.8%"),
    fontWeight: "600",
    marginTop: h("1.2%"),
  },
  buttonContainer: {
    width: "100%",
    height: h("10%"),
    ...justifyEvenly,
    flexDirection: "row",
  },
  butnCont: {
    width: "50%",
    height: "100%",
    ...allCenter,
  },
});
