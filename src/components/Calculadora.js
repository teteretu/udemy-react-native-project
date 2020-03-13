import React, { Component } from "react";
import { View, StyleSheet, StatusBar, Text } from "react-native";

import Button from "./Button";

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
};

export default class Calculadora extends Component {
  state = { ...initialState };

  addDigit = num => {
    const clearDisplay =
      this.state.displayValue === "0" || this.state.clearDisplay;

    if (num === "." && !clearDisplay && this.state.displayValue.includes(".")) {
      return;
    }

    const currentValue = clearDisplay ? "" : this.state.displayValue;
    const displayValue = currentValue + num;
    this.setState({ displayValue, clearDisplay: false });

    if (num !== ".") {
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[this.state.current] = newValue;
      this.setState({ values });
    }
  };

  clearMemory = () => {
    this.setState({ ...initialState });
  };

  setOperation = operation => {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true });
    } else {
      const equals = operation === "=";
      const values = [...this.state.values];
      try {
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`);
      } catch (e) {
        values[0] = this.state.values[0];
      }

      values[1] = 0;
      this.setState({
        displayValue: `${values[0]}`,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        //clearDisplay: !equals,
        clearDisplay: true,
        values
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.titleView}>
          <Text style={styles.title} numberOfLines={1}>
            {this.state.displayValue}
          </Text>
        </View>
        <View style={styles.buttons}>
          <Button label="%" onClick={() => this.setOperation("%")} />
          <Button label="C" double onClick={this.clearMemory} />
          <Button label="/" operation onClick={() => this.setOperation("/")} />
          <Button label="7" onClick={this.addDigit} />
          <Button label="8" onClick={this.addDigit} />
          <Button label="9" onClick={this.addDigit} />
          <Button label="*" operation onClick={() => this.setOperation("*")} />
          <Button label="4" onClick={this.addDigit} />
          <Button label="5" onClick={this.addDigit} />
          <Button label="6" onClick={this.addDigit} />
          <Button label="-" operation onClick={() => this.setOperation("-")} />
          <Button label="1" onClick={this.addDigit} />
          <Button label="2" onClick={this.addDigit} />
          <Button label="3" onClick={this.addDigit} />
          <Button label="+" operation onClick={() => this.setOperation("+")} />
          <Button label="0" onClick={this.addDigit} double />
          <Button label="." onClick={this.addDigit} />
          <Button label="=" operation onClick={() => this.setOperation("=")} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleView: {
    flex: 1,
    backgroundColor: "#0F0F0F",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 20
  },
  title: {
    color: "#0FFF",
    fontSize: 50
  },
  buttons: {
    flex: 2,
    backgroundColor: "#F3F3F3",
    flexDirection: "row",
    flexWrap: "wrap"
  }
});
