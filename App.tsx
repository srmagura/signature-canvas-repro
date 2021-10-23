import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Example1 } from "./Screens/Example1";
import { Example2 } from "./Screens/Example2";
import { Example3 } from "./Screens/Example3";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Example1" component={Example1} />
        <Tab.Screen name="Example2" component={Example2} />
        <Tab.Screen name="Example3" component={Example3} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
