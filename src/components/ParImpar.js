import React from 'react';
import {View, Text} from 'react-native';

import Style from '../styles/Style';

function parImpar(num) {
  return num % 2 == 0 ? <Text>Par</Text> : <Text>Impar</Text>;
}

export default props => {
  return <View style={Style.ex}>{parImpar(props.numero)}</View>;
};
