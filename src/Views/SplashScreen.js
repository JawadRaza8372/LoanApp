import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import SafeScreenTemp from "../Components/SafeScreenTemp";
import { allCenter, cardBg, mainColor, screenBg } from "../AppInfo";
import { w, h } from "react-native-responsiveness";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserStore } from "../store/User";
const SplashScreen = ({ navigation }) => {
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("jawadRazaLoanApp");
      if (jsonValue !== null && jsonValue !== undefined && jsonValue !== "") {
        const parsed = JSON.parse(jsonValue);
        UserStore.update((s) => {
          s.user = parsed;
        });
        console.log("checking parsed", parsed);
      }
    } catch (e) {
      // error reading value
    }
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("WelcomeScreen");
    }, 3000);
  }, []);
  return (
    <SafeScreenTemp bgColor={cardBg}>
      <View style={styles.splashContainer}>
        <View style={styles.imageContainer} />
        <Text style={styles.appTitle}>App Logo</Text>
        <Text style={styles.appSubtitle}>
          We <Text style={styles.colorText}>don't </Text>check CBR
        </Text>
      </View>
    </SafeScreenTemp>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  splashContainer: {
    width: "100%",
    height: "100%",
    ...allCenter,
  },
  imageContainer: {
    width: w("40%"),
    height: w("40%"),
    backgroundColor: mainColor,
    borderRadius: 20,
  },
  appTitle: {
    fontSize: h("4%"),
    color: mainColor,
    marginVertical: h("1.4%"),
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  appSubtitle: {
    fontSize: h("2.5%"),
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  colorText: {
    color: mainColor,
  },
});
