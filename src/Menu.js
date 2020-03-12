import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import Simples from "./components/Simples";
import ParImpar from "./components/ParImpar";
import Inverter, { MegaSena } from "./components/Multi";
import Contador from "./components/Contador";
// import Plataformas from './components/Plataformas';
// import ValidarProps from './components/ValidarProps';
// import Evento from './components/Evento';
// import Avo from './components/ComunicacaoDireta';
// import TextoSincronizado from './components/ComunicacaoIndireta';
// import ListaFlex from './components/ListaFlex';
// import Flex from './components/Flex';

const DrawerNavitagor = createDrawerNavigator({
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

// export default createDrawerNavigator(
//     {
//       Flex: {
//         screen: Flex,
//       },
//       ListaFlex: {
//         screen: ListaFlex,
//         navigationOptions: {title: 'Lista (Flex Box)'},
//       },
//       TextoSincronizado: {
//         screen: TextoSincronizado,
//         navigationOptions: {title: 'Texto Sincronizado'},
//       },
//       Avo: {
//         screen: () => <Avo nome="João" sobrenome="Silva" />,
//       },
//       Evento: {
//         screen: Evento,
//       },
//       ValidarProps: {
//         screen: () => <ValidarProps ano={18} />,
//       },
//       Plataformas: {
//         screen: Plataformas,
//       },
//       Contador: {
//         screen: () => <Contador numeroInicial={1000} />,
//       },
//       MegaSena: {
//         screen: MegaSena,
//         navigationOptions: {title: 'Mega Sena'},
//       },
//       Inverter: {
//         screen: Inverter,
//       },
//       ParImpar: {
//         screen: ParImpar,
//         navigationOptions: {title: 'Par & Ímpar'},
//       },
//       Simples: {
//         screen: Simples,
//       },
//     },
//     {drawerWidth: 300},
// );
