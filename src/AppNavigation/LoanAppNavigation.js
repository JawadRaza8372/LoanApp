import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../Views/LoginScreen";
import CommitmentScreen from "../Views/CommitmentScreen";
import DashboardScreen from "../Views/DashboardScreen";
import SignUpScreen from "../Views/SignUpScreen";
import SplashScreen from "../Views/SplashScreen";
import PersonInfoScreen from "../Views/PersonInfoScreen";
import PhoneInfoScreen from "../Views/PhoneInfoScreen";
import WelcomeScreen from "../Views/WelcomeScreen";
import LoanSelectScreen from "../Views/LoanSelectScreen";
import ResetPwsdScreen from "../Views/ResetPwsdScreen";

const Stack = createNativeStackNavigator();

const LoanAppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="ResetPswdScreen" component={ResetPwsdScreen} />
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        <Stack.Screen name="LoanSelectScreen" component={LoanSelectScreen} />
        <Stack.Screen name="PhoneInfoScreen" component={PhoneInfoScreen} />
        <Stack.Screen name="PersonInfoScreen" component={PersonInfoScreen} />
        <Stack.Screen name="CommitmentScreen" component={CommitmentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LoanAppNavigation;
