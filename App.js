import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  Platform,
  LogBox,
} from "react-native";
import LoanAppNavigation from "./src/AppNavigation/LoanAppNavigation";
import CommitmentScreen from "./src/Views/CommitmentScreen";
import DashboardScreen from "./src/Views/DashboardScreen";
import LoanSelectScreen from "./src/Views/LoanSelectScreen";
import LoginScreen from "./src/Views/LoginScreen";
import PersonInfoScreen from "./src/Views/PersonInfoScreen";
import PhoneInfoScreen from "./src/Views/PhoneInfoScreen";
import ResetPwsdScreen from "./src/Views/ResetPwsdScreen";
import SignUpScreen from "./src/Views/SignUpScreen";
import WelcomeScreen from "./src/Views/WelcomeScreen";
import PushNotificationText from "./src/Views/PushNotificationText";
import * as FacebookAds from "expo-ads-facebook";
import { useEffect, useState } from "react";
import { isLogin, UserStore } from "./src/store/User";
import InertialAdComp from "./src/Components/InertialAdComp";

export default function App() {
  let [isLoaded, setIsLoaded] = useState(false);
  const bannerId = "1137812973634047_1137814843633860";
  const interstitialId = "1137812973634047_1137814923633852";

  const [modalVisible, setModalVisible] = useState(false);
  LogBox.ignoreLogs([
    "Setting a timer",
    "Can't perform a React state update on an unmounted component",
    "AsyncStorage has been extracted from react-native",
  ]);

  // const adsManager = new FacebookAds.NativeAdsManager(
  //   placementId,
  //   numberOfAdsToRequest
  // );
  // FacebookAds.AdSettings.addTestDevice(
  //   FacebookAds.AdSettings.currentDeviceHash
  // );

  // FacebookAds.AdSettings.requestPermissionsAsync().then((permissions) => {
  //   let canTrack = permissions.status === "granted";
  //   FacebookAds.AdSettings.setAdvertiserTrackingEnabled(canTrack);
  //   setIsLoaded(true);
  // });

  // const showInterstitial = () => {
  //   FacebookAds.InterstitialAdManager.showAd(
  //     "1137812973634047_1137814923633852"
  //   )
  //     .then((didClick) => console.log(didClick))
  //     .catch((error) => console.log("long add error ", error));
  // };

  // const getmyAdd = () => {
  //   setModalVisible(!modalVisible);
  //   showInterstitial();
  // };
  useEffect(() => {
    setTimeout(() => {
      if (modalVisible) {
        setModalVisible(false);
      }
    }, 2000);
    setTimeout(() => {
      if (!modalVisible) {
        setModalVisible(true);
      }
    }, 120000);
  }, [modalVisible]);

  return (
    <>
      {/* <PushNotificationText /> */}
      {/* <View style={styles.container}>
        <View style={styles.content}>
          <Button title="Show Interstitial" onPress={getmyAdd} />
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.adView}>
            {isLoaded && (
              <FacebookAds.BannerAd
                placementId={bannerId}
                type="standard"
                onPress={() => setModalVisible(!modalVisible)}
                onError={(error) => console.log(error.nativeEvent)}
              />
            )}
          </View>
        </Modal>
        <StatusBar style="auto" />
      </View> */}
      <LoanAppNavigation />
      {modalVisible && <InertialAdComp />}
      {/* <DashboardScreen /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  adView: {
    width: "100%",
    height: "100%",
    backgroundColor: "red",
    alignItems: "flex-start",
    overflow: "hidden",
  },
});
