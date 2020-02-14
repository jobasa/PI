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
var nivel = [
  { label: "LLENA", value: 0 },
  { label: "VACIA", value: 1 },
  

];

export default class TolUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      switchValue: false,
    };
  }

  render() {
    return (
      <View style={[styles.containerDetails]}>
        <View style={[styles.containerChildOne]} />

        <View style={[styles.containerChildTwo]}>
          <View style={styles.container}>
            {/*  <Text style={styles.textStyle}>Nivel material tolva</Text>
            <Text style={styles.textStyle}>
              {this.state.switchValue ? (
                <Text style={{ color: 'red' }}>LLENA</Text>
              ) : (
                <Text style={{ color: 'green' }}>VACIA</Text>
              )}
            </Text>
            <Switch
              value={this.state.switchValue}
              onValueChange={switchValue => this.setState({ switchValue })}
            />*/}
            <Text style={styles.textStyle}>Nivel material tolva</Text>
            <RadioForm
              radio_props={nivel}
              initial={1}
              onPress={(value) => { }}
              buttonSize={15}
              selectedButtonColor={'red'}
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