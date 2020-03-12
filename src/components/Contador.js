import React, { Component } from "react";
import { View, Text, TouchableHighlight } from "react-native";

import Style from "../styles/Style";

export default class Contador extends Component {
  state = {
    numero: this.props.numeroInicial
  };

  maisUm() {
    this.setState({ numero: this.state.numero + 1 });
  }

  limpar = () => {
    this.setState({ numero: this.props.numeroInicial });
  };

  render() {
    return (
      <View style={Style.ex}>
        <Text style={{ fontSize: 40 }}>{this.state.numero}</Text>
        <TouchableHighlight
          onPress={() => this.maisUm()}
          onLongPress={this.limpar}
        >
          <Text>Incrementar/Zerar</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
