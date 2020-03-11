import React from 'react';
import {Text} from 'react-native';

import Style from '../styles/Style'

// export default function(props) {
//   return <Text>Arrow {props.texto}</Text>;
// }

// export default props => {
//   return <Text>Arrow {props.texto}</Text>;
// }
export default props => (
  <>
    <Text style={Style.ex}>Arrow {props.texto}</Text>
  </>
);
