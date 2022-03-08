import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import SafeScreenTemp from "../Components/SafeScreenTemp";
import {
  allCenter,
  cardBg,
  justifyEvenly,
  mainColor,
  screenBg,
} from "../AppInfo";
import CustomButton from "../Components/CustomButton";

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeScreenTemp bgColor={cardBg}>
      <View style={styles.imagContainer}>
        <Image
          style={styles.mainImg}
          source={require("../../assets/imageOne.png")}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.txtHeading}>GET LOAN IN 3 EASY STEPS</Text>
        <Text style={styles.txtPoint}>1.Create your Account.</Text>
        <Text style={styles.txtPoint}>2.Enter Identification Details.</Text>
        <Text style={styles.txtPoint}>3.Enter loan Amount.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.butnCont}>
          <CustomButton
            brdrColor={mainColor}
            bgColor={"transparent"}
            title="Login"
            onPressFun={() => navigation.navigate("LoginScreen")}
          />
        </View>
        <View style={styles.butnCont}>
          <CustomButton
            brdrColor={cardBg}
            bgColor={mainColor}
            title="Signup"
            onPressFun={() => navigation.navigate("SignUpScreen")}
          />
        </View>
      </View>
    </SafeScreenTemp>
  );
};

export default WelcomeScreen;

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
    fontSize: h("3%"),
    fontWeight: "bold",
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
