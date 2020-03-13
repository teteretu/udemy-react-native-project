import React from "react";
import { Button, Alert, ToastAndroid, Platform, View } from "react-native";

import Style from "../styles/Style";

export default props => {
  const notificar = msg => {
    if (Platform.OS === "android") {
      ToastAndroid.show(msg, ToastAndroid.LONG);
    } else {
      // ios
      Alert.alert("Informação", msg);
    }
  };

  return (
    <View style={Style.ex}>
      <Button title="Plataforma?" onPress={() => notificar("Parabéns!")} />
    </View>
  );
};
