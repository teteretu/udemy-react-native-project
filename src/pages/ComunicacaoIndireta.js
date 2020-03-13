import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import Style from '../styles/Style'

export const Entrada = props => 
    <View>
        <TextInput value={props.texto}
            style={Style.input}
            onChangeText={props.chamarQuandoMudar} />
    </View>

export default class TextoSincronizado extends Component {

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
                <Entrada texto={this.state.texto}
                    chamarQuandoMudar={this.alterarTexto} />
            </View>
        )
    }
}