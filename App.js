import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import AuthNavigator from "./navigations/AuthNavigator";

export default function App() {
  const isAuth = false;
  return (
    <NavigationContainer>{!isAuth && <AuthNavigator />}</NavigationContainer>
  );
}
