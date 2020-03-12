import { AppRegistry } from "react-native";
// import App from './App';
import { name as appName } from "./app.json";
import Menu from "./src/Menu";
import "react-native-gesture-handler";
import React, { Component } from "react";

export default class CustomDrawer extends Component {
  render() {
    return <Menu />;
  }
}

AppRegistry.registerComponent(appName, () => CustomDrawer);
