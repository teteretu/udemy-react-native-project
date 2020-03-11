/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Simples from './components/Simples';
import ParImpar from './components/ParImpar';
import Inverter, {MegaSena} from './components/Multi';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar backgroundColor="#f3f3f3" barStyle="dark-content" />
      <View style={styles.body}>
        <Simples style={styles.sectionTitle} texto="flexível!" />
        <ParImpar numero={35} />
        <Inverter texto="ReactNativo!" />
        <MegaSena numeros={6} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.lighter,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
});

export default App;
