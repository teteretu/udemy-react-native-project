import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";

import {StyleSheet} from 'react-native';

const ValidarProps = props => (
  <Text style={styles.ex}>
    {props.label}
    {props.ano + 2000}
  </Text>
);

// default value
ValidarProps.defaultProps = {
  label: "Ano: "
};

// set required value
ValidarProps.propTypes = {
  ano: PropTypes.number.isRequired
};

export default ValidarProps;

const styles = StyleSheet.create({
    ex: {
        paddingHorizontal: 15,
        marginVertical: 5,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#222',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 50
    }
})