import React, { Component } from 'react';
import {
  Text,
  View,
  Alert,
  StyleSheet,
  FlatList,
  Button,
  TouchableHighlight,
  Switch,
} from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from 'react-native-simple-radio-button';
var hobbies = [
  { label: "VACIA", value: 0 },
  { label: "LLENA", value: 1 },

];

export default class TolUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      switchValue: false,
      value: 0,
    };
  }

  render() {
    return (
      <View style={[styles.containerDetails]}>
        <View style={[styles.containerChildOne]} />

        <View style={[styles.containerChildTwo]}>
          <View style={styles.container}>
            <Text style={styles.textStyle}>Nivel material tolva</Text>
            <RadioForm
              radio_props={hobbies}
              initial={1}
              onPress={(value) => { }}
              buttonSize={15}
              selectedButtonColor={'green'}
              labelStyle={{ fontSize: 15 }}
            />
          </View>
        </View>

        <View style={[styles.containerChildThree]} />

      </View>
    );
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