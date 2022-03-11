import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, Button, View, Platform } from "react-native";
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

export default function App() {
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
  // useEffect(() => {
  //   triggerNotification();
  // }, []);

  //=======================================================

  //Trigger Function Called by click of the button to
  //trigger notification

  //=======================================================
  const forTimetriggerNotification = () => {
    console.log("this runed");
    Notification.scheduleNotificationAsync({
      content: {
        title: "sch",
        body: "Hy",
        sound: true,
        android: {
          icon: "/assets/StepB.png",
          color: "red",
        },
      },
      trigger: {
        seconds: 60 * 60,
        repeats: true,
      },
    });
  };
  const triggerNotification = () => {
    Notification.scheduleNotificationAsync({
      content: {
        title: "Jawad raza",
        body: "Hy",
        sound: true,
        android: {
          icon: "/assets/StepB.png",
          color: "red",
        },
      },
      trigger: {
        seconds: 1,
      },
    });
  };
  useEffect(() => {
    forTimetriggerNotification();
  }, []);

  // return (
  //   <View style={styles.container}>
  //     <Button title="Send Notification" onPress={triggerNotification} />
  //     {/* <AppLovinMAX.AdView
  //       adUnitId={"3352795dc514d0d1"}
  //       adFormat={AppLovinMAX.AdFormat.BANNER}
  //       style={styles.banner}
  //     /> */}
  //     <StatusBar style="auto" />
  //   </View>
  // );
  return null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  banner: {
    // Set background color for banners to be fully functional
    backgroundColor: "#000000",
    position: "absolute",
    width: "100%",
    height: 50,
    bottom: Platform.OS === "android" ? 0 : 30,
  },
});
