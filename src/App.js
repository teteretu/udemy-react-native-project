/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";

import { NavigationContainer } from "@react-navigation/native";
// import {createDrawerNavigator} from '@react-navigation/drawer';

import Menu from "./Menu";
// import Simples from './components/Simples';
// import ParImpar from './components/ParImpar';
// import Inverter, {MegaSena} from './components/Multi';

// const Drawer = createDrawerNavigator();

export default class App extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="#f3f3f3" barStyle="dark-content" />
        <NavigationContainer>
          <Menu />
        </NavigationContainer>
      </>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.lighter,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.black
  }
});
