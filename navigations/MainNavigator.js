import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import ProductScreen from "../screens/ProductScreen";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={BottomTabNavigator} options={{headerShown:false}} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}} />
      <Stack.Screen name="Cart" component={CartScreen} options={{headerShown:false}} />
      <Stack.Screen name="Product" component={ProductScreen} options={{headerShown:false}} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
