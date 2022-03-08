import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SafeScreenTemp from "../Components/SafeScreenTemp";
import {
  cardBg,
  allCenter,
  justifyEvenly,
  mainColor,
  alignStart,
  justifyStart,
  AlertFunction,
} from "../AppInfo";
import ScreenHeader from "../Components/ScreenHeader";
import { w, h } from "react-native-responsiveness";
import CustomButton from "../Components/CustomButton";
import CustomCheckBox from "../Components/CustomCheckBox";
const PhoneInfoScreen = ({ navigation }) => {
  const [ownerShip, setownerShip] = useState("");
  const [phoneCateg, setphoneCateg] = useState("");
  const [ownerShipTime, setownerShipTime] = useState("");

  const onSubmit = () => {
    if (ownerShip !== "" && phoneCateg !== "" && ownerShipTime !== "") {
      navigation.navigate("PersonInfoScreen");
    } else {
      if (ownerShip === "" && phoneCateg !== "" && ownerShipTime !== "") {
        AlertFunction(
          "Selection Error",
          "please select options from `Do you own this phone?`"
        );
      } else if (
        ownerShip !== "" &&
        phoneCateg === "" &&
        ownerShipTime !== ""
      ) {
        AlertFunction(
          "Selection Error",
          "please select options from `Do you get it new or used?`"
        );
      } else if (
        ownerShip !== "" &&
        phoneCateg !== "" &&
        ownerShipTime !== ""
      ) {
        AlertFunction(
          "Selection Error",
          "please select options from `How long have you been using this phone?`"
        );
      } else {
        AlertFunction("Selection Error", "please fill all fields");
      }
    }
  };
  return (
    <SafeScreenTemp bgColor={cardBg}>
      <View style={styles.dashbordCont}>
        <ScreenHeader title="Phone Information" />
        <View style={styles.dashBordContent}>
          <Text style={styles.headingTxt}>Do you own this phone?</Text>
          <CustomCheckBox
            isChecked={ownerShip === "Yes,This Phone is mine." ? true : false}
            title="Yes,This Phone is mine."
            onPressFun={() => setownerShip("Yes,This Phone is mine.")}
            isCircle={true}
          />
          <CustomCheckBox
            isChecked={
              ownerShip === "No , Someone's else phone." ? true : false
            }
            title="No , Someone's else phone."
            onPressFun={() => setownerShip("No , Someone's else phone")}
            isCircle={true}
          />

          <Text style={styles.headingTxt}>Do you get it new or used?</Text>
          <CustomCheckBox
            isChecked={phoneCateg === "New" ? true : false}
            title="New"
            onPressFun={() => setphoneCateg("New")}
            isCircle={true}
          />
          <CustomCheckBox
            isChecked={phoneCateg === "Used" ? true : false}
            title="Used"
            onPressFun={() => setphoneCateg("Used")}
            isCircle={true}
          />

          <Text style={styles.headingTxt}>
            How long have you been using this phone??
          </Text>
          <CustomCheckBox
            isChecked={ownerShipTime === "0-6 months" ? true : false}
            title="0-6 months"
            onPressFun={() => setownerShipTime("0-6 months")}
            isCircle={true}
          />
          <CustomCheckBox
            isChecked={ownerShipTime === "6-12 months" ? true : false}
            title="6-12 months"
            onPressFun={() => setownerShipTime("6-12 months")}
            isCircle={true}
          />
          <CustomCheckBox
            isChecked={ownerShipTime === "1-10 years" ? true : false}
            title="1-10 years"
            onPressFun={() => setownerShipTime("1-10 years")}
            isCircle={true}
          />

          <CustomButton
            brdrColor={cardBg}
            bgColor={mainColor}
            title="Proceed"
            onPressFun={onSubmit}
          />
        </View>
      </View>
    </SafeScreenTemp>
  );
};

export default PhoneInfoScreen;

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
    marginVertical: h("1.3%"),
  },
});
