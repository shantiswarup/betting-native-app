import React from "react";
import { createStackNavigator, createAppContainer, StackActions, NavigationActions } from "react-navigation";
import HomeScreen from '../screens/HomeScreen';
import KioskScanScreen from '../screens/KioskScanScreen';
import SessionInfo from "../screens/SessionInfo";

const AppNavigator = createStackNavigator(
    {
      Home: { screen: HomeScreen },
      KioskScan: { screen: KioskScanScreen },
      Session: { screen: SessionInfo }
    },
    {
      initialRouteName: "Home"
    }
  );

export default createAppContainer(AppNavigator);