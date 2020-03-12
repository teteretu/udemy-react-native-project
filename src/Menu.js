import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import Simples from "./components/Simples";
import ParImpar from "./components/ParImpar";
import Inverter, { MegaSena } from "./components/Multi";
import Contador from "./components/Contador";
import Plataformas from "./components/Plataformas";
import ValidarProps from "./components/ValidarProps";
import Evento from "./components/Evento";
import Avo from "./components/ComunicacaoDireta";
import TextoSincronizado from "./components/ComunicacaoIndireta";
import ListaFlex from "./components/ListaFlex";
import Flex from "./components/Flex";

const DrawerNavitagor = createDrawerNavigator({
  Flex: {
    screen: props => <Flex {...props} numeroInicial={8} />,
    navigationOptions: { title: "Flex" }
  },
  ListaFlex: {
    screen: props => <ListaFlex {...props} />,
    navigationOptions: { title: "Flex List" }
  },
  TextoSincronizado: {
    screen: props => <TextoSincronizado {...props} ano={18} />,
    navigationOptions: { title: "Sync Text" }
  },
  Avo: {
    screen: props => <Avo {...props} nome="João" sobrenome="Silva" />,
    navigationOptions: { title: "Grandfather" }
  },
  Evento: {
    screen: props => <Evento {...props} ano={18} />,
    navigationOptions: { title: "Event" }
  },
  ValidarProps: {
    screen: props => <ValidarProps {...props} ano={18} />,
    navigationOptions: { title: "Valid Props" }
  },
  Plataformas: {
    screen: props => <Plataformas {...props} />,
    navigationOptions: { title: "Platforms" }
  },
  Contador: {
    screen: props => <Contador {...props} numeroInicial={8} />,
    navigationOptions: { title: "Counter" }
  },
  Simples: {
    screen: props => <Simples {...props} texto="America" />,
    navigationOptions: { title: "Sample" }
  },
  MegaSena: {
    screen: props => <MegaSena {...props} numeros={8} />,
    navigationOptions: { title: "Mega Sena" }
  },
  Inverter: {
    screen: props => <Inverter {...props} texto="Inverter!!" />,
    navigationOptions: { title: "Invert" }
  },
  ParImpar: {
    screen: props => <ParImpar {...props} numero={50} />,
    navigationOptions: { title: "Even Odd" }
  }
});

export default createAppContainer(
  createSwitchNavigator({
    Main: {
      screen: DrawerNavitagor
    }
  })
);
