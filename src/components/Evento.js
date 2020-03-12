import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import Style from '../styles/Style'

export default class Evento extends Component {

    state = {
        texto: ''
    }

    alterarTexto = texto => {
        this.setState({ texto })
    }

    render() {
        return (
            <View>
                <Text style={Style.fonte40}>{this.state.texto}</Text>
                <TextInput value={this.state.texto}
                    style={Style.input}
                    onChangeText={this.alterarTexto} />
            </View>
        )
    }
}