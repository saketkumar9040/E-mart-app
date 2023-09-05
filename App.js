import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./navigations/AuthNavigator";
import MainNavigator from "./navigations/MainNavigator"
import BottomTabNavigator from "./navigations/BottomTabNavigator";

export default function App() {
  const isAuth = true;
  return (
    <NavigationContainer>
      {!isAuth && <AuthNavigator />}
      {isAuth && <MainNavigator/> && <BottomTabNavigator/>}
      </NavigationContainer>
  );
}
