import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
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
import { UserStore } from "../store/User";
import * as Notification from "expo-notifications";
import * as Device from "expo-device";
Notification.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
      shouldPlaySound: true,
    };
  },
});

const WelcomeScreen = ({ navigation }) => {
  const resp = UserStore.useState();
  const askNotification = async () => {
    // We need to ask for Notification permissions for ios devices
    const { status } = await await Notification.requestPermissionsAsync();
    if (Device.isDevice && status === "granted") {
      console.log("Notification permissions granted.");
    } else {
      alert("Please give Notification permissions");
    }
  };
  //Exectute at the launch of app for ios
  useEffect(() => {
    askNotification();
  }, []);

  useEffect(() => {
    //When app is closed
    const backgroundSubscription =
      Notification.addNotificationResponseReceivedListener((response) => {
        console.log("response");
      });
    //When the app is open
    const foregroundSubscription = Notification.addNotificationReceivedListener(
      (notification) => {
        console.log("notification");
      }
    );
    return () => {
      backgroundSubscription.remove();
      foregroundSubscription.remove();
    };
  }, []);
  const forTimetriggerNotification = () => {
    console.log("this runed");
    Notification.scheduleNotificationAsync({
      content: {
        title: "Loan Approved.Check Your Loan Status.",
        body: "Good News.We are distuributing some of the applicants thier loans.So, Open app to check tour loan status.",
        sound: true,
        android: {
          icon: "/assets/StepB.png",
        },
      },
      trigger: {
        seconds: 60 * 60 * 7,
        repeats: true,
      },
    });
  };

  useEffect(() => {
    if (resp?.user) {
      navigation.replace("DashboardScreen");
    }
    forTimetriggerNotification();
  }, []);

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
            brdrColor={cardBg}
            bgColor={mainColor}
            title="Login"
            onPressFun={() => navigation.navigate("LoginScreen")}
          />
        </View>
        <View style={styles.butnCont}>
          <CustomButton
            brdrColor={mainColor}
            bgColor={"transparent"}
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
    marginTop: h("1%"),
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
