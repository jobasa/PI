
/**




* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow
*/

import React, { Component } from 'react';
import {

  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  Switch,
} from 'react-native';

import TolUp from "./components/TolDown";
import TolDown from "./components/TolUp";

export default class App extends Component {
constructor(props){
  super(props);
}
  render() {

    return (
      <View style={[styles.containerDetails]}>
        <View style={[styles.containerChildOne]} />

        <View style={[styles.containerChildTwo]}>
              <TolUp />
              <TolDown />
        </View>

        <View style={[styles.containerChildThree]} />
      </View>

    )

  }

}

const styles = StyleSheet.create({
  containerDetails: {
    flex: 1,
  },
  containerChildOne: {
    flex: 2 / 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerChildTwo: {
    flex: 2 / 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#817457',
    borderRadius: 10,
  },
  containerChildThree: {
    flex: 2 / 6,
  },
  textStyle: {
    margin: 14,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
  },
});


