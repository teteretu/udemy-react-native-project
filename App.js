import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import SafeAreaView from "react-native-safe-area-view";

import Menu from "./src/Menu";

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Menu />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    marginTop: 100
  }
});
