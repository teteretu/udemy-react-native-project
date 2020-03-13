import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  Dimensions,
  TouchableHighlight
} from "react-native";

export default props => {
  const stylesButton = [styles.button];

  if (props.double) stylesButton.push(styles.buttonDouble);
  if (props.operation) stylesButton.push(styles.operationButton);

  return (
    <View>
      <TouchableHighlight onPress={() => props.onClick(props.label)}>
        <Text style={stylesButton}>{props.label}</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get("window").width / 4,
    width: Dimensions.get("window").width / 4,
    backgroundColor: "#F0F",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#0FFF",
    padding: 18,
    color: "#0FFF"
  },
  operationButton: {
    backgroundColor: "#F0F000"
  },
  buttonDouble: {
    width: (Dimensions.get("window").width / 4) * 2
  }
});
