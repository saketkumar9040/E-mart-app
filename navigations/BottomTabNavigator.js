import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
   <Tab.Navigator>
    <Tab.Screen name="Home"/>
    <Tab.Screen name=""/>
    <Tab.Screen/>
    <Tab.Screen/>
   </Tab.Navigator>
  )
}

export default BottomTabNavigator;