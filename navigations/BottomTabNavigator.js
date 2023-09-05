import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CartScreen from "../screens/CartScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
   <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} options={{
      tabBarLabel:"Home",
      tabBarLabelStyle:{
        color:"#008e97",
        fontWeight:"bold",
        fontSize:12
      },
      headerShown:false,
      tabBarIcon:({focused}) => 
        focused ? (
          <Ionicons name="home" size={24} color="#008e97" />
        ) :(
          <Ionicons name="home-outline" size={24} color="#008e97" />
        )
      
    }}/>
    <Tab.Screen name="Profile" component={ProfileScreen} options={{
      tabBarLabel:"Profile",
      tabBarLabelStyle:{
        color:"#008e97",
        fontWeight:"bold",
        fontSize:12
      },
      headerShown:false,
      tabBarIcon:({focused}) => 
        focused ? (
          <FontAwesome name="user" size={24} color="#008e97" />
        ) :(
          <FontAwesome name="user-o" size={24} color="#008e97" />
        )
      
    }}/>
    <Tab.Screen name="Cart" component={CartScreen} options={{
      tabBarLabel:"Cart",
      tabBarLabelStyle:{
        color:"#008e97",
        fontWeight:"bold",
        fontSize:12
      },
      headerShown:false,
      tabBarIcon:({focused}) => 
        focused ? (
          <Ionicons name="cart" size={32} color="#008e97" />
          ) :(
          <Ionicons name="cart-outline" size={32} color="#008e97" />
        )
      
    }}/>

   </Tab.Navigator>
  )
}

export default BottomTabNavigator;