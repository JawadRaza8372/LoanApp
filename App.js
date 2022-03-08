import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
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

export default function App() {
  return (
    <>
      <LoanAppNavigation />
    </>
  );
}
